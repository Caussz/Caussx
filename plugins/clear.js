let handler = async (m, { conn, command, args }) => {
  let chats = args.length > 0 && /group|gc/i.test(args[0]) ? conn.chats.array.filter(v => v.jid.endsWith('g.us') && !v.pin).map(v => v.jid) : [m.chat]
  let isDelete = /^(clear|delete)/i.test(command)
  for (let id of chats) {
    if (isDelete) await conn.modifyChat(id, 'delete').catch(console.log)
    await conn.modifyChat(id, 'mute', -Math.floor(new Date / 1e3) * 1e3 - 1e3).catch(console.log)
  }
  conn.reply(m.chat, chats.length + ' 𝘾𝙝𝙖𝙩 𝙜𝙧𝙤𝙪𝙥 𝙩𝙚𝙡𝙖𝙝 𝙙𝙞𝙗' + (isDelete ? '𝙚𝙧𝙨𝙞𝙝𝙠𝙖𝙣' : '𝙗𝙞𝙨𝙪𝙠𝙖𝙣 𝙨𝙚𝙡𝙖𝙢𝙖𝙣𝙮𝙖'), m)
}
handler.help = ['deletechat', 'deletechat group', 'mutechat', 'mutechat group']
handler.tags = ['owner']
handler.command = /^(clear|delete|mute)chat$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

