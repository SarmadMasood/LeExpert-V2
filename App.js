import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { NavigationContainer, useRoute} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SocialSignUp from './screens/SocialSignUp';
import SignUpUsingMail from './screens/SignUpUsingMail';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import ExpertCategoriesScreen from './screens/ExpertCategoriesScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ExpertsScreen from './screens/ExpertsScreen';
import ExpertDetailScreen from './screens/ExpertDetailScreen';
import BookAppointScreen from './screens/BookAppointScreen';
import GroupCategoriesScreen from './screens/GroupCategoriesScreen';
import GroupsScreen from './screens/GroupsScreen';
import { createDrawerNavigator, DrawerActions } from '@react-navigation/drawer';
import DrawerContent from './screens/DrawerContent';
import ProfileScreen from './screens/ProfileScreen';
import TransactionsScreen from './screens/TransactionsScreen';
import HelpScreen from './screens/HelpScreen';
import AboutScreen from './screens/AboutScreen';
import AddSubscription from './screens/AddSubscriptionScreen';
import SplashScreen from './screens/SplashScreen';
import GroupDetailScreen from './screens/GroupDetailScreen';
import LoadingScreen from './screens/LoadingScreen';
import ExpertHomeScreen from './screens/ExpertHomeScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCqECEVJw9RohYyyLhqsqpRtXZ6rVV1zVY",
    authDomain: "leexpert.firebaseapp.com",
    databaseURL: "https://leexpert.firebaseio.com",
    projectId: "leexpert",
    storageBucket: "leexpert.appspot.com",
    messagingSenderId: "684956423851",
    measurementId: "G-9DBKXKJEKV",
}

firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();
const expertStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const AuthStack = createStackNavigator();

const homeflow = ({navigation}) => (
  <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{title: 'LeExpert',headerStyle: {backgroundColor: '#6AD3D6'}, headerTintColor: '#07252E',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
               <Image style = {styles.menu} source = {require("./menu.png")}/>
            </TouchableOpacity> 
          ),
        }}/>

        <Stack.Screen name="ExpertCategoriesScreen" component={ExpertCategoriesScreen} 
        options={{title: 'Expert Categories',headerStyle: {backgroundColor: '#6AD3D6'},headerTintColor: '#07252E' }}/>
        <Stack.Screen name="ExpertsScreen" component={ExpertsScreen} options={{title: 'Experts',headerStyle: {backgroundColor: '#6AD3D6'},headerTintColor: '#07252E' }}/>
        <Stack.Screen name="ExpertDetailScreen" component={ExpertDetailScreen} options={{title: 'Expert Detail',headerStyle: {backgroundColor: '#6AD3D6'},headerTintColor: '#07252E' }}/>
        <Stack.Screen name="BookAppointScreen" component={BookAppointScreen} options={{title: 'Book Appointment',headerStyle: {backgroundColor: '#6AD3D6'},headerTintColor: '#07252E' }}/>

        <Stack.Screen name="GroupCategoriesScreen" component={GroupCategoriesScreen} 
        options={{title: 'Group Categories',headerStyle: {backgroundColor: '#6AD3D6'},headerTintColor: '#07252E' }}/>
        <Stack.Screen name="GroupsScreen" component={GroupsScreen} options={{title: 'Groups',headerStyle: {backgroundColor: '#6AD3D6'},headerTintColor: '#07252E' }}/>
        <Stack.Screen name="GroupDetailScreen" component={GroupDetailScreen} options={{title: 'Group Details',headerStyle: {backgroundColor: '#6AD3D6'},headerTintColor: '#07252E' }}/>

        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{title: 'Profile',headerStyle: {backgroundColor: '#6AD3D6'},headerTintColor: '#07252E' }}/>
        <Stack.Screen name="TransactionsScreen" component={TransactionsScreen} options={{title: 'Transactions',headerStyle: {backgroundColor: '#6AD3D6'},headerTintColor: '#07252E' }}/>
        <Stack.Screen name="HelpScreen" component={HelpScreen} options={{title: 'Help & Support',headerStyle: {backgroundColor: '#6AD3D6'},headerTintColor: '#07252E' }}/>
        <Stack.Screen name="AboutScreen" component={AboutScreen} options={{title: 'About',headerStyle: {backgroundColor: '#6AD3D6'},headerTintColor: '#07252E' }}/>
        <Stack.Screen name="AddSubscription" component={AddSubscription} options={{title: 'Payment',headerStyle: {backgroundColor: '#6AD3D6'},headerTintColor: '#07252E' }}/>
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
)

const expertHomeflow = ({navigation}) => (
  <expertStack.Navigator initialRouteName="Home">
        
        <expertStack.Screen name="Home" component={ExpertHomeScreen} 
        options={{title: 'LeExpert',headerStyle: {backgroundColor: '#6AD3D6'}, headerTintColor: '#07252E',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
               <Image style = {styles.menu} source = {require("./menu.png")}/>
            </TouchableOpacity> 
          ),
        }}/>

      <expertStack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }}/>

      </expertStack.Navigator>
)

export default function App() {
  const [isSignedIn, setisSignedIn] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [userType, setUserType] = useState(0);

  const checkUser = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('signed in')
        setisLoading(!isLoading)
        checkUserType()
        
      } else {
        console.log('not signed in')
        setisSignedIn(false)
        setisLoading(!isLoading)
      }
    })
  };

  const checkUserType = async () => {
    try {
      const type = await AsyncStorage.getItem('usertype');
      console.log('userType: ', type)
      if (type=='1'){
        setUserType(1)
      }
      setisSignedIn(true)
    } catch (e) {
      alert(e)
    }
  }
  const setUser = async () => {
    async function setUserType() {
    try {
          await AsyncStorage.setItem('usertype', '0')
          console.log('value:', user.toString())
        } catch (e) {
          console.log(e)
        }
    }
  }
  
  React.useEffect(() =>{
    setUser();
    checkUser();
  }, [])
  
  return (
    <NavigationContainer>
      {
        isLoading ? (<SplashScreen/>) :
        isSignedIn ? (
          userType==0 ? (
            <Drawer.Navigator initialRouteName='Home' drawerContent={props => <DrawerContent {... props}/>}>
                <Drawer.Screen name="HomeStack" component={homeflow} options={{headerShown: false}} />
          </Drawer.Navigator> 
          ) : (
            <Drawer.Navigator initialRouteName='Home' drawerContent={props => <DrawerContent {... props}/>}>
                <Drawer.Screen name="ExpertHomeStack" component={expertHomeflow} options={{headerShown: false}} />
          </Drawer.Navigator> 
          )
            
        ) : (
           <AuthStack.Navigator>
              <AuthStack.Screen name="SocialSignUp" component={SocialSignUp} options={{ headerShown: false }}/>
              <AuthStack.Screen name="MailSignUp" component={SignUpUsingMail} options={{ headerShown: false }}/>
              <AuthStack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }}/>
              <AuthStack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }}/>
              </AuthStack.Navigator>
        )
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    height: 22,
    width: 24,
    marginLeft: 15
  }
});
