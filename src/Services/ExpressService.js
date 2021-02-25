import axios from 'axios';
import React from 'react';

export default class ExpressService extends React.Component {
  constructor(props) {
    super(props);
    this.baseUrl = 'http://localhost:4000/';
    this.fake = true;
    this.faker = require('faker');
  }

  async getTransactions() {
    if (this.fake) {
      return Promise.resolve([
        {
          id: 1,
          name: this.faker.company.companyName(),
          date: this.faker.date.past().toString(),
          amount: this.faker.finance.amount(),
          notes: this.faker.lorem.words(),
          categories: [this.faker.lorem.word(), this.faker.lorem.word()],
        },
        {
          id: 2,
          name: this.faker.company.companyName(),
          date: this.faker.date.past().toString(),
          amount: this.faker.finance.amount(),
          notes: this.faker.lorem.words(),
          categories: [],
        },
        {
          id: 3,
          name: this.faker.company.companyName(),
          date: this.faker.date.past().toString(),
          amount: this.faker.finance.amount(),
          notes: this.faker.lorem.words(),
          categories: [this.faker.lorem.word(), this.faker.lorem.word()],
        },
      ]);
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
      return Promise.resolve({ amount: this.faker.finance.amount() });
    }
    return axios
      .get(this.baseUrl + 'account/603676bcefa592daf1dfe668')
      .then((response) => response.data)
      .catch(function (error) {
        console.log(error);
      });
  }
}
