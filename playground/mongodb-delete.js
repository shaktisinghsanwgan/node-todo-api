const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		console.log('Unable to connect to MongoDb server');
	}
	console.log('Connect to MongoDb server');
	// delete Many
	db.collection("User").deleteMany({
		name:"Shakti"
	}).then((result)=>{
		console.log(result);
	});
	// delete One
	// db.collection("Todos").deleteOne({
	// 	text:"lunch"
	// }).then((result)=>{
	// 	console.log(result);
	// });
	// findOneandDelete
	db.collection("User").findOneAndDelete({
		"_id" : new ObjectID("5b332235e3330bf74d8bd54b")
	}).then((result)=>{
		console.log(result);
	});
	// db.close();
});