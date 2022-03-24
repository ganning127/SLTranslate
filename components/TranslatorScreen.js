// import { Icon } from "react-native-elements";
// import { Button, Box, Text, Heading, HStack, Flex } from 'native-base';

import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    ImageBackground,
} from "react-native";
import { Camera } from "expo-camera";
import { cameraWithTensors } from "@tensorflow/tfjs-react-native";
import { loadLayersModel, ready, scalar, tidy } from "@tensorflow/tfjs";
import { cropTensor } from "@teachablemachine/image/src/utils/tf";
import { Icon } from "react-native-elements";
import { Text } from 'native-base'

const MODEL_URL = "https://teachablemachine.withgoogle.com/models/OBWpGU-Yu/";
// const MODEL_URL = "https://teachablemachine.withgoogle.com/models/EYAXePbkj/";
let transcriptRes = [];
let push_status = false;
let temp_letter;
setInterval(() => {
    push_status = true;
}, 1000);

const TensorCamera = cameraWithTensors(Camera);


export default function TranslatorScreen({ navigation }) {
    /*
        the issue right now is that the app only makes predictions that are "unknown" when the machine learning model made predictions that used to be different letters. Changing the model to another teachable machine link only results in the same one-result prediction for another class.
    */
    const [permission, setPermission] = useState(false);
    const [model, setModel] = useState(null);
    const [metadata, setMetadata] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [predictionMessage, setPredictionMessage] = useState("Loading prediction...");
    const [transcript, setTranscript] = useState(null);

    useEffect(() => {
        (async () => {
            await ready();
            setModel(await loadLayersModel(MODEL_URL + "model.json"));
            setMetadata(await (await fetch(MODEL_URL + "metadata.json")).json());
            const { status } = await Camera.requestPermissionsAsync();
            setPermission(status === "granted");
        })();
    }, []);

    function readyCameraStream(images) {
        const streamLoop = async () => {
            const nextImageTensor = images.next().value;

            const logits = tidy(() => {
                const nextImageTensorCropped = cropTensor(nextImageTensor, false);
                const batchedNextImage = nextImageTensorCropped.expandDims(0);
                console.log(nextImageTensorCropped)
                return model.predict(
                    batchedNextImage.toFloat().div(scalar(224)).sub(scalar(1))
                );
            });

            const data = await logits.data();

            const pred = [];
            for (let i = 0; i < data.length; i++) {
                pred.push({
                    className: metadata.labels[i],
                    probability: data[i],
                });
            }

            let max = pred[0].probability;
            let pred_letter = pred[0].className;
            for (let i = 1; i < pred.length; ++i) {
                if (pred[i].probability > max) {
                    max = pred[i].probability;
                    pred_letter = pred[i].className;
                }
            }

            if (push_status) {
                console.log(pred_letter)
                if (temp_letter == pred_letter && pred_letter != "unknown") {
                    if (pred_letter === "space") {
                        transcriptRes.push(" ");
                    } else {
                        transcriptRes.push(pred_letter);
                    }
                } else {
                    console.log("temp:", temp_letter, "pred:", pred_letter);
                    temp_letter = pred_letter;
                }
                push_status = false;
            }

            setPrediction(pred);
            const predictionSorted = pred.sort((a, b) => b.probability - a.probability);
            setPredictionMessage(
                `${predictionSorted[0].className} ${predictionSorted[0].probability.toFixed(2)}%, ${predictionSorted[1].className} ${predictionSorted[1].probability.toFixed(2)}%, ${predictionSorted[2].className} ${predictionSorted[2].probability.toFixed(2)}%`
            );

            setTranscript(transcriptRes);

            requestAnimationFrame(streamLoop);
        };
        requestAnimationFrame(streamLoop);
    }

    if (permission === false || model == null || metadata == null)
        return <Text>Loading...</Text>;

    const image = require("../assets/home_bkg.png");

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View
                    style={{
                        flex: 2,
                        flexDirection: "row",
                        backgroundColor: "#FFFACA",
                        justifyContent: "center",
                    }}
                >
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                            <Icon name="arrow-left" type="simple-line-icon" color="black" />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
                    >
                        <Text
                            fontSize='2xl' fontWeight='bold'
                        >
                            Translate
                        </Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <TouchableOpacity
                            onPress={() => {
                                transcriptRes = [];
                            }}
                        >
                            <Icon name="trash" type="simple-line-icon" color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 7 }}>
                    <TensorCamera
                        style={{
                            ...styles.camera,
                            zIndex: 1,
                        }}
                        type={Camera.Constants.Type.front}
                        cameraTextureHeight={200}
                        cameraTextureWidth={200}
                        resizeHeight={224}
                        resizeWidth={224}
                        resizeDepth={3}
                        autorender={false}
                        onReady={readyCameraStream}
                    >
                        <View
                            style={{
                                width: Dimensions.get("window").width,
                                height: Dimensions.get("window").height * 0.6,
                            }}
                        />
                    </TensorCamera>
                </View>

                <View
                    style={{
                        flex: 1,
                        backgroundColor: "#D1E1FF",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text>
                        Predicted Letters: {predictionMessage}
                    </Text>
                </View>

                <View style={{ flex: 3, backgroundColor: "#D1E1FF" }}>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: "#FFE3D3",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            alignItems: "center",
                            paddingTop: 20,
                        }}
                    >
                        <Text fontSize='3xl' letterSacing='2xl'>
                            {transcript ? transcript.join("") : "Loading prediction...."}
                        </Text>
                    </View>
                </View>
            </View>

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
});