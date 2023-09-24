const mappings = require('./mappings.json')

module.exports = id => {
  const mapping = mappings[id]
  return mapping || `https://spdx.org/licenses/${id}`
}
