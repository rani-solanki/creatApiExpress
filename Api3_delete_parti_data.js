const fs = require("fs"); 
// Read users.json file 
fs.readFile("task.json", function(err, data) { 
    // Check for errors 
    if (err) throw err; 
    // Converting to JSON 
    const jsonFile_data = JSON.parse(data); 

    // console.log(users);
    for (userData of jsonFile_data){
        console.log(userData["student name"],userData ["id"],userData ["email id"])
    }
    // select the particular data delete from json file
    const fs = require("readline-sync")
    var select_id = fs.question("select the id")
    console.log(select_id)
    if (select_id in jsonFile_data){
        delete jsonFile_data[select_id-1]

        const json_file = require('./task.json')
        json_file.push(jsonFile_data,indent=6);
        var parti_data = JSON.stringify(jsonFile_data)
        const fs = require('fs')
        
        var g = fs.writeFile("task.json",parti_data,function(err){
            if (err) throw(err)
            console.log(jsonFile_data)    
        })
    }else{
        console.log(select_id,"this data is not in this file")
    }

    
});





