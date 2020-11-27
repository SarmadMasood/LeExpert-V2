import React from 'react';
import AddSubscriptionView from '../components/AddSubscriptionView';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STRIPE_ERROR = 'Payment service error. Try again later.';
const SERVER_ERROR = 'Server error. Try again later.';
const STRIPE_PUBLISHABLE_KEY = 'pk_test_51HotnSEbhvrNQs9J5DvauwCe1nCzZSjnWj12XnZK52vSeh9y7p0Npj8UeitV3CY8YNo6iPhzQNtJKiYArBnxtzig0080Tf2lGT';
const STRIPE_SECRET_KEY = 'sk_test_51HotnSEbhvrNQs9JZu8B6kn3wDSnwGsXT1Qlz9NvJVN4LYUYnY2jIW0R6pLGHL5l2WQ2Gx7JtsDPRHvDh0zXuifv008mDmBpJc'

/**
 * The method sends HTTP requests to the Stripe API.
 * It's necessary to manually send the payment data
 * to Stripe because using Stripe Elements in React Native apps
 * isn't possible.
 *
 * @param creditCardData the credit card data
 * @return Promise with the Stripe data
 */
const getCreditCardToken = (creditCardData) => {
  const card = {
    'card[number]': creditCardData.values.number.replace(/ /g, ''),
    'card[exp_month]': creditCardData.values.expiry.split('/')[0],
    'card[exp_year]': creditCardData.values.expiry.split('/')[1],
    'card[cvc]': creditCardData.values.cvc
  };

  return fetch('https://api.stripe.com/v1/tokens', {
    headers: {
      // Use the correct MIME type for your server
      Accept: 'application/json',
      // Use the correct Content Type to send data in request body
      'Content-Type': 'application/x-www-form-urlencoded',
      // Use the Stripe publishable key as Bearer
      Authorization: `Bearer ${STRIPE_PUBLISHABLE_KEY}`
    },
    // Use a proper HTTP method
    method: 'post',
    // Format the credit card data to a string of key-value pairs
    // divided by &
    body: Object.keys(card)
      .map(key => key + '=' + card[key])
      .join('&')
  }).then(response => response.json());
};

/**
 * The method imitates a request to our server.
 *
 * @param creditCardToken
 * @return {Promise<Response>}
 */
// const stripe = require('stripe')('sk_test_51HotnSEbhvrNQs9JZu8B6kn3wDSnwGsXT1Qlz9NvJVN4LYUYnY2jIW0R6pLGHL5l2WQ2Gx7JtsDPRHvDh0zXuifv008mDmBpJc')

const subscribeUser = (creditCardToken,value) => {
  console.log('Credit card token\n', creditCardToken)
  const charge = {
    'amount': value,
    'currency': 'USD',
    'source': creditCardToken.id,
    'description': 'Appointment booking charges'
  };

  return fetch('https://api.stripe.com/v1/charges', {
    headers: {
      // Use the correct MIME type for your server
      Accept: 'application/json',
      // Use the correct Content Type to send data in request body
      'Content-Type': 'application/x-www-form-urlencoded',
      // Use the Stripe publishable key as Bearer
      Authorization: `Bearer ${STRIPE_SECRET_KEY}`
    },
    // Use a proper HTTP method
    method: 'post',
    // Format the credit card data to a string of key-value pairs
    // divided by &
    body: Object.keys(charge)
      .map(key => key + '=' + charge[key])
      .join('&')
  }).then(response => response.json());
};

/**
 * The main class that submits the credit card data and
 * handles the response from Stripe.
 */
export default class AddSubscription extends React.Component {
  // static navigationOptions = {
  //   title: 'Subscription page',
  // };

  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      error: null,
      success: null
    }
  }

  // Handles submitting the payment request
  onSubmit = async (creditCardInput) => {
    const { navigation } = this.props;
    // Disable the Submit button after the request is sent
    this.setState({ submitted: true });
    let creditCardToken;

    try {
      // Create a credit card token
      creditCardToken = await getCreditCardToken(creditCardInput);
      if (creditCardToken.error) {
        // Reset the state if Stripe responds with an error
        // Set submitted to false to let the user subscribe again
        this.setState({ submitted: false, error: STRIPE_ERROR, success: null });
        return;
      }
    } catch (e) {
      // Reset the state if the request was sent with an error
      // Set submitted to false to let the user subscribe again
      this.setState({ submitted: false, error: STRIPE_ERROR, success: null });
      return;
    }

    // Send a request to your server with the received credit card token
    let chargeResult;
    let value = this.props.route.params.charges*100;
    try{
      chargeResult = await subscribeUser(creditCardToken,value);
      this.setState({ submitted: false, error: null, success: chargeResult });
      try {
        await AsyncStorage.setItem('paidgroup', 'true')
      } catch (e) {
        console.log(e)
      }
      if (chargeResult.error) {
        // Reset the state if Stripe responds with an error
        // Set submitted to false to let the user subscribe again
        this.setState({ submitted: false, error: STRIPE_ERROR, success: null });
        return;
      }
    } catch (e) {
      // Reset the state if the request was sent with an error
      // Set submitted to false to let the user subscribe again
      this.setState({ submitted: false, error: STRIPE_ERROR, success: null });
      return;
    }

    console.log('Charge results:', chargeResult)
    // Handle any errors from your server
    if (error) {
      this.setState({ submitted: false, error: SERVER_ERROR, success: null });
    } else 
    {  
      this.setState({ submitted: false, error: null, success: chargeResult });
      try {
        await AsyncStorage.setItem('paidgroup', 'true')
      } catch (e) {
        console.log(e)
      }
      console.log('success')
    }
  };

  render() {
    const { submitted, error, success} = this.state;
    return (
        <AddSubscriptionView
          error={error}
          submitted={submitted}
          onSubmit={this.onSubmit}
          success={success}
          value={this.props.route.params.charges}
        />
    );
  }
}