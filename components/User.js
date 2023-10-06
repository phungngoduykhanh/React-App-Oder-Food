import React from "react";
import {
    StyleSheet,
    Text,
    View,
  } from "react-native";
export default function User({ navigation }) {
    return (  
        <View style={styles.container}>
            <Text style={styles.text}>User</Text>
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
