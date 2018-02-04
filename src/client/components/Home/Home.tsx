import * as React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { loadTransactions } from '../../utils/api-facade';
import { TransactionsBox } from '../TransactionsBox/TransactionsBox';

const css = require('./Home.css');

export class Home extends React.Component {
  constructor() {
    super();
    loadTransactions().then(data => {
      console.log(data);
    });
  }
  public render() {
    return (
      <Jumbotron>
        <h1>Ethereum Dashboard</h1>
        <p>#1 Ethereume dashboard.</p>
        <TransactionsBox/>
      </Jumbotron>
    );
  }
}
