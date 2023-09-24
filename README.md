```javascript
const spdxIDToURL = require('spdx-id-to-url')
const assert = require('assert')

assert(spdxIDToURL('MIT') === 'https://spdx.org/licenses/MIT')
assert(spdxIDToURL('Apache-2.0') === 'https://apache.org/licenses/LICENSE-2.0')
```
