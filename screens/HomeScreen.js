import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';

const HomeScreen = (props) => {
    return (
        <View style = {styles.container}>
            <Image style={styles.picture} source = {require('./assets/Home.png')}></Image>
            <View style = {styles.subContainer}>
           
            <TouchableOpacity activeOpacity={.8} style ={styles.optionButton} onPress = {() => props.navigation.navigate('ExpertCategoriesScreen')}>
               <Text style={styles.buttonText} >Hire one Expert</Text> 
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.8} style ={styles.optionButton} onPress = {() => props.navigation.navigate('GroupCategoriesScreen')}>
               <Text style={styles.buttonText} >Join a Group</Text> 
            </TouchableOpacity>
            </View>

            <StatusBar backgroundColor='#6AD3D6' barStyle='dark-content' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    optionButton:{
        borderRadius: 12,
        width: 260,
        height: 100,
        backgroundColor:'#6AD3D6',
        justifyContent: "center",
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset:{width:2,height:2},
        elevation: 7,
    },
    buttonText:{
        fontSize:28,
        textAlign: "center",
        color: '#07252E',
    },
    subContainer:{
        justifyContent: "space-between",
        height: Dimensions.get('window').height/3.1,
        marginTop: Dimensions.get('window').height/11,
    },
    picture: {
        marginTop: 50
    }

});

export default HomeScreen