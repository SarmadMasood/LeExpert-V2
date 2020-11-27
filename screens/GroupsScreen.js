import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity, Modal, Dimensions, As} from 'react-native';
import RadioButton from 'react-native-radio-button'
import AsyncStorage from '@react-native-async-storage/async-storage';

const GroupsScreen = (props) => {
    const [selectedId, setSelectedId] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [radioValues, setRadioValues] = useState({
      radio1: false,
      radio2: false,
      radio3: false,
    });
    const [charges, setCharges] = useState(0);

    const book = async () => {
      setModalVisible(!modalVisible)
      props.navigation.navigate('AddSubscription',{'charges': charges})
    }

    const handleItemSelect = async () => {
      try {
        const paid = await AsyncStorage.getItem('paidgroup')
        if(paid !== null) {
          props.navigation.navigate('GroupDetailScreen')
        }else{
          setModalVisible(!modalVisible)
        }
      } catch (e) {
        // saving error
      }
    }


    const onRadioSelect = (radio) => {
      if (radio ==1){
        if (radioValues.radio2==true){
          setRadioValues({radio2: !radioValues.radio2})
        }
        if (radioValues.radio3==true){
          setRadioValues({radio3: !radioValues.radio3})
        }
        setRadioValues({radio1: !radioValues.radio1})
        setCharges(15)
      }

      if (radio ==2){
        if (radioValues.radio1==true){
          setRadioValues({radio1: !radioValues.radio1})
        }
        if (radioValues.radio3==true){
          setRadioValues({radio3: !radioValues.radio3})
        }
        setRadioValues({radio2: !radioValues.radio2})
        setCharges(25)
      }

      if (radio ==3){
        if (radioValues.radio2==true){
          setRadioValues({radio2: !radioValues.radio2})
        }
        if (radioValues.radio1==true){
          setRadioValues({radio1: !radioValues.radio1})
        }
        setRadioValues({radio3: !radioValues.radio3})
        setCharges(35)
      }
    }
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
            onPress={() => handleItemSelect()}
          />
        );
      };
      
    return (
        <View style = {styles.container}>
          <View>
            {(!modalVisible && <FlatList style = {styles.subContainer} contentContainerStyle = {{padding:5}}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}>
          
          </FlatList>)}
          
          </View>
           
          
      <StatusBar style="auto" />
      {(modalVisible && <View style={styles.fade}/>)}
      
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
              <RadioButton
                 animation={'bounceIn'}
                 innerColor={'#07252E'}
                 outerColor={'#6AD3D6'}
                 isSelected={radioValues.radio1}
                 onPress={() => onRadioSelect(1)}/>

                 <Text style={styles.offer}>5 Class Bundle</Text>
                 <Text style={styles.offerValue}>$15</Text>
            </View>

            <View style={styles.borderContainer}>
              <RadioButton
                 animation={'bounceIn'}
                 innerColor={'#07252E'}
                 outerColor={'#6AD3D6'}
                 isSelected={radioValues.radio2}
                 onPress={() => onRadioSelect(2)}/>

                <Text style={styles.offer}>10 Class Bundle</Text>
                <Text style={styles.offerValue}>$25</Text>
            </View>

            <View style={styles.borderContainer}>
              <RadioButton
                 animation={'bounceIn'}
                 innerColor={'#07252E'}
                 outerColor={'#6AD3D6'}
                 isSelected={radioValues.radio3}
                 onPress={() => onRadioSelect(3)}/>

                <Text style={styles.offer}>Monthly</Text>
                <Text style={styles.offerValue}>$35/month</Text>
            </View>

           <View style={styles.modalSubView}>
           <TouchableOpacity activeOpacity={0.75} onPress={() => book()}>
              <View style={styles.bookButton}>
                  <Text style={styles.bookText}>Book</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.75} onPress={() => setModalVisible(!modalVisible)}>
              <View style={styles.bookButton}>
                  <Text style={styles.bookText}>Cancel</Text>
              </View>
            </TouchableOpacity>
           </View>
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
        color: '#373636'
    },
    Circle: {
        position: "absolute",
        height: 55,
        width: 55,
        marginLeft: 15,
        backgroundColor: '#07252E',
        borderRadius: 27.5,
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
        borderColor: '#5C9192',
        flexDirection: 'row',
        paddingStart: 15,
        
      },
      offer: {
        fontSize: 20,
        color: '#07252E',
        alignSelf: 'center',
        marginLeft: 15
      },
      offerValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#07252E',
        alignSelf: 'center',
        marginLeft: Dimensions.get('window').width/9
      },
      modalSubView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width-120,
      }
});

export default GroupsScreen;