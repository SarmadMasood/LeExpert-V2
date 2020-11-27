import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PaymentFormView from './PaymentFormView';

/**
 * The class renders a view with PaymentFormView
 */
export default class AddSubscriptionView extends React.Component {
  render() {
    const {value} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.subView}>
          <Text style={styles.text}>Total amount to be paid</Text>
          <Text style={styles.text2}>${value}</Text>
        </View>
          
          <View style={styles.cardFormWrapper}>
            <PaymentFormView {...this.props}/>
          </View>
        {/* Scrolls to the payment form */}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textWrapper: {
    margin: 10
  },
  infoText: {
    fontSize: 18,
    textAlign: 'center'
  },
  cardFormWrapper: {
    padding: 10,
    margin: 10
  },
  subView:{
    //justifyContent: 'center',
    height: 60,
    backgroundColor: '#fff',
    marginBottom: 10,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset:{width:1,height:1},
    elevation: 8,
    marginTop: 10,
    flexDirection: 'row'
},
text: {
  color: '#07252E',
  fontSize: 18,
  alignSelf: 'center',
  marginLeft: 16,
},
text2: {
  color: '#6AD3D6',
  fontSize: 18,
  alignSelf: 'center',
  position: 'absolute',
  right: 30,
  fontWeight: 'bold'
},
});
