import { ITransactionsInfoDTO } from './../../shared/ITransactionsInfoDTO.d';
import * as socketIO from 'socket.io';

const sockets = {};

export function broadcastTransactionsInfo(transactionsInfoDTO: ITransactionsInfoDTO) {
  Object.keys(sockets).map(id => sockets[id]).forEach(s => s.emit('transactions-info', transactionsInfoDTO));
}

export function initSocketIO(server) {
  const io = socketIO(server);

  io.on('connection', socket => {
    sockets[socket.id] = socket;
    console.log(`Client connected, ${Object.keys(sockets).length} connections`);
    socket.on('disconnect', () => {
      delete sockets[socket.id];
      console.log(`Client disconnected, ${Object.keys(sockets).length} connections.`);
    });
  });
}