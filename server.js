console.log('Inizializzazione...')
console.log('Il codice "server.js" è partito')
const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send('Il bot è online! - Bot is alive')
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Il server interno è stato creato e pronto all'uso!")});
}
module.exports = keepAlive;