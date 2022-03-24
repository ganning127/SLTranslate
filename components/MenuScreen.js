import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    Dimensions,
    Linking,
} from "react-native";
import React from "react";
import { Image, ScrollView, Button, Box, Text, Heading, VStack, HStack, Link, Spacer, Flex } from 'native-base';

export default function MenuScreen({ navigation }) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <Box bg="#ffffff">
            <ScrollView _contentContainerStyle={{
                mb: "4",
            }}>
                <SafeAreaView styles={styles.container}>
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
                            <Heading size="xl" textAlign="center" ml="4">Learning
                                <Heading size="xl" textAlign="center" color="#ffa36e"> Resources</Heading>
                            </Heading>
                        </Flex>

                        <Box mt="6">

                            <Pressable onPress={() => navigation.navigate("Translator")}>
                                <Box bg="#E6F6FF" pt={4} rounded="10">
                                    <Text fontSize="2xl" fontWeight="bold" color="orange.300" textAlign="center">
                                        Translate 🌐
                                    </Text>
                                    <Image
                                        source={require("../assets/trans_pic.png")}
                                        style={styles.trans_pic}
                                        size="xl"
                                        mx="auto"
                                        my="0"
                                        alt="w to w"
                                    />
                                </Box>
                            </Pressable>

                            <VStack space={3} mt="4">

                                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=v1desDduz5M')}>

                                    <Box bg="#FFE3D3" p={4} rounded="10">
                                        {/* <Link href="https://nativebase.io"> */}
                                        <HStack>
                                            <Text fontWeight="bold" color="#393939" fontSize="xl">Learn Words</Text>
                                            <Spacer />
                                            <Text color="#393939" fontWeight="bold" bg="white" px="2" borderRadius="10px" alignSelf="center">13 min</Text>
                                        </HStack>

                                        <Image
                                            source={require("../assets/learn_words.png")}
                                            alt="Learn words picture"
                                            style={styles.mxAuto}
                                        />
                                        {/* </Link> */}
                                    </Box>

                                </Pressable>
                                <HStack justifyContent="space-between">

                                    <Box bg="#E6F6FF" p={4} rounded="10" w={windowWidth / 2 - 30}>
                                        <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=cGavOVNDj1s')}>
                                            <Text fontWeight="bold" color="#393939" fontSize="md">Learn Letters</Text>
                                            <Text color="#393939" fontWeight="bold" bg="white" px="2" borderRadius="10px" alignSelf="flex-start" mt="1">5 min</Text>
                                            <Image
                                                source={require("../assets/letters.png")}
                                                alt="Alternate Text"
                                                style={styles.mxAuto}

                                            />
                                        </Pressable>
                                    </Box>

                                    <Box bg="#E6F6FF" p={4} rounded="10" w={windowWidth / 2 - 30}>
                                        <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v=ZK3jSXYBNak')}>

                                            <Text fontWeight="bold" color="#393939" fontSize="md" >Meet Speakers</Text>
                                            <Text color="#393939" fontWeight="bold" bg="white" px="2" borderRadius="10px" alignSelf="flex-start" mt="1">4 min</Text>
                                            <Image
                                                source={require("../assets/speakers.png")}
                                                alt="Speakers"
                                                style={styles.mxAuto}
                                            />
                                        </Pressable>
                                    </Box>

                                </HStack>
                            </VStack>


                            <HStack mb='4'>
                                <Button px="10" mt="4" mx='auto' bg="#ffa36e" onPress={() => navigation.navigate("Home")} rounded='lg'>
                                    <Text color="#ffffff" fontBold="bold" fontSize="lg" >
                                        Go Back
                                    </Text>
                                </Button>
                                <Button px="10" mt="4" mx='auto' variant='none' onPress={() => navigation.navigate("Instructions")}>
                                    <Text color="#ffa36e" fontBold="bold" fontSize="lg">
                                        Instructions
                                    </Text>
                                </Button>


                            </HStack>
                        </Box>
                    </Box>
                </SafeAreaView>
            </ScrollView>
        </Box >
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
    mxAuto: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    rec: {
        // display: 'inline'
    },
    trans_pic: {
        // width: 50
        resizeMode: 'contain'
    }
});
