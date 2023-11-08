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

export default function SetLocation({ navigation }) {
  const handleBackPress = () => {
    navigation.goBack();
  };
  const handleUploadSuccessClick = () => {
    navigation.navigate("SignUpSuccess");
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
        <Text style={styles.textUpload}>Set Your Location </Text>
        <Text style={styles.subTextUpload}>
          This data will be displayed in your account profile for security
        </Text>
        <View style={styles.setLoca}>
          <View style={styles.locationBox}>
            <View style={styles.location}>
              <Image
                source={require("../assets/Location_Upload.png")}
                style={styles.inputIcon}
              />
            </View>
            <Text style={styles.locationText}>Your Location</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Set Location"
              placeholderTextColor="#22242E"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.buttonNext}>
        <Text style={styles.textNext} onPress={handleUploadSuccessClick}>Next</Text>
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
    marginTop: 300,
  },
  textNext: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
  },
  setLoca:{
    width:342,
    height:147,
    backgroundColor:"fff",
    elevation:1,
    borderRadius:15,
    justifyContent:"center",
    marginLeft:"auto",
    marginRight:"auto"
  },
  location: {
    width: 33,
    height: 33,
    backgroundColor: "#6B50F6",
    borderRadius: 15,
    marginLeft: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  locationBox: {
    flexDirection: "row",
    marginTop:20,
    marginBottom: 20,
  },
  locationText: {
    marginLeft: 10,
    color: "#22242E",
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 20,
    width: 320,
    height: 57,
    borderRadius: 15,
    marginRight: "auto",
    marginLeft: "auto",
    elevation: 2,
  },
  input: {
    marginRight: "auto",
    marginLeft: "auto",
  },
});
