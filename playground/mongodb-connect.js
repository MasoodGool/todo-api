//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if (err) {
 	return console.log('Unable to connect to MongoDB server');
 }

 console.log('Connected to MongoDB server');

 const myDB=db.db('TodoApp');

 myDB.collection('Todo').insertOne({
 	name: 'mughtar',
 	age: 21,
 	loaction:'far'
 },(err,result)=>{
 	if(err) return console.log('Unable to insert todo', err); 
 console.log(JSON.stringify(result.ops, undefined,2));
 });

 db.close();

});