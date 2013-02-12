(function() {
  var pm = {
      version: '0.1'
    , apiBase: 'http://api.pagemunch.com/1/'
    , format: 'json'
  };
  
  
  /* public methods */
  
  pm.set = function(opts) {
    pm.key = opts.key;
    return pm;
  };
  
  
  /* convenience methods */

  pm.summary = function(url, query, callback) {
    if (typeof query === 'function') {
      callback = query;
      query = {};
    }
    query.url = url;
    
    pm.get('summary', query, callback);
    return pm;
  };
  
  pm.classify = function(url, query, callback) {
    if (typeof query === 'function') {
      callback = query;
      query = {};
    }
    query.url = url;
    
    pm.get('classify', query, callback);
    return pm;
  };
  
  pm.get = function(method, query, callback) {
    var uri = pm.apiBase + method + '.' + pm.format;
    
    // add the account authentication
    if (pm.key) query.key = pm.key;
    
    uri = uri + '?' + serialize(query);
    
    // create the http-agent
    var agent = require('http-agent').create('', [{
      method: 'GET',
      uri: uri,
      headers: {
        'User-Agent': 'pagemunch-node (' + pm.version + ')'
      }
    }]);

    // find out what happened
    agent.addListener('next', function (err, agent) {
      var data = (agent && agent.body) ? agent.body : null;
      
      try {
        data = JSON.parse(data);

        if (agent.response.statusCode != 200) {
          err = new Error(data.message);
        }
      } catch(err) {
        // let err fall through to callback
      }
      
      // return to callback if defined
      if (typeof callback === 'function') {
        callback(err, data);
      }
    });

    // start http-agent:
    agent.start();
    return pm;
  };
  
  
  /* private methods */
  
  var serialize = function(obj) {
    var str = [];
    for(var p in obj) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
    return str.join("&");
  };
  
  module.exports = pm;
}());