
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
const HomeScreen = () => {
    const navigation = useNavigation();
    const handleSearch = () => {
        navigation.navigate('Search')
    }
    const handleExploreRestaurant = () => {
        navigation.navigate('ExploreRestaurant');
    };
    const handleExploreMenu = () => {
        navigation.navigate('ExploreMenu');
    };
    const handleNotification = () => {
        navigation.navigate('Notification')
    }
    const [dataPopular, setDataPopular] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://656153d3dcd355c08323c1ac.mockapi.io/api/PopularMenu';

        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                const limitedPopulars = response.data.slice(0, 3);
                setDataPopular(limitedPopulars)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Find Your{'\n'}Favorite Food</Text>
                <TouchableOpacity onPress={handleNotification}>
                    <Image
                        source={require('../../assets/Home/Notification.png')}
                        style={styles.notificationImage}
                    />
                </TouchableOpacity>
            </View >
            <View style={styles.searchBar}>
                <View style={styles.rectangleSearch}>
                    <Text onPress={handleSearch} style={styles.search}>What do you want to order?</Text>
                </View>
                <Image
                    source={require('../../assets/Home/Search.png')}
                    style={styles.SearchImage}
                />
                <View style={styles.rectangleFilter}>
                </View>
                <Image
                    source={require('../../assets/Home/Filter.png')}
                    style={styles.FilterImage}
                />
            </View>

            <View style={styles.rectangleBody}>
                <Image
                    source={require('../../assets/Home/Creem.png')}
                    style={styles.CreemImage}
                />
                <View style={styles.overlay}>
                    <Text style={styles.textSpeccial}>special Deal for{'\n'}October</Text>
                    <View style={styles.rectangleBuy}>
                        <TouchableOpacity><Text style={styles.buyNowText} >Buy Now</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.titleNearest}>
                <View style={styles.nearestView}>
                    <Text style={styles.subtextNearest}>Nearest Restaurant</Text>
                    <Text onPress={handleExploreRestaurant} style={styles.subtextView} >View Morer</Text>
                </View>
                <View style={styles.horizontalImage}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../assets/Home/Vegan.png')}
                            style={styles.veganImage}
                        />
                        <Text style={styles.imageText}>Vegan</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../assets/Home/Healthy.png')}
                            style={styles.healthyImage}
                        />
                        <Text style={styles.imageText}>Healthy</Text>
                    </View>
                </View>

            </View>

            <View style={styles.titlePopular}>
                <View style={styles.popularView}>
                    <Text style={styles.subtextNearest}>Popular Menu</Text>
                    <Text style={styles.subtextView} onPress={handleExploreMenu}>View Morer</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("ExploreMenu");
                    }}
                >
                    <View style={styles.subtitlePopular}>
                        {dataPopular && dataPopular.map(item => (

                            <View style={styles.imagePopular} key={item.id}>
                                <Image
                                    source={{ uri: item.img }}
                                    style={styles.greenImage}
                                />
                                <View style={styles.items}>
                                    <View style={styles.nameFood}>
                                        <Text style={styles.titleImageText}>{item.name}</Text>
                                        <Text style={styles.subtitleimageText}>{item.subName}</Text>
                                    </View>
                                    <Text style={styles.dolar}>${item.price}</Text>
                                </View>
                            </View>
                        ))
                        }

                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.titleNearest}>
                <View style={styles.nearestView}>
                    <Text style={styles.subtextNearest}>Nearest Restaurant</Text>
                    <Text style={styles.subtextView} onPress={handleExploreRestaurant}>View Morer</Text>
                </View>
                <View style={styles.horizontalImage}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../assets/Home/Vegan.png')}
                            style={styles.veganImage}
                        />
                        <Text style={styles.imageText}>Vegan</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../assets/Home/Healthy.png')}
                            style={styles.healthyImage}
                        />
                        <Text style={styles.imageText}>Healthy</Text>
                    </View>
                </View>
                <View style={styles.horizontalImage}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../assets/Home/Vegan.png')}
                            style={styles.veganImage}
                        />
                        <Text style={styles.imageText}>Vegan</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../assets/Home/Healthy.png')}
                            style={styles.healthyImage}
                        />
                        <Text style={styles.imageText}>Healthy</Text>
                    </View>
                </View>


            </View>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginLeft: 15,

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 16,
        marginVertical: 6,
    },
    text: {
        fontSize: 31,
        fontWeight: 'bold',
        color: '#22242E',
    },

    notificationImage: {
        width: 120,
        height: 120,
        marginTop: 60,
        marginLeft: 100,


    },
    searchBar: {
        marginTop: -25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    search: {
        marginTop: 15,
        textAlign: 'center',
    },
    rectangleSearch: {
        height: 50,
        width: 300,
        backgroundColor: '#6B50F6',
        opacity: 0.1,
        borderRadius: 15,
        marginLeft: 16,
        position: 'relative',

    },
    SearchImage: {
        position: 'absolute',
        left: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rectangleFilter: {
        height: 55,
        width: 55,
        backgroundColor: '#6B50F6',
        opacity: 0.1,
        borderRadius: 15,
        marginLeft: 20,
        position: 'relative',
    },
    FilterImage: {
        position: 'absolute',
        top: 16,
        left: "81%",
        alignItems: 'center',
        justifyContent: 'center',
    },

    rectangleBody: {
        position: 'relative',
        height: 150,
        width: 375,
        backgroundColor: '#4D9CF9',
        borderRadius: 15,
        marginTop: 20,
        marginLeft: 20,
    },
    CreemImage: {
        width: '85%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 10,
        left: 200,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    textSpeccial: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffff',

    },
    rectangleBuy: {
        height: 40,
        width: 110,
        color: 'blue',
        backgroundColor: '#FFFF',
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buyNowText: {
        fontSize: 15,
        color: '#4D9CF9',

    },

    nearestView: {
        paddingLeft: 25,
        paddingRight: 25,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 31,
    },

    horizontalImage: {
        gap: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    imageContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: 155,
        height: 180,
        backgroundColor: '#ffff',
        borderRadius: 22,

    },

    subtextNearest: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#22242E',
        marginRight: 10,
    },
    subtextView: {
        fontSize: 12,
        color: '#6B50F6',
        marginRight: 10,
    },
    veganImage: {
        width: 120,
        height: 90,
    },
    healthyImage: {
        width: 120,
        height: 90,
    },
    subtitlePopular: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    popularView: {
        paddingLeft: 25,
        paddingRight: 25,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 31,

    },
    imagePopular: {
        flexDirection: 'row',
        alignItems: 'center',  // Center items vertically
        marginTop: 20,
        width: '90%',
        height: 87,
        backgroundColor: '#ffff',
        borderRadius: 22,
    },
    imageText: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },

    greenImage: {
        width: 64,
        height: 64,
        borderRadius: 10,
        marginLeft: 14,
    },

    titleImageText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#22242E',

    },
    subtitleimageText: {
        fontSize: 14,
        color: '#22242E',
        color: 'gray',
    },
    items: {

        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    nameFood: {
        width: '64%',
        marginLeft: 21,
    },
    dolar: {
        color: '#6B50F6',
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
