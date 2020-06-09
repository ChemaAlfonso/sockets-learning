const express = require('express');
const socketIO = require('socket.io');
const http = require('http');


const path = require('path');

const app = express();

// Socket IO trabaja con servidor nativo de node (NO EXPRESS)
const server = http.createServer( app );

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Se inicializa socketIO pasándole el server
module.exports.io = socketIO( server );

require('./sockets/socket.custom');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});