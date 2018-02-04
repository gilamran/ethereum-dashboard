import { ITransactionsInfoDTO } from './../../shared/ITransactionsInfoDTO.d';
import axios from 'axios';

export function loadTransactions() {
  return axios.get(`/api/transations`).then(res => res.data as ITransactionsInfoDTO);
}