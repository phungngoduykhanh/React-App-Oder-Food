import React from "react";
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, ScrollView, Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ExploreRestaurant = () => {
  const products = [
    { id: 1, image: require('../../assets/Home/Rest-circle.png'), nameProduct: 'Vegan Resto', min: '12 min' },
    { id: 2, image: require('../../assets/Home/Heaththy.png'), nameProduct: 'Vegan Resto', min: '13 min' },
    { id: 3, image: require('../../assets/Home/Rest-fourFood.png'), nameProduct: 'Good Food', min: '14 min' },
    { id: 4, image: require('../../assets/Home/Rest-hat.png'), nameProduct: 'Vegan', min: '12 min' },
    { id: 5, image: require('../../assets/Home/Rest-circle.png'), nameProduct: 'Vegan Resto', min: '13 min' },
    { id: 6, image: require('../../assets/Home/Rest-fourFood.png'), nameProduct: 'Vegan Resto', min: '14 min' },
  ];

  const navigation = useNavigation();

  const handleFilterScreen = () => {
    navigation.navigate('FilterScreen');
  }

  return (
    <ImageBackground source={require('../../assets/Home/Homebackground.png')} style={styles.imageBackground}>
      <ScrollView>
        <View style={styles.viewFiFa}>
          <View style={styles.viewtext}>
            <Text style={styles.textFine}>Find Your</Text>
            <Text style={styles.textFine}>Favorite Food</Text>
          </View>
          <Image source={require('../../assets/Home/Notification.png')} />
        </View>
        <View style={styles.viewSearch}>
          <View style={styles.viewsearch}>
            <Image source={require('../../assets/Home/Search.png')} style={{ position: 'relative', left: 50, top: 13 }} />
            <TouchableOpacity style={styles.textInput} placeholder="What do you want to order" onPress={handleFilterScreen} />
          </View>
          <Image source={require('../../assets/Home/FilterIcon.png')} />
        </View>
        <View style={styles.viewNeVi}>
          <Text style={styles.textNe}>Popular Restaurant</Text>
        </View>
        <FlatList
          data={products}
          horizontal={false}
          numColumns={2}
          style={styles.viewListItem}
          contentContainerStyle={{ flex: 1, flexDirection: 'column', alignItems: 'center', rowGap: 20, height: 'auto', justifyContent: 'space-row' }}
          renderItem={({ item }) => (
            <View style={styles.viewItem} key={item.id}>
              <View style={styles.viewImage}>
                <Image source={item.image} />
              </View>
              <Text style={styles.textVegan}>{item.nameProduct}</Text>
              <Text style={styles.textMin}>{item.min}</Text>
            </View>
          )}
        />
      </ScrollView>
    </ImageBackground>
  );
}

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
    fontWeight: 'bold',
    lineHeight: 40.62,
  },
  viewSearch: {
    flexDirection: 'row',
    paddingRight: 60,
    paddingBottom: 20
  },
  viewsearch: {
    flexDirection: 'row'
  },
  textInput: {
    width: '90%',
    borderRadius: 15,
    backgroundColor: '#6B50F6',
    opacity: 0.1,
    paddingBottom: 17,
    paddingLeft: 53,
    paddingTop: 17,
    color: 'black',
    height: 50
  },
  viewNeVi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 32,
    paddingRight: 32
  },
  textNe: {
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 19.65,
    color: '#22242E',
  },
  viewListItem: {
    paddingTop: 20,  
    marginLeft:20,
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
  },
  viewImage: {
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
    fontWeight: 'bold',
    color: '#22242E',
    textAlign: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 4
  },
  textMin: {
    fontSize: 13,
    paddingBottom: 26,
    color: '#22242E',
    textAlign: 'center',
  },

})

export default ExploreRestaurant;
