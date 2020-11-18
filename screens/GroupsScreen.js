import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity, Modal, Dimensions} from 'react-native';
import { color } from 'react-native-reanimated';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const GroupsScreen = (props) => {
    const [selectedId, setSelectedId] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    var radio_props = [
        {label: 'param1', value: 0 },
        {label: 'param2', value: 1 }
      ];
    const DATA = [
        {
          "id": "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          "title": "Anatomy-1",
          "dpPath": require("./assets/doctor.jpg"),
          "group": "Biology Class",
          "availability": "4 seats available",
        },
        {
          "id": "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          "title": "Anatomy-2",
          "dpPath": require("./assets/civil.jpg"),
          "group": "Biology Class",
          "availability": "1 seat available",
        },
        {
          "id": "58694a0f-3da1-471f-bd96-145571e29d72",
          "title": "Neuro Science",
          "dpPath": require("./assets/chef.png"),
          "group": "Biology Class",
          "availability": "3 seats available",
        },
      ];

      
      

      const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} activeOpacity={.8}>
          <View style = {styles.itemContainer}>
             <Image style={styles.Circle}></Image>
             <View style={styles.rowView}>
                <Text style={styles.title}>{item.title}</Text>
             </View>
             <View style={styles.rowView}>
              <Text style={styles.group}>{item.group}</Text>

             </View>
             <Text style = {styles.desc}>In this class we study anatomical structures of the vertabrates.</Text>
             <Text style = {styles.availability}>{item.availability}</Text>
             <Text style = {styles.join}>Join</Text>
             
          </View>
        </TouchableOpacity>
      );

      const renderItem = ({ item }) => {
        return (
          <Item
            item={item}
            onPress={() => setModalVisible(true)}
          />
        );
      };
      
    return (
        <View style = {styles.container}>
            <FlatList style = {styles.subContainer} contentContainerStyle = {{padding:5}}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}>
          
          </FlatList>
      <StatusBar style="auto" />

     {(modalVisible && <View style={styles.fade}></View>)} 
      
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Booked");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Plan Summary</Text>
            
            <View style={styles.borderContainer}>
            
            </View>

            <View style={styles.borderContainer}>

            </View>

            <View style={styles.borderContainer}>

            </View>

            <TouchableOpacity activeOpacity={0.75} onPress={() => setModalVisible(!modalVisible)}>
              <View style={styles.bookButton}>
                  <Text style={styles.bookText}>Book</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


        </View>
    );
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9F9F9'
    },
    subContainer:{
        marginTop: 10,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowOffset:{width:1,height:1},
        elevation: 8,
    },
    itemContainer:{
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        marginTop: 12,
        fontSize: 22,
        color: '#373636',
        fontWeight: 'bold'
    },
    group:{
        marginTop: 3,
        fontSize: 16,
        color: '#6D6D6D',
    },
    availability: {
        fontSize: 18,
        marginLeft: 30,
        marginTop: 0,
        color: '#373636',
        //fontWeight: 'bold'
    },
    Circle: {
        position: "absolute",
        height: 55,
        width: 55,
        marginLeft: 15,
        backgroundColor: '#07252E',
        borderRadius: 27.5,
        resizeMode: "contain",
        marginTop: 12,
      },
      join: {
        fontSize: 20,
        position: 'absolute',
        color: '#6AD3D6',
        right: 18,
        bottom: 10,
        borderRadius: 2,
        fontWeight: 'bold'
      },
      verified: {
        height: 20,
        width: 20,
        marginLeft: 10,
        marginTop: 17,
      },
      rowView: {
          marginLeft: 80,
          flexDirection: 'row'
      },
      rating: { 
          marginLeft: 10,
          marginTop: 8 
      },
      desc: {
          color: '#959595',
          width: 250,
          height: 45,
          marginLeft: 80,
          marginTop: 7,
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 390,
        width: Dimensions.get('window').width-60,
        top: 200,
        alignSelf: 'center'
      },
      fade: {
          opacity: 0.4,
          backgroundColor: '#000',
          flex: 1,
          position: 'absolute',
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width
      },
      bookButton: {
          backgroundColor: '#6AD3D6',
          borderRadius: 10,
          height: 40,
          marginTop: 20,
          width: 100,
          justifyContent: 'center',
      },
      bookText: {
          fontSize: 20,
          fontWeight: 'bold',
          alignSelf: 'center',
          color: '#07252E'
      },
      borderContainer: {
        width: Dimensions.get('window').width-100,
        height: 70,
        borderRadius: 15,
        backgroundColor: '#fff',
        borderWidth: 1.25,
        marginTop: 20,
        borderColor: '#5C9192'
      }
});

const radioLabel = {
    label: 'hhh'
}

export default GroupsScreen;