import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import * as firebase from 'firebase';

const ProfileScreen = (props) => {
    const [user, setUser] = useState({
        name: 'Loading Name',
        email: 'loading email',
        imageURL: null,
    }); 

    const getData = () => {
        let uid = firebase.auth().currentUser.uid
        firebase.database()
        .ref('/users/').child(uid)
        .once('value')
        .then(snapshot => {
        // console.log('User data: ', snapshot.val());
         let data = snapshot.val();
         setUser({
             name: data.name,
             email: data.email,
             imageURL: data.imageURL
         })
        });
    }

    React.useEffect(() =>{
        getData();
      }, [])

    return (
        <View style = {styles.container}>
            <Image style={styles.imageCircle}  source={{uri: user.imageURL}}/>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.type}>User</Text>
            <View style={styles.subContiner}>
            <Image style={styles.imageSocial} source={require('./assets/fb.png')}/>
            <Image style={styles.imageSocial} source={require('./assets/twitter.png')}/>
            <Image style={styles.imageSocial} source={require('./assets/linkedin.png')}/>
            </View>
            <View style={styles.borderView}>
                <Text style={styles.subText}>Born:</Text>
                <Text style = {styles.subText}>7 November 1996</Text>
            </View>
            <View style={styles.borderView}>
                <Text style={styles.subText}>Occupation:</Text>
                <Text style = {styles.subText}>Student</Text>
            </View>
            <View style={styles.borderView}>
                <Text style={styles.subText}>Interests:</Text>
                <Text style = {styles.subText}>Engineers, Tutors</Text>
            </View>
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
    imageCircle: {
        borderWidth: 2,
        borderColor: '#6AD3D6',
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 60,
        backgroundColor: '#07252E',
    },
    name: {
        fontSize: 20,
        color: '#011B13',
        marginTop: 15,
    },
    type: {
        fontSize: 16,
        color: '#5C6A66',
        marginTop: 12,
    },
    subContiner: {
        marginTop: 9,
        flexDirection: 'row',
        width: 120,
        height: 30,
        justifyContent: 'center',
        alignContent: 'center',
    },
    imageSocial: {
        marginLeft: 15,
        height: 26,
        width: 26,
    },
    borderView: {
        borderColor: '#6AD3D6',
        borderWidth: 2,
        borderRadius: 35,
        height: 70,
        width: 300,
        alignContent: 'center',
        flexDirection: 'row',
        marginTop: 25,
    },
    subText: {
        marginStart: 20,
        alignSelf: 'center',
        fontSize: 17,
        color: '#011B13',
    },
    inputField: {
        fontSize: 17,
        color: '#011B13',
        right: 15,
        backgroundColor: '#fff',
    },
});

export default ProfileScreen