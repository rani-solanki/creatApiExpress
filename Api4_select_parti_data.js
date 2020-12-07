const fs = require("fs");
// take user input
fs.readFile("task.json", function(err, data) { 
    // Check for errors 
    if (err) throw err; 
    // Converting to JSON 
    const data_json = JSON.parse(data); 
    const user_input  = require("readline-Sync")
    var selectId = user_input.question("please select the id")
    if (selectId in data_json){
    // Read users.json file 
        function Findoption(index_num){
                // console.log(users); // Print users 
                console.log(data_json[index_num-1]["student name"],data_json[index_num-1]["id"],data_json[index_num-1]["email id"])
        }
    
        Findoption(selectId)
    }else{
        console.log(selectId,"this id is not available in this file")
    }
})
