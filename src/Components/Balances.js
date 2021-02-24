import React, { useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import currency from 'currency.js';
import axios from 'axios';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Balances() {
  const classes = useStyles();

  const [currentBalance, setCurrentBalance] = React.useState(currency(3024.0));
  const [netBalance, setNetBalance] = React.useState(currency(110.1));

  useEffect(() => {
    axios
      .get('http://localhost:4000/account/603676bcefa592daf1dfe668')
      .then((response) => {
        setCurrentBalance(currency(response.data.amount));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <Title>Current Balance</Title>
      <Typography component="p" variant="h4">
        {currentBalance.format()}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <Title>Net Savings</Title>
      <Typography component="p" variant="h4">
        {netBalance.format()}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
    </React.Fragment>
  );
}
