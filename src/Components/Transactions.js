import React, { useState, forwardRef, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import currency from 'currency.js';
import Title from './Title';

import Chip from '@material-ui/core/Chip';
import ExpressService from '../Services/ExpressService';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';

const columns = [
  { title: 'Date', field: 'date', type: 'date', key: 1 },
  { title: 'Name', field: 'name', key: 2 },
  {
    title: 'Category',
    field: 'categories',
    key: 3,
  },
  { title: 'Notes', field: 'notes', key: 4 },
  { title: 'Amount', field: 'amount', type: 'currency', key: 5 },
];
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  hideLastBorder: {
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  },
});

const service = new ExpressService();
export default function Transactions() {
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  useEffect(() => {
    service.getTransactions().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.key}>{col.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">
                {row.categories?.map((c) => (
                  <Chip key={c} label={c} color="primary" size="small" />
                ))}
              </TableCell>
              <TableCell align="left">{row.notes}</TableCell>
              <TableCell align="right">{currency(row.amount).format()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
