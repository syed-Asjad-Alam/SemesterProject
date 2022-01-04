// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   ScrollView,
//   FlatList,
//   ActivityIndicator,
// } from "react-native";
// import { Card, Image, Chip, SearchBar, Avatar } from "react-native-elements";
// import * as React from "react";
// import {LinearGradient} from 'expo-linear-gradient'
// import { TouchableOpacity } from "react-native-gesture-handler";

// const ProductsScreen = ({ navigation }) => {

//   const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'

//   const [products, setProducts] = React.useState([])
//   const [list, setlist] = React.useState([])
//   const [search, setSearch] = React.useState("")
//   const [catPressed, setcatPressed] = React.useState("All")
//   const [loader,setloader] = React.useState(true)
  

//   const getData = async () => {
//     // setRefresher(true);
//     let myArr = [];
//     const response = await fetch(`${FIREBASE_API_ENDPOINT}/ads.json`);
//     const data = await response.json();
//     let keys=Object.keys(data)
//     for (let i in keys) {
//       let id=keys[i]
//       let myObj={Title:data[id].Title,
//                 Condition:data[id].Condition,
//                 Category:data[id].Category,
//               Price:data[id].Price,
//               Description:data[id].Description,
//             postedBy:data[id].postedBy,
//             image:`data:image/png;base64,${data[id].Image}`,
//         adID:id}
//         myArr.push(myObj)
//       }
//     setProducts(myArr)
    
//   };

//   const getCategories = async () => {
//     const response = await fetch(`${FIREBASE_API_ENDPOINT}/Categories.json`);
//     const data = await response.json();
//     return data
    
//   }
//   const getCategory = async (id) => {
//     const response = await fetch(`${FIREBASE_API_ENDPOINT}/Categories/${id}.json`);
//     const data = await response.json();
//     return data.name
    
//   }
//   const filling = async() => {
//     const data = await getCategories()
//     let catsids = Object.keys(data)
//     var cats = await Promise.all(catsids.map(async(id) => await getCategory(id)))
//     setlist([...cats,"All"])
//     setloader(false)

    
   
//   }
//   React.useEffect(() => {
//     getData()
//     filling()
//   }, [])

//   const searchResults = () => {
//     return products.filter((element) => {
//       return element.name.toUpperCase().includes(search.toUpperCase());
//     });
//   };



//   const keyExtractor = (item, index) => index.toString()
//   return (
//     <View style={styles.container}>
//         {loader ? ( <LinearGradient style={{flex:1}} colors={['white', '#AED6F1']} start={{ x: 0, y:0 }}
//                     end={{ x: 1, y: 0}}>
//                           <View>
//                             <View>
//                               <ActivityIndicator style={styles.loading} size={100} color="#788eec" animating={loader} />
//                             </View>
//                           </View>
//                         </LinearGradient>):(<LinearGradient  colors={['white', '#AED6F1']} start={{ x: 0, y:0 }}
//         end={{ x: 1, y: 0}}>
//       <SearchBar
//         placeholder="Type Here..."
//         placeholderTextColor='#788eec'
//         onChangeText={setSearch}
//         searchIcon={{color:'#788eec'}}
//         value={search}
//         inputContainerStyle={{ backgroundColor: "white"}}
//         containerStyle={{
//           backgroundColor: "white",
//           borderBottomColor:'transparent',
//           borderTopColor:'transparent'
//         }}
//       />
//       <View style={styles.catWrapper}>
//         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//           {list.map((element, index) => 
//             (
             
//             // <Chip
              
//             //   type="outline"
//             //   title={element}
//             //   containerStyle={styles.chipContainer}
//             //   titleStyle={{backgroundColor:'black',color:'white'}}
//             //   buttonStyle={{backgroundColor:'#788eec',borderColor:'#788eec', borderWidth:1}}
//             // />
            
//             <TouchableOpacity  style = {styles.chipContainer}>
//               <Text style ={styles.catText}>{element}</Text>
//               </TouchableOpacity>
            
