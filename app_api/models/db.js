var mongoose= require('mongoose');
var dbURI = 'mongodb+srv://ebrarkadir:EBRARkadir1711.@mekanbul.nqd1hvo.mongodb.net/mekanbul'; 
mongoose.connect(dbURI);
mongoose.connection.on('connected',function(){
    console.log('Mongoose '+dbURI+' adresindeki veritabanına bağlandı\n');
});
mongoose.mongoose.connection.on('error',function(err){    
    console.log('Mongoose bağlantı hatası\n'+err);
});
mongoose.mongoose.connection.on('disconnected',function(){
    console.log('Mongoose bağlantısı kesildi\n');
});
process.on('SIGINT',function(){ mongoose.mongoose.connection.close();
    console.log('Uygulama kapatıldı\n')
    ;process.exit(0);
});
require('./Venue');