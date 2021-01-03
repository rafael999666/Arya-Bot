let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
🤖 BOT NFQ 🤖

➸ Prefix:  *「 ${_p} 」*
➸ Status: *「 Online 」*

*「 COMMAND 」*
${_p}menu
${_p}help

*「 FUN MENU 」*
${_p}qr <teks>
${_p}stiker (tag image ‼️)
${_p}bucin

*「 INTERNET 」*
${_p}ssweb <url>
${_p}sswebf <url>
${_p}google <pencarian>
${_p}googlef <pencarian>
${_p}readmore <teks>|<sembunyi>

*「 NULIS 」*
${_p}nulis (teks)

*「 GROUP 」*
${_p}add (62xxxxxxxxxx)
${_p}kick @mention
${_p}promote @mention
${_p}demote @mention
${_p}linkgrup
${_p}pengumuman <teks>
${_p}hidetag <teks>
${_p}listonline [groupid]
${_p}grouplist

*「  Experimental  」*
${_p}jadibot 
[kode login jika ada / kosongin]
tinggal scan QR ❣️

*「 Advanced 」*
> return m 'javascript eval' + m.sender

=======「 INFO 」 =======
Coded using *Vim* on Android \\w Termux
by *@Nurutomo*
Github: 
https://github.com/Arya274/Arya-Bot

YouTube: 
https://www.youtube.com/c/DrawlNag

OwNer:
*Wa.me/6288235435804*
==================
`.trim()}, m)
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

