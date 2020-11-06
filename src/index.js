const uniqueRandom = require("unique-random-array")

var items = require("./items.json")

module.exports = {
  all: items,
  random: uniqueRandom(items),
}
