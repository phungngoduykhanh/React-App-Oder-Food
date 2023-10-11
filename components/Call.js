import React from "react";
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
        <TouchableOpacity onPress={handleBackPress} style={styles.imageOverlay}>
          <Image
            style={styles.ringingIcon}
            source={require("../assets/Ringing_Icon.png")}
          />
          {/* <Image
            style={styles.ringingIcon}
            source={require("../assets/Volume_Up.png")}
          /> */}
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
    iconGroup:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      marginTop:177,
    },
//   imageOverlay: {
//     position: "absolute",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   ringingIcon: {
//     position: "absolute",
//   },
//   volumeUpIcon: {
//     position: "absolute",
//   },
});
