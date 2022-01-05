import * as React from "react";
import { StyleSheet, Text, View,Button } from 'react-native';
import { LoginScreen, HomeScreen, CategoriesScreen
,UsersScreen, ProductsScreen, ReportsScreen,ReviewsScreen, AddCategory 
,UpdateCategory,DeleteCategory,UpdatingCategory} from './src/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator, DrawerItem,DrawerItemList,DrawerContentScrollView
} from '@react-navigation/drawer';
import DisplayCategories from "./src/screens/DisplayCategories";
import LottieView from 'lottie-react-native';
import { TouchableOpacity } from "react-native-gesture-handler";


const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()







const App =() => {

  const [isLoggedin, setIsLoggedIn] = React.useState(false);

  const LoginScreenComp = ({navigation}) => {
    return (
      <LoginScreen setIsLoggedIn={setIsLoggedIn} navigation={navigation} />
    )
  }
  const MyDrawer = () => {
    return (
      
          <Drawer.Navigator
                initialRouteName='HomeScreen'
                drawerContent={(props) => <CustomDrawerContent  {...props} />}
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
                <Drawer.Screen options={{title:'Reports'}} name="ReportsScreen"  component={ReportsScreen} />
                <Drawer.Screen options={{title:'Reviews'}} name="ReviewsScreen"  component={ReviewsScreen} />
  
            </Drawer.Navigator>
    
    )
  }
  const  CustomDrawerContent = (props) => {
  
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} style={{flexDirection:'row'}} />
        <TouchableOpacity onPress={()=> setIsLoggedIn(false) }
         style= {{flexDirection:'row',justifyContent:'center',borderColor:'#788eec'
        ,borderWidth:2,backgroundColor:'#788eec',marginTop:300}}>
          <Text style= {styles.signout}>Log Out</Text>
        <LottieView autoPlay style={{width:50,height:50}} source={require('./assets/signout.json')} />
        </TouchableOpacity>
      </DrawerContentScrollView>
    )
  }

  


  return (
    <NavigationContainer>
    <Stack.Navigator>
    
        {isLoggedin ? (<Stack.Screen options={{headerShown: false}}  name = "Home" component = {MyDrawer}/>):
        (<Stack.Screen options={{headerShown: false}} name = "LoginScreen" component = {LoginScreenComp} />)}
        <Stack.Screen options={{headerShown: false}}  name = "Category" component = {DrawerforCategories}/>
       
        
    
      </Stack.Navigator>
      </NavigationContainer>
  )
}

// const MyDrawer = () => {
//   return (
    
//         <Drawer.Navigator
//               initialRouteName='HomeScreen'
//               drawerContent={(props) => <CustomDrawerContent  {...props} />}
//               screenOptions={{ 
//                 drawerType:'slide',
//                 headerStyle:{backgroundColor:'#788eec'},
//                 headerTintColor:'white',
//                 headerTitleStyle:{color:'white'}
                
//               }}
              
//             >
              
//               <Drawer.Screen options={{title:'Home',
//                 headerStyle:{backgroundColor:'#788eec'},
//                 headerTintColor:'white',
//                 headerTitleStyle:{color:'white'}}} name="HomeScreen"  component={HomeScreen} />
//               <Drawer.Screen options={{title:'Users'}} name="UsersScreen"  component={UsersScreen} />
//               <Drawer.Screen options={{title:'Products'}} name="ProductsScreen"  component={ProductsScreen} />
//               <Drawer.Screen options={{title:'Reports'}} name="ReportsScreen"  component={ReportsScreen} />
//               <Drawer.Screen options={{title:'Reviews'}} name="ReviewsScreen"  component={ReviewsScreen} />

//           </Drawer.Navigator>
  
//   )
// }
// const  CustomDrawerContent = (props) => {
  
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Sign Out"
//         setIsLoggedIn={setIsLoggedIn} />
//     </DrawerContentScrollView>
//   )
// }
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
  },
  signout: {
    fontSize:16,
    fontWeight:'bold',
    color:'white',
    marginTop:15,
  }
  
});


export default App

