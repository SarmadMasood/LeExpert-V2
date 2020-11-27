import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback,Image, Dimensions} from 'react-native';
import * as Facebook from 'expo-facebook';
import firebase from 'firebase'
//import { GoogleSignin } from '@react-native-community/google-signin';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Google from 'expo-google-app-auth';

// GoogleSignin.configure({
//   webClientId: '684956423851-jhed5j4426gtirvrv2u7vahnj1qjo3f0.apps.googleusercontent.com',
// });

// async function signInWithGoogle() {
//   //  // Get the users ID token
//   //  const { idToken } = await GoogleSignin.signIn();
   
//   //  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);  // Set persistent auth state
//   //  const credential = firebase.auth.FacebookAuthProvider.credential(idToken);
//   //  const facebookProfileData = await firebase.auth().signInWithCredential(credential);  // Sign in with Facebook credential
        
//   //  return Promise.resolve({type: 'success'});
//   //  // Create a Google credential with the token
//   //  const googleCredential = firebase.auth.GoogleAuthProvider.credential(idToken);
 
//   //  // Sign-in the user with the credential
//   //  return firebase.auth().signInWithCredential(googleCredential);
  
// }

async function signInWithGoogle() {
  try {
    const result = await Google.logInAsync({
      behavior: 'web',
      androidClientId: '684956423851-ol7tfn1u020ui60n4760r0aq0itnag3d.apps.googleusercontent.com',
      iosClientId: '684956423851-rjg5gcnupv5ub90gkg08sa31gt4oq09k.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      onSignIn(result)
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}

function isUserEqual(googleUser, firebaseUser) {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.user.id) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
}

function onSignIn(googleUser) {
  console.log('Google Auth Response', googleUser);
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
      );

      // Sign in with credential from the Google user.
      firebase.auth().signInWithCredential(credential).then(function(result)
      { console.log("user logged in now",result)
      firebase.database().ref('users/' + result.user.uid).set({
        email: result.user.email,
        imageURL: result.additionalUserInfo.profile.picture,
        name: result.additionalUserInfo.profile.given_name+result.additionalUserInfo.profile.family_name
      })
    })
        // .then(function(snapshot){
        //   console.log('Snapshot of user: ',snapshot)
        // })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    } else {
      console.log('User already signed-in Firebase.');
    }
  });
}


async function loginWithFacebook(props) {
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
      }, { auth_type: 'reauthenticate' });
      props.navigation.navigate('LoadingScreen')
    switch (type) {
      case 'success': {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);  // Set persistent auth state
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        const result = await firebase.auth().signInWithCredential(credential);  // Sign in with Facebook credential
        //console.log("result nigga! : \n",result)
        firebase.database().ref('users/' + result.user.uid).set({
          email: result.user.email,
          imageURL: result.user.photoURL,
          name: result.user.displayName
          })

        return Promise.resolve({type: 'success'});
      }
      case 'cancel': {
        alert('Could not sign in please try again.')
        props.navigation.navigate('SocialSignUp')
        return Promise.reject({type: 'cancel'});
      }
    }
  }catch(err){
      console.log('Facebook error:', err)
  }
}

const SocialSignUp = (props) => {
    return (
        <View style={styles.container}>

      <View style = {styles.socialButtonsContainer}>
      <TouchableOpacity onPress = {() => loginWithFacebook(props)} activeOpacity={0.8}>
      <View style = {styles.socialView}>
          <Image style = {styles.socialCircle} source = {require("./assets/fbicon.png")}></Image>
          <Text style = {styles.socialtext}>Continue with facebook</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress = {signInWithGoogle} activeOpacity={0.8}>
      <View style = {styles.socialView1}>
        <Image style = {styles.socialCircle} source = {require("./assets/google.png")} ></Image>
          <Text style = {styles.socialtext}>Continue with Google</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => props.navigation.navigate('MailSignUp')} activeOpacity={0.8}>
      <View style = {styles.socialView2}>
          <Image style = {styles.socialCircle} source = {require("./assets/Email.png")} ></Image>
          <Text style = {styles.socialtext}>Register using Email</Text>
      </View>
      </TouchableOpacity>
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
      overflow: 'hidden',
    },
    socialButtonsContainer: {
        top: 100,
        height: 220,
        justifyContent: 'space-between',
    },
  });

export default SocialSignUp