const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		console.log('Unable to connect to MongoDb server');
	}
	console.log('Connect to MongoDb server');
	// db.collection('Todos').insertOne({
	// 	text:'Something to do',
	// 	completed:false
	// },(err,result)=>{
	// 	if(err){
	// 		return console.log('Unable to insert todo',err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// });
	db.collection('User').insertOne({
		name:'Shakti',
		age:24,
		location:"Meerut",
		completed:false
	},(err,result)=>{
		if(err){
			return console.log('Unable to insert todo',err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});
	db.close();
});