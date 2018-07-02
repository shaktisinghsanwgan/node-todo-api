var mongoose=require('mongoose');

mongoose.Promise=global.Promise;

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds125031.mlab.com:25031/mydb'||'mongodb://localhost:27017/TodoApp');

module.exports={mongoose};