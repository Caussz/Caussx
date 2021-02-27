let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
𝙥𝙚𝙧𝙩𝙖𝙣𝙮𝙖𝙖𝙣: ${command} ${text}
𝙟𝙖𝙬𝙖𝙗𝙖𝙣: ${pickRandom(['Ya','Mungkin iya','Mungkin','Mungkin tidak','Tidak','Tidak mungkin'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['apakah <pertanyaan>']
handler.tags = ['kerang']
handler.command = /^apakah$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

