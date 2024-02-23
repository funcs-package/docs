---
sidebar_position: 22
---

# readFiles

Reads all files in a directory and its subdirectories synchronously. Optionally, it can filter files by their extensions.

## Parameters

| Parameter          | Type                                                                                                     | Optional | Default | Description                                                                                                                                                                                 |
| ------------------ | -------------------------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dirName            | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)        | false    |         | The directory to read files from.                                                                                                                                                           |
| options            | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)        | true     |         | An object with optional parameters.                                                                                                                                                         |
| options.extensions | [Array\<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | true     | [ ]     | An array of file extensions to filter the files by. If not provided, all files are read.                                                                                                    |
| options.noPromise  | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)      | true     | false   | A boolean indicating whether to return the result directly or wrapped in a Promise. If true, the result is returned directly. If false or not provided, the result is wrapped in a Promise. |

## Returns

[Array\<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Example

```js
readFiles(`${process.cwd()}/src`, { noPromise: true }); // [ "./src/functions/duration.js", "./src/functions/fetchWithTimeout.js", "./src/typings/duration.d.ts", "./src/typings/fetchWithTimeout.d.ts" ]
readFiles(`${process.cwd()}/src`, { extensions: [".js"], noPromise: true }); // [ "./src/functions/duration.js", "./src/functions/fetchWithTimeout.js" ]
```

```
./
├───src
|   ├───functions
|   |       ├───duration.js
|   |       └───fetchWithTimeout.js
|   └───typings
|           ├───duration.d.ts
|           └───fetchWithTimeout.d.ts
```
