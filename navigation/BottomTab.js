import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, Text, StyleSheet } from "react-native";
import React from "react";
import Home from "../components/Home";
import User from "../components/User";
import Cart from "../components/Cart";
import Chat from "../components/Chat";
const Tab = createBottomTabNavigator();

function getTabIconSource(tabName) {
  switch (tabName) {
    case "Home":
      return require("../assets/Home.png");
    case "User":
      return require("../assets/Profile_Icon.png");
    case "Cart":
      return require("../assets/Buy.png");
    case "Chat":
      return require("../assets/Chat.png");
    default:
      return null;
  }
}



const BottomTab = () =>{
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={getTabIconSource(route.name)}
              style={{
                marginRight: 8,
                tintColor: focused ? "#FF1493" : "#6B50F6",
              }}
            />
            {focused ? (
              <View style={styles.tabLabel}>
                <Text style={styles.name}>{route.name}</Text>
              </View>
            ) : null}
          </View>
        ),
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "pink",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
  },
});

export default BottomTab;