var request = require('request');
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
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
