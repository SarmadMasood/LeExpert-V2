import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';

const HelpScreen = (props) => {
    return (
        <View style = {styles.container}>
            <Text style={styles.buttonText}>HelpScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    buttonText:{
        fontSize:28,
        textAlign: "center",
        color: '#07252E',
    },

});

export default HelpScreen