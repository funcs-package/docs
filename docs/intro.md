---
sidebar_position: 1
---

# Getting Started

@khaidev1012/funcs is a module for [Node.js](https://nodejs.org) that allows you to facilitate the programming process more easily.

- Easy to use

- Support ESM and CJS

- Continuously upgrade

## What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Install

```bash
# via npm
$ npm install @khaidev1012/funcs --save

# via yarn
$ yarn add @khaidev1012/funcs
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run @khaidev1012/funcs.

# Thats All!

Simply declare the library using the syntax and you can start using our library right away!

## Example

```js
// via ESM
import * as funcs from "@khaidev1012/funcs";

// via CJS
const funcs = require("@khaidev1012/funcs");

// Example Usage
console.log(funcs.getBytes(2048)); // '2.00 KB'
```
