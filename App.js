import * as React from "react";
import { StyleSheet, Text, View,Button } from 'react-native';
import { LoginScreen, HomeScreen, CategoriesScreen
,UsersScreen, ProductsScreen, ReportsScreen,ReviewsScreen, AddCategory 
,UpdateCategory,DeleteCategory} from './src/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator
} from '@react-navigation/drawer';
import DisplayCategories from "./src/screens/DisplayCategories";


const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()







const App =() => {

  


  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name = "LoginScreen" component = {LoginScreen} />
        <Stack.Screen options={{headerShown: false}}  name = "Home" component = {MyDrawer}/>
        <Stack.Screen options={{headerShown: false}}  name = "Category" component = {DrawerforCategories}/>
        
        
    
      </Stack.Navigator>
      </NavigationContainer>
  )
}

const MyDrawer = () => {
  return (
    
        <Drawer.Navigator
              initialRouteName='HomeScreen'
              screenOptions={{ 
                drawerType: 'fade'
              }}
            >
              <Drawer.Screen name="HomeScreen"  component={HomeScreen} />
              <Drawer.Screen name="UsersScreen"  component={UsersScreen} />
              <Drawer.Screen name="ProductsScreen"  component={ProductsScreen} />
              <Drawer.Screen name="ReportsScreen"  component={ReportsScreen} />
              <Drawer.Screen name="ReviewsScreen"  component={ReviewsScreen} />

          </Drawer.Navigator>
  
  )
}
const DrawerforCategories = () => {
  return (
    
    <Drawer.Navigator
          initialRouteName='CategoriesScreen'
          screenOptions={{ 
            drawerType: 'fade'
          }}
        >

            <Drawer.Screen name="CategoriesScreen"  component={CategoriesScreen} />
            <Drawer.Screen name="AddCategory"  component={AddCategory} />
            <Drawer.Screen name="DisplayCategories"  component={DisplayCategories} />
            <Drawer.Screen name="UpdateCategory"  component={UpdateCategory} />
            <Drawer.Screen name="DeleteCategory"  component={DeleteCategory} />
         

      </Drawer.Navigator>

)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App

