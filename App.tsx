import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import ItemDetails from './components/ItemDetails'
import CartScreen from './screens/CartScreen'
import AddressScreen from './screens/AddressScreen'
import PaymentScreen from './screens/PaymentScreen'
import OderSuccessScreen from './screens/OderSuccessScreen'
import ForgotPassScreen from './screens/ForgotPassScreen'
import FavouriteScreen from './screens/FavouriteScreen'
import ItemFavourite from './components/ItemFavourite'
import PersonalScreen from './screens/PersonalScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function MyTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{ tabBarStyle: { backgroundColor: 'white', borderTopWidth: 0, position: 'absolute', bottom: 0, zIndex: 1 } }}

    >
      <Tab.Screen name='Home' component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('./img/iconHome.png')} />

          )
        }} />
      <Tab.Screen name='Favourite' component={FavouriteScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('./img/heart.png')} />
          )
        }} />
      <Tab.Screen name='Cart' component={CartScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('./img/iconTag.png')} />
          )
        }} />

      <Tab.Screen name='Personal' component={PersonalScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('./img/iconPerson.png')} />
          )
        }} />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="HomeTabs" component={MyTab} />
        <Stack.Screen name="Favourite" component={FavouriteScreen} />
        <Stack.Screen name="Personal" component={PersonalScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Details" component={ItemDetails} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;