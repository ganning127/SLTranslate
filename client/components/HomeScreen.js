import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Icon } from "react-native-elements";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/home_bkg.png")}
        style={styles.image}
      >
        <View
          style={{
            flexDirection: "column",
            flex: 1,
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingTop: 20, paddingLeft: 20 }}>
              <Text style={{ fontSize: 40, fontFamily: "Avenir" }}>
                SLTranslate
              </Text>
            </View>
            <View style={{ flex: 1, paddingLeft: 20 }}>
              <Text style={{ fontFamily: "Avenir" }}>
                Sign Language Translator
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: "column",
            }}
          >
            <Image source={require("../assets/home_woman.png")} />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              paddingTop: 50,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Translator")}
              style={styles.roundButton}
            >
              <Icon name="arrow-right" type="simple-line-icon" color="white" />
            </TouchableOpacity>
          </View>
        </View>
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
