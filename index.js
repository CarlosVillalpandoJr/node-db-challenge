const server = require('./server.js');

const PORT = 5004;

server.listen(PORT, () => {
    console.log(`***Listening on port ${PORT}***`)
})