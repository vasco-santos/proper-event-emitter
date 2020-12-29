# proper-event-emitter

[![Build Status](https://travis-ci.org/vasco-santos/proper-event-emitter.svg?branch=master)](https://travis-ci.org/vasco-santos/proper-event-emitter)
[![dependencies Status](https://david-dm.org/vasco-santos/proper-event-emitter/status.svg)](https://david-dm.org/vasco-santos/proper-event-emitter)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Downloads](https://img.shields.io/npm/dm/proper-event-emitter.svg)](https://www.npmjs.com/package/proper-event-emitter)
[![Minzipped size](https://badgen.net/bundlephobia/minzip/proper-event-emitter)](https://bundlephobia.com/result?p=proper-event-emitter)
[![codecov](https://img.shields.io/codecov/c/github/vasco-santos/proper-event-emitter.svg?style=flat-square)](https://codecov.io/gh/vasco-santos/proper-event-emitter)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/vasco-santos/proper-event-emitter/ci?label=ci&style=flat-square)](https://github.com/vasco-santos/proper-event-emitter/actions?query=branch%3Amaster+workflow%3Aci+)

> Event emitter extension to handle event errors by throwing them in the global context

Node.js `EventEmitter` throws in the global context when errors occur in the scope of an event handler.

It is common to use the `EventEmitter` widely, not only in Node.js. Applications built for other environment rely on shimming to support this Node.js functionality out of the box. But, most shims used for `EventEmitter` do not handle event errors in the global context and leave their handling to the application layer.

This module abstracts the event handling errors from the application layer and throws them in the global context for other environments.

## Install

```sh
npm i proper-event-emitter
```

## API and Usage

You can check Node.js [API docs](https://nodejs.org/api/events.html#events_class_eventemitter).

## Contribute

Feel free to dive in! [Open an issue](https://github.com/vasco-santos/proper-event-emitter/issues/new) or submit PRs.

## License

[MIT](LICENSE) © Vasco Santos