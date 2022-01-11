import {
    StyleSheet,
    Text,
    View,
    FlatList,ActivityIndicator
  } from "react-native";
  import { Card, Image } from "react-native-elements";
  import * as React from "react";
  import {LinearGradient} from 'expo-linear-gradient'



const ReportsScreen = () => {

    //Declarations
    const FIREBASE_API_ENDPOINT = "https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/";
    const [rproducts, setrProducts] = React.useState([]);
    const [loader, setLoader] = React.useState(true);
    


    //Functions
    const getProduct = async (id) => {
        const response = await fetch(`${FIREBASE_API_ENDPOINT}/ads/${id}.json`);
        const data = await response.json();
        return data
        
    }
    const getUsername = async (id) => {
        const response = await fetch(`${FIREBASE_API_ENDPOINT}/users/${id}.json`);
        const data = await response.json();
        return data.userName
        
    }
    
    const getrproducts = async () => {

        let myArr = [];
        const response = await fetch(`${FIREBASE_API_ENDPOINT}/reportedAds.json`);
        const data = await response.json();
        
        let keys=Object.keys(data)
        for (let i in keys) {
          let id=keys[i]
          let product = await getProduct(data[id].adId)
          let name = await getUsername(product.postedBy)
          let myObj = {Category:product.Category,
                        Price:product.Price,
                        Condition:product.Condition,
                        Title:product.Title,
                        postedBy:name,
                        Content:data[id].reportContent,
                        image:`data:image/png;base64,${product.Image}`,
                        }

          myArr.push(myObj)
            
        }
        setrProducts(myArr)
        setLoader(false)
    }

    React.useEffect(() => {
        getrproducts()
    },[])


    return (
        <View  style={styles.container}>
           {loader ? (<LinearGradient style={{flex:1}} colors={['white', '#AED6F1']} start={{ x: 0, y:0 }}
                    end={{ x: 1, y: 0}}>
                          <View>
                            <View>
                              <ActivityIndicator style={styles.loading} size={100} color="#788eec" animating={loader} />
                            </View>
                          </View>
                        </LinearGradient>):
                        (
                            <LinearGradient style={{flex:1}} colors={['white', '#AED6F1']} start={{ x: 0, y:0 }}
                                end={{ x: 1, y: 0}}>
                            <FlatList
                            keyExtractor={(item,index)=>index.toString()}
                            data={rproducts}
                            renderItem={({item}) => 
                            <ProductCard
                            cat={item.Category}
                            name={item.Title}
                            cond={item.Condition}
                            img={item.image}
                            price={item.Price}
                            reportContent= {item.Content}
                            postedBy={item.postedBy} />
                                }
                                
                            />
                            </LinearGradient>
                            
                            
                        )}
            

        </View>
    )
}

const ProductCard = (props) => {
    return (
        <View style={{flexDirection:'row'}}>
        <Card containerStyle={styles.cardContainer}>
          <Image
            style={styles.cardImage}
            resizeMode="cover"
            source={{ uri: props.img }}
          />
          <View style={styles.AllDetails}>
            <View style={styles.cardBottomWrapper}>
              <Text style={styles.Boldview}>Category:</Text>
              <Text style={styles.unBoldview}>{props.cat}</Text>
            </View>
            <View style={styles.cardBottomWrapper}>
              <Text style={styles.Boldview}>Price:</Text>
              <Text style={styles.unBoldview}>{props.price}</Text>
            </View>
            <View style={styles.cardBottomWrapper}>
              <Text style={styles.Boldview}>Condition:</Text>
              <Text style={styles.unBoldview}>{props.cond}</Text>
            </View>
            <View style={styles.cardBottomWrapper}>
              <Text style={styles.Boldview}>Posted by:</Text>
              <Text style={styles.unBoldview}>{props.postedBy}</Text>
            </View>
          </View>
        </Card>
        <Card containerStyle={styles.cardContainer1}>
            <View style={{justifyContent:'center'}}>
                <Text style={{color:'red',fontSize:20,fontWeight:'bold',textDecorationLine:'underline'}}>Report:</Text>
                <Text style={{color:'red',fontSize:16,fontWeight:'bold'}}>{props.reportContent}</Text>
            </View>
          
          

          
        </Card>
        
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      cardContainer: {
        marginTop:30,
        width: 175,
        height: 200,
        justifyContent: "center",
        padding: "0%",
        borderWidth: 0,
        flex: 0.5,
        marginBottom: "20%",
      },
      cardContainer1: {
        marginTop:28,
        width: 175,
        height: 205,
        justifyContent: "center",
        padding: "0%",
        borderWidth: 0,
        flex: 0.5,
        marginBottom: "20%",
        borderColor:'red',
        borderWidth:4
      },
      cardImage: {
        width: "100%",
        height: 100,
        padding: "0%",
      },
      cardBottomWrapper: {

        flexDirection: "row",
        justifyContent: "space-between",
        padding: "2%",
        width: "100%",
        borderColor:'#788eec',
        borderWidth:1,
        backgroundColor:'white',
      },
      AllDetails: {
        flexDirection: 'column',
        justifyContent: "space-between",
        padding: "2%",
        width: "100%",
        borderColor:'#788eec',
        borderWidth:1,
        backgroundColor:'white',
      },
      Boldview: {
        fontSize: 12,
        fontWeight: "bold",
        color:'#788eec'
      },
      unBoldview: {
        fontSize: 12,
        color:'#788eec'
      },
})

export default ReportsScreen