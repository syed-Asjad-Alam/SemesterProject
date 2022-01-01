import * as React from "react";
import { StyleSheet, Text, View,Button } from 'react-native';
import { LoginScreen, HomeScreen, CategoriesScreen
,UsersScreen, ProductsScreen, ReportsScreen,ReviewsScreen, AddCategory 
,UpdateCategory,DeleteCategory,UpdatingCategory} from './src/screens'
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
                drawerType:'slide',
                headerStyle:{backgroundColor:'#788eec'},
                headerTintColor:'white',
                headerTitleStyle:{color:'white'}
                
              }}
              
            >
              <Drawer.Screen options={{title:'Home',
                headerStyle:{backgroundColor:'#788eec'},
                headerTintColor:'white',
                headerTitleStyle:{color:'white'}}} name="HomeScreen"  component={HomeScreen} />
              <Drawer.Screen options={{title:'Users'}} name="UsersScreen"  component={UsersScreen} />
              <Drawer.Screen options={{title:'Products'}} name="ProductsScreen"  component={ProductsScreen} />
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
            drawerType: 'fade',
            headerStyle:{backgroundColor:'#788eec'},
            headerTintColor:'white',
            headerTitleStyle:{color:'white'}
          }}
        >

            <Drawer.Screen options={{title:'Manage Categories'}} name="CategoriesScreen"  component={CategoriesScreen} />
            <Drawer.Screen options={{title:'Categoires'}} name="DisplayCategories"  component={DisplayCategories} />
            <Drawer.Screen options={{title:'Add'}} name="AddCategory"  component={AddCategory} />
            <Drawer.Screen options={{title:'Update'}} name="DrawerUpdate"  component={DrawerforUpdating} />
            <Drawer.Screen options={{title:'Delete'}} name="DeleteCategory"  component={DeleteCategory} />
         

      </Drawer.Navigator>

)
}
const DrawerforUpdating = () =>{
  return (
  <Drawer.Navigator
          initialRouteName='UpdateCategory'
          screenOptions={{ 
            drawerType: 'fade',
            headerStyle:{backgroundColor:'#788eec'},
            headerTintColor:'white',
            headerTitleStyle:{color:'white'}
          }}
        >


            <Drawer.Screen options={{headerShown: false}} name="UpdateCategory"  component={UpdateCategory} />
            <Drawer.Screen options={{headerShown: false}} name="UpdatingCategory"  component={UpdatingCategory} />
         

      </Drawer.Navigator>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});


export default App

