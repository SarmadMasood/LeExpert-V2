import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const SignUpUsingMail = (props) => {
    var radio_props = [
        {label: 'Male            ', value: 0 },
        {label: 'Female', value: 1 }
      ];
    return (
        <View style = {styles.container}>
            <Text style = {styles.signUpText}>Sign Up</Text>
            <Text style = {styles.guideText}>Please fill your info{"\n"}in the fields</Text>
            <View style = {styles.subContainer1}>
            
            <TextInput style = {styles.inputField} placeholder ="Name"></TextInput>
            <TextInput style = {styles.inputField} placeholder ="Email"></TextInput>
            <TextInput style = {styles.inputField} placeholder ="Password"></TextInput>
            <TextInput style = {styles.inputField} placeholder ="Confirm Password"></TextInput>
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
            <Button style ={styles.signUpButton} onPress = {() => {}}>
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