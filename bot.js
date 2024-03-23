
const { translate } = require('@vitalets/google-translate-api');
const {Telegraf} = require('telegraf')

const bot = new Telegraf(`6524483709:AAGfO_A7IRhVof7yVqAG3tsg9RhMazbrbks`) 
bot.start(ctx=>ctx.reply('Tarjima botimizga xush kelibsiz !!! 🔍 😊'))

bot.on('text', async (ctx)=>{

    try {
        
        const textMessage = ctx.message.text;   

        const {text} = await translate(textMessage, {from:"uz", to:'en'})

        await ctx.reply(text)

    } catch (error) {
        await ctx.reply(JSON.stringify(error))
    }

})

bot.launch()