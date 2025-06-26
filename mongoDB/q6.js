//To show the indexes in current collection
db.employees.getIndexes()
// To create index in email field
db.employees.createIndex({email: 1})

