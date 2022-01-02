import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator
} from "react-native";
import { Card, Image, Chip, SearchBar, Avatar } from "react-native-elements";
import * as React from "react";
import {LinearGradient} from 'expo-linear-gradient'

const ProductsScreen = ({ navigation }) => {

  const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'

  const [products, setProducts] = React.useState([])
  const [list, setlist] = React.useState([])
  const [search, setSearch] = React.useState("")
  const [loader,setloader] = React.useState(true)
  

  const getData = async () => {
    // setRefresher(true);
    let myArr = [];
    const response = await fetch(`${FIREBASE_API_ENDPOINT}/ads.json`);
    const data = await response.json();
    let keys=Object.keys(data)
    for (let i in keys) {
      let id=keys[i]
      let myObj={Title:data[id].Title,
                Condition:data[id].Condition,
                Category:data[id].Category,
              Price:data[id].Price,
              Description:data[id].Description,
            postedBy:data[id].postedBy,
        adID:id}
        myArr.push(myObj)
      }
    setProducts(myArr)
    setloader(false)
  };

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
    
   
  }
  React.useEffect(() => {
    filling()
    getData()
  }, [])

  const searchResults = () => {
    return products.filter((element) => {
      return element.name.toUpperCase().includes(search.toUpperCase());
    });
  };



  const keyExtractor = (item, index) => index.toString()
  return (
    <View style={styles.container}>
        {loader ? ( <LinearGradient style={{flex:1}} colors={['white', '#AED6F1']} start={{ x: 0, y:0 }}
                    end={{ x: 1, y: 0}}>
                          <View>
                            <View>
                              <ActivityIndicator style={styles.loading} size={100} color="#788eec" animating={loader} />
                            </View>
                          </View>
                        </LinearGradient>):(<LinearGradient  colors={['white', '#AED6F1']} start={{ x: 0, y:0 }}
        end={{ x: 1, y: 0}}>
      <SearchBar
        placeholder="Type Here..."
        placeholderTextColor='#788eec'
        onChangeText={setSearch}
        searchIcon={{color:'#788eec'}}
        value={search}
        inputContainerStyle={{ backgroundColor: "white"}}
        containerStyle={{
          backgroundColor: "white",
          borderBottomColor:'transparent',
          borderTopColor:'transparent'
        }}
      />
      <View style={styles.catWrapper}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {list.map((element, index) => 
            (
            <Chip
              type="outline"
              title={element}
              containerStyle={styles.chipContainer}
              titleStyle={{color:'#788eec'}}
              buttonStyle={{borderColor:'#788eec', borderWidth:1}}
            />
          ))}
        </ScrollView>
      </View>

      <FlatList
        numColumns={2}
        keyExtractor={keyExtractor}
        data={search.length < 1 ? products : searchResults()}
        renderItem={({ item }) => (
            <ProductCard
              Category={item.Category}
              Condition={item.Condition}
              Description={item.Description}
              Price={item.Price}
            />
          )}
      />
      </LinearGradient>)}
    </View>
  );
};
const ProductCard = (props) => {
  return (
    <Card containerStyle={styles.cardContainer}>
      {/* <Image
        style={styles.cardImage}
        resizeMode="cover"
        source={{ uri: props.img }}
        onPress={() => props.navigation.navigate("Login")}
      /> */}
      <View style={styles.cardBottomWrapper}>
        <Text style={styles.cardTitle}>{props.Category}</Text>
        <Text style={styles.priceText}>{props.Condition}</Text>
        <Text style={styles.priceText}>{props.Description}</Text>
        <Text style={styles.priceText}>{props.Price}</Text>
        <Text style={styles.priceText}>{props.Title}</Text>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  catWrapper: {
    width: "100%",
    height: "10%",
    
  },
  cardContainer: {
    width: "45%",
    height: 200,
    justifyContent: "center",
    padding: "0%",
    borderWidth: 0,
    flex: 0.5,
    marginBottom: "20%",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    padding: "0%",
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  priceText: {
    fontSize: 14,
  },
  cardBottomWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "2%",
    width: "100%",
  },
  chipContainer: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
});
export default ProductsScreen;