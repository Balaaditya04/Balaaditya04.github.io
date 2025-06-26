//aggregation pipeline
db.employees.aggregate([{$match: { department: "IT" }},{ $project:{ name: 1, salary:1}}]);

db.employees.aggregate([
    { $group: { _id: "$department", total: { $sum: "$salary" } } },
])

db.employee.aggregate([
    { $project:{
        _id:0,name:1,
        salary:1,
        bonus:{$multiply: ["$salary", 2]}
    }
}
])

// db.employees.aggregate([
//     {
//         $project:{
//              name:1, email:1, salary:1
//         }
//     }
// ])

db.employees.aggregate([
    { 
      $match: { delpartment: "IT" } 
    },
    { 
      $project: { 
        _id: 0,    
        name: 1, 
        salary: 1 
      } 
    }
  ])

  db.Students.aggregate([
    {
        $group: {
            _id: "$age",
            averageAge: { $avg: "$age" }

        }
    }
  ])
//add a new course "chemistry" to a student's courses array, only if it does not already exist
  db.Students.updateMany({},{$addToSet:{Courses: "Chemistry"}})

// to increase the age of all students by 1
  db.Students.updateMany(
    {},                   
    { $inc: { age: 1 } }  
  )
  
  