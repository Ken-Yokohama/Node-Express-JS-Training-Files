const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit ({

  rating: 9,
  review: "Peaches are so yummy!"
});

// fruit.save();

const mango = new Fruit({
  name: "Mango",
  score: 9,
  review: "Awesome Fruit"
})

// mango.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit:  fruitSchema
});

const Person = mongoose.model('Person', personSchema);

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favoriteFruit: pineApple
// })


// person.save();

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

Person.updateOne({name: "John"}, {favoriteFruit: mango}, function(err){
  if (err){
    console.log(err);
  }else{
    console.log("Successfully Updated the document");
  }
})

// Person.deleteMany({name: "John"},function(err){
//   if (err){
//     console.log(err);
//   }else{
//     console.log("Successfully Deleted Many");
//   }
// })

// CLOSE APP
Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();
  }
});

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits)
    callback(fruits);
  });
}
