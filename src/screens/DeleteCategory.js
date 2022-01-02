import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    TouchableOpacityBase,
    Image,
    ActivityIndicator
  } from "react-native";
  import { Input, ListItem } from "react-native-elements";
  import {LinearGradient} from 'expo-linear-gradient'



const UpdateCategory = ({navigation}) => {


    const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'
    
    const [list,setlist] = React.useState([])
    const [loader,setloader] = React.useState(true)

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
        setloader(true)
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
        setloader(false)
        

        
       
    }
  
    return (
      <View style={styles.container}>
        {loader? (<LinearGradient style={{flex:1}} colors={['white', '#AED6F1']} start={{ x: 0, y:0 }}
                    end={{ x: 1, y: 0}}>
                          <View>
                            <View>
                              <ActivityIndicator style={styles.loading} size={100} color="#788eec" animating={loader} />
                            </View>
                          </View>
                        </LinearGradient>):(<ScrollView showsVerticalScrollIndicator={false}>
          <CategorySelector
            list={list}
            deleteCategory={deleteCategory}
          />
          {/* <TextInput placeholder="Enter Title" style={styles.fields} /> */}
        </ScrollView>)}
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
    },
    loading:{
      position:'relative',
      top:200
    }
  });

export default UpdateCategory