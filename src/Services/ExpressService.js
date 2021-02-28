import axios from 'axios';
import React from 'react';
import { getTransactions, getAccount, getCategories } from './FakeService';

export default class ExpressService extends React.Component {
  constructor(props) {
    super(props);
    this.baseUrl = 'http://localhost:4000/';
    this.fake = true;
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
