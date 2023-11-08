import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";

export default function UploadPreview({ navigation }) {
  const handleBackPress = () => {
    navigation.goBack();
  };
  const handleUploadSetLocationClick = () => {
    navigation.navigate("SetLocation");
  };
  return (
    <ImageBackground
      source={require("../assets/Pattern_ChatDetails.png")}
      style={styles.container}
    >
      <TouchableOpacity onPress={handleBackPress}>
        <Image
          style={styles.iconBack}
          source={require("../assets/Icon_Back.png")}
        />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text style={styles.textUpload}>Upload Your Photo Profile</Text>
        <Text style={styles.subTextUpload}>
          This data will be displayed in your account profile for security
        </Text>
        <Image
          style={styles.uploadProfile}
          source={require("../assets/Upload_Profile.png")}
        />
        <TouchableOpacity style={styles.buttonNext}>
        <Text style={styles.textNext} onPress={handleUploadSetLocationClick}>Next</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFF",
  },
  iconBack: {
    marginTop: 38,
    marginBottom: 20,
    marginLeft: 20,
  },
  uploadProfile: {
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 15,
  },
  textUpload: {
    color: "#000",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 19,
    marginLeft: 20,
    width: 264,
  },
  subTextUpload: {
    color: "#22242E",
    fontSize: 13,
    marginBottom: 49,
    marginLeft: 20,
    width: 245,
  },

  buttonNext: {
    width: 175,
    height: 57,
    backgroundColor: "#6B50F6",
    borderRadius: 15,
    justifyContent: "center",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 160,
  },
  textNext: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
