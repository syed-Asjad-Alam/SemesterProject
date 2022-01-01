import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    TouchableOpacityBase,
    Image
  } from "react-native";
  import { Input, ListItem } from "react-native-elements";




const UpdateCategory = ({navigation}) => {


    const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'
    
    const [list,setlist] = React.useState([])

    const getCategories = async () => {
        const response = await fetch(`${FIREBASE_API_ENDPOINT}/Categories.json`);
        const data = await response.json();
        return data
        
    }
    const getCategoryname = async (id) => {
        const response = await fetch(`${FIREBASE_API_ENDPOINT}/Categories/${id}.json`);
        const data = await response.json();
        return {catID:id,name:data.name}
        
    }

    const deleteCategory = async(id) => {
        var requestOptions = {
          method: 'DELETE',
        };
    
        await fetch(`${FIREBASE_API_ENDPOINT}/Categories/${id}.json`, requestOptions)
          .then((response) => response.json())
          .then((result) => console.log('Delete Response:', result))
          .catch((error) => console.log('error', error));
        filling()
      }


      React.useEffect(() => {

        filling()

      }, [])


    const filling = async() => {
        console.log("render")
        const data = await getCategories()
        var catsids = []
        catsids = Object.getOwnPropertyNames(data)
        var cats = await Promise.all(catsids.map(async(id) => await getCategoryname(id)))
        setlist(cats)
        

        
       
    }
  
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CategorySelector
            list={list}
            deleteCategory={deleteCategory}
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
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Title>{item.catID}</ListItem.Title>
             
            </ListItem.Content>
            <TouchableOpacity onPress={async() => await props.deleteCategory(item.catID)}>
            <Image  style = {styles.delicon}
              source={require('../../assets/deleteicon.png')}
          />
            </TouchableOpacity>
            
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
    title: {
      fontWeight: 'bold',
      fontSize:24,
      margin: 10,
      padding:10,
      paddingBottom:3,
      marginBottom: 3,
      color:'#788eec'

  },
    delicon: {
        height:30,
        width:30
    }
  });

export default UpdateCategory