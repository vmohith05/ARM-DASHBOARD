const request = require('request');
const prettyjson = require('prettyjson');
require('dotenv').config()

//token generation.
var options = {
    'method': 'POST',
    'url': 'https://api.riscnetworks.com/1_0/getAuthToken',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "userid": "arun_selvam@optum.com",
      "password": "Qwerty1234$$",
      "assessmentcode": "ZDMzYThmOjc6MzMxOjE6MTowOjE=",
      "apikey": "553f9234090b6942f3eeb9bcd577cb56"
    })
  
  };
var gentoken;
request(options, function (error, response) {
    if (error) throw new Error(error);
    const output = JSON.parse(response.body);
    gentoken=output.token;
    console.log("token",gentoken);
});
var timer = setInterval(async function(){
    request(options, function (error, response) {
        if (error) throw new Error(error);
        const output = JSON.parse(response.body);
        gentoken=output.token;
        console.log("gentoken",gentoken);
      });
  }, 900000);

//testing 
const callExternalApiUsingRequest = (deviceId, callback) => {
    console.log(`test======> ${deviceId}`)
    const option = {
        "uri": {
            "protocol": "https:",
            "slashes": true,
            "auth": null,
            "host": "api.riscnetworks.com",
            "port": 443,
            "hostname": "api.riscnetworks.com",
            "hash": null,
            "search": `?deviceid=${deviceId}`,
            "query": `deviceid=${deviceId}`,
            "pathname": `/1_0/assets/getAssets/byDevice/${deviceId}`,
            "path": `/1_0/assets/getAssets/byDevice/${deviceId}?deviceid=${deviceId}`,
            "href": `https://api.riscnetworks.com/1_0/assets/getAssets/byDevice/${deviceId}?deviceid=${deviceId}`
           },
           "method": "GET",
           "headers": {
            "accept": "application/json",
            token: gentoken,
            assessmentcode: process.env.FLEXERA_ASSESSMENTCODE
           }
          }
    console.log("test endpoint")
    request(option, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
     const output = JSON.parse(body);
     const print_to_file = JSON.stringify(output, null, "\t")




var options = {
  noColor: true
};

console.log("rendered pretty data=====>",prettyjson.render(print_to_file, options));
    // console.log("tes....data ====>",print_to_file)
    return callback(res);
    });
}



const getAssetDetailsApiByStackId = (stackId, callback) => {
    console.log(`test======> ${stackId}`)
    const option = {
        "uri": {
            "protocol": "https:",
            "slashes": true,
            "auth": null,
            "host": "api.riscnetworks.com",
            "port": 443,
            "hostname": "api.riscnetworks.com",
            "hash": null,
            "search": `?stackid=${stackId}`,
            "query": `stackid=${stackId}`,
            "pathname": `/1_0/assets/getAssets/byStack/${stackId}`,
            "path": `/1_0/assets/getAssets/byStack/${stackId}?stackid=${stackId}`,
            "href": `https://api.riscnetworks.com/1_0/assets/getAssets/byStack/${stackId}?stackid=${stackId}`
           },
           "method": "GET",
           "headers": {
            "accept": "application/json",
            token: gentoken,
            assessmentcode: process.env.FLEXERA_ASSESSMENTCODE
           }
          }
    console.log("test endpoint")
    request(option, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
     const output = JSON.parse(body);
     const print_to_file = JSON.stringify(output, null, "\t")


var options = {
  noColor: true
};

console.log("rendered pretty data=====>",prettyjson.render(print_to_file, options));
    // console.log("tes....data ====>",print_to_file)
    return callback(res);
    });
}


const getTagsApiStackId = (stackId, callback) => {
    console.log(`test======> ${stackId}`)
    const option = {
      'method': 'GET',
      'url': 'https://api.riscnetworks.com/1_0/tags/getTags',
      'headers': {
        'token': gentoken,
        'assessmentcode': process.env.FLEXERA_ASSESSMENTCODE,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "filter_by": "stack",
        "filter_ids": [stackId]
      })
    
    };
    request(option, (err, res, body) => {
        if (err) { 
            return callback(err);
         }
         const output = JSON.parse(body);
         const print_to_file1 = JSON.stringify(output, null, "\t")
    
    
    var options = {
      noColor: true
    };
    
    console.log("rendered pretty data=====>",prettyjson.render(print_to_file1, options));
        // console.log("tes....data ====>",print_to_file)
        return callback(res);
        });
    }


    const getSummaryWithCost = (Provider_Id, callback)=> {
        var option = {
            'method': 'GET',
            'url': 'https://api.riscnetworks.com/1_0/stacks/getSummaryWithCost/2',
            'headers': {
                token: gentoken,
                assessmentcode: process.env.FLEXERA_ASSESSMENTCODE,
                'Content-Type': 'application/json'
            }
          };
          request(option, (err, res, body) => {
            if (err) throw new Error(err);
             const output1 = JSON.parse(body);
             const print_to_file2 = JSON.stringify(output1, null, "\t")
        
        
        var options = {
          noColor: true
        };
        
        console.log("rendered pretty data=====>",prettyjson.render(print_to_file2, options));
            // console.log("tes....data ====>",print_to_file)
            return callback(res);
            });
        }
    
    


