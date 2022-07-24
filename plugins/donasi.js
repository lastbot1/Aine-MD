let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0812-4919-2779]
│ •  [0878-1935-3757]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
