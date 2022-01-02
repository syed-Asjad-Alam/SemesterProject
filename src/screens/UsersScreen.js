import React from 'react'
import { View,  Text, FlatList ,ActivityIndicator,StyleSheet} from "react-native"
import { ListItem, Avatar } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {LinearGradient} from 'expo-linear-gradient'




const UsersScreen = () => {

    const getUsers = async () => {
        // setRefresher(true);
        let myArr = [];
        const response = await fetch(`${FIREBASE_API_ENDPOINT}/users.json`);
        const data = await response.json();
        let keys=Object.keys(data)
        for (let i in keys) {
          let id=keys[i]
          let myObj={Name:data[id].userName}
            myArr.push(myObj)
          }
        setusers(myArr);
        setloader(false)
      };
    React.useEffect(() => {
        getUsers();
      }, []);

    const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'
    const [users,setusers] = React.useState([])
    const [loader,setloader] = React.useState(true)

    const keyExtractor = (item, index) => index.toString()

    const renderItem = ({ item }) => (
        
        <ListItem 
             bottomDivider>
          {/* <Avatar source={{uri: item.ProfilePic}} /> */}
          <ListItem.Content>
              <TouchableOpacity>
            <ListItem.Title>{item.Name}</ListItem.Title>
            </TouchableOpacity>
          </ListItem.Content>
          <ListItem.Chevron />
        
        </ListItem>
      )


    return (
        <View style = {styles.container}>

            {loader ? ( <LinearGradient style={{flex:1}} colors={['white', '#AED6F1']} start={{ x: 0, y:0 }}
                    end={{ x: 1, y: 0}}>
                          <View>
                            <View>
                              <ActivityIndicator style={styles.loading} size={100} color="#788eec" animating={loader} />
                            </View>
                          </View>
                        </LinearGradient>):(<FlatList
                keyExtractor={keyExtractor}
                data={users}
                renderItem={renderItem}
                />)}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading:{
    position:'relative',
    top:200
  }
})

export default UsersScreen