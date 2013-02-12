var pm = require('pagemunch');

pm.set({key: 'YOUR_API_KEY'});

pm.summary('http://www.youtube.com/watch?v=9bZkp7q19f0', function(err, data){
  if (err) {
    console.log('An error occurred with the request:');
    console.log(err.toString());
  } else {
    console.log(data);
  }
});