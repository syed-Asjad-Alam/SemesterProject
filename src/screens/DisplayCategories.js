import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    TouchableOpacityBase,
  } from "react-native";
  import { Input, ListItem } from "react-native-elements";
  
  const DisplayCategories = ({ navigation }) => {


    const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'
    
    const [list,setlist] = React.useState([])

    const getCategories = async () => {
        const response = await fetch(`${FIREBASE_API_ENDPOINT}/Categories.json`);
        const data = await response.json();
        return data
        
    }
    const getCategory = async (id) => {
        const response = await fetch(`${FIREBASE_API_ENDPOINT}/Categories/${id}.json`);
        const data = await response.json();
        return data.name
        
    }

    React.useEffect(() => filling())


    const filling = async() => {
        console.log("render")
        const data = await getCategories()
        var catsids = []
        catsids = Object.getOwnPropertyNames(data)
        var cats = await Promise.all(catsids.map(async(id) => await getCategory(id)))
        // for (var i = 0 ; i < catsids.length; i++) {
        //    const data1 = await getData1(catsids[i])
        //    cats[i] = data1
        // }
        setlist(cats)
        
       
    }
  
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CategorySelector
            list={list}
            navigation={navigation}
            navigateTo="Add Details"
          />
          {/* <TextInput placeholder="Enter Title" style={styles.fields} /> */}
        </ScrollView>
      </View>
    );
  };
  
  const CategorySelector = (props) => {
    return (
      <View>
        {props.list.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      //justifyContent: "center",
      //alignItems: "center",
    },
  });
  export default DisplayCategories;