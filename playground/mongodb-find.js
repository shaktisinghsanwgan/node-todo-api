const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		console.log('Unable to connect to MongoDb server');
	}
	console.log('Connect to MongoDb server');
	db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
		console.log('Todos:');
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log("Unable to fetch todos:",err);
	});
	db.collection('User').find({
		_id:new ObjectID("5b322bd4e3330bf74d8bc5bf")
	}).toArray().then((docs)=>{
		console.log('User:');
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log("Unable to fetch todos:",err);
	});

	db.collection('User').count().then((count)=>{
		console.log(`User Count:${count}`);
	},(err)=>{
		console.log("Unable to fetch todos:",err);
	});
	// db.close();
});