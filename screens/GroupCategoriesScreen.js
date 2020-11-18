import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity, ImageBackground} from 'react-native';

const GroupCategoriesScreen = (props) => {
    const [selectedId, setSelectedId] = useState(null);
    const DATA = [
        {
          "id": "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          "title": "Math",
          "bgPath": require("./assets/Math.png")
        },
        {
          "id": "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          "title": "Physics",
          "bgPath": require("./assets/Physics.png")
        },
        {
          "id": "58694a0f-3da1-471f-bd96-145571e29d72",
          "title": "Biology",
          "bgPath": require("./assets/Bio.png")
        },
      ];

      const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, style]} activeOpacity={.8}>
          <ImageBackground style = {styles.itemContainer} source = {item.bgPath}>
          <Text style={styles.title}>{item.title}</Text>
          </ImageBackground>
        </TouchableOpacity>
      );

      const renderItem = ({ item }) => {
        return (
          <Item
            item={item}
            onPress={() => props.navigation.navigate('GroupsScreen')}
          />
        );
      };
      
    return (
        <View style = {styles.container}>
            <ImageBackground style = {styles.container} source = {require('./assets/categoriesbg.png')}>
            <FlatList style = {styles.subContainer} contentContainerStyle = {{padding:5}}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}>
          
          </FlatList>
            </ImageBackground>
      <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    subContainer:{
        marginTop: 15,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset:{width:1,height:1},
        elevation: 8,
    },
    itemContainer:{
        overflow: 'hidden',
        height: 100,
        backgroundColor: '#6AD3D6',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        elevation: 8,
    },
    title: {
        marginTop: 33,
        fontSize: 24,
        color: '#fff'
    }
});

export default GroupCategoriesScreen;