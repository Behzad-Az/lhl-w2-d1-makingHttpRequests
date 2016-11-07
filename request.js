// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')

       .on('error', function (err) {
          console.log("Error Occured!!!!! - " + err);
          throw err;
       })

       .on('response', function (response) {
          console.log('Downloading image...');

          console.log('Response Status Code: ', response.statusCode, '\n',
                      'Response Message: ', response.statusMessage, '\n',
                      'Content Type: ', response.headers['content-type']);

          console.log('Download Complete.');
       })

       .pipe(fs.createWriteStream('./future.jpg'));

// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. What is happening here? the response stream is getting consolidated into one unit
//    inside the given file (./future.jpg).