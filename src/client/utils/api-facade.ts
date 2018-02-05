import { ITransactionsSummary } from './../../shared/ITransactionsSummary';
import axios from 'axios';

export function loadTransactions() {
  return axios.get(`/api/transations`).then(res => res.data as ITransactionsSummary);
}