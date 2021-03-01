import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Transactions from '../Components/Transactions';
import Balances from '../Components/Balances';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';
import CategoryDialog from '../Components/CategoryDialog';
import Copyright from '../Components/Copyright';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  fixedHeight: {
    height: 240,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export default function NewTransaction(props) {
  const classes = useStyles();

  const [transactionToAdd, setTransactionToAdd] = React.useState({ date: new Date(), amount: 0, categories: [], notes: '' });

  const [open, setOpen] = React.useState(false);

  const handleDateChange = (date) => {
    setTransactionToAdd((prevState) => ({
      ...prevState,
      date: date,
    }));
  };

  const handleAmountChange = (a) => {
    setTransactionToAdd((prevState) => ({
      ...prevState,
      amount: a.target.value,
    }));
  };

  const handleCategoryChange = (c) => {
    setTransactionToAdd((prevState) => ({
      ...prevState,
      categories: c,
    }));
  };

  const handleMerchantChange = (m) => {
    setTransactionToAdd((prevState) => ({
      ...prevState,
      merchant: m.target.value,
    }));
  };

  const handleNotesChange = (n) => {
    setTransactionToAdd((prevState) => ({
      ...prevState,
      notes: n.target.value,
    }));
  };

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setTransactionToAdd((prevState) => ({
        ...prevState,
        categories: newValue,
      }));
    }
  };

  const handleSubmit = () => {
    console.log(transactionToAdd);
  };
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12}>
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <React.Fragment>
                <Typography variant="h6" gutterBottom>
                  New Transaction
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      label="Amount"
                      value={transactionToAdd.amount}
                      onChange={handleAmountChange}
                      name="amount"
                      id="amount"
                      InputProps={{
                        inputComponent: NumberFormatCustom,
                      }}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date"
                        label="Date"
                        value={transactionToAdd.date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField required id="name" name="name" label="Merchant" fullWidth onChange={handleMerchantChange} variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      disabled
                      id="category"
                      name="category"
                      label="Category"
                      fullWidth
                      value={transactionToAdd.categories}
                      variant="outlined"
                    />
                    <Button onClick={handleClickListItem} color="primary" variant="contained">
                      Select
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="notes"
                      name="notes"
                      label="Notes"
                      fullWidth
                      multiline
                      rows={4}
                      variant="outlined"
                      onChange={handleNotesChange}
                    />
                  </Grid>
                </Grid>
                <Button variant="contained" color="primary" onClick={handleSubmit} className={classes.button}>
                  Submit
                </Button>
              </React.Fragment>
            </Paper>
          </main>
        </Grid>
      </Grid>
      <Box pt={4}>
        <Copyright />
      </Box>
      <CategoryDialog id="ringtone-menu" keepMounted open={open} onClose={handleClose} value={transactionToAdd.categories} />
    </Container>
  );
}

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}
