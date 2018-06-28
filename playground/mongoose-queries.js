const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');

const {Todo}=require('./../server/models/todo');

const {User}=require('./../server/models/user');

var id='5b34b9258536f123e46bc253';

// if(!ObjectID.isValid(id)){
// 	console.log(id+" not valid");
// }
// Todo.find({
// 	"_id":id
// }).then((todos)=>{
// 	console.log(todos);
// });

// Todo.findOne({
// 	"_id":id
// }).then((todo)=>{
// 	if(!todo){
// 		return console.log("id not found");
// 	}
// 	console.log(todo);
// });	


// Todo.findById(id).then((todo)=>{
// 	if(!todo){
// 		return console.log("id not found");
// 	}
// 	console.log(todo);
// }).catch((e)=>{
// 	console.log(e);
// });	

User.findById(id).then((User)=>{
	if(!User){
		return console.log("id not found");
	}
	console.log(User);
}).catch((e)=>{
	console.log(e);
});	

