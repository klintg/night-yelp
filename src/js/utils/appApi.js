var AppActions = require('../actions/AppActions');


var oauthSignature = require("oauth-signature" )
var request = require('request')
var qs = require('querystring')
var _ = require('lodash')





module.exports = {
  searchLocation: function(location) {
    var httpMethod = 'GET'
    var url = 'https://api.yelp.com/v2/search'
    var default_parameters = {
      term:'bars',
      limit:10,
      location: location.title

    }
    var required_parameters = {
        oauth_consumer_key : 'pnh2hlN4kBDkaf4TCCHX0Q',
        oauth_token : 'K6RXGvphNoTZdkI-kyeXFEPYa6Uippck',
        oauth_nonce : Math.floor(Date.now()/1000),
        oauth_timestamp : Math.floor(Date.now()/1000),
        oauth_signature_method : 'HMAC-SHA1'

    };

    var parameters = _.assign(default_parameters, required_parameters)

    var consumerSecret = 'hjng3Z0Q33vyvq999tvD0sUkVnY'
    var tokenSecret = 'lh2UsKGzs0i-0vWhRVm4nF0aib8'

    var encodedSignature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret)

    var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodedSignature: false })

    parameters.oauth_signature = signature;

    var paramURL = qs.stringify(parameters)

    var apiURL = url+'?'+paramURL

    console.log(apiURL)

    request(apiURL, function(error, data) {
      if(error) {
        console.log(error)
      }
      if(data) {
          var body = JSON.parse(data.body)
          //console.log(body)
          var businesses = body.businesses
          //console.log(businesses)
          AppActions.receiveBusinessResults(businesses)
      }
    });


  }
}
