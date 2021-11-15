console.log('Inizializzazione...')
console.log('Il codice "server.js" è partito')
const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send('Se vedi questa schermata significa che è tutto ok! Saturpedia è online! ✔')
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Server per il client Discord.js è online\n--------------------------------\nLog dei comandi:")});
}
module.exports = keepAlive;