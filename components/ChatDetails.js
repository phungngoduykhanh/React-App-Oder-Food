import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function ChatDetails({ navigation }) {
  const handleBackPress = () => {
    navigation.goBack();
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
      <View >
        <View style={styles.chatGroupAsk}>
          <View style={styles.chatRetangleAsk}>
            <Text style={styles.chatText}>Just to order</Text>
          </View>
        </View>
        <View style={styles.chatGroupRe}>
          <View style={styles.chatRetangleRe}>
            <Text style={styles.chatTextRe}>Okay, for what level of spiciness?</Text>
          </View>
        </View>
        <View style={styles.chatGroupAsk}>
          <View style={styles.chatRetangleAsk}>
            <Text style={styles.chatText}>Just to order</Text>
          </View>
        </View>
        <View style={styles.chatGroupRe}>
          <View style={styles.chatRetangleRe}>
            <Text style={styles.chatTextRe}>Okay I'm waiting  👍 </Text>
          </View>
        </View>
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
    backgroundColor: "#6F6F6",
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
  status: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusIcon: {
    marginRight: 5,
  },
  callIcon: {
    marginTop: 20,
    marginLeft: 130,
  },
  chatGroupAsk: {
    marginTop: 40,
    marginLeft: 24,
  },
  chatGroupRe: {
    marginTop: 40,
    marginLeft: 91,
  },
  chatRetangleAsk: {
    width: 130,
    borderRadius: 13,
    backgroundColor: "#F6F6F6",
  },
  chatRetangleRe: {
    width: 300,
    borderRadius: 13,
    backgroundColor: "#6B50F6",
  },
  chatText: {
    marginLeft: 12,
    marginRight: 29,
    marginTop: 12,
    marginBottom: 15,
  },
  chatTextRe:{
    color:"#FFF",
    marginLeft: 12,
    marginRight: 29,
    marginTop: 12,
    marginBottom: 15,
  }
});
