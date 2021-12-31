import React from 'react'
import { View,  Text, FlatList } from "react-native"
import { ListItem, Avatar } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {LinearGradient} from 'expo-linear-gradient'




const UsersScreen = () => {
    const [users,setusers] = React.useState([{
        Name:"Syed Asjad Alam",
        ProfilePic:'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    {
        Name:"Aoun Mustafa",
        ProfilePic:'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    {
        Name:"Sani Us Nain",
        ProfilePic:'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    {
        Name:"Subyal Sidique",
        ProfilePic:'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    {
        Name:"Azam Khattak",
        ProfilePic:'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    {
        Name:"Naseer Ahmed",
        ProfilePic:'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    }

    ])

    const keyExtractor = (item, index) => index.toString()

    const renderItem = ({ item }) => (
        
        <ListItem 
             bottomDivider>
          <Avatar source={{uri: item.ProfilePic}} />
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