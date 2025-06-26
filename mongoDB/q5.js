db.employees.insertMany([
    {
      name: "Venkata",
      age: 22,
      city: "Tirupati",
      salary: 150000,
      delpartment: "IT",
    },
    {
      name: "Jayanth",
      age: 21,
      city: "Bengaluru",
      salary: 150000,
      delpartment: "CS",
    },
    {
      name: "Bala",
      age: 20,
      city: "Hyderabad",
      salary: 150000,
      delpartment: "IT",
    },
    {
      name: "Aditya",
      age: 25,
      city: "Secendrabad",
      salary: 150000,
      delpartment: "CS",
    },
  
    {
      name: "Person-1",
      age: 30,
      city: "Chennai",
      salary: 100000,
      department: "Marketing"
    },
    {
      name: "Person-2",
      age: 35,
      city: "Chennai",
      salary: 70000,
      department: "Sales"
    }
  
  ]);






















  


  //If we want to give filter then
db.employees.insertMany([
    {
      name: "Venkata",
      age: 22,
      city: "Tirupati",
      salary: 150000,
      delpartment: "IT",
    },
    {
      name: "Jayanth",
      age: 21,
      city: "Bengaluru",
      salary: 150000,
      delpartment: "CS",
    },
    {
      name: "Bala",
      age: 20,
      city: "Hyderabad",
      salary: 150000,
      delpartment: "IT",
    },
    {
      name: "Aditya",
      age: 25,
      city: "Secendrabad",
      salary: 150000,
      delpartment: "CS",
    },
  
    {
      name: "Person-1",
      age: 30,
      city: "Chennai",
      salary: 100000,
      department: "Marketing"
    },
    {
      name: "Person-2",
      age: 35,
      city: "Chennai",
      salary: 70000,
      department: "Sales"
    }
  
  ]);
  
  db.employees.find()({ department: "IT" });
  
  db.employees.find()({salary: {$lt: 300000}})
  db.employees.find()({salary: {$lte : 30000}})
  db.employees.find()({salary: {$ne : 30000}}, {name : 1, salary: 1})
  db.employees.find()(
      {salary: {$gt: 10000}, department: {$eq: "IT"}},
      {name: 1, salary: 1}
  )
  
  //display the top two highest paying employees
  db.employees.find().sort({ field: -1}).limit(2)
































  //We are still working on employee database only that we have started in q4 file.

//I have insterted two more objects inside this database
db.employees.insertMany([
    {
        name: "Ananada",
        email: "Ananada@gmail.com",
        dempartment: "Admin",
        salaey: 200000,
        lacation: "Tirupati",
        data: Date(),
    },
    {
        name: "Kishore",
        email: "Kishore@gmail.com",
        dempartment: "Admin",
        salaey: 200000,
        lacation: "Tirupati",
        data: Date(),
    }
])

// How to update values of any field
db.employees.updateOne({email: "Ananada@gmail.com"}, {$set:{salaey: 300000}}) 
db.employees.updateMany({}, {$set: {salary: 500000}})
db.employees.updateMany({dempartment: "Admin"}, { $inc: {salaey: 500000}})

// How to rename the fields
db.employees.updateMany({}, { $rename: {salaey: "salary"}})

//How to unset any field
db.employees.updateMany({}, { $unset: {salary: ""}})

//This command creates any array for each entry and pushes GO lang into the array of each entry
db.employees.updateMany({}, { $push: {skills: "GO lang" }})
db.employees.updateMany({}, { $push: {skills: "Docker" }})
db.employees.updateOne({name: "Venkata"}, {$push: {skills: "MERN"}})
db.employees.updateOne({name: "Venkata"}, {$pull: {skills: "MERN"}})

//This checks the email condition if it is there then it will modify the data or it is not present in the document then it will create one
db.employees.updateOne(
    {email: "VenkataJayanth@gmail.com"},
    {$set: {name: "Venkata Jayanth"}},
    {upsert: true}
)

db.employees.deleteOne({
    email: "VenkataJayanth@gmail.com"
})