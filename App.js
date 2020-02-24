import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback,
  FlatList, Platform, StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';

import { useNavigation } from "@react-navigation/native"; 
import {horizontalFlatListData} from './data/horizontalFlatListData.js';
//import {newConnectionMenu} from "./screens";
//import {SwitchNavigator, TabNavigator} from "@react-navigation/native";


class HorizontalFlatListItem extends Component {
  render(){
    return(
      <View
        style={styles.relativeProfileImage}
      >
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'blue',
          marginTop: 130,
          
        }}>{this.props.item.nameRel}</Text>
        {/* <Text style={{
          fontSize: 16,
          color: 'blue',
          margin: 8,
          
        }}>{this.props.item.connName}</Text> */}
        {/* <Text style={{
          fontSize: 16,
          color: 'blue',
          margin: 8,
          
        }}>{this.props.item.levelNum}</Text> */}
      </View>
    );
  }
}

//const navigation = useNavigation();

export default class App extends Component {

  
  newConnectionMenu(){
    this.props.navigation.navigate('newConnectionMenu');
    //Navigate to New Connection Menu Screen
  }
  //  _onPressAddConnButton = () => {
  //   this.props.navigation.navigate('newConnectionMenu');
  //   //alert("Add Conn kinda works!!");
  //  }
  _onPressMenuButton = () => {
    alert("Menu works");
  }
  render() {
    
    return (
      <View id='parent' style={styles.parentView}>
         
         <View style={styles.menuBar}>  
        
          <TouchableOpacity                              // Menu Icon
            //onPress={this._onPressMenuButton}
            onPress={() => {
              this.newConnectionMenu();
            }}
          > 
            <Image
              style={{
              marginTop: 10,
              width: 25,
              height: 25,
              resizeMode: "contain",
            }}
            source={require("./images/menuIcon/menuIcon.png")} /> 
        </TouchableOpacity>

        <TouchableOpacity                               // Add New Connection Icon
          onPress={this._onPressAddConnButton}
          >
            <Image 
            style={{
              marginTop: 8,
              width: 35,
              height: 35,
            }}
            source={require("./images/addNewConnIcon/newConn.png")} /> 
        </TouchableOpacity>
          
      </View>
      
      <View style={styles.mainTop}> 
      
        <View style={{height: 140}}>
          <FlatList
            style={{
              backgroundColor: 'white',
              opacity: 1,
            }}
            horizontal={true}
            data={horizontalFlatListData}
            renderItem={({item, index})=>{
              return(
                <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>

                </HorizontalFlatListItem>  
              );
            }}keyExtractor={(item, index) => item.nameRel}
          >
          </FlatList>
        </View>
      </View>
    
      <View id='navBarElements' style={styles.naviBar}>
        <Text>Navigation Bar</Text>
      </View>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  parentView:{
    flex: 1,
  },
  mainTop: {
    flex: 10,
    flexDirection: "column",
    margin: 5,
    height: 220,
    justifyContent: 'center',
  
  },
  relativeProfileImage:{
    flex: 1,
    height: 110,
    width: 110,
    borderRadius: 100,
    borderWidth: 4,
    padding:10,
    borderColor: '#F14266',
    backgroundColor: '#FFFFFF',
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  naviBar:{
    flex: 1,
    height: 30,
    backgroundColor: '#008b8b',
    justifyContent:'center',
    alignItems: 'center',
  },

});
