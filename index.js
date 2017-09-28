var AWS = require('aws-sdk');
AWS.config.update({region: 'ap-northeast-1'});
var athena = new AWS.Athena({apiVersion: '2017-05-18'});

exports.handler = (event, context, callback) => {
    
var query_params = {
  NamedQueryId: process.env.NamedQueryId /* required */
};

athena.getNamedQuery(query_params, function(err, data) {
  
  if (err) callback(null, err.stack); // an error occurred
  else               
        var params = {
          QueryString: data.NamedQuery.QueryString, /* required */
          ResultConfiguration: { /* required */
              OutputLocation: process.env.OutputLocation
          }
        };
        athena.startQueryExecution(params, function(err, data) {
          if (err) callback(null, err.stack); 
          else     callback(null, data);         
        });
            
});