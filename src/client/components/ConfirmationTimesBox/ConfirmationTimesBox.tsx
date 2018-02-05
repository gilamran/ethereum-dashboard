import * as React from 'react';
import { connect } from 'react-redux';
import { IStore } from '../../store/IStore';
import { IBlocksInfo } from '../../reducers/blocksInfoReducer';
import { BaseBox } from '../BaseBox/BaseBox';

const css = require('./ConfirmationTimesBox.css');

interface IProps {
  blocksInfo: IBlocksInfo;
}

class ConfirmationTimesBoxImpl extends React.Component<IProps> {
  public render() {
    return (
      <BaseBox title='Block Confirmation Times'>
        <div>{this.props.blocksInfo.confirmationTimes}</div>
      </BaseBox>
    );
  }
}

function mapStateToProps(store: IStore) {
  return {
    blocksInfo: store.blocksInfo
  };
}

export const ConfirmationTimesBox: any = connect(mapStateToProps, null)(ConfirmationTimesBoxImpl);
