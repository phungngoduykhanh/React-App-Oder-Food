import React, { useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ScrollView } from 'react-native';


export default function Item() {
    const items = [
        {
            id: 1,
            name: "Item 1",
            image: require("../../assets/Photo-Restaurant.png"),
            details: 'Thông tin chi tiết về Item 1',
        }
    ]
    return (
        <View>
            <Text>d</Text>
        </View>
    )
}
