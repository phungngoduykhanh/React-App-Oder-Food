
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity,  ImageBackground, } from "react-native";


export default function Chat({ navigation }) {
  const handleBackPress = () => {
    navigation.goBack();
  };


  return (
    <ImageBackground source={require("../assets/Pattern.png")} style={styles.container}>
      <TouchableOpacity onPress={handleBackPress}>
        <Image
          style={styles.iconBack}
          source={require("../assets/Icon_Back.png")}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Chat</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ChatDetails"); // Chuyển hướng sang màn hình ChatDetails
        }}
      >
        <View style={styles.userGroup}>
          <Image
            style={styles.avatar}
            source={require("../assets/Avatar_Boy_BlackHair.png")}
          />
          <View style={styles.info}>
            <Text style={styles.userName}>Louis Kelly</Text>
            <Text style={styles.subText}>Your Order Just Arrived!</Text>
          </View>
          <Text style={styles.time}>20:00</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.userGroup}>
        <Image
          style={styles.avatar}
          source={require("../assets/Avatar_Boy_YellowHair.png")}
        />
        <View style={styles.info}>
          <Text style={styles.userName}>Paul Koch</Text>
          <Text style={styles.subText}>Your Order Just Arrived!</Text>
        </View>
        <Text style={styles.time}>20:00</Text>
      </View>
      <View style={styles.userGroup}>
        <Image
          style={styles.avatar}
          source={require("../assets/Avatar_Girl_BlackHair.png")}
        />
        <View style={styles.info}>
          <Text style={styles.userName}>Carla Klein</Text>
          <Text style={styles.subText}>Your Order Just Arrived!</Text>
        </View>
        <Text style={styles.time}>20:00</Text>
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FEFEFF",
  },
  iconBack: {
    marginLeft: 25,
    marginTop: 38,
  },
  text: {
    color: "#000",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 19,
    marginLeft: 25,
  },
  userGroup: {
    marginLeft: 28,
    backgroundColor: "#FFF",
    width: 355,
    borderRadius: 22,
    flexDirection: "row",
    marginBottom: 20,
  },
  avatar: {
    marginTop: 10,
    marginBottom: 9,
    marginLeft: 8,
  },
  info: {
    justifyContent: "center",
    marginLeft: 18,
  },
  userName: {
    color: "#22242E",
    fontSize: 15,
    fontWeight: "bold",
  },
  subText: {
    color: "#22242E",
    fontSize: 14,
    opacity: 0.3,
  },
  time: {
    color: "#22242E",
    fontSize: 14,
    opacity: 0.3,
    marginTop: 20,
    marginLeft: 50,
  },
});


