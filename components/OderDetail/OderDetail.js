import { TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { View, Text, StyleSheet } from 'react-native'
import bg from "../../assets/bg-detail.png";
import Swipeout from 'react-native-swipeout';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import BackButton from "../../assets/BackButton.png";

export default function OderDetail() {

    const navigation = useNavigation();

    const handleBackButton = () => {
        navigation.navigate('Home')
    };

    var swipeoutBtns = [
        {
            component: (
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(107, 81, 246, 1)',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}
                >
                    <FontAwesomeIcon icon={faTrashCan} color='white' />
                </View>
            )
        }
    ]

    return (
        <View style={styles.container}>
            <ImageBackground source={bg} style={styles.image}>
                <TouchableOpacity onPress={handleBackButton} style={{ marginLeft: 25, marginBottom: 15 }}><Image source={BackButton}></Image></TouchableOpacity>
                <Text style={styles.text}>Oder Detail</Text>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.item}>
                        <Swipeout right={swipeoutBtns} style={{ backgroundColor: "rgba(107, 81, 246, 1)", borderTopEndRadius: 20, borderBottomEndRadius: 20, }}>
                            <View style={styles.itemContent}>
                                <Image source={require("../../assets/Food1.png")} />
                                <View >
                                    <Text style={styles.name} >Spacy fresh crab</Text>
                                    <Text style={styles.subName} >Waroenk kita</Text>
                                    <Text style={styles.moneyText}>$ 35</Text>
                                </View>
                                <View style={styles.count}>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Minus.png")}></Image></TouchableOpacity>

                                    <View style={[{ marginHorizontal: 10 }]}>
                                        <Text>1</Text>
                                    </View>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Plus.png")}></Image></TouchableOpacity>
                                </View>
                            </View>
                        </Swipeout>
                    </View>
                    <View style={styles.item}>
                        <Swipeout right={swipeoutBtns} style={{ backgroundColor: "rgba(107, 81, 246, 1)", borderTopEndRadius: 20, borderBottomEndRadius: 20, }}>
                            <View style={styles.itemContent}>
                                <Image source={require("../../assets/Food1.png")} />
                                <View >
                                    <Text style={styles.name} >Spacy fresh crab</Text>
                                    <Text style={styles.subName} >Waroenk kita</Text>
                                    <Text style={styles.moneyText}>$ 35</Text>
                                </View>
                                <View style={styles.count}>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Minus.png")}></Image></TouchableOpacity>

                                    <View style={[{ marginHorizontal: 10 }]}>
                                        <Text>1</Text>
                                    </View>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Plus.png")}></Image></TouchableOpacity>
                                </View>
                            </View>
                        </Swipeout>
                    </View>
                    <View style={styles.item}>
                        <Swipeout right={swipeoutBtns} style={{ backgroundColor: "rgba(107, 81, 246, 1)", borderTopEndRadius: 20, borderBottomEndRadius: 20, }}>
                            <View style={styles.itemContent}>
                                <Image source={require("../../assets/Food1.png")} />
                                <View >
                                    <Text style={styles.name} >Spacy fresh crab</Text>
                                    <Text style={styles.subName} >Waroenk kita</Text>
                                    <Text style={styles.moneyText}>$ 35</Text>
                                </View>
                                <View style={styles.count}>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Minus.png")}></Image></TouchableOpacity>

                                    <View style={[{ marginHorizontal: 10 }]}>
                                        <Text>1</Text>
                                    </View>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Plus.png")}></Image></TouchableOpacity>
                                </View>
                            </View>
                        </Swipeout>
                    </View>
                    <View style={styles.item}>
                        <Swipeout right={swipeoutBtns} style={{ backgroundColor: "rgba(107, 81, 246, 1)", borderTopEndRadius: 20, borderBottomEndRadius: 20, }}>
                            <View style={styles.itemContent}>
                                <Image source={require("../../assets/Food1.png")} />
                                <View >
                                    <Text style={styles.name} >Spacy fresh crab</Text>
                                    <Text style={styles.subName} >Waroenk kita</Text>
                                    <Text style={styles.moneyText}>$ 35</Text>
                                </View>
                                <View style={styles.count}>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Minus.png")}></Image></TouchableOpacity>

                                    <View style={[{ marginHorizontal: 10 }]}>
                                        <Text>1</Text>
                                    </View>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Plus.png")}></Image></TouchableOpacity>
                                </View>
                            </View>
                        </Swipeout>
                    </View>
                    <View style={styles.item}>
                        <Swipeout right={swipeoutBtns} style={{ backgroundColor: "rgba(107, 81, 246, 1)", borderTopEndRadius: 20, borderBottomEndRadius: 20, }}>
                            <View style={styles.itemContent}>
                                <Image source={require("../../assets/Food1.png")} />
                                <View >
                                    <Text style={styles.name} >Spacy fresh crab</Text>
                                    <Text style={styles.subName} >Waroenk kita</Text>
                                    <Text style={styles.moneyText}>$ 35</Text>
                                </View>
                                <View style={styles.count}>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Minus.png")}></Image></TouchableOpacity>

                                    <View style={[{ marginHorizontal: 10 }]}>
                                        <Text>1</Text>
                                    </View>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Plus.png")}></Image></TouchableOpacity>
                                </View>
                            </View>
                        </Swipeout>
                    </View>
                    <View style={styles.item}>
                        <Swipeout right={swipeoutBtns} style={{ backgroundColor: "rgba(107, 81, 246, 1)", borderTopEndRadius: 20, borderBottomEndRadius: 20, }}>
                            <View style={styles.itemContent}>
                                <Image source={require("../../assets/Food1.png")} />
                                <View >
                                    <Text style={styles.name} >Spacy fresh crab</Text>
                                    <Text style={styles.subName} >Waroenk kita</Text>
                                    <Text style={styles.moneyText}>$ 35</Text>
                                </View>
                                <View style={styles.count}>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Minus.png")}></Image></TouchableOpacity>

                                    <View style={[{ marginHorizontal: 10 }]}>
                                        <Text>1</Text>
                                    </View>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Plus.png")}></Image></TouchableOpacity>
                                </View>
                            </View>
                        </Swipeout>
                    </View>
                    <View style={styles.item}>
                        <Swipeout right={swipeoutBtns} style={{ backgroundColor: "rgba(107, 81, 246, 1)", borderTopEndRadius: 20, borderBottomEndRadius: 20, }}>
                            <View style={styles.itemContent}>
                                <Image source={require("../../assets/Food1.png")} />
                                <View >
                                    <Text style={styles.name} >Spacy fresh crab</Text>
                                    <Text style={styles.subName} >Waroenk kita</Text>
                                    <Text style={styles.moneyText}>$ 35</Text>
                                </View>
                                <View style={styles.count}>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Minus.png")}></Image></TouchableOpacity>

                                    <View style={[{ marginHorizontal: 10 }]}>
                                        <Text>1</Text>
                                    </View>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Plus.png")}></Image></TouchableOpacity>
                                </View>
                            </View>
                        </Swipeout>
                    </View>
                    <View style={styles.item}>
                        <Swipeout right={swipeoutBtns} style={{ backgroundColor: "rgba(107, 81, 246, 1)", borderTopEndRadius: 20, borderBottomEndRadius: 20, }}>
                            <View style={styles.itemContent}>
                                <Image source={require("../../assets/Food1.png")} />
                                <View >
                                    <Text style={styles.name} >Spacy fresh crab</Text>
                                    <Text style={styles.subName} >Waroenk kita</Text>
                                    <Text style={styles.moneyText}>$ 35</Text>
                                </View>
                                <View style={styles.count}>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Minus.png")}></Image></TouchableOpacity>

                                    <View style={[{ marginHorizontal: 10 }]}>
                                        <Text>1</Text>
                                    </View>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Plus.png")}></Image></TouchableOpacity>
                                </View>
                            </View>
                        </Swipeout>
                    </View>
                    <View style={styles.item}>
                        <Swipeout right={swipeoutBtns} style={{ backgroundColor: "rgba(107, 81, 246, 1)", borderTopEndRadius: 20, borderBottomEndRadius: 20, }}>
                            <View style={styles.itemContent}>
                                <Image source={require("../../assets/Food1.png")} />
                                <View >
                                    <Text style={styles.name} >Spacy fresh crab</Text>
                                    <Text style={styles.subName} >Waroenk kita</Text>
                                    <Text style={styles.moneyText}>$ 35</Text>
                                </View>
                                <View style={styles.count}>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Minus.png")}></Image></TouchableOpacity>

                                    <View style={[{ marginHorizontal: 10 }]}>
                                        <Text>1</Text>
                                    </View>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Plus.png")}></Image></TouchableOpacity>
                                </View>
                            </View>
                        </Swipeout>
                    </View>
                    <View style={styles.item}>
                        <Swipeout right={swipeoutBtns} style={{ backgroundColor: "rgba(107, 81, 246, 1)", borderTopEndRadius: 20, borderBottomEndRadius: 20, }}>
                            <View style={styles.itemContent}>
                                <Image source={require("../../assets/Food1.png")} />
                                <View >
                                    <Text style={styles.name} >Spacy fresh crab</Text>
                                    <Text style={styles.subName} >Waroenk kita</Text>
                                    <Text style={styles.moneyText}>$ 35</Text>
                                </View>
                                <View style={styles.count}>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Minus.png")}></Image></TouchableOpacity>

                                    <View style={[{ marginHorizontal: 10 }]}>
                                        <Text>1</Text>
                                    </View>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Plus.png")}></Image></TouchableOpacity>
                                </View>
                            </View>
                        </Swipeout>
                    </View>
                    <View style={styles.item}>
                        <Swipeout right={swipeoutBtns} style={{ backgroundColor: "rgba(107, 81, 246, 1)", borderTopEndRadius: 20, borderBottomEndRadius: 20, }}>
                            <View style={styles.itemContent}>
                                <Image source={require("../../assets/Food1.png")} />
                                <View >
                                    <Text style={styles.name} >Spacy fresh crab</Text>
                                    <Text style={styles.subName} >Waroenk kita</Text>
                                    <Text style={styles.moneyText}>$ 35</Text>
                                </View>
                                <View style={styles.count}>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Minus.png")}></Image></TouchableOpacity>

                                    <View style={[{ marginHorizontal: 10 }]}>
                                        <Text>1</Text>
                                    </View>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Plus.png")}></Image></TouchableOpacity>
                                </View>
                            </View>
                        </Swipeout>
                    </View>
                    <View style={styles.item}>
                        <Swipeout right={swipeoutBtns} style={{ backgroundColor: "rgba(107, 81, 246, 1)", borderTopEndRadius: 20, borderBottomEndRadius: 20, }}>
                            <View style={styles.itemContent}>
                                <Image source={require("../../assets/Food1.png")} />
                                <View >
                                    <Text style={styles.name} >Spacy fresh crab</Text>
                                    <Text style={styles.subName} >Waroenk kita</Text>
                                    <Text style={styles.moneyText}>$ 35</Text>
                                </View>
                                <View style={styles.count}>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Minus.png")}></Image></TouchableOpacity>

                                    <View style={[{ marginHorizontal: 10 }]}>
                                        <Text>1</Text>
                                    </View>
                                    <TouchableOpacity><Image style={[{ marginHorizontal: 10 }]} source={require("../../assets/Icon-Plus.png")}></Image></TouchableOpacity>
                                </View>
                            </View>
                        </Swipeout>
                    </View>
                </ScrollView>

                <MenuTotal />

            </ImageBackground>
        </View>
    )
}

