var express = require('express');
const { Timestamp } = require('mongodb');
var router = express.Router();
var mongoose = require('mongoose');

// Replace the following with your Atlas connection string                                                                                                                                        
const URI = "mongodb+srv://main:lF8BoQoLGubVRpbQ@cluster0.zbaewsa.mongodb.net/?retryWrites=true&w=majority";

const taskSchema = new mongoose.Schema({
  timestamp: Date,
  title: String,
  text: String,
  address: String
  },
  {
    collection: 'tasks'
  })

let Tasks;

const connect = async () => {
  await mongoose.connect(URI)
  Tasks = mongoose.model('tasks', taskSchema, 'tasks');
  for await (const doc of Tasks.find()) {
    console.log(doc)
  }
  console.log('connected to db')
};

connect()

/* GET home page. */
router.get('/api/add', function(req, res, next) {
  Tasks.create([
    {
      timestamp: Date.now(),
      title: 'Clean up Elm Hall street',
      text: 'lorem ipst'
    
    }
  ])
  res.status(400).send("successfully added")
});

module.exports = router;
