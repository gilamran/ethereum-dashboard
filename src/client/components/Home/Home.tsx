import * as React from 'react';
import { TransactionsBox } from '../TransactionsBox/TransactionsBox';
import { BlocksBox } from '../BlocksBox/BlocksBox';

const css = require('./Home.css');

export const Home = () => (
  <div>
    <h1>Ethereum Dashboard</h1>
    <p>#1 Ethereume dashboard.</p>
    <TransactionsBox />
    <BlocksBox />
  </div>
);
