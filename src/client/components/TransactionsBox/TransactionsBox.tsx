import * as React from 'react';
import { connect } from 'react-redux';
import { IStore } from '../../store/IStore';
import { ITransactionsInfo } from '../../reducers/transactionsInfoReducer';
import { BaseBox } from '../BaseBox/BaseBox';

const css = require('./TransactionsBox.css');

const styles = theme => ({
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  }
});

interface IProps {
  transactionsInfo: ITransactionsInfo;
}

class TransactionsBoxImpl extends React.Component<IProps> {
  public render() {
    return (
      <BaseBox title='Transactions'>
        <div>{this.props.transactionsInfo.count}</div>
      </BaseBox>
    );
  }
}

function mapStateToProps(store: IStore) {
  return {
    transactionsInfo: store.transactionsInfo
  };
}

export const TransactionsBox: any = connect(mapStateToProps, null)(TransactionsBoxImpl);
