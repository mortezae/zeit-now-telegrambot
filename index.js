const TelegramBot = require('node-telegram-bot-api')

var token = '133701337:AAAE-lEEtzjquQQJiWfZCBHRRf1_sFuR643M'
//var options = { request: { headers:{ '' }}}
var bot   = new TelegramBot(token)

module.exports = async (req, res) => {
  res.status(200)
  var msg    = req.body.message
  var cbq    = req.body.callback_query

  if (msg) {
    var chatId = msg.chat.id

    if (msg.text != null) {
      if (msg.text.match(/\/start/)) {
        await bot.sendMessage(chatId, 'Welcome!');
        await bot.sendMessage(chatId, 'Welcome again!');
        await bot.sendMessage(chatId, 'Welcome again x 2!')
      } else if (msg.text.includes('hi')) {
        await bot.sendMessage(chatId, 'Hello! :)')
      } else if (msg.text.includes('bye')) {
        await bot.sendMessage(chatId, 'Bye dear!')
      }
    } // if message.text
  }
  // return '{ok: true}'
  res.end();
}
