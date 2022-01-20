const request = require('request');



const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    //if url is bad
    if (response.statusCode !== 200) {
      return callback(`bad status code: ${response.statusCode}`, null);
    }
    const data = JSON.parse(body);
    //if cat breed doesnt exist
    if (data[0] === undefined) {
      return callback('cat doesnt exist', null);
    }
    return callback(null, data[0].description);

  });
};

module.exports = { fetchBreedDescription };