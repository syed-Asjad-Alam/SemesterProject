import React from 'react'
import { View,  Text, FlatList ,ActivityIndicator,StyleSheet} from "react-native"
import { Card } from 'react-native-elements'
import {LinearGradient} from 'expo-linear-gradient'




const UsersScreen = () => {

  //Declarations
  const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'
  const [users,setusers] = React.useState([])
  const [loader,setloader] = React.useState(true)


  //Functions
  const keyExtractor = (item, index) => index.toString()

    const getUsers = async () => {
        let myArr = [];
        const response = await fetch(`${FIREBASE_API_ENDPOINT}/users.json`);
        const data = await response.json();
        let keys=Object.keys(data)
        for (let i in keys) {
          let id=keys[i]
          let myObj={name:data[id].userName,email:data[id].emailID,cell:data[id].cell}
            myArr.push(myObj)
          }
        setusers(myArr);
        setloader(false)
      };
    React.useEffect(() => {
        getUsers();
      }, []);

    
    


    return (
        <View style = {styles.container}>

            {loader ? ( <LinearGradient style={{flex:1}} colors={['white', '#AED6F1']} start={{ x: 0, y:0 }}
                    end={{ x: 1, y: 0}}>
                          <View>
                            <View>
                              <ActivityIndicator style={styles.loading} size={100} color="#788eec" animating={loader} />
                            </View>
                          </View>
                        </LinearGradient>):(
                             <LinearGradient style={{flex:1}} colors={['white', '#AED6F1']} start={{ x: 0, y:0 }}
                             end={{ x: 1, y: 0}}>
                        <FlatList
                keyExtractor={keyExtractor}
                data={users}
                renderItem={({ item }) => (
                  
                  <UserCard
                    name = {item.name}
                    email = {item.email}
                    cell = {item.cell}
                  
                    
                  
                  />
                )}
                /></LinearGradient>
                )
                }
        </View>
    )
}

const UserCard = (props) => {
  return (
    
    <Card containerStyle={{padding:'0%'}}>
         <LinearGradient style={{flex:1}} colors={['#4568dc', '#b06ab3']} start={{ x: 0, y:0 }}
                    end={{ x: 1, y: 0}}>
      <View style={{padding:9}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.abovename}>User Name:</Text>
          <Text style={styles.name}>{props.name}</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.abovename}>Email:</Text>
          <Text style={styles.name}>{props.email}</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.abovename}>Cell:</Text>
          <Text style={styles.name}>{props.cell}</Text>
        </View>
        
        
      </View>
      </LinearGradient>
    </Card>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading:{
    position:'relative',
    top:200
  },
  abovename : {
    fontSize:18,
    color:'white'
    ,fontWeight:'bold'
  },
  name: {
    fontSize:18,
    color:'#D0D569'
    ,fontWeight:'bold'
  }
  
})

export default UsersScreen