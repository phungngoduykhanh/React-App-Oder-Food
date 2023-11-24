import React, { useContext } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import bg from "../../assets/bg-detail.png";
import locationicon from "../../assets/locationicon.png";
import paypal from "../../assets/paypal.png";
import { MenuTotal } from '../OderDetail/OderDetail';
import { useNavigation } from '@react-navigation/native';

import BackButton from "../../assets/BackButton.png";
import { TotalContext } from '../OderDetail/TotalContext/TotalContext';

const ConfirmOder = () => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.navigate('Cart')
  };

  const { total } = useContext(TotalContext);

  const handlePayment = () => {
    navigation.navigate('Payment')
  };
  const handleShipping = () => {
    navigation.navigate('Shipping')
  };

  return (
    <ImageBackground source={bg} style={styles.container}>
      <TouchableOpacity onPress={handleBackButton} style={{ marginLeft: 25, marginBottom: 15 }}><Image source={BackButton}></Image></TouchableOpacity>
      <Text style={{ marginLeft: 25, fontSize: 27, fontWeight: "700" }}>Confirm Order</Text>

      <View style={styles.cover}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: '#9B9FB7' }}>Deliver To</Text>
          <TouchableOpacity onPress={handleShipping}><Text style={{ color: "rgba(107, 80, 246, 1)" }}>Edit</Text></TouchableOpacity>

        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 15 }}>
          <Image source={locationicon} style={{ marginRight: 15 }}></Image>
          <Text style={{ fontSize: 16, lineHeight: 19.65, flexWrap: 'wrap', flex: 1 }}>4517 Washington Ave.Manchester, Kentucky 342123</Text>
        </View>
      </View>

      <View style={styles.cover}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: '#9B9FB7' }}>Payment Method</Text>
          <TouchableOpacity onPress={handlePayment}><Text style={{ color: "rgba(107, 80, 246, 1)" }}>Edit</Text></TouchableOpacity>

        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 15 }}>
          <Image source={paypal} style={{ marginRight: 15, marginTop: 5 }}></Image>
          <Text style={{ fontSize: 16, lineHeight: 19.65, flexWrap: 'wrap', flex: 1 }}>4517 Washington Ave.Manchester, Kentucky 342123</Text>
        </View>
      </View>

      <MenuTotal total={total} url={'ConfirmOder'} />
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  cover: {
    backgroundColor: "rgba(245, 246, 254, 1)",
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

export default ConfirmOder;
