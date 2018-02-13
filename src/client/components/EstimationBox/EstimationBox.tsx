import * as React from 'react';
import { connect } from 'react-redux';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { IStore } from '../../store/IStore';
import { BaseBox } from '../BaseBox/BaseBox';
import { IBlocksSummary } from './../../../shared/IBlocksSummary';

const css = require('./EstimationBox.css');

interface IProps {
  blocksSummary: IBlocksSummary;
}

class EstimationBoxImpl extends React.Component<IProps> {
  public render() {
    return (
      <BaseBox title='Gap price to send Ether'>
        <ResponsiveContainer width='100%' height={250}>
          <BarChart width={730} height={250} data={this.props.blocksSummary.latestBlocksSummary}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='gasPriceToSendEther' fill='#8884d8' />
          </BarChart>
        </ResponsiveContainer>
      </BaseBox>
    );
  }
}

function mapStateToProps(store: IStore) {
  return {
    blocksSummary: store.blocksSummary
  };
}

export const EstimationBox: any = connect(mapStateToProps, null)(EstimationBoxImpl);
