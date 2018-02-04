import axios from 'axios';
import { ITransactionsDTO } from '../../shared/ITransactionsDTO';

export function loadTransactions() {
  return axios.get(`/api/transations`).then(res => res.data as ITransactionsDTO[]);
}