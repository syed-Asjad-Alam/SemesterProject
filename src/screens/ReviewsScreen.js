// import React from "react";
// import {
//     StyleSheet,
//     Text,
//     View,
//     TouchableOpacity,
//     TextInput,
//     ScrollView,
//     TouchableOpacityBase,
//     Image,
//     ActivityIndicator,
//     RefreshControl
//   } from "react-native";
//   import { FlatList,ListItem,Card } from "react-native-elements";
//   import {LinearGradient} from 'expo-linear-gradient'


// const wait = (timeout) => {
//     return new Promise(resolve => setTimeout(resolve, timeout));
//   }


// const ReviewsScreen = () => {

//     const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'

//     const [reviews,setreviews] = React.useState([])
//     const [loader,setloader] = React.useState(true)
//     const [refreshing, setRefreshing] = React.useState(false)


//     React.useEffect(() => {

//         filling()
//         console.log(reviews)

//       }, [])

//     const getReviews = async () => {
//         const response = await fetch(`${FIREBASE_API_ENDPOINT}/Reviews.json`);
//         const data = await response.json();
//         return data
//     }

//     const getUsername = async (id) => {
//         const response = await fetch(`${FIREBASE_API_ENDPOINT}/users/${id}.json`);
//         const data = await response.json();
//         return data.userName
//     }


//     const filling = async() => {
//         let myArr = []
//         console.log("render")
//         const data = await getReviews()
//         var keys = Object.keys(data)
//         for (let i in keys) {
//             let id=keys[i]
//             let postedBy = await getUsername(data[id].PostedBy)
//             let postedOn = await getUsername(data[id].PostedOn)
//             let myObj={PostedBy:postedBy,Content:data[id].ReviewContent,PostedOn:postedOn}
//               myArr.push(myObj)
//             }
//         setreviews(myArr)
//         setloader(false)
        

        
//     }



//     return (
//         <View style = {styles.container}>

//         {loader ? ( <LinearGradient style={{flex:1}} colors={['white', '#AED6F1']} start={{ x: 0, y:0 }}
//                 end={{ x: 1, y: 0}}>
//                       <View>
//                         <View>
//                           <ActivityIndicator style={styles.loading} size={100} color="#788eec" animating={loader} />
//                         </View>
//                       </View>
//                     </LinearGradient>):(
//                          <LinearGradient style={{flex:1}} colors={['white', '#AED6F1']} start={{ x: 0, y:0 }}
//                          end={{ x: 1, y: 0}}>
//                     <FlatList
//             keyExtractor={(item,index) => index.toString()}
//             data={reviews}
//             renderItem={({ item }) => (
              
//               <UserCard
//                 name = {item.Content}
//                 email = {item.PostedBy}
//                 cell = {item.PostedOn}
              
                
              
//               />
//             )}
//             /></LinearGradient>
//             )
//             }
//     </View>
        
//     )
// }

// const UserCard = (props) => {
//     return (
      
//       <Card containerStyle={{padding:'0%'}}>
//            <LinearGradient style={{flex:1}} colors={['#4568dc', '#b06ab3']} start={{ x: 0, y:0 }}
//                       end={{ x: 1, y: 0}}>
//         <View style={{padding:9}}>
//           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//             <Text style={styles.abovename}>User Name:</Text>
//             <Text style={styles.name}>{props.name}</Text>
//           </View>
//           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//             <Text style={styles.abovename}>Email:</Text>
//             <Text style={styles.name}>{props.email}</Text>
//           </View>
//           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//             <Text style={styles.abovename}>Cell:</Text>
//             <Text style={styles.name}>{props.cell}</Text>
//           </View>
          
          
//         </View>
//         </LinearGradient>
//       </Card>
//     )
  
//   }




//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//     loading:{
//       position:'relative',
//       top:200
//     },
//     abovename : {
//       fontSize:18,
//       color:'white'
//       ,fontWeight:'bold'
//     },
//     name: {
//       fontSize:18,
//       color:'#D0D569'
//       ,fontWeight:'bold'
//     }
    
//   })  

// export default ReviewsScreen


import React from 'react'
import { View,  Text, FlatList ,ActivityIndicator,StyleSheet,Image} from "react-native"
import { ListItem, Avatar, Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {LinearGradient} from 'expo-linear-gradient'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }




const ReviewsScreen = () => {

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
        console.log(reviews)
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


    const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'
    const [reviews,setreviews] = React.useState([])
    const [loader,setloader] = React.useState(true)

    const keyExtractor = (item, index) => index.toString()

    


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