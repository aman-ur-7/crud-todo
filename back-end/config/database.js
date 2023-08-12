const mongoose = require('mongoose')

const dataBase = mongoose.connect('mongodb+srv://amandhn5973:Tfefznpp21fQQ5sb@cluster0.n3ag3cn.mongodb.net/application?retryWrites=true&w=majority')
.then(()=>console.log("data base is connected"))
.catch(err => console.log(err))
module.exports = dataBase;