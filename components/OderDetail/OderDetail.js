import React from 'react'
import { TouchableOpacity, Image, ImageBackground } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import bg from "../../assets/bg-detail.png"
export default function OderDetail() {
    return (
        <View style={styles.container}>
            <ImageBackground source={bg} style={styles.image}>
                <Text style={styles.text}>Oder Detail</Text>

                <View style={styles.item}>
                    <Image source={require("../../assets/Food1.png")} />
                    <View >
                        <Text style={styles.name} >Spacy fresh crab</Text>
                        <Text style={styles.subName} >Waroenk kita</Text>
                        <Text style={styles.moneyText}>$ 35</Text>
                    </View>
                    <View style={styles.count}>
                        <Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Minus.png")}></Image>
                        <View style={[{ marginHorizontal: 10 }]}>
                            <Text>1</Text>
                        </View>
                        <Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Plus.png")}></Image>
                    </View>
                </View>

                <View style={styles.item}>
                    <Image source={require("../../assets/Food1.png")} />
                    <View >
                        <Text style={styles.name} >Spacy fresh crab</Text>
                        <Text style={styles.subName} >Waroenk kita</Text>
                        <Text style={styles.moneyText}>$ 35</Text>
                    </View>
                    <View style={styles.count}>
                        <Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Minus.png")}></Image>
                        <View style={[{ marginHorizontal: 10 }]}>
                            <Text>1</Text>
                        </View>
                        <Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Plus.png")}></Image>
                    </View>
                </View>
                <View style={styles.item}>
                    <Image source={require("../../assets/Food1.png")} />
                    <View >
                        <Text style={styles.name} >Spacy fresh crab</Text>
                        <Text style={styles.subName} >Waroenk kita</Text>
                        <Text style={styles.moneyText}>$ 35</Text>
                    </View>
                    <View style={styles.count}>
                        <Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Minus.png")}></Image>
                        <View style={[{ marginHorizontal: 10 }]}>
                            <Text>1</Text>
                        </View>
                        <Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Plus.png")}></Image>
                    </View>
                </View>

                <View style={{ backgroundColor: "#6B50F6", height: 206, marginHorizontal: 15, borderRadius: 10 }}>
                    <Image style={{ position: "absolute" }} source={require("../../assets/Pattern.png")} />
                    <View >
                        <View style={[styles.count, { justifyContent: "space-between", marginHorizontal: 20, marginTop: 20 }]}>
                            <Text style={styles.textColor}>Sub-Total</Text>
                            <Text style={styles.textColor}>123 $</Text>
                        </View>
                        <View style={[styles.count, { justifyContent: "space-between", marginHorizontal: 20 }]}>
                            <Text style={styles.textColor}>Delivery Charge</Text>
                            <Text style={styles.textColor}>12 $</Text>
                        </View>
                        <View style={[styles.count, { justifyContent: "space-between", marginHorizontal: 20 }]}>
                            <Text style={styles.textColor}>Discount</Text>
                            <Text style={styles.textColor}>20 $</Text>
                        </View>

                        <View style={[styles.count, { justifyContent: "space-between", marginHorizontal: 20, marginVertical: 17 }]}>
                            <Text style={[styles.textColor, { fontSize: 18, fontWeight: 700 }]}>Total</Text>
                            <Text style={[styles.textColor, { fontSize: 18, fontWeight: 700 }]}>120 $</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "white", width: 300, height: 48, marginHorizontal: 13, justifyContent: "center", alignItems: "center", borderRadius: 10 }} >
                            <Text style={[styles.buttonText, { color: "#6B50F6", fontWeight: 700 }]}>Place My Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}
// 6B50F6
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 25,
        marginHorizontal: 20,
        fontWeight: 'bold',
    },
    count: {
        flexDirection: "row",
        alignItems: "center"
    },
    item: {
        flexDirection: "row",
        backgroundColor: "rgba(255, 255, 255, 1)",
        marginHorizontal: 20,
        justifyContent: "space-between",
        marginVertical: 20,
    },
    name: {
        color: "#22242E",
        fontSize: 15,
        fontWeight: "700"
    }
    ,
    subName: {
        color: "#22242E",
        fontSize: 14,
        fontWeight: "200"
    },
    moneyText: {
        color: "#6B50F6",
        fontSize: 19,
        lineHeight: 24.89,
        fontWeight: "700"
    }
    ,
    textColor: {
        color: "white"
    }
});