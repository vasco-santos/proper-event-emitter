'use strict'

const { EventEmitter } = require('events')

class ProperEventEmitter extends EventEmitter {
  /**
   * Synchronously calls each of the listeners registered for the event named eventName,
   * in the order they were registered, passing the supplied arguments to each.
   *
   * @param {string} eventName
   * @param {...any} args
   * @returns {boolean}
   */
  emit (eventName, ...args) {
    let r = false
    try {
      r = super.emit(eventName, ...args)
    } catch (err) {
      // Throw global context error if handler throws
      setTimeout(() => { throw err }, 1)
    }

    return r
  }
}

module.exports = ProperEventEmitter
