import { ITransactionsSummary } from '../../shared/ITransactionsSummary';
import { IBlocksSummary } from '../../shared/IBlocksSummary';
import * as socketIO from 'socket.io';
import { Server } from 'http';

export class WS {
  private sockets = {};

  constructor(private server: Server) {
  }

  public init() {
    const io = socketIO(this.server);

    io.on('connection', socket => {
      this.sockets[socket.id] = socket;
      console.log(`Client connected, ${Object.keys(this.sockets).length} connections`);
      socket.on('disconnect', () => {
        delete this.sockets[socket.id];
        console.log(`Client disconnected, ${Object.keys(this.sockets).length} connections.`);
      });
    });
  }

  public emit(name: string, data: any) {
    Object.keys(this.sockets).map(id => this.sockets[id]).forEach(s => s.emit(name, data));
  }
}