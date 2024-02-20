---
sidebar_position: 5
---

# getBytes

Converts a byte value into a string that represents the byte value in the appropriate unit (e.g., KB, MB, GB, etc.).

## Parameters

| Parameter | Type                                                                                              | Optional | Default | Description                |
| --------- | ------------------------------------------------------------------------------------------------- | -------- | ------- | -------------------------- |
| bytes     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | false    |         | The byte value to convert. |

## Returns

[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Example

```js
getBytes(2048); // "2.00 KB"
```
