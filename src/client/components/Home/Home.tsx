import * as React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { TransactionsBox } from '../TransactionsBox/TransactionsBox';

const css = require('./Home.css');

export const Home = () => (
  <Jumbotron>
    <h1>Ethereum Dashboard</h1>
    <p>#1 Ethereume dashboard.</p>
    <TransactionsBox />
  </Jumbotron>
);
