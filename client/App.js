import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
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
import { Asset, useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import TranslatorScreen from "./components/TranslatorScreen";

// const MODEL_URL = "https://teachablemachine.withgoogle.com/models/EYAXePbkj/";
// let transcript = [];
// let push_status = false;
// let last_letter;
// setInterval(() => {
//   push_status = true;
// }, 1000);

// const TensorCamera = cameraWithTensors(Camera);

const Stack = createNativeStackNavigator();

export default function App() {
  // const [permission, setPermission] = useState(false);
  // const [model, setModel] = useState(null);
  // const [metadata, setMetadata] = useState(null);
  // const [prediction, setPrediction] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     await ready();
  //     setModel(await loadLayersModel(MODEL_URL + "model.json"));
  //     setMetadata(await (await fetch(MODEL_URL + "metadata.json")).json());
  //     const { status } = await Camera.requestPermissionsAsync();
  //     setPermission(status === "granted");
  //   })();
  // }, []);

  // function readyCameraStream(images) {
  //   const streamLoop = async () => {
  //     const nextImageTensor = images.next().value;

  //     const logits = tidy(() => {
  //       const nextImageTensorCropped = cropTensor(nextImageTensor, false);
  //       const batchedNextImage = nextImageTensorCropped.expandDims(0);

  //       return model.predict(
  //         batchedNextImage.toFloat().div(scalar(127)).sub(scalar(1))
  //       );
  //     });

  //     const data = await logits.data();

  //     const prediction = [];
  //     for (let i = 0; i < data.length; i++) {
  //       prediction.push({
  //         className: metadata.labels[i],
  //         probability: data[i],
  //       });
  //     }

  //     let max = prediction[0].probability;
  //     let pred_letter = prediction[0].className;
  //     for (let i = 1; i < prediction.length; ++i) {
  //       if (prediction[i].probability > max) {
  //         max = prediction[i].probability;
  //         pred_letter = prediction[i].className;
  //       }
  //     }

  //     if (push_status && last_letter == pred_letter) {
  //       // TODO: need a way to show transcript
  //       transcript.push(pred_letter);
  //       // console.log(pred_letter)
  //       push_status = false;
  //     } else {
  //       last_letter = pred_letter;
  //     }

  //     setPrediction(prediction);

  //     requestAnimationFrame(streamLoop);
  //   };
  //   requestAnimationFrame(streamLoop);
  // }

  // if (permission === false || model == null || metadata == null)
  //   return <Text>Loading...</Text>;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="Translator"
          component={TranslatorScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
