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

export default function SignUp({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/Pattern_ChatDetails.png")}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <Image
          style={styles.iconSignIn}
          source={require("../assets/Group_SignIn.png")}
        />
        <Text style={styles.didFood}>DIDFOOD</Text>
        <Text style={styles.signinText}>Login To Your Account</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/Message.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#22242E"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/Lock.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#22242E"
          />
        </View>
        <Text style={styles.textCon}>Or Continue With</Text>
        <View style={styles.menthodSigninGroup}>
          <TouchableOpacity style={styles.menthodSignin}>
            <Image
              source={require("../assets/Icon_Facebook.png")}
              style={styles.inputIcon}
            />
            <Text style={styles.menthodText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menthodSignin}>
            <Image
              source={require("../assets/Icon_Google.png")}
              style={styles.inputIcon}
            />
            <Text style={styles.menthodText}>Google</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.tex}>Forgot Your Password?</Text>
        <TouchableOpacity
          style={styles.createAccountButton}
         
        >
          <Text style={styles.createAccountButtonText}>Login</Text>
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
  iconSignIn: {
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
  },
  didFood: {
    color: "#000",
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
  },
  signinText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 32,
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 20,
    width: 350,
    height: 57,
    borderRadius: 15,
    marginRight: "auto",
    marginLeft: "auto",
    elevation: 3,
  },
  inputIcon: {
    marginLeft: 20,
    marginRight: 15,
    alignItems: "center",
  },
  inputIconShow: {
    marginLeft: 190,
  },
  input: {
    alignItems: "center",
    opacity: 0.3,
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
  menthodSigninGroup: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
  },
  menthodSignin: {
    flexDirection: "row",
    width: 150,
    height: 57,
    backgroundColor: "#fff",
    elevation: 3,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  menthodText: {
    color: "#22242E",
    fontSize: 14,
    fontWeight: "bold",
  },
  createAccountButton: {
    width: 175,
    height: 57,
    backgroundColor: "#6B50F6",
    borderRadius: 15,
    justifyContent: "center",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  createAccountButtonText: {
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
