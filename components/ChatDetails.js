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

export default function ChatDetails({ navigation }) {
  const handleBackPress = () => {
    navigation.goBack();
  };
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const fixedElements = 4;
  const maxMessages = 5;
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Call");
          }}
        >
          <Image
            style={styles.callIcon}
            source={require("../assets/Call_Icon.png")}
          />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.chatGroupAsk}>
          <View style={styles.chatRetangleAsk}>
            <Text style={styles.chatText}>Just to order</Text>
          </View>
        </View>
        <View style={styles.chatGroupRe}>
          <View style={styles.chatRetangleRe}>
            <Text style={styles.chatTextRe}>
              Okay, for what level of spiciness?
            </Text>
          </View>
        </View>
        <View style={styles.chatGroupAsk}>
          <View style={styles.chatRetangleAsk}>
            <Text style={styles.chatText}>Just to order</Text>
          </View>
        </View>
        <View style={styles.chatGroupRe}>
          <View style={styles.chatRetangleRe}>
            <Text style={styles.chatTextRe}>Okay I'm waiting 👍 </Text>
          </View>
        </View>
      </View>
      <View style={styles.chat}>
        <TextInput
          style={styles.textInput}
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Type a message..."
        ></TextInput>
        <TouchableOpacity
          onPress={() => {
            // Tạo tin nhắn mới
            const newMessage = {
              text: message,
              type: "sent",
            };
            // Thêm tin nhắn mới vào danh sách
            const totalElements = messages.length + fixedElements;
            // Thêm tin nhắn mới vào đầu danh sách
            setMessages([newMessage, ...messages]);
            // Kiểm tra xem tổng số phần tử có vượt quá giới hạn không
            if (totalElements > maxMessages) {
              // Nếu vượt quá, loại bỏ các tin nhắn và phần tử cố định cũ hơn
              setMessages(messages.slice(0, maxMessages - fixedElements));
            }
            setMessage("");
          }}
        >
          <Image
            style={styles.sendIcon}
            source={require("../assets/Icon_Send.png")}
          />
        </TouchableOpacity>
      </View>
      <View>
        {messages.map((message, index) => (
          <View
            key={index}
            style={
              message.type === "sent" ? styles.chatGroupAsk : styles.chatGroupRe
            }
          >
            <View
              style={
                message.type === "sent"
                  ? styles.chatRetangleAsk
                  : styles.chatRetangleRe
              }
            >
              <Text style={styles.chatText}>{message.text}</Text>
            </View>
          </View>
        ))}
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
    marginBottom: 10,
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
    marginTop: 30,
    marginLeft: 24,
  },
  chatGroupRe: {
    marginTop: 30,
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
  chatTextRe: {
    color: "#FFF",
    marginLeft: 12,
    marginRight: 29,
    marginTop: 12,
    marginBottom: 15,
  },
  chat: {
    width: "100%",
    height: 74,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
  },
  textInput: {
    marginLeft: 25,
  },
  sendIcon: {
    marginRight: 25,
    marginTop: 25,
  },
});
