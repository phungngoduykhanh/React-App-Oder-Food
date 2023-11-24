import React, { useContext } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import bg from "../../assets/bg-detail.png";

import { useNavigation } from '@react-navigation/native';
import location from '../../assets/locationicon.png';
import BackButton from "../../assets/BackButton.png";

function Shipping() {
    const navigation = useNavigation();

    const handleBackButton = () => {
        navigation.navigate('ConfirmOder')
    };
    const handleMap = () => {
        navigation.navigate('Map')
    };
    return (
        <ImageBackground source={bg} style={styles.container}>
            <TouchableOpacity onPress={handleBackButton} style={{ marginLeft: 25, marginBottom: 15 }}><Image source={BackButton}></Image></TouchableOpacity>
            <Text style={{ marginLeft: 25, fontSize: 27, fontWeight: "700" }}>Shipping</Text>

            <View style={styles.cover}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ color: '#9B9FB7' }}>Order Location</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 15 }}>
                    <Image source={location} style={{ marginRight: 15 }}></Image>
                    <Text style={{ fontSize: 16, lineHeight: 19.65, flexWrap: 'wrap', flex: 1, letterSpacing: 1 }}>8402 Preton Rd.Inglewood, Maine 98380</Text>
                </View>
            </View>

            <View style={styles.cover}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ color: '#9B9FB7' }}>Deliver To</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 15 }}>
                    <Image source={location} style={{ marginRight: 15 }}></Image>
                    <Text style={{ fontSize: 16, lineHeight: 19.65, flexWrap: 'wrap', flex: 1. }}>4517 Washington Ave.Manchester, Kentucky 342123</Text>
                </View>
                <TouchableOpacity onPress={handleMap} style={{ marginLeft: 50 }}><Text style={{ color: "#6B50F6" }}>set location</Text></TouchableOpacity>
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

export default Shipping;

