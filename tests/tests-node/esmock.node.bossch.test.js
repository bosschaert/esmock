import test from 'node:test'
import assert from 'assert'
import esmock from 'esmock'

test('should mock importedfn', async () => {
  const { fncaller } = await esmock('../local/bossch.fnimporter.js', {
    '../local/bossch.fnimported.js': {
      fnother: () => 'mocky'
    }
  })

  assert.equal('mocky', fncaller())
})
