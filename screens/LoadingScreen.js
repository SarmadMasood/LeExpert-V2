import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const LoadingScreen = (props) => {
    return (
        <View style = {styles.container}>
           <View style={styles.subContainer}>
                <Text style={styles.loading}>Loading...</Text>
                <ActivityIndicator size={'large'} />
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
      justifyContent: 'center',
    },
    subContainer: {
        flexDirection: 'row',
        height: 50,
        width: 150,
    },
    loading: {
        fontSize: 20,
        marginRight: 10,
    }
});

export default LoadingScreen