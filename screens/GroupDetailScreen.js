import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Dimensions, ViewPropTypes} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// stripe.setOptions({
//     publishableKey:'pk_test_51HotnSEbhvrNQs9J5DvauwCe1nCzZSjnWj12XnZK52vSeh9y7p0Npj8UeitV3CY8YNo6iPhzQNtJKiYArBnxtzig0080Tf2lGT'
// })

// const CREDENTIALS = {
//     appId: 3738,
//     authKey: "fsAtztCxxvTacvw",
//     authSecret: "By--WWUnkayuQwG"
//   };

//   const CONFIG = {
//     debug: { mode: 1 } // enable DEBUG mode (mode 0 is logs off, mode 1 -> console.log())
//   };

//   ConnectyCube.init(CREDENTIALS, CONFIG);

const GroupDetailScreen = (props) => {
    const available = true;
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground style={styles.bg} source={require('./assets/Medbg.png')}>
                <Image style={styles.picture}></Image>
                <Text style={styles.nameText}>Dr. Liaqat Malik</Text>
                <Text style={styles.subText}>Obstrectrics & Gynecology</Text>
                
              {(available && <View>
                <TouchableOpacity activeOpacity = {0.8}>
                        <View style = {styles.optionButtonBg}>
                            <Image source={require('./assets/call.png')} style = {styles.optionIcon1}/>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.optionText}>Join</Text>
              </View>
              )}  
              {(!available && <View>
                <TouchableOpacity activeOpacity = {0.8} onPress={() => props.navigation.navigate('BookAppointScreen')}>
                        <View style = {styles.optionButtonBg1} >
                            <Image source={require('./assets/book.png')} style = {styles.optionIcon2}/>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.optionText}>Book</Text>       
              </View>
              )}
             
                
            </ImageBackground>


            <View style={styles.subConatainer}>
                <Image source={require('./assets/schedule.png')} style = {styles.optionIcon3}/>
                <View>
                    <Text style={styles.text2}>Class Timing</Text>
                    <Text style={styles.text3}>09:15AM - 04:30PM</Text>
                </View>
            </View>

            <Text style={styles.desc}>
                Adobe Systems made the PDF specification available
                free of charge in 1993. In the early years PDF was
                popular mainly in desktop publishing workflows, 
                and competed with a variety of formats such as DjVu,
                Envoy, Common Ground Digital Paper, Farallon Replica
                and even Adobe's own PostScript format.
            </Text>

            <View style={styles.lineHorizontal}></View>

            <StatusBar backgroundColor='#6AD3D6' barStyle='dark-content' />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    bg:{
        height: 300,
        width: Dimensions.get('window').width
    },
    picture:{
        height:90,
        width: 90,
        borderRadius: 45,
        backgroundColor: '#000',
        alignSelf: 'center',
        marginTop: 25,
    },
    optionButtonBg:{
        borderRadius: 30,
        width: 60,
        height: 60,
        backgroundColor:'#B14C6F',
        justifyContent: "center",
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset:{width:2,height:2},
        elevation: 7,
        alignSelf: 'center',
        marginTop: 15
    },
    optionButtonBg1:{
        borderRadius: 30,
        width: 60,
        height: 60,
        backgroundColor:'#5D42AD',
        justifyContent: "center",
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset:{width:2,height:2},
        elevation: 7,
        alignSelf: 'center',
        marginTop: 15
    },
    optionIcon1: {
        height: 22,
        width: 35,
        alignSelf: 'center'
    },
    optionIcon2: {
        height: 35,
        width: 35,
        alignSelf: 'center'
    },
    nameText:{
        fontSize:24,
        textAlign: "center",
        color: '#fff',
        alignSelf: 'center',
        marginTop: 15
    },
    subText: {
        fontSize:20,
        textAlign: "center",
        color: '#fff',
        alignSelf: 'center',
        marginTop: 5,
        opacity: 0.7
    },
    optionText: {
        fontSize: 18,
        marginTop: 5,
        color: '#fff',
        alignSelf: 'center'
    },
    textConatainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width-60
    },
    text: {
        marginTop: 17,
        fontSize: 16,
        alignSelf: 'center',
        color: '#6D6D6D'
    },
    text1: {
        marginTop: 8,
        fontSize: 16,
        alignSelf: 'center',
        color: '#07252E'
    },
    line: {
        width: 2,
        height:60,
        backgroundColor: '#6F6F6F',
        marginTop: 12,
        opacity: 0.6
    },
    subConatainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width-60
    },
    optionIcon3: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        marginLeft: 15,
        marginEnd: 19,
    },
    text2: {
        color: '#07252E',
        fontSize: 18,
        marginTop: 2
    },
    text3: {
        color: '#6D6D6D',
        marginTop: 6,
        fontSize: 15,
    },
    lineHorizontal: {
        backgroundColor: '#6D6D6D',
        marginTop: 15,
        height: 1,
        width: Dimensions.get('window').width,
        opacity: 0.3
    },
    desc: {
        fontSize: 15,
        marginLeft: 25,
        marginTop: 15,
        marginEnd: 10,
        color: '#3C3C3C',
        textAlign: 'justify'
    },

});

export default GroupDetailScreen