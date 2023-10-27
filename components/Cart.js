import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
  } from "react-native";
export default function Cart({ navigation }) {
    return (  
        <View style={styles.container}>
            <Text style={styles.text}>Cart</Text>
        </View>
       
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "pink",
      justifyContent:"center",
      alignItems:"center"
    },
    text:{
        color: "#FFF",
        fontSize: 40,
        fontStyle: "normal",
        fontWeight: "bold",
    }
}
)
