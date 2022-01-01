import React from "react";
import { View, Text, TouchableOpacity,StyleSheet,TextInput,Button,Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';


const UpdatingCategory = ({navigation,route}) => {

    const category = route.params.item
    const catID = route.params.ID
   
    const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'

    const [Categoryname, setCategoryname] = React.useState(category)



    const UpdateCategory = () => {
      const id = catID;
      var requestOptions = {
        method: 'PATCH',
        body: JSON.stringify({
          name:Categoryname
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
    
})
export default UpdatingCategory