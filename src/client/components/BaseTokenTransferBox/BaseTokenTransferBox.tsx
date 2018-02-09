import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import * as React from 'react';
import { BaseBox } from '../BaseBox/BaseBox';
import { ITokenTransfer } from '../../reducers/tokensTransfersReducer';

const styles = theme => ({
  table: {
    width: '100%',
  },
});

interface IProps {
  name: string;
  transfers: ITokenTransfer[];
}

function BaseTokenTransferBoxImpl(props: IProps) {
  const { classes } = props as any;
  return (
    <BaseBox title={`${props.name} Transfers`}>
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
    </BaseBox>
  );
}

export const BaseTokenTransferBox = withStyles(styles)(BaseTokenTransferBoxImpl);
