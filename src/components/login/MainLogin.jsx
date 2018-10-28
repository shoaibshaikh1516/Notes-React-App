import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// const styles = {

// };

const styles = theme => ({
  card: {
    minWidth: 240,
    minHeight: 250,
    background: '#f9fafb',
  },
  textField: {
    marginLeft: 'theme.spacing.unit',
    marginRight: 'theme.spacing.unit',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  // button: {
  //   marginLeft: 70,
  //   marginRight: theme.spacing.unit,
  // },
});

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <TextField
        id="outlined-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
      />

      <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
      <CardContent />
      <CardActions>
        {/* <Button size="small">Login</Button>
        <Button size="small">Forgot</Button> */}
        <div className="row justify-content-md-center">
          <div className="col justify-content-md-center">
            <Button
              size="large"
              color="primary"
              variant="outlined"
              className={classes.button}
            >
              Login
            </Button>
            <Button
              size="large"
              color="primary"
              variant="outlined"
              className={classes.button}
            >
              Forgot
            </Button>
          </div>
        </div>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
