import { TouchableOpacity, Image, ImageBackground, ScrollView, FlatList } from 'react-native';
import { View, Text, StyleSheet } from 'react-native'
import bg from "../../assets/bg-detail.png";
import { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import BackButton from "../../assets/BackButton.png";
import Item from './Item/Item';
import { TotalContext } from './TotalContext/TotalContext';

export default function OderDetail() {

    const navigation = useNavigation();

    const [items, setItems] = useState([
        { id: 1, name: 'Spacy fresh crab', subName: 'Waroenk kita', price: 35, quantity: 1, image: require("../../assets/Food1.png") },
        { id: 2, name: 'Spacy fresh crab', subName: 'Waroenk kita', price: 50, quantity: 1, image: require("../../assets/Food2.png") },
    ]);

    const { total, setTotal } = useContext(TotalContext);

    useEffect(() => {
        const initialTotal = caculateTotalPrice(items);
        setTotal(initialTotal);
    }, []);

    const handleBackButton = () => {
        navigation.navigate('Home')
    };

    const updateQuantity = (id, newQuantity) => {
        const updatedItems = items.map(item => {
            if (item.id === id) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setItems(updatedItems);

        const newTotal = caculateTotalPrice(updatedItems);
        setTotal(newTotal)
    }

    const caculateTotalPrice = (updatedItems) => {
        const total = updatedItems.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
        }, 0);
        return total;
    }

    const handleDeleteItem = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        const newTotal = caculateTotalPrice(updatedItems);
        setTotal(newTotal);
    }


    return (
        <View style={styles.container}>
            <ImageBackground source={bg} style={styles.image}>
                <TouchableOpacity onPress={handleBackButton} style={{ marginLeft: 25, marginBottom: 15 }}><Image source={BackButton}></Image></TouchableOpacity>
                <Text style={styles.text}>Oder Detail</Text>


                <FlatList data={items}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Item item={item} updateQuantity={updateQuantity} deleteItem={handleDeleteItem} />
                    )}
                />

                <MenuTotal total={total} url={'ConfirmOder'}/>


            </ImageBackground>
        </View>
    )
}

export function MenuTotal({ total, url }) {
    const navigation = useNavigation();

    const handleConfirmOder = (url) => {
        navigation.navigate(url);
    };
    return (
        <View style={{ width: "100%", height: 275, backgroundColor: "white", position: "absolute", bottom: 0 }}>
            <View style={{ backgroundColor: "#6B50F6", width: 390, height: 206, marginHorizontal: 29, marginVertical: 33, borderRadius: 20 }}>
                <Image style={{ position: "absolute", width: "100%" }} source={require("../../assets/Pattern(1).png")} />
                <View >
                    <View style={[styles.count, { justifyContent: "space-between", marginHorizontal: 20, marginTop: 20 }]}>
                        <Text style={styles.textColor}>Sub-Total</Text>
                        <Text style={styles.textColor}>{total} $</Text>
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
                        <Text style={[styles.textColor, { fontSize: 18, fontWeight: 700 }]}>{total} $</Text>
                    </View>
                    <TouchableOpacity onPress={()=>handleConfirmOder(url)} style={{ backgroundColor: "white", width: 300, height: 48, marginHorizontal: 13, justifyContent: "center", alignItems: "center", borderRadius: 10, marginLeft: 45 }} >
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