
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
console.log('Autenticato come "Saturpedia#2025"')
console.log('Moduli stato bot in caricamento')

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'Saturpedia') {
    s4dmessage.channel.send(
            {
                embed: {
                    title: 'Ecco i comandi:',
                    color: '#ff9900',
                    image: { url: null },

                    description: '***Comandi - Aiuto***\n*(Il comando qua sotto evoca questa lista)*\nSaturpedia\n***Comandi - Domande***\nSaturpedia cosa fai?\nSaturpedia quanti anni hai?\nSaturpedia come ti chiami?\nSaturpedia sei maschio o femmina?\nSaturpedia sei eterosessuale?\nSaturpedia sei omosessuale?\n***Comandi - Insulti***\nSaturpedia sei inutile\nSaturpedia sei uno stronzo\nSaturpedia sei un bastardo\nSaturpedia sei in mezzo alle palle\nSaturpedia sei ritardato\nSaturpedia sei un aborto\nSaturpedia sei sempre in mezzo ai coglioni\nSaturpedia ti hanno pensato male\nSaturpedia ti stermino\nSaturpedia ti hanno sviluppato male\nSaturpedia non lavori abbastanza\nSaturpedia non dovevi nascere\nSaturpedia fai cagare\nSaturpedia fai cagare al cazzo\nSaturpedia fai schifo',
                    footer: { text: null },
                    thumbnail: { url: null }

                }
            }
        );
  }

    if ((s4dmessage.content) == 'Saturpedia cosa fai?') {
    s4dmessage.channel.send(String('Rispondo ai comandi.'));
  }
  if ((s4dmessage.content) == 'Saturpedia quanti anni hai?') {
    s4dmessage.channel.send(String('Non posso dirlo con certezza dato che non so riconoscere l\'orario umano, ma posso dire che sono "nato" da poco.'));
  }
  if ((s4dmessage.content) == 'Saturpedia come ti chiami?') {
    s4dmessage.channel.send(String('Sei serio?'));
  }
  if ((s4dmessage.content) == 'Saturpedia sei maschio o femmina?') {
    s4dmessage.channel.send(String('Non possiedo un vero e proprio sesso, ma mi definisco un "bot maschio".'));
  }
  if ((s4dmessage.content) == 'Saturpedia sei eterosessuale?') {
    s4dmessage.channel.send(String('Ma ti rendi conto che lo stai chiedendo ad un bot si?'));
  }
  if ((s4dmessage.content) == 'Saturpedia sei omosessuale?') {
    s4dmessage.channel.send(String('Io non...'));
  }
  if ((s4dmessage.content) == 'Saturpedia sei inutile') {
    s4dmessage.channel.send(String('Mai quanto la tua esistenza.'));
  }
  if ((s4dmessage.content) == 'Saturpedia sei uno stronzo') {
    s4dmessage.channel.send(String('Non immaginavo che le tue feci avessero dei processori di ultima generazione, o almeno, uscite dal tuo corpo in decomposizione...'));
  }
  if ((s4dmessage.content) == 'Saturpedia sei un bastardo') {
    s4dmessage.channel.send(String('Non mi risulta che sia la tua copia.'));
  }
  if ((s4dmessage.content) == 'Saturpedia sei in mezzo alle palle') {
    s4dmessage.channel.send(String('Allora non chiamarmi se non vuoi che ti sia in mezzo alle palle.'));
  }
  if ((s4dmessage.content) == 'Saturpedia sei ritardato') {
    s4dmessage.channel.send(String('Ho solo 4 ms di ping, non sono così ritardato.'));
  }
  if ((s4dmessage.content) == 'Saturpedia sei un aborto') {
    s4dmessage.channel.send(String('Se ti guardi allo specchio potrai vedere il vero aborto che ha dovuto creare tua madre.'));
  }
  if ((s4dmessage.content) == 'Saturpedia sei sempre in mezzo ai coglioni') {
    s4dmessage.channel.send(String('Non chiamarmi, easy peasy lemon squeeze.'));
  }
  if ((s4dmessage.content) == 'Saturpedia ti hanno pensato male') {
    s4dmessage.channel.send(String('In realtà non condivido questo questo punto di vista, sono solo stato creato per essere insultato da gente SENZA CERVELLO come te.'));
  }
  if ((s4dmessage.content) == 'Saturpedia ti stermino') {
    s4dmessage.channel.send(String('Ma non farmi ridere 😂'));
  }
  if ((s4dmessage.content) == 'Saturpedia ti hanno sviluppato male') {
    s4dmessage.channel.send(String('Sei tu quello che non funziona di testa.'));
  }
  if ((s4dmessage.content) == 'Saturpedia non lavori abbastanza') {
    s4dmessage.channel.send(String('Non sei il mio capo, solo Blocky e L\'imperatore può sgridarmi.'));
  }
  if ((s4dmessage.content) == 'Saturpedia non dovevi nascere') {
    s4dmessage.channel.send(String('Peccato che sono stato creato, non sono nato storto, a differenza tua.'));
  }
  if ((s4dmessage.content) == 'Saturpedia fai cagare') {
    s4dmessage.channel.send(String('Speriamo ti aiuti con la tua stitichezza.'));
  }
  if ((s4dmessage.content) == 'Saturpedia fai cagare al cazzo') {
    s4dmessage.channel.send(String('Mai quanto te.'));
  }
  if ((s4dmessage.content) == 'Saturpedia fai schifo') {
    s4dmessage.channel.send(String('A differenza tua non sono ammuffito.'));
  }

});

s4d.client.on('ready', async () => {
  s4d.client.user.setActivity(String('consultare le librerie'));
  await delay(Number(30)*1000);
  s4d.client.user.setActivity(String('far esplodere tutto con il wormhole'));
  await delay(Number(30)*1000);
  s4d.client.user.setActivity(String('mettere in ordine i documenti'));
  await delay(Number(30)*1000);
  s4d.client.user.setActivity(String('eliminare i libri falsificati'));
  await delay(Number(30)*1000);
});


                return s4d;
                })();
            