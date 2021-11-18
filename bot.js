require('dotenv').config();
const { Telegraf } = require('telegraf');
const api = require('covid19-api');
const { Markup } = require('telegraf');
const CONTRIES_LIST = require('./constants');

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) =>
    ctx.reply(
        `
Welcome ${ctx.message.from.first_name}!
You know a statistic of COVID19.
Input a name of country from English and get a statistic.
Looking all list of countries can command /help.
`,
        Markup.keyboard([
            ['belarus', 'russia'],
            ['ukraine', 'poland'],
            ['lethuania', 'latvia'],
        ])
            .resize()   // нормализует размер кнопок
            .extra()    // выводит кнопки
    )
)

bot.help((ctx) => ctx.reply(CONTRIES_LIST))

bot.on('text', async (ctx) => {
    let data = {}

    try {
        data = await api.getReportsByCountries(ctx.message.text)
        const formatData = `
    Country: ${data[0][0].country}
    Cases: ${data[0][0].cases}
    Deaths: ${data[0][0].deaths}
    Recoverd: ${data[0][0].recovered}
    `
        ctx.reply(formatData)
    } catch {
        ctx.reply('Error such a country does not exist')
    }
})
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

// eslint-disable-next-line no-console
console.log('bot launched')