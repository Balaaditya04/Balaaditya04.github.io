Create folder dbshards and then create sub folders: conf, rconf, s1, s1r, s2, s2r
Start Config servers on separate tabs of command prompt
mongod --configsvr --port 27018 --replSet cf --dbpath d:\dbshards\conf
mongod --configsvr --port 27019 --replSet cf --dbpath d:\dbshards\rconf
Open new tab and Initiate replica set for config servers
mongosh --port 27018
rs.initiate({_id:'cf',members:[{_id:0,host:'localhost:27018'},{_id:1,host:'localhost:27019'}]})