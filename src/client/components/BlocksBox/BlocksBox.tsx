import Typography from 'material-ui/Typography';
import * as React from 'react';
import { connect } from 'react-redux';

import { IStore } from '../../store/IStore';
import { BaseBox } from '../BaseBox/BaseBox';
import { IBlocksSummary } from './../../../shared/IBlocksSummary';

const css = require('./BlocksBox.css');

interface IProps {
  blocksSummary: IBlocksSummary;
}

class BlocksBoxImpl extends React.Component<IProps> {
  public render() {
    return (
      <BaseBox title='Last Block Number'>
        <Typography variant='headline' gutterBottom>
          {this.props.blocksSummary.count.toLocaleString('En-US')}
        </Typography>
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
