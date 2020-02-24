import React, {Component} from 'react';
import {View, StyleSheet} from "react-native";
import {App} from "./";
import {newConnectionMenu} from "./screens";
import {SwitchNavigator} from "@react-navigation/native";

const MainStack = SwitchNavigator({
    
    newConnectionMenu: newConnectionMenu,
    main: App,
})

class navigatorFile extends Component{
    render(){
    return <MainStack />;
    }
}

export default navigatorFile;