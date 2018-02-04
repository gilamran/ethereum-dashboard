import * as socketIO from 'socket.io';

const sockets = {};

export function log(msg) {
  Object.keys(sockets).map(id => sockets[id]).forEach(s => s.emit('log', { msg }));
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