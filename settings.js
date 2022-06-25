const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan le owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'o7bwtIUY',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = true // auto read pesan / message
//global.autorecording = true //status auto merekam ( auto record )
//global.autoketik = false //status auto mengetik (auto typing)
//global.available = false //status online (online)

// Other
global.botname = "LyynBot-Md" //namabot kalian
global.ownername= "LyynElitee" //nama kalian
global.myweb ="https://api.zeeoneofc.xyz" //bebas asal jan hapus
global.youtube = "https://m.youtube.com/channel/UCrxUT8rC6nOf1Aspw2vZJRg" //bebas asal jan hapus
global.github = "https://github.com/mrlynx442" //bebas
global.email = "mrselxdyt@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.ownernomer = "6285790803867" // nomor wa kalian
global.ownernomerr = "+6285790803867" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/qrisss.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6285790803867","6285790803867","918156874290"] //ganti agar fitur owner bisa di gunakan
global.packname = 'LyynElitee' //sticker wm ubah
global.author = 'jan lupa cr bang LyynElitee' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: 'Done Bre',
    admin: 'Admin Aja Kaga Kok Lu Ngatur',
    botAdmin: 'Bot Harus Jadi Admin!!!!',
    owner: 'Yakin Dek? Gunain Pitur ini',
    group: 'Khusus Grup Dekk',
    private: 'lewat japri dekk',
	bot: 'Khusus Bot Dekk',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: 'Masih Proses Sabar Aja🗿',
	lockCmd: 'Owner Gw Aja Bukan',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
