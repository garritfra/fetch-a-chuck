const fetch = require("node-fetch");

const randomJoke = () => {
  return fetch("http://api.icndb.com/jokes/random/")
    .then(response => response.json())
    .then(json => {
      return json.value.joke;
    });
};

module.exports = randomJoke;
