import * as React from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import { TransactionsBox } from '../TransactionsBox/TransactionsBox';
import { BlocksBox } from '../BlocksBox/BlocksBox';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';

const css = require('./Home.css');

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: 1200
  }
});

function HomeImpl(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant='headline' gutterBottom>Ethereum Dashboard</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='subheading' gutterBottom>The #1 Ethereum dashboard.</Typography>
        </Grid>
        <Grid item xs={6}>
          <TransactionsBox />
        </Grid>
        <Grid item xs={6}>
          <BlocksBox />
        </Grid>
      </Grid>
    </div>
  );
}

export const Home = withStyles(styles)(HomeImpl);