//           ))}
//         </ScrollView>
//       </View>

//       <FlatList
//         numColumns={2}
//         keyExtractor={keyExtractor}
//         data={search.length < 1 ? products : searchResults()}
//         renderItem={({ item }) => (
//             <ProductCard
//             name={item.Title}
//             img={item.image}
//             price={item.Price}
//             navigation={navigation}
//             ad={item}
//             key={item}
//             />
//           )}
//       />
//       </LinearGradient>)}
//     </View>
//   );
// };
// const ProductCard = (props) => {
//   return (
//     <Card containerStyle={styles.cardContainer}>
//      <Image
//         style={styles.cardImage}
//         resizeMode="cover"
//         source={{ uri: props.img }}
//       />
//       <View style={styles.cardBottomWrapper}>
//         <Text style={styles.cardTitle}>{props.name}</Text>
//         <Text style={styles.priceText}>{props.price}</Text>
//       </View>
//     </Card>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   catWrapper: {
//     width: "100%",
//     height: "10%",
    
//   },
//   cardContainer: {
//     width: "45%",
//     height: 200,
//     justifyContent: "center",
//     padding: "0%",
//     borderWidth: 0,
//     flex: 0.5,
//     marginBottom: "20%",
//   },
//   cardImage: {
//     width: "100%",
//     height: "100%",
//     padding: "0%",
//   },
//   cardTitle: {
//     fontSize: 15,
//     fontWeight: "bold",
//   },
//   priceText: {
//     fontSize: 14,
//   },
//   cardBottomWrapper: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: "2%",
//     width: "100%",
//   },
//   chipContainer: {
//     marginHorizontal: 5,
//     marginVertical: 10,
//     backgroundColor:'#788eec',
//     borderColor:'#788eec',
//     borderWidth:2,
//     borderRadius:25,
//     paddingLeft:5,
//     paddingRight:5
//   },
//   catText:{
//     color:'white',
//     fontWeight:'bold'

//   }
// });
// export default ProductsScreen;

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,ActivityIndicator
} from "react-native";
import { Card, Image, Chip, SearchBar, Avatar } from "react-native-elements";
import * as React from "react";
import {LinearGradient} from 'expo-linear-gradient'

