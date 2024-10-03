import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./pantallas/home";
import SecondScreen from "./pantallas/secondscreen";
import stackscreen from "./pantallas/stack";

const Tab = createMaterialBottomTabNavigator();

function MyTabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MyStack} />
            <Tab.Screen name="Cambiar Riego" component={SecondScreen} />
        </Tab.Navigator>
    )
}
export default function Navegación(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}
const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
    return(
        <HomeStackNavigator.Navigator
        initialRouteName="Homescreen">
            
            <HomeStackNavigator.Screen
            name="Homescreen"
            component={HomeScreen}
            options={{
                headerShown : false
            }}
            />
            <HomeStackNavigator.Screen
            name="Stack"
            component={stackscreen}
            />
        </HomeStackNavigator.Navigator>
        
    )
}
