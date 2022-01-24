import {
    SafeAreaView,
    View,
    ImageBackground,
    StyleSheet,
    Image,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { Button, Box, Text, Heading, HStack, Flex } from 'native-base';

export default function InstructionScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Box
                pt="10"
                px="4"
            >
                <Flex direction="row" mt="6" justifyContent="center">
                    <Image
                        source={require("../assets/learn_rec.png")}
                        style={styles.rec}
                        alt="Alternate Text"
                    />
                    <Heading size="xl" textAlign="center" ml="4">SLTranslate
                        <Heading size="xl" textAlign="center" color="#ffa36e"> Tutorial
                        </Heading>
                    </Heading>
                </Flex>

                <Box mt="4" bg='orange.100' px={4} py={4} rounded='md'>
                    <Heading fontSize='lg'>
                        How to use SLTranslate
                    </Heading>
                    <Text fontSize='sm'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                </Box>


                <Box mt="4" bg='blue.100' px={4} py={4} rounded='md'>
                    <Heading fontSize='lg'>
                        Translate Screen
                    </Heading>
                    <Text fontSize='sm'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                </Box>

                <Box mt="4" bg='green.100' px={4} py={4} rounded='md'>
                    <Heading fontSize='lg'>
                        Menu Screen
                    </Heading>
                    <Text fontSize='sm'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                </Box>
            </Box>

            <Box mt="4">
                <Button
                    onPress={() => navigation.navigate("Menu")}
                    mx='auto'
                    w='200px'
                    bg="#ffa36e"
                    rounded='lg'
                >

                    <Text fontSize='lg' fontWeight='bold' color='white'>
                        Go Back
                    </Text>
                </Button>
            </Box>



        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
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
