import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View ,StyleSheet, ActivityIndicator,Modal,Pressable} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'




const LoginScreen = (props) => {
    //Declarations
    const FIREBASE_API_ENDPOINT = 'https://fir-9d371-default-rtdb.asia-southeast1.firebasedatabase.app/'
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [loader, setLoader] = React.useState(false);
    const [modalVisible,setModalVisible] =React.useState(false)
    
    //Functions
    const onLoginPress = async() => {
        setLoader(true)
        const response = await fetch(`${FIREBASE_API_ENDPOINT}/admin.json`)
        .then((response) => response.json()).then((data) => {
            if (email == data.username && password == data.password) {
                props.setIsLoggedIn(true)
            }
            else {
                setModalVisible(true)
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          
            <Text style={{fontWeight:'bold',color:'white',fontSize:16}}>Invalid Credentials</Text>
          
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)
              }
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#788eec",
    borderRadius: 20,
    borderWidth:2,
    borderColor:'white',
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button1: {
    marginTop:30,
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
   buttonClose: {
    backgroundColor: "white",
  },
  textStyle: {
    color: "#788eec",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:16
  },
});

export default LoginScreen

