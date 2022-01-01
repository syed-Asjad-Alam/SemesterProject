import React from "react";
import { View, Text, TouchableOpacity,StyleSheet,TextInput,Button,Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';


const AddCategory = ({navigation}) => {
    const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'

    const [Categoryname, setCategoryname] = React.useState('')
    const [image, setImage] = React.useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
        setImage(result.uri);
        }
    };


    const AddCategory = () => {
        var requestOptions = {
          method: 'POST',
          body: JSON.stringify({
            name: Categoryname
          }),
        };
    
        fetch(`${FIREBASE_API_ENDPOINT}/Categories.json`, requestOptions)
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log('error', error));
      };
    return (
        <View>
            <Text>Add Category Screen</Text>
            <TouchableOpacity onPress={() => getCategories()}><Text>Get Categoires</Text></TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder='Category Name'
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setCategoryname(text)}
              value={Categoryname}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
          />
          <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          <TouchableOpacity
              style={styles.button}
              onPress ={() => AddCategory()}>
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
    
})
export default AddCategory