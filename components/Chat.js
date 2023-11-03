import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function Chat({ navigation }) {
  const handleBackPress = () => {
    navigation.goBack();
  };

  const users = [
    {
      id: 1,
      name: "Louis Kelly",
      imageSource: require("../assets/Avatar_Boy_BlackHair.png"),
      lastMessage: "Your Order Just Arrived!",
      time: "20:00",
    },
    {
      id: 2,
      name: "Paul Koch",
      imageSource: require("../assets/Avatar_Boy_YellowHair.png"),
      lastMessage: "Your Order Just Arrived!",
      time: "20:00",
    },
    {
      id: 3,
      name: "Carla Klein",
      imageSource: require("../assets/Avatar_Girl_BlackHair.png"),
      lastMessage: "Your Order Just Arrived!",
      time: "20:00",
    },
  ];

  useEffect(() => {
    navigation.setOptions({
      tabBarVisible: false,
    });

    return () => {
      navigation.setOptions({
        tabBarVisible: true,
      });
    };
  }, []);

  return (
    <ImageBackground
      source={require("../assets/Pattern.png")}
      style={styles.container}
    >
      <TouchableOpacity onPress={handleBackPress}>
        <Image
          style={styles.iconBack}
          source={require("../assets/Icon_Back.png")}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Chat</Text>

      {users.map((user) => (
        <TouchableOpacity
          key={user.id}
          onPress={() => {
            navigation.navigate("ChatDetails", { user }); // Truyền thông tin của người dùng đã chọn
          }}
        >
          <View style={styles.userGroup}>
            <Image style={styles.avatar} source={user.imageSource} />
            <View style={styles.info}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.subText}>{user.lastMessage}</Text>
            </View>
            <Text style={styles.time}>{user.time}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFF",
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
    marginBottom:22,
  },
  userGroup: {
    marginLeft:"auto",
    marginRight:"auto",
    backgroundColor: "#F6F6F6",
    width: 400,
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
    marginLeft: 100,
  },
});
