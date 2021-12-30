import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View ,StyleSheet} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const LoginScreen = ({navigation}) => {
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')
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
          <TouchableOpacity
              style={styles.button}
              onPress = {() => navigation.navigate('MyDrawer')}>
              {/* onPress={() => onLoginPress()} */}
              <Text style={styles.buttonTitle}>Log in</Text>
          </TouchableOpacity>
          <View style={styles.footerView}>
          {/* onPress={onFooterLinkPress} */}
              <Text style={styles.footerText}>Don't have an account? <Text  style={styles.footerLink}>Sign up</Text></Text>
          </View>
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
footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20
},
footerText: {
    fontSize: 16,
    color: '#2e2e2d'
},
footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16
}
});

export default LoginScreen
