import 'react-native-gesture-handler';
import React, {Component} from "react";
import Routes from "./Routes";
import HomeScreen from "./screens/HomeScreen.js";
import NewConnectionMenu from './screens/NewConnectionMenu';
//import { SafeAreaProvider} from "react-native-safe-area-context";
//const App = () => <Routes/>

function App(){
  // return <NewConnectionMenu />;
  //return <HomeScreen />;
  return <Routes />;
  }

export default App;
