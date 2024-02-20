---
sidebar_position: 6
---

# getMemory

Estimates the memory usage of a value in bytes and returns a human-readable string representing the size.

## Parameters

| Parameter | Type                                                                     | Optional | Default | Description                                                                                                   |
| --------- | ------------------------------------------------------------------------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| value     | [any](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) | false    |         | The value whose memory usage is to be estimated. This can be an Object, string, number, boolean, or an Array. |

## Returns

[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Example

```js
getMemory("John"); // "8.00 Bytes"
getMemory(12); // "8.00 Bytes"
getMemory(true); // "4.00 Bytes"
getMemory(["John", 12]); // "16.00 Bytes"
getMemory({ name: "John", age: 12 }); // "16.00 Bytes"
```
