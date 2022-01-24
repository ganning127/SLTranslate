import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { Button, Box, Text, Heading, HStack } from 'native-base';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/home_bkg.png")}
        style={styles.image}
      >
        <Box
          p="8"
        >
          <Box>
            <Text fontSize="5xl" fontWeight="bold" color="#808080">
              SL
              <Text fontSize="5xl" fontWeight="bold" color="#ffa36e">Translate</Text>
            </Text>
            <Text fontSize="xl" fontStyle="italic" color="#808080">
              Sign Language Translator
            </Text>
          </Box>
          <Box
            my="8"
          >
            <Image
              source={require("../assets/home_woman.png")}
              alt="Alternate Text"
            // styles={styles.image}
            />
          </Box>
          <Box>
            <Button bg="#ffa36e" _pressed={{ bg: "#fcbc97" }} onPress={() => navigation.navigate("Menu")} borderRadius="20px" px="8" shadow="1" mx="auto">
              <Text fontSize="xl" color="white" fontWeight="bold">Get Started</Text>
            </Button>
          </Box>
        </Box>
      </ImageBackground>
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
