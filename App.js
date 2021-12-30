import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { LoginScreen, HomeScreen, CategoriesScreen
,UsersScreen, ProductsScreen, ReportsScreen,ReviewsScreen } from './src/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator()

const App =() => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name = "LoginScreen" component = {LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name = "Home" component = {MyDrawer} />
        
        
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
              <Drawer.Screen name="CategoriesScreen"  component={CategoriesScreen} />

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

