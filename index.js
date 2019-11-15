const TelegramBot = require('node-telegram-bot-api')

var token = '861772445:AAE-yaLFzjquQQJiWfZCBHRRf1_sFuR643M'
var bot   = new TelegramBot(token)

module.exports = async function (req, res) {
  var msg    = req.body.message
  var cbq    = req.body.callback_query

  if (msg) {
    var chatId = msg.chat.id

    if (msg.text != null) {
      if (msg.text.match(/\/start/)) {
        await bot.sendMessage(chatId, 'Welcome!')
      } else if (msg.text.includes('سلام')) {
        await bot.sendMessage(chatId, 'Hello! :)')
      } else if (msg.text.includes('bye')) {
        await bot.sendMessage(chatId, 'Bye dear!')
      }
    } // if message.text
  } // if msg

  res.end()
}
