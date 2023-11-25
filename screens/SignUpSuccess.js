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

export default function SignUpSuccess({ navigation }) {
  const handleSignUpClick = () => {
    navigation.navigate("LogIn");
  };
  const handleBackPress = () => {
    navigation.goBack();
  };
//   const handleUploadDoneClick = () => {
//     navigation.navigate("");
//   };
  return (
    <ImageBackground
      source={require("../assets/Pattern_ChatDetails.png")}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <Image
          style={styles.imageDone}
          source={require("../assets/Complete.png")}
        />
        <Text style={styles.congratsText}>Congrats!</Text>
        <Text style={styles.successText}>Your Profile Is Ready To Use</Text>
        <TouchableOpacity style={styles.buttonNext}>
        <Text style={styles.textNext} onPress={handleSignUpClick}>Done</Text>
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

  imageDone: {
    marginTop:227,
    marginBottom:33,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 15,
  },
  congratsText:{
    color:"#6B50F6",
    fontSize:30,
    fontWeight:"bold",
    marginLeft:"auto",
    marginRight:"auto"
  },
  successText:{
    color:"#22242E",
    fontSize:23,
    fontWeight:"bold",
    marginLeft:"auto",
    marginRight:"auto"
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
    marginTop: 192,
  },
  textNext: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
