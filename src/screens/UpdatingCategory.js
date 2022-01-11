import React from "react";
import { View, Text, TouchableOpacity,StyleSheet,TextInput,Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system'




const UpdatingCategory = ({route}) => {


    //Declarations
    const category = route.params.item
    const catID = route.params.ID

    const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'

    const [Categoryname, setCategoryname] = React.useState(category)
    
    const [base64,setbase64] = React.useState()
    const [loader,setloader] = React.useState(true)
    const [image, setImage] = React.useState()

    //Functions
    const getCategoryImage = async (id) => {
      const response = await fetch(`${FIREBASE_API_ENDPOINT}/Categories/${id}.json`);
      const data = await response.json()
      
      setImage(`data:image/png;base64,${data.image}`)
      setloader(false)
      
    }
    React.useEffect(async() => {
      if (loader) {
       await getCategoryImage(catID)
      }
    })
  
   
   
    



    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 1,
      });
  
      if (!result.cancelled) {
        const base64 = await FileSystem.readAsStringAsync(result.uri, { encoding: 'base64' })
        setImage(result.uri);
        setbase64(base64)
        
  

      }
    }
  

    const UpdateCategory = () => {
      const id = catID;
      var requestOptions = {
        method: 'PATCH',
        body: JSON.stringify({
          name:Categoryname,
          image:base64
        }),
      };

      
    
  
      fetch(`${FIREBASE_API_ENDPOINT}/Categories/${id}.json`, requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));


    };
    return (
        <View>
            <TextInput
              style={styles.input}
              placeholder="Category Name"
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setCategoryname(text)}
              value={Categoryname}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
          />
           {image ? (
              <View><Image
                source={{ uri: image }}
                style={{ width: 200, height: 200,alignSelf:'center' }}
              />
              <Text></Text>
              </View>
            ):<View><Image
            source={{ uri: 'https://taj.im/wp-content/uploads/2016/02/default.jpg' }}
            style={{ width: 200, height: 200, alignSelf:'center' }}
          />
          </View>}
          <TouchableOpacity style={styles.button} onPress={() => pickImage()}>

          <Text style={styles.buttonTitle}>Insert Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}
              onPress ={() => UpdateCategory()}>
              <Text style={styles.buttonTitle}>Update</Text>
          </TouchableOpacity>
          
        </View>
    )
}

const styles = StyleSheet.create({

        input: {
            height: 48,
            borderRadius: 5,
            overflow: 'hidden',
            backgroundColor: 'white',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 30,
            marginRight: 30,
            paddingLeft: 16
        },
        button: {
            backgroundColor: '#788eec',
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20,
            height: 48,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: 'center'
        },
        buttonTitle: {
          color: 'white',
          fontSize: 16,
          fontWeight: "bold"
      }
    
})
export default UpdatingCategory