const ProductsScreen = ({ navigation }) => {
  const FIREBASE_API_ENDPOINT =
    "https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/";

    const [products, setProducts] = React.useState([]);
    const [cat, setCat] = React.useState([]);
    const [search, setSearch] = React.useState("");
    const [catPressed, setcatPressed] = React.useState("All");
    const [loader, setLoader] = React.useState(true);
    const [names,setnames] = React.useState([])
  
    const getCategories = async () => {
      const response = await fetch(`${FIREBASE_API_ENDPOINT}/Categories.json`);
      const data = await response.json();
      let myArr=[]
      for(let i in data){
        let myObj={
          name:data[i].name,
          image:`data:image/png;base64,${data[i].image}`}
    
        myArr.push(myObj)
      }
      setCat(myArr)
      setLoader(false)
  }
  const getUsername = async (id) => {
    const response = await fetch(`${FIREBASE_API_ENDPOINT}/users/${id}.json`);
    const data = await response.json();
    return data.userName
    
}




  const getData = async () => {

    let myArr = [];
    const response = await fetch(`${FIREBASE_API_ENDPOINT}/ads.json`);
    const data = await response.json();
    let keys=Object.keys(data)
    for (let i in keys) {
      let id=keys[i]
      let name = await getUsername(data[id].postedBy)
      let myObj={Title:data[id].Title,
                Condition:data[id].Condition,
                Category:data[id].Category,
              Price:data[id].Price,
              Description:data[id].Description,
            postedBy: name,
            image:`data:image/png;base64,${data[id].Image}`,
        adID:id}
        myArr.push(myObj)
      }
    setProducts(myArr);
  };

  React.useEffect(() => {
    getData();
    getCategories()
    
    console.log(names)
  }, []);

  const searchResults = () => {
    return products.filter((element) => {
      return element.Title.toUpperCase().includes(search.toUpperCase());
    });
  };
  const showFilteredCat = () => {
    return products.filter((element) => {
      return element.Category == catPressed;
    });
  };


  return (
    <View style={styles.container}>
      {loader ?  ( <LinearGradient style={{flex:1}} colors={['white', '#AED6F1']} start={{ x: 0, y:0 }}
                    end={{ x: 1, y: 0}}>
                          <View>
                            <View>
                              <ActivityIndicator style={styles.loading} size={100} color="#788eec" animating={loader} />
                            </View>
                          </View>
                        </LinearGradient>):(<LinearGradient style={{flex:1}} colors={['white', '#AED6F1']} start={{ x: 0, y:0 }}
          end={{ x: 1, y: 0}}>
  <SearchBar
        placeholder="Type Here..."
        onChangeText={setSearch}
        placeholderTextColor='#788eec'
        value={search}
        searchIcon={{color:'#788eec'}}
        inputContainerStyle={{ backgroundColor: "white"}}
        containerStyle={{
          backgroundColor: "white",
          borderBottomColor:'transparent',
          borderTopColor:'transparent'
        }}
      />
      <View style={styles.catWrapper}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Chip
            key={"All"}
            type="outline"
            title="All"
            onPress={() => setcatPressed("All")}
            containerStyle={styles.chipAll}
            titleStyle={catPressed == 'All' ? {color:'#788eec'}:{color:'white'}}
            buttonStyle={catPressed == 'All' ? {backgroundColor:'white',borderColor:'#788eec', borderWidth:1}
            :{backgroundColor:'#788eec',borderColor:'#788eec', borderWidth:1}}
          />
          {cat.map((element, index) => (
            <Chip
              key={index}
              type="outline"
              title={element.name}
              onPress={() => setcatPressed(element.name)}
              titleStyle={catPressed == element.name ? {color:'#788eec'}:{color:'white'}}
              buttonStyle={catPressed == element.name ? {backgroundColor:'white',borderColor:'#788eec', borderWidth:1}
              :{backgroundColor:'#788eec',borderColor:'#788eec', borderWidth:1}}
              
              containerStyle={styles.chipContainer}
            />
          ))}
        </ScrollView>
      </View>

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        data={
          search.length < 1 && catPressed == "All"
            ? products
            : search.length < 1 && catPressed !== "All"
            ? showFilteredCat()
            : search.length >= 1 && catPressed == "All"
            ? searchResults()
            : searchResults()
        }
        key={0}
        renderItem={({ item }) => (
          <ProductCard
            cat={item.Category}
            name={item.Title}
            cond={item.Condition}
            img={item.image}
            price={item.Price}
            ad={item}
            postedBy={item.postedBy}
            
            
          
          />
        )}
        onRefresh={() => getData()}
        refreshing={false}
      />
      </LinearGradient>) }
  
    </View>
  );
};

const ProductCard = (props) => {
  return (
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
    width: 100,
    height: 200,
    justifyContent: "center",
    padding: "0%",
    borderWidth: 0,
    flex: 0.5,
    marginBottom: "20%",
  },
  cardImage: {
    width: "100%",
    height: 100,
    padding: "0%",
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
  cardBottomWrapper: {

    flexDirection: "row",
    justifyContent: "space-between",
    padding: "2%",
    width: "100%",
    borderColor:'#788eec',
    borderWidth:1,
    backgroundColor:'white',
  },
  chipContainer: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  pressedChipContainer: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  chipAll: {
    marginHorizontal: 5,
    marginVertical: 10,
    width: "10%",
  },
  AllDetails: {
    flexDirection: 'column',
    justifyContent: "space-between",
    padding: "2%",
    width: "100%",
    borderColor:'#788eec',
    borderWidth:1,
    backgroundColor:'white',
  }
});
export default ProductsScreen;