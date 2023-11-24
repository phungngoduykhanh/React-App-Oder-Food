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

export default function Register({ navigation }) {
  const handleBackPress = () => {
    navigation.goBack();
  };
  const handleUploadPhotoClick = () => {
    navigation.navigate("UploadPhoto");
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
        <Text style={styles.textRegister}>Fill in your bio to get started</Text>
        <Text style={styles.subTextRegister}>This data will be displayed in your account profile for security</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="FirstName"
            placeholderTextColor="#22242E"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="LastName"
            placeholderTextColor="#22242E"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="#22242E"
          />
        </View>
        <TouchableOpacity style={styles.buttonNext}>
          <Text style={styles.textNext} onPress={handleUploadPhotoClick}>Next</Text>
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
  iconBack:{
    marginTop:38,
    marginBottom:20,
    marginLeft:20
  },
  textRegister: {
    color: "#000",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 19,
    marginLeft:20,
    width:264
  },
  subTextRegister: {
    color: "#22242E",
    fontSize: 13,
    marginBottom: 20,
    marginLeft:20,
    width:245
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 20,
    width: 390,
    height: 57,
    borderRadius: 15,
    marginRight: "auto",
    marginLeft: "auto",
    elevation: 3,
  },
  input: {
    alignItems: "center",
    opacity: 0.3,
    marginLeft:20
  },
  textCon: {
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    color: "#22242E",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
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
    marginTop:220
  },
  textNext: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
  },
  tex: {
    color: "#6B50F6",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30,
  },
});
