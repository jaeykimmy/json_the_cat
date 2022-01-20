const request = require('request');

let slicedArgs = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${slicedArgs}`, (error, response, body) => {
  console.log(response.statusCode);
  if (response.statusCode !== 200) {
    return error;
  }
  const data = JSON.parse(body);
  //if cat breed doesnt exist
  if (data[0] === undefined) {
    console.log('cat doesnt exist');
  }
  console.log('Description:', data[0].description);

});