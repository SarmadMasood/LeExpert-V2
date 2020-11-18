import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback,Image, Dimensions} from 'react-native';
import * as Facebook from 'expo-facebook';

  const onPressGoogle = () => {
    alert("SignUp using Google")
  };

  async function loginWithFacebook() {
    try {
      await Facebook.initializeAsync("379176636630151","LeExpert");
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile","email"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        console.log(token)
        // alert(`Hi ${(await response.json())}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }

    // //ENTER YOUR APP ID 
    // const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync
    // ('379176636630151', { permissions: ['public_profile','email'] })

    // if (type == 'success') {

    //   const credential = firebase.auth.FacebookAuthProvider.credential(token)

    //   firebase.auth().signInWithCredential(credential).catch((error) => {
    //     console.log(error)
    //   })
    // }
  }

const SocialSignUp = (props) => {
    return (
        <View style={styles.container}>

      <View style = {styles.socialButtonsContainer}>
      <TouchableWithoutFeedback onPress = {loginWithFacebook}>
      <View style = {styles.socialView}>
          <Image style = {styles.socialCircle} source = {require("./assets/fbicon.png")}></Image>
          <Text style = {styles.socialtext}>Sign Up with facebook</Text>
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress = {onPressGoogle}>
      <View style = {styles.socialView1}>
        <Image style = {styles.socialCircle} source = {require("./assets/google.png")} ></Image>
          <Text style = {styles.socialtext}>Sign Up with Google</Text>
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress = {() => props.navigation.navigate('MailSignUp')}>
      <View style = {styles.socialView2}>
          <Image style = {styles.socialCircle} source = {require("./assets/Email.png")} ></Image>
          <Text style = {styles.socialtext}>Register using Email</Text>
      </View>
      </TouchableWithoutFeedback>
      </View>

      <TouchableWithoutFeedback onPress = {() => props.navigation.navigate('SignInScreen')}>
      <Text style = {styles.signInText}>
        Already have an account? Sign In
        </Text>
      </TouchableWithoutFeedback>

      <StatusBar style="auto" />
    </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6AD3D6',
      alignItems: 'center',
    },
    socialView: {
      justifyContent: "center",
      backgroundColor: '#3B5998',
      height: 60,
      width: 330,
      borderRadius: 37.5,
    },
    socialView1: {
      justifyContent: "center",
      backgroundColor: '#5D99FB',
      height: 60,
      width: 330,
      borderRadius: 37.5
    },
    socialView2: {
      justifyContent: "center",
      backgroundColor: '#F96484',
      height: 60,
      width: 330,
      borderRadius: 37.5
    },
    signInText: {
      bottom: Dimensions.get('window').height/10.5,
      fontSize: 16,
      position: 'absolute',
    },
    socialtext: {
      marginLeft: 90,
      fontSize: 18,
      color: '#fff'
    },
    socialCircle: {
      position: "absolute",
      height: 45,
      width: 45,
      marginLeft: 15,
      backgroundColor: '#fff',
      borderRadius: 22.5,
      resizeMode: "contain",
    },
    socialButtonsContainer: {
        top: 100,
        height: 220,
        justifyContent: 'space-between',
    },
  });

export default SocialSignUp