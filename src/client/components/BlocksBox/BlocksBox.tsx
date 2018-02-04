import * as React from 'react';
import { connect } from 'react-redux';
import { IStore } from '../../store/IStore';
import { IBlocksInfo } from '../../reducers/blocksInfoReducer';

const css = require('./BlocksBox.css');

interface IProps {
  blocksInfo: IBlocksInfo;
}

class BlocksBoxImpl extends React.Component<IProps> {
  public render() {
    return (
      <div>Blocks Box: {this.props.blocksInfo.count}</div>
    );
  }
}

function mapStateToProps(store: IStore) {
  return {
    blocksInfo: store.blocksInfo
  };
}

export const BlocksBox: any = connect(mapStateToProps, null)(BlocksBoxImpl);
