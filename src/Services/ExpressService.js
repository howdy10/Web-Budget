import axios from 'axios';
import React from 'react';
import { getTransactions, getAccount, getCategories } from './FakeService';
import firebase from 'firebase/app';
import 'firebase/database';

export default class ExpressService extends React.Component {
  constructor(props) {
    super(props);
    this.baseUrl = 'http://localhost:4000/';
    this.fake = true;
    this.faker = require('faker');

    // Set the configuration for your app
    // TODO: Replace with your project's config object
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: 'AIzaSyAV74XIqfCrBzXS6nbHzWthgFMo93CEYbI',
      authDomain: 'budget-app-e5d52.firebaseapp.com',
      databaseURL: 'https://budget-app-e5d52-default-rtdb.firebaseio.com',
      projectId: 'budget-app-e5d52',
      storageBucket: 'budget-app-e5d52.appspot.com',
      messagingSenderId: '1016750036701',
      appId: '1:1016750036701:web:99b0b531d6ef2b0e64ad34',
      measurementId: 'G-65F0X3EGRS',
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }

    // Get a reference to the database service
    this.database = firebase.database();
  }

  writeTransaction() {
    firebase
      .database()
      .ref('transaction/')
      .push({
        name: this.faker.company.companyName(),
        date: this.faker.date.past().toString(),
        amount: this.faker.finance.amount(),
        notes: this.faker.lorem.words(),
        categories: [this.faker.lorem.word(), this.faker.lorem.word()],
      });
  }

  async getTransactions() {
    if (this.fake) {
      return getTransactions();
    }
    return axios
      .get(this.baseUrl + 'transaction/')
      .then((response) => response.data)
      .catch(function (error) {
        console.log(error);
      });
  }
  async getAccount() {
    if (this.fake) {
      return getAccount();
    }
    return axios
      .get(this.baseUrl + 'account/603676bcefa592daf1dfe668')
      .then((response) => response.data)
      .catch(function (error) {
        console.log(error);
      });
  }
  async getCategories() {
    if (this.fake) {
      return getCategories();
    }
    return axios
      .get(this.baseUrl + 'categories/')
      .then((response) => response.data)
      .catch(function (error) {
        console.log(error);
      });
  }
}
