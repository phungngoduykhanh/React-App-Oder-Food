import React, { useContext } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import bg from "../../assets/bg-detail.png";
import paypal from "../../assets/paypal.png";
import visa from "../../assets/visa_logo.png";
import payonner from "../../assets/Payoneer_logo.png";
import { useNavigation } from '@react-navigation/native';

import BackButton from "../../assets/BackButton.png";
import { TotalContext } from '../OderDetail/TotalContext/TotalContext';

const Payment = () => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.navigate('ConfirmOder')
  };
  const { total } = useContext(TotalContext);

  return (
    <ImageBackground source={bg} style={styles.container}>
      <TouchableOpacity onPress={handleBackButton} style={{ marginLeft: 25, marginBottom: 15 }}><Image source={BackButton}></Image></TouchableOpacity>
      <Text style={{ marginLeft: 25, fontSize: 27, fontWeight: "700" }}>Payment</Text>

      <View style={[styles.cover, { backgroundColor: "rgba(245, 246, 254, 1)" }]}>
        <View style={{height:55, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 15, paddingHorizontal: 13 }}>
          <Image source={paypal} style={{ marginRight: 15, marginTop: 5 }}></Image>
          <Text style={{ fontSize: 16, lineHeight: 19.65 }}>2121 6352 8465 ****</Text>
        </View>
      </View>

      <View style={styles.cover}>
        <View style={{height:55, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 15, paddingHorizontal: 13 }}>
          <Image source={visa} style={{ marginRight: 15, marginTop: 5 }}></Image>
          <Text style={{ fontSize: 16, lineHeight: 19.65 }}>2121 6352 8465 ****</Text>
        </View>
      </View>

      <View style={styles.cover}>
        <View style={{height:55, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 15, paddingHorizontal: 13 }}>
          <Image source={payonner} style={{ marginRight: 15, marginTop: 5 }}></Image>
          <Text style={{ fontSize: 16, lineHeight: 19.65 }}>2121 6352 8465 ****</Text>
        </View>
      </View>

    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  cover: {
    backgroundColor: "rgba(246, 246, 246, 1)",
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 20,
    marginVertical: 20
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Payment;

