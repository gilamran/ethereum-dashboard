import * as React from 'react';
import { connect } from 'react-redux';
import { IStore } from '../../store/IStore';
import { IBlocksSummary } from './../../../shared/IBlocksSummary';
import { BaseBox } from '../BaseBox/BaseBox';

const css = require('./BlocksBox.css');

interface IProps {
  blocksSummary: IBlocksSummary;
}

class BlocksBoxImpl extends React.Component<IProps> {
  public render() {
    return (
      <BaseBox title='Blocks'>
        <div>{this.props.blocksSummary.count}</div>
      </BaseBox>
    );
  }
}

function mapStateToProps(store: IStore) {
  return {
    blocksSummary: store.blocksSummary
  };
}

export const BlocksBox: any = connect(mapStateToProps, null)(BlocksBoxImpl);
