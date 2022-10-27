import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import History from "./Components/historyScreen";
import Search from "./Components/searchScreen";
import Favorites from "./Components/favoritesScreen";


const Tab = createBottomTabNavigator()




export default class React_Dictionary_App extends React.Component{
    render(){
      return(
        <NavigationContainer>
        
          <Tab.Navigator initialRouteName="Ara">
              <Tab.Screen name="Geçmiş" component={History}/>
              <Tab.Screen name="Ara" component={Search}/>
              <Tab.Screen name="Favoriler" component={Favorites}></Tab.Screen>

               
          </Tab.Navigator>
          
        
        </NavigationContainer>
        
       
      );
    }
}