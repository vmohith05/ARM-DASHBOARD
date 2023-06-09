const mysql = require('mysql');
const express = require('express');
const apiCallFromRequest = require('./Request')
const utils = require('./utils');
const apiCallFromNode = require('./NodeJsCall')
const cors = require('cors');
const Router = require('express');
const { default: insertSpacesBetweenWords } = require('./utils');
//import routes from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// push them above the router middleware!


app.listen(4001,()=> {

    console.log(`app listening on 4001`)
})

// app.use(express.json());

const router = Router();
app.get("/flexera/getAssetDetails",(req,res)=> {
    const device_id = req.query.deviceid;
    console.log(`devideId===> ${req.query.deviceid}`)
    apiCallFromRequest.callApi.callExternalApiUsingRequest(device_id, function(response){
        //console.log(JSON.stringify(response));
        const deviceID = "10092828";
       // req.body = deviceID;
        res.write(JSON.stringify(response));
        res.end();
    });
})

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Thirumal@123",
        database: "optumcloudreadiness"
     });
    
     connection.connect((err) => {
        if(err)
        {
            console.log(err)
        }
        else{
            console.log("Connected !")
        }
    });

    app.get("/fetch", (req,res)=>{
        connection.query("select * from left_join_final", function(err, result, fields){
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log(" result is :  ", typeof(result));
                res.send(result);
            }
        });
     });
     app.get("/fetch/Iaas_pricing", (req,res)=>{
        connection.query("select * from iaas_pricing_all_device_data", function(err, result, fields1){
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log(" result is :  ", typeof(result));
                res.send(result);
            }
        });
     });

     app.listen(3000, (err) =>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("on port 3000");
        }
     })
//Data from Mysql

//route to get assets by stackid
app.get("/flexera/getAssetDetailsByStackId",(req,res)=> {
    const stack_id = req.query.stackid;
    console.log(`stackId===> ${req.query.stackid}`)
    apiCallFromRequest.callApi.getAssetDetailsApiByStackId(stack_id, function(response){
        res.write(JSON.stringify(response));
        res.end();
    });
})



// tags by stackid
app.get("/flexera/getTagsByStackId",(req,res)=> {
    const stack_Id = req.query.stackid;
    console.log(`stackId===> ${req.query.stackid}`);
    
    apiCallFromRequest.callApi.getTagsApiStackId(stack_Id, function(response){
        res.write(JSON.stringify(response));
        res.end();
    })
}
)


//summery by provider id.
app.get("/flexera/getSummeryByProviderId",(req,res)=> {
    console.log("pass");
    const provider_Id = req.query.providerId;
    console.log(`ProviderId===> ${req.query.providerId}`);
    
    apiCallFromRequest.callApi.getSummaryWithCost(provider_Id, function(response){
        res.write(JSON.stringify(response));
        res.end();
    })
}
)




// search assets 



app.get("/flexera/getAssetDetailBySerach",(req,res)=> {
    //const search_key = utils.insertSpacesBetweenWords(req.query.searchkey.replace(/\s/g, ""));
    const searchKey = req.query.searchkey.trim().replace(/\s/g,"%20");
    console.log(`search key===> ${searchKey}`)
    apiCallFromRequest.callApi.getAssetDetailBySerach(searchKey, function(response){
        res.write(JSON.stringify(response));
        res.end();
    });
})


//get IaaS price

app.post("/flexera/getIaaSprice",(req,res)=> {
    const filters = req.body.filters
        console.log(`search key   test...===> ${JSON.stringify(filters)}`)
        apiCallFromRequest.callApi.getPriceByStackIdAndProviderId(filters, function(response){
            res.write(JSON.stringify(response));
            res.end();
        });
})


// get providers list

app.get("/flexera/providers", (req, res)=>{
    apiCallFromRequest.callApi.getProviders(function(response){
        res.write(JSON.stringify(response));
        res.end();
    })
})


// mouting all modular routes here
//app.use('/flexera', routes.flexera);