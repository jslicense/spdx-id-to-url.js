const http = require('http')
const https = require('https')
const mappings = require('./mappings.json')
const tape = require('tape')
const toURL = require('./')

tape('license URLs', async test => {
  for (const [id, url] of Object.entries(mappings)) {
    await new Promise((resolve, reject) => {
      const client = url.startsWith('https') ? https : http
      client.request(url, { method: 'HEAD' }, response => {
        test.equal(response.statusCode, 200, `${id}: ${url} responds 200`)
        resolve()
      })
        .once('error', error => reject(error))
        .end()
    })
  }
})

tape('spdx.org fallback', test => {
  test.equal(toURL('MIT'), 'https://spdx.org/licenses/MIT', 'MIT => spdx.org')
  test.end()
})
