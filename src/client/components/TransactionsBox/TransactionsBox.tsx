import Typography from 'material-ui/Typography';
import * as React from 'react';
import { connect } from 'react-redux';

import { ITransactionsSummary } from '../../../shared/ITransactionsSummary';
import { IStore } from '../../store/IStore';
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
  transactionsSummary: ITransactionsSummary;
}

class TransactionsBoxImpl extends React.Component<IProps> {
  public render() {
    return (
      <BaseBox title='Total Transactions'>
        <Typography variant='headline' gutterBottom>{this.props.transactionsSummary.count.toLocaleString('En-US')}</Typography>
      </BaseBox>
    );
  }
}

function mapStateToProps(store: IStore) {
  return {
    transactionsSummary: store.transactionsSummary
  };
}

export const TransactionsBox: any = connect(mapStateToProps, null)(TransactionsBoxImpl);