export function MenuTotal() {
    const navigation = useNavigation();

    const handleConfirmOder = () => {
        navigation.navigate('ConfirmOder')
    };
    return (
        <View style={{ width: "100%", height: 275, backgroundColor: "white", position: "absolute", bottom: 0 }}>
            <View style={{ backgroundColor: "#6B50F6", width: 390, height: 206, marginHorizontal: 29, marginVertical: 33, borderRadius: 20 }}>
                <Image style={{ position: "absolute", width: "100%" }} source={require("../../assets/Pattern(1).png")} />
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
                    <TouchableOpacity onPress={handleConfirmOder} style={{ backgroundColor: "white", width: 300, height: 48, marginHorizontal: 13, justifyContent: "center", alignItems: "center", borderRadius: 10, marginLeft: 45 }} >
                        <Text style={[styles.buttonText, { color: "#6B50F6", fontWeight: 700 }]}>Place My Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        paddingTop: 40,
        flex: 1,
        paddingBottom: 275
    },
    text: {
        color: 'black',
        fontSize: 25,
        marginHorizontal: 32,
        fontWeight: 'bold',
        marginBottom: 10
    },
    count: {
        flexDirection: "row",
        alignItems: "center"
    },
    item: {
        marginHorizontal: 10,
        marginVertical: 13,

    },
    itemContent: {
        flexDirection: "row",
        backgroundColor: "rgba(255, 255, 255, 1)",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        paddingVertical: 7,
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
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