import * as React from 'react';
import { LineChart, Line, AreaChart, XAxis, YAxis, Area, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { connect } from 'react-redux';
import { IStore } from '../../store/IStore';
import { IBlocksInfo } from './../../../shared/IBlocksInfo';
import { BaseBox } from '../BaseBox/BaseBox';

const css = require('./ConfirmationTimesBox.css');

interface IProps {
  blocksInfo: IBlocksInfo;
}

class ConfirmationTimesBoxImpl extends React.Component<IProps> {
  public render() {
    return (
      <BaseBox title='Block Confirmation Times'>
        <ResponsiveContainer width='100%' height={250}>
          <AreaChart data={this.props.blocksInfo.latestBlocks}>
            <defs>
              <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
              </linearGradient>
            </defs>
            <YAxis />
            <CartesianGrid strokeDasharray='2 2' />
            <Tooltip />
            <Area type='monotone' dataKey='confirmationTime' stroke='#8884d8' fillOpacity={1} fill='url(#colorUv)' />
          </AreaChart>
        </ResponsiveContainer>
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
