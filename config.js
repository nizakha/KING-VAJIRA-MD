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
global.sudo = process.env.SUDO || '923037484167'
global.devs = '923037484167';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'faisal udas
  botname:   process.env.BOT_NAME === undefined ? 'faisal-udas-𝙈𝘿' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Vajira Rathnayaka' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? true: process.env.SESSION_ID,3fe5bf51-93d9-4d4d-9a72-2873e59ba768
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'faisal udas' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Vajira-Md' : process.env.PACK_NAME.split(";")[1],
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
