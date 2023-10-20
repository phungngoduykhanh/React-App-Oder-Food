import React from "react";
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, ScrollView, Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
const SearchScreen = () => {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false, // Ẩn thanh trên cùng (Header)
        });
    }, [navigation]);
    return (
        
        <ScrollView style={styles.container}>
                <View style={styles.viewFiFa}>
                    <View>
                        <Text style={styles.textFine}>Fine Your</Text>
                        <Text style={styles.textFine}>Favorite Food</Text>
                    </View>
                    <Image source={require('../../assets/Home/Notification.png')}></Image>
                </View>
                <View style={styles.viewSearch}>
                    <View style={styles.viewsearch}>
                        <Image source={require('../../assets/Home/Search.png')} style={{ position: 'relative', left: 50, top: 13 }}></Image>
                        <TextInput style={styles.textInput} placeholder="What do you want to order" />
                    </View>
                    
                </View>
                <View style={styles.viewType}>
                    <Text style={styles.textType}>Type</Text>
                </View>
                <View style={styles.viewListType}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textRes}>Restaurant</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textRes}>Menu</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewType}>
                    <Text style={styles.textType}>Location</Text>
                </View>
                <View style={styles.viewListType}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textRes}>1 Km</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textRes}>&gt; 10 Km</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textRes}>&lt;  10 Km</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewType}>
                    <Text style={styles.textType}>Food</Text>
                </View>
                <View style={styles.viewListType}>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.textRes}>Cake</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textRes}>Soup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textRes}>Main Course</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textRes}>Appetizer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textRes}>Dessert</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewbuttonSearch}>
                    <TouchableOpacity style={styles.Search}>
                        <Text style={styles.textbuttonSearch}>Search</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
       
    )
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1, 
        padding: 20,
        marginTop:-20,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover'
    },
    viewFiFa: {
        paddingTop: 60,
        paddingLeft: 31,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textFine: {
        fontSize: 31,
        fontWeight: 'bold',
        lineHeight: 40.62,
        marginLeft:-10,
        
    },
    viewSearch: {
        marginTop:-25,
        flexDirection: 'row',
        paddingRight: 60,
        paddingBottom: 20
    },
    viewsearch: {
        flexDirection: 'row',
    },
    textInput: {
        width: '95%',
        borderRadius: 15,
        backgroundColor: '#6B50F6',
        opacity: 0.1,
        paddingBottom: 17,
        paddingLeft: 53,
        paddingTop: 17,
        color: 'black',
        height: 50
    },
    viewType: {
        paddingLeft: 25,
        paddingBottom: 20
    },
    textType: {
        color: '#22242E',
        fontSize: 15,
        fontWeight: 'bold',
    },
    viewListType: {

    },
    viewListType: {
        paddingLeft: 25,
        flexDirection: 'row',
        flexWrap: 'wrap', // Cho phép các mục tự động xuống hàng khi không đủ không gian
        gap: 20,
        paddingBottom: 20,
        alignItems: 'center', // Căn chỉnh các mục theo trục dọc
        width: '100%' // Đảm bảo rằng View có đủ chiều rộng để chứa 3 mục trên mỗi hàng

    },
    button: {
        backgroundColor: 'rgba(0, 255, 102, 0.10)',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 14,
        paddingBottom: 14,
        borderRadius: 15
    },
    textRes: {
        color: '#6B50F6',
        fontSize: 12,
        fontWeight: 'bold',
    },
    viewbuttonSearch: {
        paddingTop: 50,
        paddingLeft: 25,
        paddingRight: 25
    },
    Search: {
        backgroundColor: '#6B50F6',
        paddingTop: 21,
        paddingBottom: 21,
        borderRadius: 15
    },
    textbuttonSearch: {
        color: '#FEFEFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }


})
export default SearchScreen;