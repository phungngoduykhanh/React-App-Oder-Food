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

export default function UploadPhoto({ navigation }) {
  const handleBackPress = () => {
    navigation.goBack();
  };
  const handleUploadPreviewClick = () => {
    navigation.navigate("UploadPreview");
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
        <Text style={styles.subTextUpload}>This data will be displayed in your account profile for security</Text>
        <View style={styles.menthodUploadGroup}>
          <TouchableOpacity style={styles.menthodUpload}>
            <Image
              source={require("../assets/Gallery.png")}
              style={styles.inputIcon}
            />
            <Text style={styles.menthodText}>From Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menthodUpload}>
            <Image
              source={require("../assets/Camera.png")}
              style={styles.inputIcon}
            />
            <Text style={styles.menthodText}>Take Photo</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonNext}>
        <Text style={styles.textNext} onPress={handleUploadPreviewClick}>Next</Text>
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
  menthodUpload:{
    marginLeft:"auto",
    marginRight:"auto",
    marginBottom:20,
    width:325,
    height:139,
    backgroundColor:"#fff",
    elevation:3,
    borderRadius:15,
    justifyContent:"center",
    alignItems:"center"
  },
  menthodText:{
    color:"#22242E",
    fontSize:14,
    fontWeight:"bold",
    marginTop:10
  },
  textUpload: {
    color: "#000",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 19,
    marginLeft:20,
    width:264
  },
  subTextUpload: {
    color: "#22242E",
    fontSize: 13,
    marginBottom: 20,
    marginLeft:20,
    width:245
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
    marginTop:140
  },
  textNext: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
