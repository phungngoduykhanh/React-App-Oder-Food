import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity,ImageBackground } from "react-native";


export default function ChatDetails({ navigation }) {
  const handleBackPress = () => {
    navigation.goBack();
  };


  return (
    <ImageBackground source={require("../assets/Pattern_ChatDetails.png")} style={styles.container}>
      <TouchableOpacity onPress={handleBackPress}>
        <Image
          style={styles.iconBack}
          source={require("../assets/Icon_Back.png")}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Chat</Text>
      <View style={styles.userGroup}>
        <Image
          style={styles.avatar}
          source={require("../assets/Avatar_Boy_BlackHair.png")}
        />
        <View style={styles.info}>
          <Text style={styles.userName}>Louis Kelly</Text>
          <View style={styles.status}>
            <Image
              style={styles.statusIcon}
              source={require("../assets/Status_Icon.png")}
            />
            <Text style={styles.subText}>Online</Text>
          </View>
        </View>
        <Image
              style={styles.callIcon}
              source={require("../assets/Call_Icon.png")}
            />
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
  status:{
    flexDirection:"row",
    alignItems:"center"
  },
  statusIcon:{
    marginRight:5,
  },
  callIcon: {
    marginTop: 20,
    marginLeft: 130,
  },
});
