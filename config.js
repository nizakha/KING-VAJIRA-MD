const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════faisal udas════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb://uwrr2obvrb4kbwnrvimy:rbgieh8nfk7EylXCh2D@byg4ii8uzy5rro8bcdfu-mongodb.services.clever-cloud.com:2008/byg4ii8uzy5rro8bcdfu"
global.port= process.env.PORT || 5000
global.email = 'botwhatsapp204@gmail.com'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/naveeddogar_' // add your username
global.sudo = process.env.SUDO || '923112657705'
global.devs = '923112657705';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'faisal udas
  botname:   process.env.BOT_NAME === undefined ? 'faisal-udas-𝙈𝘿' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Vajira Rathnayaka' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? true: process.env.SESSION_ID,3fe5bf51-KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0pSWmxJcGU3WW4wMnpJY2pIMGpxclV4OWxQYUFDOVAzT0cvVFAyakdGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlBRR0s1K3dyMkh0dlVuOVFnK1JiL2tZL20ySmYrTk41SGdKQzc2OVVnRT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRCtKendtYm1jZGxNSWdsT2FzOU1NQ2ZKd1E1QUN0Rlk3bXJCUWNYUFZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZ0JLVUgrSWZmN2s5K2ZVZ1dwRVRuWHgyU3Zrc3pYVlRpYlJMNVJiY1N3PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdCejJTMmZRb2RWb3U0WkxOS0FxU0dIZjRaeDd0OE1SeEl6TVpEaituV1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilh0Z3Z2SS9OaDYwWEV4ZCsxU2cvbG1XYnh5K1RMdFhLMnJXM0Jtc3djd0k9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmbCtTbkpyQjRKQ0RpVG96VzJvMW12Szl3cERtS3U3MkpOdE9HWDZWVEFEcXR1UytCaDBJenV2MExpWVRhZjg1a1UybGRuT0NDbUlDNjhOdWxxZjlCdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI0MywiYWR2U2VjcmV0S2V5IjoiRXhFaE1QSGszNVU4amhmWXZLQ2xEaVFoQ0N5cWQyYkQyR1Uxc1NrekF5ND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMTI2NTc3MDVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDM4MUI0QURENDY3MkFEQTNCMEU0NDlEM0U5NjYzQjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNDk5NzIzMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTEyNjU3NzA1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ5Mjg5MzExNjZDMTlBRDJDQTczRDZDMkY0RDRFQjg5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDQ5OTcyMzB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzExMjY1NzcwNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2ODg2MENBNDBFMUZEQ0FDMzBDQ0M2MkYwNUFDMUJGNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA0OTk3MjMyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMTI2NTc3MDVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjU1NzE5OTUxREJENUFERkE0QjlGRDU1N0E4QzZGNDkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNDk5NzIzMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiN1RQWGw0SkhUVS1hNXFjMDRfeGFuUSIsInBob25lSWQiOiI1NzI4MjUyZS1kMDM5LTQxYjMtYmY0OS0yYzU5YzMzYTJlNzciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiem1vOUFXdGhGNVJQWllvNytFTE9IS280RG1rPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5dDl6UituckJUY2F4QmpOMmovc0hFd0loOEk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJZjB1cjRERU9yaWdLMEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmcmQ2R0dYOWhnM3UrL3l5OWl3NlNHS2trREdRY21uZUpmNzZpRUdlVURzPSIsImFjY291bnRTaWduYXR1cmUiOiJPcW9CNWdsUk01enZrOUs4NDVTeEtGcitiRzg0VzRGTnV5cG9adTR2NWtHWGRVZ09aRFA1TURLQklPOUxJR2NMMlVpMG50ZTVSb3phVEhvaTJUVlFEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWm1LNU0xejdLNzg0MXFaclpBWlFsU0k2ajJCR3UrdjV0QysxZmxOaCtHYlYrVkFMclFLM1NnODY3N0tpYXJDZ2dtajFEZE1MSTBmMWE5YWNFQkJ0QlE9PSJ9LCJtZSI6eyJpZCI6IjkyMzExMjY1NzcwNTo4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im1mYWlzYWxqZWUxNjcifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTEyNjU3NzA1OjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDYzZWhobC9ZWU43dnY4c3ZZc09raGlwSkF4a0hKcDNpWCsrb2hCbmxBNyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNDk5NzIyOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDd3MifQ==
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'faisal udas' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-faisal-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true: process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true: process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true: process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? true: process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true: process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'faisal udas',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
