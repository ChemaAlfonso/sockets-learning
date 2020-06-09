const { io } = require('../server');

// =================================
// Detección de eventos
// =================================

// ==========================
// Escucha ON | Emite emit
// ==========================
io.on('connection', ( client ) => {
    console.log('Cliente conectado a IO en node');

    client.emit('sendMessage', {
        user: 'Chema',
        message: 'Hi from sockets on node!'
    }, resp => console.log( resp.message )); // Admite un callback de respuesta

    client.on('disconnect', () => {
        console.log('Cliente desconectado')
    });

    client.on('sendMessage', ( content, callback ) => {
        client.broadcast.emit('sendMessage', content);







        // console.log('Mensaje recibido', content);
        // callback({
        //     message: 'Todo correcto en el callback en server!'
        // });
    });

});