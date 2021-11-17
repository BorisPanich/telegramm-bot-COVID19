const { Telegraf } = require('telegraf')

const bot = new Telegraf(2117268674, AAFtiA9O2gHwNdbwMa0XRngZ4VumbBceQYo)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
const { Telegraf } = require('telegraf')

const bot = new Telegraf(2117268674, AAFtiA9O2gHwNdbwMa0XRngZ4VumbBceQYo)
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('hipster', Telegraf.reply('λ'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))