//连接数据库
let mongoose = require('mongoose'); // mongodb

//useNewUrlParser这个属性会在url里识别验证用户所需的db,未升级前是不需要指定的,升级到一定要指定。
mongoose.connect('mongodb://192.168.0.115:27017/myshop', { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('数据库连接成功')
});

module.exports = mongoose;