const socket = io();

// =================================
// Detección de eventos
// =================================

// ===================
// Escucha
// ===================
socket.on('connect', () => {
    console.log('conectado a IO en cliente')
});

socket.on('disconnect', () => {
    console.log('perdida de conexión a IO en cliente')
});

socket.on('reconnect', () => {
    console.log('Reconectado a IO en cliente')
});

socket.on('sendMessage', ( content, callback ) => {
    console.log('Mensaje recibido', content)
    if( callback ) callback({ message: 'Todo ok desde el callback en cliente!' });
});

// ===================
// Emisión
// ===================
socket.emit('sendMessage', {
    user: 'Chema',
    message: 'Hi from sockets!'
}, ( resp ) => {
    console.log(resp.message)
});