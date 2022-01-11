import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View ,StyleSheet, ActivityIndicator} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'




const LoginScreen = (props) => {
    //Declarations
    const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [loader, setLoader] = React.useState(false);
    
    //Functions
    const onLoginPress = async() => {
        setLoader(true)
        const response = await fetch(`${FIREBASE_API_ENDPOINT}/admin.json`)
        .then((response) => response.json()).then((data) => {
            if (email == data.username && password == data.password) {
                props.setIsLoggedIn(true)
            }
            else {
                alert("Invalid Credentials")
            }
            setLoader(false)

        }
        ).catch((error) => console.log(error))

    }
    return (
      <View style={styles.container}>
          <Text style = {styles.title}>Admin Login</Text>
      <KeyboardAwareScrollView
          style={{ flex: 1, width: '100%' }}
          keyboardShouldPersistTaps="always">
          <Image
              style={styles.logo}
              source={require('../../assets/adminicon.png')}
          />
          
          <TextInput
              style={styles.input}
              placeholder='E-mail'
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setEmail(text)}
              value={email}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
          />
          <TextInput
              style={styles.input}
              placeholderTextColor="#aaaaaa"
              secureTextEntry
              placeholder='Password'
              onChangeText={(text) => setPassword(text)}
              value={password}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
          />
          {loader == false ? ( <TouchableOpacity
              style={styles.button}
              onPress ={() => onLoginPress()}>
              <Text style={styles.buttonTitle}>Log in</Text>
          </TouchableOpacity>): (<TouchableOpacity style={styles.button}>
            <ActivityIndicator size="large" color="white" animating={loader} />
          </TouchableOpacity>)}
         
          
      </KeyboardAwareScrollView>
  </View>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop:50
},
title: {
    color: '#788eec',
    fontSize:24,
    fontWeight:'bold',
    alignItems: 'center',
    justifyContent:'center',

},
logo: {
    flex: 1,
    height: 120,
    width: 90,
    alignSelf: "center",
    margin: 30
},
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

footerText: {
    fontSize: 16,
    color: '#2e2e2d'
},
footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16
},
logBtn: {
    backgroundColor: '#788eec',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center'

  }
});

export default LoginScreen

