import React from 'react'
import { View,  Text, FlatList ,ActivityIndicator,StyleSheet,Image} from "react-native"
import { Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {LinearGradient} from 'expo-linear-gradient'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }




const ReviewsScreen = () => {


    //Declarations
    const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'
    const [reviews,setreviews] = React.useState([])
    const [loader,setloader] = React.useState(true)


    //Functions

    const keyExtractor = (item, index) => index.toString()

    const getUsername = async (id) => {
                const response = await fetch(`${FIREBASE_API_ENDPOINT}/users/${id}.json`);
                const data = await response.json();
                return data.userName
            }

    const getReviews = async () => {
        let myArr = [];
        const response = await fetch(`${FIREBASE_API_ENDPOINT}/Reviews.json`);
        const data = await response.json()
        let keys=Object.keys(data)
        for (let i in keys) {
          let id=keys[i]
          const postedBy = await getUsername(data[id].PostedBy)
          const postedOn = await getUsername(data[id].PostedOn)
          let myObj={PostedBy:postedBy,PostedOn:postedOn,Content:data[id].ReviewContent,ID:id}
            myArr.push(myObj)
          }
        setreviews(myArr);
        setloader(false)
      };

      const deleteReview = async(id) => {
        var requestOptions = {
          method: 'DELETE',
        };
    
        await fetch(`${FIREBASE_API_ENDPOINT}/Reviews/${id}.json`, requestOptions)
          .then((response) => response.json())
          .then((result) => console.log('Delete Response:', result))
          .catch((error) => console.log('error', error));
        onRefresh
        filling()
      }
    React.useEffect(() => {
        getReviews();
      }, []);

    const onRefresh = React.useCallback(() => {
        getReviews()
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
      }, [])


    

    


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
                                 <Text style = {styles.title}>Reviews</Text>
                        <FlatList
                keyExtractor={keyExtractor}
                data={reviews}
                renderItem={({ item }) => (
                  
                  <UserCard
                    PostedBy = {item.PostedBy}
                    Content = {item.Content}
                    PostedOn = {item.PostedOn}
                    deleteReview= {deleteReview}
                    id = {item.ID}
                  
                    
                  
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
    
    <Card containerStyle={{padding:'0%',borderWidth:2,borderColor:'#788eec'}}>
         
      <View style={{padding:9}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.abovename}>Review By:</Text>
          <Text style={styles.name}>{props.PostedBy}</Text>
          <TouchableOpacity onPress={async() => await props.deleteReview(props.id)}>
            <Image  style = {styles.delicon}
              source={require('../../assets/deleteicon.png')}
          />
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.name}>{props.Content}</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
          <Text style={styles.abovename}>Review On: </Text>
          <Text style={styles.name}>{props.PostedOn}</Text>
        </View>
        
        
      </View>
      
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
    color:'#788eec'
    ,fontWeight:'bold'
  },
  name: {
    fontSize:18,
    color:'#AB3287'
    ,fontWeight:'bold'
  },
  delicon: {
    height:30,
    width:30
},title: {
    fontWeight: 'bold',
    fontSize:24,
    margin: 10,
    padding:10,
    paddingBottom:3,
    marginBottom: 3,
    color:'#788eec'

},
  
})

export default ReviewsScreen