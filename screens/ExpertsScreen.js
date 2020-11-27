import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity} from 'react-native';

const ExpertsScreen = (props) => {
    const [selectedId, setSelectedId] = useState(null);
    const DATA = [
        {
          "id": "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          "title": "Sue Holmes",
          "dpPath": require("./assets/doctor.jpg"),
          "occupation": "Cardiologist",
        },
        {
          "id": "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          "title": "Isabel Lane",
          "dpPath": require("./assets/civil.jpg"),
          "occupation": "Gynacologist",
        },
        {
          "id": "58694a0f-3da1-471f-bd96-145571e29d72",
          "title": "Liaqat Malik",
          "dpPath": require("./assets/chef.png"),
          "occupation": "Neurologist",
        },
        {
          "id": "bd7acbea-c1b1-46c2-aed5-3ad53abb28ab",
          "title": "Sue Holmes",
          "dpPath": require("./assets/doctor.jpg"),
          "occupation": "Cardiologist",
        },
        {
          "id": "3ac68afc-c605-48d3-a4f8-fbd91aa97f36",
          "title": "Isabel Lane",
          "dpPath": require("./assets/civil.jpg"),
          "occupation": "Gynacologist",
        },
        {
          "id": "58694a0f-3da1-471f-bd96-145571e29d27",
          "title": "Liaqat Malik",
          "dpPath": require("./assets/chef.png"),
          "occupation": "Neurologist",
        },
      ];

      
      

      const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} activeOpacity={.8}>
          <View style = {styles.itemContainer}>
             <Image style={styles.Circle} borderRadius={27.5}></Image>
             <View style={styles.rowView}>
                <Text style={styles.title}>{item.title}</Text>
                <Image style = {styles.verified} source = {require('./assets/verified.png')} ></Image>
             </View>
             <View style={styles.rowView}>
              <Text style={styles.occupation}>{item.occupation}</Text>
              <Rating style={styles.rating}
                type='heart'
                ratingCount={5}
                imageSize={15}
                //onFinishRating={this.ratingCompleted} 
                />
             </View>
             <Text style = {styles.desc}>This is a description. Like a very very very long description. Like you cannot even imagine. Like you cannot even imagine. Like you cannot even imagine. Like you cannot even imagine.</Text>
             <Text style = {styles.time}>Busy in 10 minutes</Text>
             <Image style = {styles.flag} source = {require('./assets/uk.png')}></Image>
             
          </View>
        </TouchableOpacity>
      );

      const renderItem = ({ item }) => {
        return (
          <Item
            item={item}
            onPress={() => props.navigation.navigate('ExpertDetailScreen')}
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
        elevation: 1,
    },
    itemContainer:{
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        marginTop: 12,
        fontSize: 24,
        color: '#07252E',

    },
    occupation:{
        marginTop: 5,
        fontSize: 16,
        color: '#07252E',
    },
    time: {
        fontSize: 18,
        marginLeft: 30,
        marginTop: 10,
    },
    Circle: {
        position: "absolute",
        height: 55,
        width: 55,
        borderRadius: 27.5,
        marginLeft: 15,
        backgroundColor: '#07252E',
        marginTop: 12,
        overflow: 'hidden'
      },
      flag: {
        height: 27,
        width: 43,
        position: 'absolute',
        right: 10,
        bottom: 10,
        borderRadius: 2,
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
          color: '#6D6D6D',
          width: 250,
          height: 35,
          marginLeft: 80,
          marginTop: 5,
      },
});

export default ExpertsScreen;