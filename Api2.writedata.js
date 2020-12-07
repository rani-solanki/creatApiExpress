const fs = require("fs")
const jsonFile = require('./task.json')
var  new_data = {
    "id" : 11,
    "student name " : "rinki sagar",
    "email id" : "rinki@gamil.com",
    "study" : "college second year"
};
jsonFile.push(new_data);
var add_newData = JSON.stringify(jsonFile)
fs.writeFile("task.json",add_newData,function(err){
    if (err) throw(err)
    console.log("saved")    
})
