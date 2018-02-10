import Grid from 'material-ui/Grid';
import * as React from 'react';
import { connect } from 'react-redux';

import { ITokenTransfer } from '../../reducers/tokensTransfersReducer';
import { IStore } from '../../store/IStore';
import { BaseTokenTransferBox } from '../BaseTokenTransferBox/BaseTokenTransferBox';
import { getTokenTransfers } from './../../selectors/tokensTransfersSelectors';

const css = require('./TokensTransfers.css');

interface IProps {
  EOSTransfers: ITokenTransfer[];
  TronTransfers: ITokenTransfer[];
  VeChainTransfers: ITokenTransfer[];
  OmiseGOTransfers: ITokenTransfer[];
}

function TokensTransfersImpl(props: IProps) {
  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <BaseTokenTransferBox name='EOS' transfers={props.EOSTransfers} />
      </Grid>
      <Grid item xs={12}>
        <BaseTokenTransferBox name='Tron' transfers={props.TronTransfers} />
      </Grid>
      <Grid item xs={12}>
        <BaseTokenTransferBox name='VeChain' transfers={props.VeChainTransfers} />
      </Grid>
      <Grid item xs={12}>
        <BaseTokenTransferBox name='OmiseGO' transfers={props.OmiseGOTransfers} />
      </Grid>
    </Grid>
  );
}

function mapStateToProps(store: IStore) {
  return {
    EOSTransfers: getTokenTransfers(store, 'EOS'),
    TronTransfers: getTokenTransfers(store, 'Tron'),
    VeChainTransfers: getTokenTransfers(store, 'VeChain'),
    OmiseGOTransfers: getTokenTransfers(store, 'OmiseGO')
  };
}

export const TokensTransfers: any = connect(mapStateToProps, null)(TokensTransfersImpl);
