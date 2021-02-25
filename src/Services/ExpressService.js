import axios from 'axios';
import React from 'react';

export default class ExpressService extends React.Component {
  constructor(props) {
    super(props);
    this.baseUrl = 'http://localhost:4000/';
  }

  async getTransactions() {
    return axios
      .get(this.baseUrl + 'transaction/')
      .then((response) => response.data)
      .catch(function (error) {
        console.log(error);
      });
  }
  async getAccount() {
    return axios
      .get(this.baseUrl + 'account/603676bcefa592daf1dfe668')
      .then((response) => response.data)
      .catch(function (error) {
        console.log(error);
      });
  }
}
