import * as React from 'react';
import { connect } from 'react-redux';

import { ITokenTransfer } from '../../reducers/tokensTransfersReducer';
import { IStore } from '../../store/IStore';
import { BaseTokenTransferBox } from '../BaseTokenTransferBox/BaseTokenTransferBox';
import { getTokenTransfers } from './../../selectors/tokensTransfersSelectors';

const css = require('./EOSBox.css');

interface IProps {
  tokenTransfers: ITokenTransfer[];
}

function EOSBoxImpl(props: IProps) {
  return (
    <BaseTokenTransferBox name='EOS' transfers={props.tokenTransfers}/>
  );
}

function mapStateToProps(store: IStore) {
  return {
    tokenTransfers: getTokenTransfers(store, 'EOS')
  };
}

export const EOSBox: any = connect(mapStateToProps, null)(EOSBoxImpl);
