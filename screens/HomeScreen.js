import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback,
  FlatList, Platform, StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';
 
import {horizontalFlatListData} from '../data/horizontalFlatListData.js';



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
      </View>
    );
  }
}



export default class HomeScreen extends Component {



  _onPressMenuButton = () => {
    alert("Menu works");
  }
  render() {
    
    return (
      <View id='parent' style={styles.parentView}>
         
         <View style={styles.menuBar}>  
        
          <TouchableOpacity                              // Menu Icon
            
            
            onPress={this._onPressMenuButton}

          > 
            <Image
              style={{
              marginTop: 10,
              width: 25,
              height: 25,
              resizeMode: "contain",
            }}
            source={require("../images/menuIcon/menuIcon.png")} /> 
        </TouchableOpacity>

        <TouchableOpacity                               // Add New Connection Icon
          onPress={() => this.props.navigation.navigate('NewConnectionMenu')}
          //onPress={this._onPressAddConnButton}
          >
            <Image 
            style={{
              marginTop: 8,
              width: 35,
              height: 35,
            }}
            source={require("../images/addNewConnIcon/newConn.png")} /> 
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
    </View>
    );
  }
}


const styles = StyleSheet.create({
  parentView:{
    flex: 1,
  },
  mainTop: {
    flex: 1,
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
});
