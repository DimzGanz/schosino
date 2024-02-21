// SEWA BOT

exports.dada = (prefix, pushname, ucapanWaktu) => {
return `${ucapanWaktu} kak ${pushname}
Berikut adalah list harga untuk sewa bot

     「  *𝘚𝘦𝘸𝘢 𝘎𝘳𝘰𝘶𝘱* 」
> Tanpa sewa, mau dimasukin grup?, chat owner aja (free) 

     「  *𝘉𝘶𝘺 𝘗𝘳𝘦𝘮* 」
> Gak ada premium-premium an, bot ini free for all


}

const fs = require("fs");
const { color } = require("../lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

    




















