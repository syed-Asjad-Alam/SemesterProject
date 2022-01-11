import React from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    ActivityIndicator,
    RefreshControl
  } from "react-native";
  import { ListItem,Avatar } from "react-native-elements";
  import {LinearGradient} from 'expo-linear-gradient'
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  
  const DisplayCategories = () => {

    //Declaration
    const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'
    
    const [list,setlist] = React.useState([])
    const [loader,setloader] = React.useState(true)
    const [refreshing, setRefreshing] = React.useState(false)
    
    //Functions
    const getCategories = async () => {
        const response = await fetch(`${FIREBASE_API_ENDPOINT}/Categories.json`);
        const data = await response.json();
        return data
        
    }
    const getCategory = async (id) => {
        const response = await fetch(`${FIREBASE_API_ENDPOINT}/Categories/${id}.json`);
        const data = await response.json();
        const obj = {name:data.name,image:data.image}
        return obj
        
    }

    React.useEffect(() => {
      filling()
    }, [])
    const onRefresh = React.useCallback(() => {
      filling()
      setRefreshing(true);
      wait(1000).then(() => setRefreshing(false));
    }, [])


    const filling = async() => {
        const data = await getCategories()
        let catsids = Object.keys(data)
        var cats = await Promise.all(catsids.map(async(id) => {
          let obj = await getCategory(id)
          obj = {name:obj.name, image:`data:image/png;base64,${obj.image}`}
          return obj
        }))


        
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
                        </LinearGradient>) : (<ScrollView refreshControl={<RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />} showsVerticalScrollIndicator={false}>
      <CategorySelector
        list={list}
      />

    </ScrollView>)}
     
      </View>
    );
  };
  
  const CategorySelector = (props) => {
    return (
      <View>
        {props.list.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar source={{uri: item.image}} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    loading:{
      position:'relative',
      top:200
    }

  });
  export default DisplayCategories;