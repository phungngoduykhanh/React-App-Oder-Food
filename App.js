import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatDetails from "./components/ChatDetails";
import Chat from "./components/Chat";
import BottomTab from "./navigation/BottomTab";
import Call from "./screens/Call";

import HomeScreen from './components/Home/Home';
import SearchScreen from './components/Home/SearchScreen';
import Menu from './components/Home/Menu';
import Restaurant from './components/Home/Restaurant';
import Notification from './components/Home/Notification';
import OderDetail from "./components/OderDetail/OderDetail";
import ConfirmOder from "./components/ConfirmOder/ConfirmOder";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChatDetails"
          component={ChatDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Call"
          component={Call}

          options={{
            headerShown: false,
          }}
        />

       
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: 'Tìm kiếm', headerShown: true }} // Hiển thị tiêu đề
        />
        <Stack.Screen name="ExploreRestaurant" component={Restaurant} options={{ headerShown: false }} />
        <Stack.Screen name="ExploreMenu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />

        <Stack.Screen name="OderDetail" component={OderDetail} options={{ headerShown: false }} />

        <Stack.Screen name="ConfirmOder" component={ConfirmOder} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}