const { fetchBreed } = require("./breedFetcher");
const search = process.argv.slice(2)[0];

fetchBreed(search, (err, desc) => {
  if (err) console.log("error:", err);
  console.log(desc);
});
