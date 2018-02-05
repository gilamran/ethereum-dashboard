import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import * as React from 'react';

import { BlocksBox } from '../BlocksBox/BlocksBox';
import { ConfirmationTimesBox } from '../ConfirmationTimesBox/ConfirmationTimesBox';
import { TransactionsBox } from '../TransactionsBox/TransactionsBox';

const css = require('./Home.css');

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: 1200
  },
  headerCard: {
    backgroundColor: '#e89d3f'
  },
  header: {
    color: 'white',
    padding: 15,
    textShadow: '1px 1px 2px #717171'
  }
});

function HomeImpl(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.headerCard}>
              <Typography variant='headline' gutterBottom className={classes.header}>Ethereum Dashboard</Typography>
          </Paper>
        </Grid>
        {/* <Grid item xs={12}>
          <Typography variant='subheading' gutterBottom>The #1 Ethereum dashboard.</Typography>
        </Grid> */}
        <Grid item xs={6}>
          <TransactionsBox />
        </Grid>
        <Grid item xs={6}>
          <BlocksBox />
        </Grid>
        <Grid item xs={12}>
          <ConfirmationTimesBox />
        </Grid>
      </Grid>
    </div>
  );
}

export const Home = withStyles(styles)(HomeImpl);