import {
    SafeAreaView,
    View,
    ImageBackground,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { Button, Box, Text, Heading } from 'native-base';

export default function MenuScreen({ navigation }) {
    return (
        <Box bg="#ffe3d3">
            <SafeAreaView styles={styles.container}>
                <Box
                    p="8"
                >
                    <Heading size="3xl" textAlign="center">Menu</Heading>

                    <Box mt="9">

                        <Box rounded="10" bg="#E9F7FF" py="1">
                            <Text fontSize="xl" fontWeight="bold" color="#383838" textAlign="center"  >Translate 🌐</Text>
                        </Box>
                    </Box>
                </Box>
            </SafeAreaView>
        </Box>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    roundButton: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 100,
        backgroundColor: "black",
    },
});
