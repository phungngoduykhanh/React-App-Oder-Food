import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function Call({ navigation }) {
  const handleBackPress = () => {
    navigation.goBack();
  };

  const [isImageChanged, setImageChanged] = useState(false);

  const handleImageChange = () => {
    setImageChanged(!isImageChanged);
  };

  const imageSource = isImageChanged
    ? require("../assets/Volume_Off.png")
    : require("../assets/Volume_Up.png");

  return (
    <ImageBackground
      source={require("../assets/Pattern_ChatDetails.png")}
      style={styles.container}
    >
      <View style={styles.user}>
        <Image
          style={styles.avatar}
          source={require("../assets/Avatar_Call.png")}
        />
      </View>
      <Text style={styles.name}>Richard Lewis</Text>
      <Text style={styles.des}>Ringing . . .</Text>

      <View style={styles.iconGroup}>
        <TouchableOpacity
          style={styles.imageOverlay}
          onPress={handleImageChange}
        >
          <View style={styles.volum}>
            <View style={styles.volumBackground}>
              <Image style={styles.ringingIcon} source={imageSource} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            style={styles.closeIcon}
            source={require("../assets/Close_Icon.png")}
          />
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
  user: {
    marginTop: 184,
    alignItems: "center",
  },
  name: {
    color: "#22242E",
    fontSize: 25,
    fontWeight: "400",
    marginTop: 59,
    flexDirection: "row",
    textAlign: "center",
  },
  des: {
    color: "#22242E",
    fontSize: 19,
    fontWeight: "400",
    marginTop: 6,
    flexDirection: "row",
    textAlign: "center",
    opacity: 0.3,
  },
  iconGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 177,
  },
  imageOverlay: {
    marginRight: 20,
  },
  volum: {
    width: 78,
    height: 78,
    borderRadius: 50,
    overflow: "hidden",
  },
  volumBackground: {
    flex: 1,
    backgroundColor: "rgba(107, 80, 246, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
