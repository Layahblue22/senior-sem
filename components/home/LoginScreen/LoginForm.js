import React from 'react'
import {View, Text, StyleSheet, Pressable, Alert,} from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import {Formik} from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import {signIn} from '../../../firebase'
import Singleton from '../../../singleton.js'

function handleSignIn(email,password){
    let succ = signIn(email,password)
    const singleton = Singleton.getInstance();
    var user = singleton.getUserInfo();
    console.log(user)
    
}

const LoginForm = ({navigation}) => {
    return(
        <View style={styles.wrapper}>
            <View 
            style={styles.inputField}>
           <TextInput
            placeholderTextColor='#444'
            placeholder="Email"
            autoCapitalize='none'
            keyboardType='email-address'
            textContentType='emailAddress'
           />
            </View>
            <View 
            style={styles.inputField}
            >
           <TextInput
            placeholderTextColor='#444'
            placeholder="Password"
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
           />
          </View>
          <TouchableOpacity>
          <View style={{alignItems: 'flex-end', marginBottom: 30}}>
              <Text style={{color: '#6BB0F5',}}>Forgot Password</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <Pressable 
            titleSize={20} 
            style={styles.button} 
            onPress={console.log('work')}
            >
            <Text style={styles.buttonText}>Log In</Text>
           </Pressable>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.push('Home')}>
          <Pressable 
            titleSize={20} 
            style={{backgroundColor: 'grey', alignItems: 'center', marginTop:5}} 
            onPress={console.log('work')}
            >
            <Text style={styles.buttonText}>Continue As Guest</Text>
           </Pressable>
           </TouchableOpacity>
           <View style={styles.signupContainer}>
                <Text>Don't Have an account?</Text>
                <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
                    <Text style={{color:'blue'}}> Sign Up</Text>
                </TouchableOpacity>
           </View>     
        </View>
    )
}

const styles = StyleSheet.create({
    
    wrapper:{
        marginTop: -115,
    },
    
    inputField:{
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        borderWidth: 1,
        marginBottom: 15,
        marginLeft:5,
        marginRight:5
       
    },
    button:{
        backgroundColor: '#0096F6', 
        alignItems: 'center',
        minHeight: 42,
        borderRadius: 4,
    },
    buttonText:{
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    },
    signupContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent:'center',
        marginTop: 40

    },
})

export default LoginForm