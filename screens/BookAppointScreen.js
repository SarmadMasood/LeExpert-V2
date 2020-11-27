import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Dimensions, ViewPropTypes} from 'react-native';
import DatePicker from 'react-native-datepicker'
import Moment from 'moment'
import RNPickerSelect from 'react-native-picker-select';
import {Picker} from '@react-native-picker/picker';
import { Button } from 'react-native-paper';


const BookAppointScreen = (props) => {
    const [selectedValue, setSelectedValue] = useState(10);
    const show = true
    // Moment.locale('llll');
    var date = new Date().toString()
    const placeholder = {
        label: 'Select',
        value: null,
        color: '#000'
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.guideText}>You are Booking an appointment with</Text>
            <View style={styles.lineHorizontal}></View>
             <View style={styles.subConatainer}>
                <Image  style = {styles.picture}/>
                <View>
                    <Text style={styles.text2}>Malik Liaqat</Text>
                    <Text style={styles.text3}>Gynecologist</Text>
                </View>
                <Text style={styles.text5}>10$/min</Text>
                </View>
                
                <DatePicker
                useNativeDriver = {true}
        style={{width: 230, marginTop: 20}}
        date={Moment(date).format('llll')}
        mode="datetime"
        placeholder="Select a date and time"
        format="llll"
        minDate={Moment(date).format('llll')}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      <View style={styles.lineHorizontal}></View>

      <View style={styles.subConatainer1}>
         <Text style={styles.text2}>Appointment Length:</Text>
        
            <View style={styles.timeButton}>
      
            <RNPickerSelect 
            style={pickerStyle}
            placeholder={placeholder}
            useNativeAndroidPickerStyle={false}
            onValueChange={(value) => setSelectedValue(value)}
            items={[
                { label: '10 minutes', value: '10' },
                { label: '20 minutes', value: '20' },
                { label: '30 minutes', value: '30' },
            ]}
        />
            </View>
      </View>
      <View style={styles.lineHorizontal}></View>
      <Text style={styles.text4}>Description:</Text>
      <Text style={styles.desc}>
                Adobe Systems made the PDF specification available
                free of charge in 1993. In the early years PDF was
                popular mainly in desktop publishing workflows, 
                and competed with a variety of formats such as DjVu,
                Envoy, Common Ground Digital Paper, Farallon Replica
                and even Adobe's own PostScript format.
     </Text>
     <View style={styles.bottomView}>
            <Button style={styles.confirmButton} onPress={()=> props.navigation.navigate('AddSubscription',{'charges': selectedValue*10})}>
                <Text style={styles.confirmText}>Confirm</Text>
            </Button>
     </View>
        
    </View>
    );
}

var opac = 0
const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
      container1: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#000',
        alignItems: 'center',
        opacity: opac
      },
      picker: {
        backgroundColor: '#fff'
      },
      guideText: {
        marginTop: 10,
        color: '#426862',
        fontSize: 18
      },
      lineHorizontal: {
        backgroundColor: '#6D6D6D',
        marginTop: 15,
        height: 1,
        width: Dimensions.get('window').width,
        opacity: 0.3
    },
    picture: {
        backgroundColor: '#000',
        height: 50,
        width: 50,
        borderRadius: 25,
        marginStart: 0,
        marginEnd: 20,
    },
    subConatainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width-60
    },
    subConatainer1: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width-40
    },
    text2: {
        color: '#07252E',
        fontSize: 18,
        marginTop: 2,
    },
    text3: {
        color: '#6D6D6D',
        marginTop: 6,
        fontSize: 15,
    },
    timeButton: {
        height: 40,
        width: 120,
        borderRadius: 15,
        borderWidth: 2,
        backgroundColor: '#fff',
        borderColor: '#6AD3D6',
        justifyContent: 'center',
    },
    text4: {
        color: '#07252E',
        fontSize: 18,
        marginTop: 15,
        alignSelf: 'baseline',
        marginLeft: 20
    },
    desc: {
        fontSize: 16,
        marginLeft: 25,
        marginTop: 15,
        marginEnd: 15,
        color: '#3C3C3C',
        textAlign: 'justify'
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        height: Dimensions.get('window').height/10,
        width: Dimensions.get('window').width,
        backgroundColor: '#6AD3D6'
    },
    confirmButton: {
        position: 'absolute',
        right: 10,
        top: 7
    },
    confirmText: {
        color: '#07252E',
        fontSize: 16
    },
    text5: {
        position: 'absolute',
        color: '#07252E',
        fontSize: 18,
        top: 2,
        right: 20
    },
});

const  pickerStyle= StyleSheet.create({
    inputIOS: {
        alignSelf: 'center',
        fontSize: 20,
    },
    inputAndroid: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#000'
    },
    inputAndroidContainer: {
        height: 30,
        width: 85,
    }
});

export default BookAppointScreen