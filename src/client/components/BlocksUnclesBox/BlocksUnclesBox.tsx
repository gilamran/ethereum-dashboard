import Typography from 'material-ui/Typography';
import * as React from 'react';
import { connect } from 'react-redux';

import { IStore } from '../../store/IStore';
import { BaseBox } from '../BaseBox/BaseBox';
import { IBlocksSummary } from './../../../shared/IBlocksSummary';

const css = require('./BlocksUnclesBox.css');

interface IProps {
  blocksSummary: IBlocksSummary;
}

class BlocksUnclesBoxImpl extends React.Component<IProps> {
  public render() {
    return (
      <BaseBox title='Total blocks'>
        <Typography variant='headline' gutterBottom>
          {(this.props.blocksSummary.count + this.props.blocksSummary.numberOfUnkles).toLocaleString('En-US')}
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

export const BlocksUnclesBox: any = connect(mapStateToProps, null)(BlocksUnclesBoxImpl);
