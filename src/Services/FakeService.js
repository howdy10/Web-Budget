import axios from 'axios';
import React from 'react';

const faker = require('faker');

export function getTransactions() {
  return Promise.resolve([
    {
      id: faker.random.number(),
      name: faker.company.companyName(),
      date: faker.date.past().toString(),
      amount: faker.finance.amount(),
      notes: faker.lorem.words(),
      categories: [faker.lorem.word(), faker.lorem.word()],
    },
    {
      id: faker.random.number(),
      name: faker.company.companyName(),
      date: faker.date.past().toString(),
      amount: faker.finance.amount(),
      notes: faker.lorem.words(),
      categories: [],
    },
    {
      id: faker.random.number(),
      name: faker.company.companyName(),
      date: faker.date.past().toString(),
      amount: faker.finance.amount(),
      notes: faker.lorem.words(),
      categories: [faker.lorem.word(), faker.lorem.word()],
    },
  ]);
}
export function getAccount() {
  return Promise.resolve({ amount: faker.finance.amount() });
}
