import React, { useState } from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Divider, Image, Input, HStack, Text } from 'native-base';
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DisplaySettingScreen from '../screens/DisplaySettingScreen';
import MyTheme from '../Theme';
import WishList from '../screens/WishList';
import Mybooks from '../screens/MyBooks'

import albumData from "../json/albums.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}

const CustomDrawerContent = (props) => {

  return (
    <DrawerContentScrollView {...props}
      contentContainerStyle={{ paddingTop: 80 }}
    >
       <Image
        style={styles.img}
        source={{uri: 'https://i.pinimg.com/originals/2b/60/9e/2b609e5dbded273cf5c7303e9adbb968.jpg'}}
        alt="user"
      />
       <Text style={[styles.userName, styles.h1]}>May</Text>
       <Divider my="2"/>
      <DrawerItemList {...props} />
      

    

    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {

  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        drawerActiveBackgroundColor: 'white',
        drawerActiveTintColor: '#6200EE',
        drawerInactiveTintColor: 'gray',
        drawerStyle: { width: 250 },
        drawerLabelStyle: { fontSize: 14, fontWeight: '400' },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="MyTabs"
        component={MyTabs}
        options={{
          headerShown: false,
          drawerLabel: "Home",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          headerShown: false,
          drawerLabel: "Account",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerShown: false,
          drawerLabel: "Setting",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const MyTabs = () => {

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#6200EE',
        // headerShown: false
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishList}
        options={{
          headerShown: false,
          title: "Wishlist",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Mybooks"
        component={Mybooks}
        options={{
          headerShown: false,
          title: "Mybooks",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const SettingsStack = ({ navigation }) => {
  return (
    <Stack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            headerShadowVisible: false,
        },
      }}
    >
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={20}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="DisplaySetting"
        component={DisplaySettingScreen}
        options={{
          title: "Display",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
    </Stack.Navigator>
  );
}

const HomeStack = ({ navigation }) => {
  const[alternateImage, setAlternateImage] = useState(true);

  const changeImage = () => {
    setAlternateImage(alternateImage => !alternateImage);
  }
  return (
    <Stack.Navigator
     screenOptions={{
          elevation: 0,
          shadowOpacity: 0,
          headerShadowVisible: false,
     }}
    >
      <Stack.Screen
        name="Home"
        component={AlbumScreen}
        options={{
          title: '',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={24}
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 5 }}
            />
          ),
          headerRight: () => (
                <MaterialCommunityIcons
                    name={'magnify'}
                    size={24}
                    onPress={() => alert('Search')}
                    style={{marginRight: 5}}
                />
        ) 
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ navigation }) => ({
          title: '',
          headerRight: () => (
              <TouchableOpacity onPress={changeImage}>
                  {alternateImage && <Image style={styles.bt} alt="mark" source={{uri: 'https://i.pinimg.com/originals/70/8b/19/708b19ced0ff15ae1f89cd1017f824ec.jpg'}}/>}
                {!alternateImage && <Image style={styles.bt} alt="unmark" source={{uri: 'https://i.pinimg.com/originals/a8/7b/ed/a87beda7accefd41ac4345785995c7ff.jpg'}}/>}
              </TouchableOpacity>
          ),
          headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image source={require('../../assets/icon/icon_back.png')} style={styles.navIcon} alt="black"/>
              </TouchableOpacity>
          ),
      })}
      />
    </Stack.Navigator>
  );
}
const AccountStack = ({ navigation }) => {

  return (
    <Stack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            headerShadowVisible: false,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={AlbumScreen}
        options={{
          title: '',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={24}
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            />
          ),
          headerRight: () => (
                <MaterialCommunityIcons
                    name={'magnify'}
                    size={24}
                    onPress={() => alert('Search')}
                    style={{marginRight: 10}}
                />
        ) 
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        })}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  img: {
    width: 48,
    height: 48,
    marginLeft: 16,
    marginBottom: 16,
  },
  userName:{
    marginLeft: 16,
    marginBottom: 16,
  },
  bt:{
    width: 24,
    height: 24,
  },
  h1:{
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
})
export default Navigation;