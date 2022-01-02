import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    TouchableOpacityBase,
    BackHandler, Alert,ActivityIndicator
  } from "react-native";
  import { Input, ListItem } from "react-native-elements";
  import {LinearGradient} from 'expo-linear-gradient'
  
  const DisplayCategories = ({ navigation }) => {


    const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'
    
    const [list,setlist] = React.useState([])
    const [loader,setloader] = React.useState(true)

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

    React.useEffect(() => {
      filling()
    }, [])


    const filling = async() => {
        const data = await getCategories()
        var catsids = []
        catsids = Object.getOwnPropertyNames(data)
        var cats = await Promise.all(catsids.map(async(id) => await getCategory(id)))
        // for (var i = 0 ; i < catsids.length; i++) {
        //    const data1 = await getData1(catsids[i])
        //    cats[i] = data1
        // }
        setlist(cats)
        setloader(false)
        
       
    }
    
  
    return (
      <View style={styles.container}>
        {loader ? ( <LinearGradient style={{flex:1}} colors={['white', '#AED6F1']} start={{ x: 0, y:0 }}
                    end={{ x: 1, y: 0}}>
                          <View>
                            <View>
                              <ActivityIndicator style={styles.loading} size={100} color="#788eec" animating={loader} />
                            </View>
                          </View>
                        </LinearGradient>) : (<ScrollView showsVerticalScrollIndicator={false}>
      <CategorySelector
        list={list}
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
    loading:{
      position:'relative',
      top:200
    }

  });
  export default DisplayCategories;