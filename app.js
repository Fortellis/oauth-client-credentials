var express = require("express");
var axios  = require("axios");
var app = express();
var config = require("./config.json");
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/token", (req, response, next) => {
    var clientSecret = new Buffer(config.clientId+':'+config.secret);
    var authorization = clientSecret.toString('base64');

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Basic ' +authorization
        }
      };
    var postData = {
        grant_type:'client_credentials',
        redirect_uri:'http://localhost:3000',
        scope:'roles'
    }

    axios.post('https://api.accounts.fortellis.io/oauth2/aus1ufzl27tS4FQ9X2p7/v1/token', postData, axiosConfig)
        .then((res) => {
            
            
            response.json(res.data.access_token);
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
    
   });