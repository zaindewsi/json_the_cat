const request = require("request");
const query = process.argv.slice(2)[0];
const search = `https://api.thecatapi.com/v1/breeds/search?q=${query}`;

request(search, (error, response, body) => {
  if (error) {
    console.log(error);
  }
  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log(`Sorry, ${query} cannot be found`);
  }
});
