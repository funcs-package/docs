---
sidebar_position: 7
---

# hexToInt

Converts a hexadecimal string to an integer.

## Parameters

| Parameter | Type                                                                                              | Optional | Default | Description                        |
| --------- | ------------------------------------------------------------------------------------------------- | -------- | ------- | ---------------------------------- |
| hex       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | false    |         | The hexadecimal string to convert. |

## Returns

[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

## Example

```js
hexToInt("ffffff"); // 16777215
hexToInt("#ffffff"); // 16777215
```
