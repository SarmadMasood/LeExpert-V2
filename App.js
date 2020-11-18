import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SocialSignUp from './screens/SocialSignUp';
import SignUpUsingMail from './screens/SignUpUsingMail';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import ExpertCategoriesScreen from './screens/ExpertCategoriesScreen'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ExpertsScreen from './screens/ExpertsScreen';
import ExpertDetailScreen from './screens/ExpertDetailScreen';
import BookAppointScreen from './screens/BookAppointScreen';
import GroupCategoriesScreen from './screens/GroupCategoriesScreen';
import GroupsScreen from './screens/GroupsScreen';
import { createDrawerNavigator, DrawerActions } from '@react-navigation/drawer';
import DrawerContent from './screens/DrawerContent'
import WalletScreen from './screens/WalletScreen'
import TransactionsScreen from './screens/TransactionsScreen'
import HelpScreen from './screens/HelpScreen'
import AboutScreen from './screens/AboutScreen'

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const homeStackScreen = ({navigation}) => (
  <Stack.Navigator initialRouteName="SignInScreen">
        <Stack.Screen name="SocialSignUp" component={SocialSignUp} options={{ headerShown: false }}/>
        <Stack.Screen name="MailSignUp" component={SignUpUsingMail} options={{ headerShown: false }}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }}/>

        <Stack.Screen name="Home" component={HomeScreen} 
        options={{title: 'LeExpert',headerStyle: {backgroundColor: '#6AD3D6'}, headerTitleStyle: {fontSize: "20"}, headerTintColor: '#07252E',
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

        <Stack.Screen name="WalletScreen" component={WalletScreen} options={{title: 'Wallet',headerStyle: {backgroundColor: '#6AD3D6'},headerTintColor: '#07252E' }}/>
        <Stack.Screen name="TransactionsScreen" component={TransactionsScreen} options={{title: 'Transactions',headerStyle: {backgroundColor: '#6AD3D6'},headerTintColor: '#07252E' }}/>
        <Stack.Screen name="HelpScreen" component={HelpScreen} options={{title: 'Help & Support',headerStyle: {backgroundColor: '#6AD3D6'},headerTintColor: '#07252E' }}/>
        <Stack.Screen name="AboutScreen" component={AboutScreen} options={{title: 'About',headerStyle: {backgroundColor: '#6AD3D6'},headerTintColor: '#07252E' }}/>
      </Stack.Navigator>
)


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' drawerContent={props => <DrawerContent {... props}/>}>
    <Drawer.Screen name="HomeStack" component={homeStackScreen} options={{headerShown: false}} />
  </Drawer.Navigator>
      
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
