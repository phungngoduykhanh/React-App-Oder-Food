import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import createBottomTabNavigator
import HomeScreen from './components/Home/Home';
import SearchScreen from './components/Home/SearchScreen';
import Menu from './components/Home/Menu';
import Restaurant from './components/Home/Restaurant';
import Notification from './components/Home/Notification';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); // Create a Tab Navigator

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Trang chủ', headerShown: false }} // Ẩn tiêu đề
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: 'Tìm kiếm', headerShown: true }} // Hiển thị tiêu đề
        />
        <Stack.Screen name="ExploreRestaurant" component={Restaurant} options={{ headerShown: false }} />
        <Stack.Screen name="ExploreMenu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
      

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
