import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*-*

Pengen mentahan nya ?
Nih ada santai bro....
https://youtu.be/O91DT1pR1ew

Pengen yang udah di recode oleh owner?
Script bot ini dijual bila kalian mau bisa chat owner

wa.me/6281218100935`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/farsya2006",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/farsya2006", 
    title: 'FumikoBotz'',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
