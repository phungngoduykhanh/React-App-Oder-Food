import Swipeout from 'react-native-swipeout';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity, Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Item({ item, updateQuantity, deleteItem }) {

    const handleIncrease = () => {
        updateQuantity(item.id, item.quantity + 1);
    };

    const handleDecrease = () => {
        if (item.quantity > 0) {
            updateQuantity(item.id, item.quantity - 1);
        }
    };

    var swipeoutBtns = [
        {
            component: (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(107, 81, 246, 1)',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}
                    activeOpacity={1}
                    onPress={() => deleteItem(item.id)}
                >
                    <FontAwesomeIcon icon={faTrashCan} color='white' />
                </TouchableOpacity>
            )
        }
    ]
    return (
        <View style={styles.item}>
            <Swipeout right={swipeoutBtns} style={{ backgroundColor: "rgba(107, 81, 246, 1)", borderTopEndRadius: 20, borderBottomEndRadius: 20 }}>
                <View style={styles.itemContent}>
                    <Image style={{ width: 60, height: 60, marginRight: 20, marginTop: 3,borderRadius:10 }} source={{ uri: item.img }} />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.name} >{item.name}</Text>
                        <Text style={styles.subName} >{item.subName}</Text>
                        <Text style={styles.moneyText}>$ {item.price}</Text>
                    </View>
                    <View style={styles.count}>
                        <TouchableOpacity onPress={handleDecrease}><Image style={[{ marginHorizontal: 10 }]} source={require("../../../assets/Icon-Minus.png")}></Image></TouchableOpacity>

                        <View style={[{ marginHorizontal: 10 }]}>
                            <Text>{item.quantity}</Text>
                        </View>
                        <TouchableOpacity onPress={handleIncrease}><Image style={[{ marginHorizontal: 10 }]} source={require("../../../assets/Icon-Plus.png")}></Image></TouchableOpacity>
                    </View>
                </View>
            </Swipeout>
        </View>
    )
}

const styles = StyleSheet.create({
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