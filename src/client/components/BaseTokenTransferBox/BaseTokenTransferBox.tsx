import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import * as React from 'react';
import { BaseBox } from '../BaseBox/BaseBox';
import { ITokenTransfer } from '../../reducers/tokensTransfersReducer';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  table: {
    width: '100%',
  },
  waiting: {
    fontSize: 14,
    color: theme.palette.text.secondary,
  }
});

interface IProps {
  name: string;
  transfers: ITokenTransfer[];
}

function BaseTokenTransferBoxImpl(props: IProps) {
  const { classes } = props as any;
  const renderTable = () => (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>From</TableCell>
          <TableCell>To</TableCell>
          <TableCell>Amount</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.transfers.map(tx => {
          return (
            <TableRow key={tx.id}>
              <TableCell>{tx.from}</TableCell>
              <TableCell>{tx.to}</TableCell>
              <TableCell>{tx.amount}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );

  const renderWaiting = () => (
    <Typography className={classes.waiting}>Waiting for transactions...</Typography>
  );

  const content = props.transfers.length > 0 ? renderTable() : renderWaiting();
  return (
    <BaseBox title={`${props.name} Transfers`}>
      {content}
    </BaseBox>
  );
}

export const BaseTokenTransferBox = withStyles(styles)(BaseTokenTransferBoxImpl);
