'use strict'

/* eslint-env mocha */
const { expect } = require('aegir/utils/chai')
const pDefer = require('p-defer')

const ProperEventEmitter = require('../')

const eventName = 'event-name'

describe('proper-event-emitter', () => {
  let ee

  beforeEach(() => {
    ee = new ProperEventEmitter()
  })

  afterEach(() => {
    ee.removeAllListeners(eventName)
  })

  it('emits messages with valid handler funtions', async () => {
    const p = pDefer()
    const v0 = 'v0'
    const v1 = 'v1'

    ee.on(eventName, (r0, r1) => {
      expect(r0).to.eql(v0)
      expect(r1).to.eql(v1)
      p.resolve()
    })

    ee.emit(eventName, v0, v1)
    await p
  })

  it('throws on global scope if handler throws', async () => {
    const p = catchGlobalError()

    ee.on(eventName, () => { throw new Error() })

    ee.emit(eventName)

    await p
  })
})

const isBrowser = () => typeof window === 'object' && typeof document === 'object' && document.nodeType === 9

const catchGlobalError = () => {
  return new Promise((resolve) => {
    if (!isBrowser()) { // Node.js
      const originalException = process.listeners('uncaughtException').pop()

      originalException && process.removeListener('uncaughtException', originalException)
      process.once('uncaughtException', (err) => {
        expect(err).to.exist()

        originalException && process.listeners('uncaughtException').push(originalException)
        resolve()
      })
    } else {
      window.onerror = () => {
        resolve()
      }
    }
  })
}
