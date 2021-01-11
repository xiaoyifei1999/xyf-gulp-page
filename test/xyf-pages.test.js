const test = require('ava')
const xyfPages = require('..')

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => xyfPages(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(xyfPages('w'), 'w@zce.me')
  t.is(xyfPages('w', { host: 'wedn.net' }), 'w@wedn.net')
})
