let handler = async m => m.reply(`
╭─〘 𝗗𝗢𝗡𝗔𝗦𝗜 〙
│ • 𝗔𝗫𝗜𝗦 [083856085455]
│ • 𝗗𝗔𝗡𝗔 [083856850455]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
