import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import RadioForm from 'react-native-simple-radio-button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as firebase from 'firebase';

const SignUpUsingMail = (props) => {
    var radio_props = [
        {label: 'User            ', value: 0 },
        {label: 'Expert', value: 1 }
      ];
      const [name, setName] = useState(null);
      const [email, setEmail] = useState(null);
      const [password, setPassword] = useState(null);
      const [cpassword, setcPassword] = useState(null);

      async function setUserType(user) {
        try {
            await AsyncStorage.setItem('usertype', user.toString())
          } catch (e) {
            console.log(e)
          }
    }

      const handleSignUp = (props) => {
        if (email!= null && email.length !=0 && password!= null && password.length !=0 ){
            if (password == cpassword){
                props.navigation.navigate('LoadingScreen')
                 firebase.auth()
                 .createUserWithEmailAndPassword(email, password)
                .then((result) => {alert('sign up done!')
                    console.log("result nigga! : \n",result)
                    firebase.database().ref('users/' + result.user.uid).set({
                    email: email,
                    imageURL: null,
                    name: name
                    }).then(function(snapshot){
                    console.log('Snapshot of user: ',snapshot)
                    })
                }).catch(err => {
                    alert(err)
                    props.navigation.navigate('MailSignUp')
                })

            }else{
            alert('Passwords do not match.')
            }
        }else{
            alert('Please fill in all the fields.')
        }
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.signUpText}>Sign Up</Text>
            <Text style = {styles.guideText}>Please fill your info{"\n"}in the fields</Text>
            <View style = {styles.subContainer1}>
            
            <TextInput style = {styles.inputField} placeholder ="Name" onChangeText={(username) => setName(username)}></TextInput>
            <TextInput style = {styles.inputField} value={email} placeholder ="Email" onChangeText={(mail) => setEmail(mail)}></TextInput>
            <TextInput style = {styles.inputField} value={password} placeholder ="Password" onChangeText={(pass) => setPassword(pass)} secureTextEntry={true}></TextInput>
            <TextInput style = {styles.inputField} placeholder ="Confirm Password" secureTextEntry={true} onChangeText={(cpass) => setcPassword(cpass)}></TextInput>
            </View>

            <RadioForm style = {styles.radioStyle}
                    formHorizontal = 'true'
                    buttonColor= '#6AD3D6'
                    selectedButtonColor= '#6AD3D6'
                    radio_props={radio_props}
                    initial={-1}
                    animation = 'true'
                    onPress={(value) => setUserType(value)}
                />
            <Button style ={styles.signUpButton} onPress = {() => handleSignUp(props)}>
               <Text style={styles.buttonText} >Sign Up</Text> 
            </Button>       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
    signUpText:{
        marginTop: Dimensions.get('window').height/11,
        fontSize:30,
        color: '#07252E'
    },
    guideText:{
        marginTop: 20,
        fontSize:30,
        textAlign: "center",
        color: '#848383',
        marginBottom: 40,
    },
    inputField:{
        height: 60,
        width: 330,
        borderWidth: 2,
        borderColor: '#6AD3D6',
        borderRadius: 7,
        paddingStart: 15,
        fontSize: 22
    },
    radioStyle:{
        marginRight:110
    },
    signUpButton:{
        top: 50,
        width: 150,
        height: 45,
        backgroundColor:'#6AD3D6',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset:{width:1,height:2},
    },
    buttonText:{
        fontSize:20,
        marginTop: 35,
        textAlign: "center",
        color: '#07252E',
    },
    subContainer1: {
        height: Dimensions.get('window').height/2.7,
        alignItems: 'center',
        justifyContent: 'space-between',
        bottom: 15,
    },
});

export default SignUpUsingMail