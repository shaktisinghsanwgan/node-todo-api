const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		console.log('Unable to connect to MongoDb server');
	}
	console.log('Connect to MongoDb server');
	
	// delete Many
	db.collection("Todos").findOneAndUpdate({
		_id:new ObjectID('5b32187d5abc6d00e4d9820d')
	},{
		$set:{
			completed:false
		}
	},{
		returnOriginal:false
	}).then((result)=>{
		console.log(result);
	});
	
	// db.close();
});