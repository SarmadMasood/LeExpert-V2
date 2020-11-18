import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ImageBackground} from 'react-native';

const DrawerContent = (props) => {
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.drawerbg} source={require('./assets/drawerbg.jpg')}>
                <Image style={styles.dp}></Image>
                <Text style={styles.text}>Malik Liaqat</Text>
                <Text style={styles.text2}>mr.malik@gmail.com</Text>
            </ImageBackground>
            <TouchableOpacity activeOpacity={.8} onPress = {() => props.navigation.navigate('Home')}>
                <View style={styles.subConatainer0}>
                    <Image style={styles.drawerIcon} source={require('./assets/home2.png')}></Image>
                    <Text style={styles.drawerText}> Home</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.8} onPress = {() => props.navigation.navigate('WalletScreen')}>
                <View style={styles.subConatainer}>
                    <Image style={styles.drawerIcon} source={require('./assets/wallet.png')}></Image>
                    <Text style={styles.drawerText}> Wallet</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.8} onPress = {() => props.navigation.navigate('TransactionsScreen')}>
                <View style={styles.subConatainer}>
                    <Image style={styles.drawerIcon} source={require('./assets/history.png')}></Image>
                    <Text style={styles.drawerText}> Transactions History</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.8} onPress = {() => props.navigation.navigate('HelpScreen')}>
                <View style={styles.subConatainer}>
                    <Image style={styles.drawerIcon} source={require('./assets/help.png')}></Image>
                    <Text style={styles.drawerText}> Help & Support</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.8} onPress = {() => props.navigation.navigate('AboutScreen')}>
                <View style={styles.subConatainer}>
                    <Image style={styles.drawerIcon} source={require('./assets/about.png')}></Image>
                    <Text style={styles.drawerText}> About</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    drawerbg: {
        width: 280,
        height: 230
    },
    dp: {
        position: 'absolute',
        bottom: 70,
        left: 20,
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: '#000'
    },
    text: {
        color: '#6D6D6D',
        position: 'absolute',
        bottom: 37,
        left: 20,
        fontSize: 20
    },
    text2: {
        color: '#6D6D6D',
        position: 'absolute',
        bottom: 10,
        left: 20,
        fontSize: 18
    },
    subConatainer0: {
        marginLeft: 15,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width-60
    },
    subConatainer: {
        marginLeft: 15,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width-60
    },
    drawerIcon: {
        marginLeft: 50,
        height: 28,
        width: 28,
    },
    drawerText: {
        fontSize: 18,
        marginLeft: 15,
    }
});

export default DrawerContent;