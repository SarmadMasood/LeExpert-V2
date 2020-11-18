import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


const SignInScreen = (props) => {
    var radio_props = [
        {label: 'User            ', value: 0 },
        {label: 'Expert', value: 1 }
      ];
    return (
        <View style = {styles.container}>
             <View style = {styles.subContainer1}>
                <Text style = {styles.signInText}>Sign In</Text>
                <Text style = {styles.guideText}>Please fill your info{"\n"}in the fields</Text>
                <TextInput style = {styles.inputField} placeholder ="Email"></TextInput>
                <TextInput style = {styles.inputField} placeholder ="Password"></TextInput>
             </View>
            
        
            <RadioForm style = {styles.radioStyle}
            formHorizontal = 'true'
              buttonColor= '#6AD3D6'
              selectedButtonColor= '#6AD3D6'
              radio_props={radio_props}
              initial={-1}
              animation = 'true'
              onPress={(value) => {alert(value.toString())}}
            />
            <Button style ={styles.signInButton} onPress = {() => props.navigation.navigate('Home')}>
               <Text style={styles.buttonText} >Sign In</Text> 
            </Button>

            <TouchableWithoutFeedback onPress = {() => props.navigation.navigate('SocialSignUp')}>
               <Text style = {styles.signUpText}>Don't have an account? Sign Up</Text>
             </TouchableWithoutFeedback>

      <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    signInText:{
        fontSize:30,
        color: '#07252E'
    },
    guideText:{
        fontSize:30,
        textAlign: "center",
        color: '#848383',
        marginBottom: 20
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
        marginTop: 80,
        marginRight:110
    },
    signInButton:{
        marginTop: 50,
        width: 150,
        height: 45,
        backgroundColor:'#6AD3D6',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset:{width:1,height:2},
    },
    buttonText:{
        fontSize:20,
        textAlign: "center",
        color: '#07252E',
    },
    signUpText:{
        position: 'absolute',
        fontSize: 16,
        bottom: Dimensions.get('window').height/11.5,
    },
    subContainer1: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 320,
        top: 70
    },
});

export default SignInScreen