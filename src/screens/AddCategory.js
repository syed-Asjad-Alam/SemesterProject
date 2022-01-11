import React from "react";
import { View, Text, TouchableOpacity,StyleSheet,TextInput,Image, ToastAndroid} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system'


const AddCategory = () => {
    
   //Declarations
    const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'

    const [Categoryname, setCategoryname] = React.useState("")
    const [image, setImage] = React.useState(null)
    const [base64,setbase64] = React.useState()

    //functions
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

  

    const addCategoryInDB = () => {
      if (Categoryname != "") {
        var requestOptions = {
          method: 'POST',
          body: JSON.stringify({
            name: Categoryname,
            image: base64
          }),
        };
    
        fetch(`${FIREBASE_API_ENDPOINT}/Categories.json`, requestOptions)
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log('error', error));
          ToastAndroid.show('Category Added', ToastAndroid.SHORT)
          
      }
      else{
        alert("Please enter a category name")
        }
      }
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
              onPress ={() => addCategoryInDB()}>
              <Text style={styles.buttonTitle}>Add</Text>
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
},
    
})
export default AddCategory