const getAssetDetailBySerach = (key, callback) => {
    console.log(`test======> ${key}`)
    const searchStr = key
    const option = {
        "uri": {
            "protocol": "https:",
            "slashes": true,
            "auth": null,
            "host": "api.riscnetworks.com",
            "port": 443,
            "hostname": "api.riscnetworks.com",
            "hash": null,
            "search": `?searchString=${searchStr}`,
            "query": `searchString=${searchStr}`,
            "pathname": `/1_0/assets/getAssets/byStack/${searchStr}`,
            "path": `/1_0/assets/search/${searchStr}`,
            "href": `https://api.riscnetworks.com/1_0/assets/search/${searchStr}`
           },
           "method": "GET",
           "headers": {
            "accept": "application/json",
            token: gentoken,
            assessmentcode: process.env.FLEXERA_ASSESSMENTCODE
           }
          }
    console.log("test endpoint",option)
    request(option, (err, res, body) => {
    if (err) { 
        console.log(err)
        return callback(err);
     }
     const data = JSON.parse(body);
     //const print_to_file = JSON.stringify(output, null, "\t")
    const stackid = data.assets && data.assets.map((e)=>e.stacks).flat().map((stack)=>stack.stackid).toString()

    console.log("rendered stackid=====>",stackid);

   // getAssetDetailsApiByStackId(stackid, function(response){
       // res.write(JSON.stringify(response));
        return callback(res);
   // });
// var options = {
//   noColor: true
// };

//console.log("rendered pretty data=====>",prettyjson.render(print_to_file, options));
//const parsedData = JSON.parse(print_to_file);
//console.log("all asset detail data: ",JSON.parse(body).assets.map((e)=>e.stacks).flat().map((stack)=>stack.stackid).toString());
    // console.log("tes....data ====>",JSON.parse(body))
   // return callback(res);
    });
}


const getPriceByStackIdAndProviderId = (filter, callback) => {
// const myJSONObject = {
//     "filter_by": "stack",
//     "filter_ids": [1001965],
//     "providerids": [2]
//     };
    request({
        url: "https://api.riscnetworks.com/1_0/iaas/pricing",
        method: "POST",
        json: true,  
        headers: {
            "accept": "application/json",
            token: gentoken,
            assessmentcode: process.env.FLEXERA_ASSESSMENTCODE
           },
        body: filter
    }, function (err, response, body){
        if (err) { 
            console.log("test error",err)
            return callback(err);
         }
         //const data = JSON.parse(body.pricing);
         const priceList  = body.pricing;
         const inventroyList = priceList && priceList.filter(price => price.basis === 'inventory')
         const usageList = priceList && priceList.filter(price => price.basis === 'usage')
         const azureInventoryList = priceList && priceList.filter(price=>price.provider_url === 'https://azure.microsoft.com/' && price.basis === 'inventory' )
         const azureUsageList = priceList && priceList.filter(price=> price.provider_url === 'https://azure.microsoft.com/' && price.basis === 'usage')
         const gcpInventoryList = priceList && priceList.filter(price=>price.provider_url ===  'https://cloud.google.com/compute/' && price.basis === 'inventory' )
         const gcpUsageList = priceList && priceList.filter(price=> price.provider_url ===  'https://cloud.google.com/compute/' && price.basis === 'usage')
         const awsInventoryList = priceList && priceList.filter(price=>price.provider_url ===  'https://aws.amazon.com/' && price.basis === 'inventory' )
         const awsUsageList = priceList && priceList.filter(price=> price.provider_url ===  'https://aws.amazon.com/' && price.basis === 'usage')
         
         const iaasFullDetail = {
            inventroyList: inventroyList,
            usageList: usageList,
            azureInventoryList: azureInventoryList,
            azureUsageList: azureUsageList,
            gcpInventoryList: gcpInventoryList,
            gcpUsageList: gcpUsageList,
            awsInventoryList: awsInventoryList,
            awsUsageList: awsUsageList
           
         }
        console.log("rendered IaaS pricing=====>",priceList);
        return callback(iaasFullDetail)
    });

}


const getProviders = (callback)=> {
    request({url:"https://api.riscnetworks.com/1_0/iaas/getProviders",
    method:"GET",
    json: true,  
    headers: {
        token: gentoken,
        assessmentcode: process.env.FLEXERA_ASSESSMENTCODE
       },
}, function(err, response, body){
    if(err) {
        console.log(err)
        return callback(err)
    }
    console.log("rendered IaaS pricing=====>",body);
    return callback(body)
    
})
}

module.exports.callApi = {callExternalApiUsingRequest, getAssetDetailsApiByStackId, getAssetDetailBySerach, getPriceByStackIdAndProviderId, getProviders, getTagsApiStackId, getSummaryWithCost};
