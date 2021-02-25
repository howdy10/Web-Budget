import React, { useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import currency from 'currency.js';
import ExpressService from '../Services/ExpressService';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const service = new ExpressService();
export default function Balances() {
  const classes = useStyles();

  const [currentBalance, setCurrentBalance] = React.useState(currency(0.0));
  const [netBalance, setNetBalance] = React.useState(currency(110.1));

  useEffect(() => {
    service.getAccount().then((d) => {
      setCurrentBalance(currency(d.amount));
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
