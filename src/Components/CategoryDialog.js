import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ExpressService from '../Services/ExpressService';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

const service = new ExpressService();
export default function CategoryDialog(props) {
  const classes = useStyles();

  const { onClose, value: valueProp, open, ...other } = props;
  const [checked, setChecked] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    if (!open) {
      service.getCategories().then((c) => {
        setCategories(c);
      });
    }
    setChecked(valueProp);
  }, [valueProp, open]);

  const handleCancel = () => {
    onClose(valueProp);
  };

  const handleOk = () => {
    onClose(checked);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <Dialog maxWidth="xs" aria-labelledby="confirmation-dialog-title" open={open} {...other}>
      <DialogTitle id="confirmation-dialog-title">Categories</DialogTitle>
      <DialogContent dividers>{getSublists()}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );

  function getSublists() {
    return (
      <List className={classes.root} subheader={<li />}>
        {categories.map((sectionId) => (
          <li key={`section-${sectionId.name}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader>{`${sectionId.name}`}</ListSubheader>
              {sectionId.subcategories.map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                  <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={value} />
                  </ListItem>
                );
              })}
            </ul>
          </li>
        ))}
      </List>
    );
  }
}

CategoryDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.array.isRequired,
};
