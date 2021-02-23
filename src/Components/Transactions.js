import React, { useState, forwardRef } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import MaterialTable from 'material-table';
import {
  AddBox,
  Check,
  Clear,
  DeleteOutline,
  ChevronRight,
  Edit,
  SaveAlt,
  FilterList,
  FirstPage,
  LastPage,
  ChevronLeft,
  Search,
  ArrowDownward,
  Remove,
  ViewColumn,
} from '@material-ui/icons';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const columns = [
  { title: 'Date', field: 'date' },
  { title: 'Name', field: 'name' },
  { title: 'Ship To', field: 'shipTo' },
  { title: 'Payment Method', field: 'payment' },
  { title: 'Sales Amount', field: 'amount' },
];

export default function Transactions() {
  const [data, setData] = React.useState([
    { date: '16 Mar, 2019', name: 'Elvis Presley', shipTo: 'Tupelo, MS', payment: 'VISA ⠀•••• 3719', amount: 312.44 },
    { date: '16 Mar, 2019', name: 'Paul McCartney', shipTo: 'London, UK', payment: 'VISA ⠀•••• 2574', amount: 866.99 },
    { date: '16 Mar, 2019', name: 'Tom Scholz', shipTo: 'Boston, MA', payment: 'MC ⠀•••• 1253', amount: 100.81 },
    { date: '16 Mar, 2019', name: 'Michael Jackson', shipTo: 'Gary, IN', payment: 'AMEX ⠀•••• 2000', amount: 654.39 },
    { date: '15 Mar, 2019', name: 'Bruce Springsteen', shipTo: 'Long Branch, NJ', payment: 'VISA ⠀•••• 5919', amount: 212.79 },
  ]);
  return <MaterialTable title="Recent Transactions" icons={tableIcons} columns={columns} data={data} />;
}
