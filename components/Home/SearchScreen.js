import React, { useState } from "react";
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, ScrollView, Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Data from "./Data.js";

const SearchScreen = () => {
    const { products } = Data;
    const { menus } = Data;
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchType, setSearchType] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const navigation = useNavigation();
    

    const handleSearch = () => {
        const menuResults = menus.filter((item) =>
            item.name.toLowerCase().includes(searchKeyword.toLowerCase())
        );
        const productResults = products.filter((item) =>
            item.nameProduct.toLowerCase().includes(searchKeyword.toLowerCase())
        );

        if (searchKeyword.trim() === '') {
            setSearchType(null);
            setSearchResults([]);
            return;
        }
        if (menuResults.length > 0) {
            setSearchType('menu');
            setSearchResults(menuResults);
        } else if (productResults.length > 0) {
            setSearchType('product');
            setSearchResults(productResults);
        } else {
            setSearchType(null);
            setSearchResults([]);
        }
    };
    const handleExploreRestaurant = () => {
        navigation.navigate('ExploreRestaurant');
    };
    const handleExploreMenu = () => {
        navigation.navigate('ExploreMenu');
    };
    const handleNotification = () => {
        navigation.navigate('Notification');
    };

    const handleDetailProduct = (product) => {
        navigation.navigate('DetailProduct', { product });
    }

    const handleDetailMenu = (menu) => {
        navigation.navigate('DetailMenuScreen', { menu });
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <ImageBackground source={require('../../assets/Home/Homebackground.png')} style={styles.imageBackground}>
            <ScrollView>
                <View style={styles.viewFiFa}>
                    <View>
                        <Text style={styles.textFine}>Find Your</Text>
                        <Text style={styles.textFine}>Favorite Food</Text>
                    </View>
                    <TouchableOpacity onPress={handleNotification}>
                        <Image source={require('../../assets/Home/Notification.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewSearch}>
                    <View style={styles.viewsearch}>
                        <Image source={require('../../assets/Home/Search.png')} style={{ position: 'relative', left: 50, top: 16 }}></Image>
                        <TextInput
                            style={styles.textInput}
                            placeholder="What do you want to order"
                            value={searchKeyword}
                            onChangeText={(text) => setSearchKeyword(text)}
                            onSubmitEditing={handleSearch}
                            onKeyPress={handleKeyPress}
                        />
                    </View>
                    <Image source={require('../../assets/Home/FilterIcon.png')}></Image>
                </View>
                <View style={styles.viewType}>
                    <Text style={styles.textType}>Type</Text>
                </View>
                <View style={styles.viewListType}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textRes} onPress={handleExploreRestaurant} >Restaurant</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textRes} onPress={handleExploreMenu}>Menu</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewbuttonSearch}>
                    <TouchableOpacity style={styles.Search} onPress={handleSearch}>
                        <Text style={styles.textbuttonSearch}>Search</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewListType}>
                    {searchType === 'product' && searchResults.length > 0 && (
                        <FlatList
                            data={searchResults}
                            horizontal={false}
                            numColumns={2}
                            style={styles.viewListItem}
                            contentContainerStyle={{ flex: 1, width: '100%', flexDirection: 'column', gap: 20, height: 'auto' }}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.viewItem} key={item.id} onPress={() => handleDetailProduct(item)}>
                                    <View style={styles.viewImage}>
                                        <Image source={item.image} />
                                    </View>
                                    <Text style={styles.textVegan}>{item.nameProduct}</Text>
                                    <Text style={styles.textMin}>{item.min}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    )}

                    {searchType === 'menu' && searchResults.length > 0 && (
                        <FlatList
                            data={searchResults}
                            horizontal={false}
                            style={styles.viewListItem}
                            contentContainerStyle={{ gap: 31, width: '100%' }}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.viewMenu} key={item.id} onPress={() => handleDetailMenu(item)}>
                                    <View style={styles.viewImageMenu}>
                                        <Image source={item.image} />
                                        <View style={styles.viewTexts}>
                                            <Text style={styles.textmenu}>{item.nameMenu}</Text>
                                            <Text style={styles.textName}>{item.name}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.viewPrice}>
                                        <Text style={styles.textPrice}>{item.price}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    )}

                    {(searchType && searchResults.length === 0) && (
                        <Text style={styles.noResultsText}>No results found</Text>
                    )}
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
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
        fontWeight: '600',
        lineHeight: 40.62,
    },
    viewSearch: {
        flexDirection: 'row',
        paddingRight: 60,
        paddingBottom: 20
    },
    viewsearch: {
        flexDirection: 'row',
    },
    textInput: {
        width: '90%',
        borderRadius: 15,
        backgroundColor: '#6B50F6',
        opacity: 0.2,
        paddingLeft: 53,
        paddingTop: 5,
        color: 'black',
        height: 55,
        fontWeight: 'bold', // Make the text bold
        fontSize: 18,  // Adjust the font size as needed
        marginLeft: 6,
        marginBottom: 10,
        
    },


    viewType: {
        paddingLeft: 25,
        paddingBottom: 20
    },
    textType: {
        color: '#22242E',
        fontSize: 15,
        lineHeight: 19.65,
        fontWeight: '400'
    },
    viewListItem: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'row',
        width: '100%'
    },
    viewItem: {
        backgroundColor: 'white',
        width: 'auto',
        borderWidth: 1,
        borderColor: '#6B50F6',
        borderRadius: 22,
        shadowColor: 'rgba(90, 108, 234, 0.07)',
        shadowOffset: { width: 12, height: 26 },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 5,
        marginRight: 20
    }
    , viewImage: {
        paddingLeft: 21,
        paddingRight: 30,
        paddingBottom: 17,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textVegan: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 20.96,
        color: '#22242E',
        textAlign: 'center',
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 4
    },
    textMin: {
        fontSize: 13,
        paddingBottom: 26,
        fontWeight: '400',
        lineHeight: 17.03,
        color: '#22242E',
        textAlign: 'center',
    },
    viewMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#6B50F6',
        borderRadius: 22,
        shadowColor: 'rgba(90, 108, 234, 0.07)',
        shadowOffset: { width: 12, height: 26 },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 5, // Điều chỉnh giá trị để thay đổi độ sâu của bóng đổ (cho Android)
        paddingLeft: 10,
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 29
    },
    viewImageMenu: {
        flexDirection: 'row',
        gap: 21,

    },
    viewTexts: {
        paddingTop: 13
    },
    textmenu: {
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 19.46,
        color: '#22242E'
    },
    textName: {
        fontSize: 13,
        color: 'gray',
        fontWeight: '400',
    },
    viewPrice: {
        paddingTop: 18,
        paddingBottom: 20,

    },
    textPrice: {
        fontSize: 22,
        fontWeight: '600',
        color: '#6B50F6',
        lineHeight: 28.83
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
        fontWeight: '500'
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
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center'
    },
    viewListItem: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        width: '100%'
    },
    viewMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#6B50F6',
        borderRadius: 22,
        shadowColor: 'rgba(90, 108, 234, 0.07)',
        shadowOffset: { width: 12, height: 26 },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 5, // Điều chỉnh giá trị để thay đổi độ sâu của bóng đổ (cho Android)
        paddingLeft: 10,
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 29
    },
    viewImageMenu: {
        flexDirection: 'row',
        gap: 21,

    },
    viewTexts: {
        paddingTop: 13
    },
    textmenu: {
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 19.46,
        color: '#22242E'
    },
    textName: {
        fontSize: 13,
        color: 'gray',
        fontWeight: '400',
    },
    viewPrice: {
        paddingTop: 18,
        paddingBottom: 20,

    },
    textPrice: {
        fontSize: 22,
        fontWeight: '600',
        color: '#6B50F6',
        lineHeight: 28.83
    },
    noResultsText: {
        marginLeft: "30%",
        fontSize: 18,
        fontWeight: 'bold',
        color: 'Blue   ', // You can adjust the color as needed
        marginTop: 100,
    }

})
export default SearchScreen;