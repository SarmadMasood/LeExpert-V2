import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const SplashScreen = (props) => {
    return (
        <View style = {styles.container}>
            <Image style={styles.picture} source = {require('./assets/SplashLogo.png')}></Image>
           
            <StatusBar backgroundColor='#6AD3D6' barStyle='dark-content' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6AD3D6',
      alignItems: 'center',
      justifyContent: 'center',
    }

});

export default SplashScreen