import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { CreditCardInput } from 'react-native-credit-card-input';
import { FontAwesome } from '@expo/vector-icons';

/**
 * Renders the payment form and handles the credit card data
 * using the CreditCardInput component.
 */
export default class PaymentFormView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardData: { valid: false } };
  }

  render() {
    const { onSubmit, submitted, error, success} = this.props;

    return (
      <View >
        <View>
          <CreditCardInput requiresName onChange={(cardData) => this.setState({ cardData })} />
        </View>
        <View style={styles.buttonWrapper}>
          
          {/* Show errors */}
          {error && (
            <View style={styles.alertWrapper}>
              <View style={styles.alertIconWrapper}>
                <FontAwesome name="exclamation-circle" size={20} style={{ color: '#c22' }} />
              </View>
              <View style={styles.alertTextWrapper}>
                <Text style={styles.alertText}>{error}</Text>
              </View>
            </View>
          )}

          {success && (
            <View style={styles.successWrapper}>
            <View style={styles.alertIconWrapper}>
              <FontAwesome name="check-circle" size={20} style={{ color: '#5ca904' }} />
            </View>
            <View style={styles.alertTextWrapper}>
              <Text style={styles.successText}>Payment Successful</Text>
            </View>
          </View> 
          )}
  
            
        </View>
           
        <Button
            title='Confirm'
            disabled={!this.state.cardData.valid || submitted}
            onPress={() => onSubmit(this.state.cardData)}
          />    

      </View>
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  buttonWrapper: {
    padding: 10,
    zIndex: 100
  },
  alertTextWrapper: {
    flex: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  alertIconWrapper: {
    padding: 5,
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  alertText: {
    color: '#c22',
    fontSize: 16,
    fontWeight: '400'
  },
  alertWrapper: {
    backgroundColor: '#ecb7b7',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 5,
    paddingVertical: 5,
    marginTop: 10
  },
  successText: {
    color: '#5ca904',
    fontSize: 17,
    fontWeight: '400'
  },
  successWrapper: {
    backgroundColor: '#bffb7b',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 5,
    paddingVertical: 5,
    marginTop: 10
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    height: Dimensions.get('window').height/10,
    width: Dimensions.get('window').width,
    backgroundColor: '#6AD3D6'
},
});
