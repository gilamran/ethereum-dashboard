import * as io from 'socket.io-client';

const socket = io();

export function initWS() {
  socket.on('log', msg => {
    console.log(msg);
  });
}
