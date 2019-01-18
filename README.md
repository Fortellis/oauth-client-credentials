# oauth-client-credentials

This is a sample node.js backend app to showcase how to get a valid token using the oAuth Client Credentials flow.

This project depends on below tech stack

* node.js, express server

### Local development
* `npm install`
* __Update config.json with appropriate clientId, secret and redirect_uri for the App
* `npm start`

__You should see the API server running on localhost port 3000__

Open http://localhost:3000/token in the browser or postman to get the token.
  
**redirect_uri -** Redirect url is added as a Callback URL while registering the app with Fortellis. Registration form contains Callback URL (optional) field.

**clientId -** Client ID is the API Key which can be found in Specifications for the registered App on Fortellis Developer Network App 

**secret -** Secret is the API Secret which can be found in Specifications for the registered App on Fortellis Developer Network App 
