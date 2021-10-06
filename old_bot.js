
                (async()=>{
                const keepAlive = require("./server.js")
                const Discord = require("discord.js");
                const Database = require("easy-json-database");
                const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                const s4d = {
                    Discord,
                    database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
                    joiningMember:null,
                    reply:null,
                    tokenInvalid:false,
                    tokenError: null,
                    checkMessageExists() {
                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                    }
                };
                s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION"]
                });

                await s4d.client.login(process.env['TOKEN']).catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

keepAlive()
console.log('Il codice "bot.js" è partito')
console.log('Connessione a Discord...')
console.log('Autenticazione come "Saturpedia#2025..."')
await delay(Number(2)*1000);
console.log('Il server interno ora è occupato dal bot: Saturpedia"')
console.log('Moduli stato bot in caricamento')
s4d.client.on('ready', async () => {
          while(s4d.client && s4d.client.token) {
    s4d.client.user.setActivity(String('consultare le librerie'));
    await delay(Number(30)*1000);
    s4d.client.user.setActivity(String('far esplodere tutto con il wormhole'));
    await delay(Number(30)*1000);
    s4d.client.user.setActivity(String('rubare da Wikipedia'));
    await delay(Number(30)*1000);
    s4d.client.user.setActivity(String('eliminare i libri falsificati'));
    await delay(Number(30)*1000);
    s4d.client.user.setActivity(String('mettere in ordine i documenti'));
    await delay(Number(30)*1000);
    s4d.client.user.setActivity(String('ordinare nuove informazioni...'));
    await delay(Number(30)*1000);
    s4d.client.user.setActivity(String('calcolare come prendere il posto di Saturno...'));
    await delay(Number(30)*1000);

              console.log('Stato Bot Aggiornato - Ciclo continuo...')
          }
});
console.log('Moduli messaggi in caricamento')
s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'Saturpedia') {
    s4dmessage.channel.send(String('Uff dimmi.'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'Saturpedia aiuto') {
    s4dmessage.channel.send(String('Sono un semplice bot che risponde alle tue cagate, o almeno mi hanno programmato così. Mi trigghero facilmente.'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'Saturpedia aiutami veramente') {
    s4dmessage.channel.send(String('Uff, okay. I comandi sono: "Saturpedia fai schifo", "Saturpedia", "Saturpedia aiuto", "Saturpedia aiutami veramente", "Saturpedia sei inutile", "sAtUrPeDiA", "Saturpedia sei gay", "Saturpedia ho voglia di cazzo". Ora posso andare?'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'Saturpedia fai schifo') {
    s4dmessage.channel.send(String('Perfavore, per le critiche inutili: maiquantote@pianetaterra.spam'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'Saturpedia ho voglia di cazzo') {
    s4dmessage.channel.send(String('https://it.pornhub.com/gayporn/'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'Saturpedia ho voglia di figa') {
    s4dmessage.channel.send(String('https://it.pornhub.com/'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'Saturpedia evoca il gayismo') {
    s4dmessage.channel.send(String('https://it.pornhub.com/view_video.php?viewkey=ph61371cc851989 ;)'));
  }

});
                  
s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'Saturpedia sei gay') {
    s4dmessage.channel.send(String('No, ma mi piacciono gli Intel, i9 è un figo.'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'sAtUrPeDiA') {
    s4dmessage.channel.send(String('Si è il mio nome, non consumarlo.'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'Saturpedia sei inutile') {
    s4dmessage.channel.send(String('Mai quanto la tua esistenza sul pianeta terra.'));
  }

});
                return s4d;
                })();
            console.log('Possibile errore nel script "bot.js".')