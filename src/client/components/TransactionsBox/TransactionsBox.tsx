import * as React from 'react';
import { connect } from 'react-redux';
import { IStore } from '../../store/IStore';
import { ITransactionsInfo } from '../../reducers/transactionsInfoReducer';

const css = require('./TransactionsBox.css');

interface IProps {
  transactionsInfo: ITransactionsInfo;
}

class TransactionsBoxImpl extends React.Component<IProps> {
  public render() {
    return (
      <div>Transactions Box: {this.props.transactionsInfo.count}</div>
    );
  }
}

function mapStateToProps(store: IStore) {
  return {
    transactionsInfo: store.transactionsInfo
  };
}

export const TransactionsBox: any = connect(mapStateToProps, null)(TransactionsBoxImpl);
