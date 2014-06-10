/*
 Logs into the Intercom.io API using your APP and API key,
 then retrieves the information on a specific user
 @param params.user : the user who's info to retrieve
 */
exports.intercom = function(params, cb) {
  var settings = {
    "API_KEY": process.env.INTERCOM_API_KEY,
    "APP_ID": process.env.INTERCOM_APP_KEY
  };
  console.log(settings);
  var intercom = require('node-intercom').app(settings);

  intercom.users.get(params.user, function(code, body) {
    if (code.toString()[0] !== '2') {
      // If our response code isn't a 2**, error condition..
      return cb(code);
    }
    // Body is a JSON string - parse it into an object
    try {
      body = JSON.parse(body);
      return cb(null, body);
    } catch (err) {
      return cb(err);
    }
  });
};