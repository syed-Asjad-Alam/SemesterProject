import React from 'react'
import { View,  Text, FlatList } from "react-native"
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
      };
      React.useEffect(() => {
        getUsers();
      }, []);

    const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'
    const [users,setusers] = React.useState([])

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
        <View>
            <FlatList
                keyExtractor={keyExtractor}
                data={users}
                renderItem={renderItem}
                />
        </View>
    )
}

export default UsersScreen