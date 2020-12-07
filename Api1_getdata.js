// fatch data from json file

const fs = require("fs"); 
// Read users.json file 
fs.readFile("task.json", function(err, data) { 
    // Check for errors 
    if (err) throw err; 
    // Converting to JSON 
    const jsonData = JSON.parse(data); 
    // console.log(users); // Print users 
    for (Id_Index of jsonData ){
        console.log(Id_Index["student name"],Id_Index["id"],["email id"])
    }
});

