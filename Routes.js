import React, { Component } from "react";
import {View, Text} from "react-native"; 
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen.js";
import NewConnectionMenu from "./screens/NewConnectionMenu.js";

const Stack= createStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Add New Connection" component={NewConnectionMenu} />    
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;