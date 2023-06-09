var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Thirumal@123",
    database: "optumcloudreadiness"
 })

 connection.query(`SELECT * FROM all_device_data;`, (err, result, fields)=>{
    if(err){
        return console.log("error message:", err);
    }
    //return console.log("data:", result);
    //return console.log("successfully");
    return console.log(result.length)
    var Location_name = result[1]['Location_name'] 
    var DeviceID = result[1]['DeviceID']
    var StackID = result[1]['StackID']


 })