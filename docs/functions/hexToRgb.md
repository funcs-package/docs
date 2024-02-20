---
sidebar_position: 8
---

# hexToRgb

Converts a hexadecimal string to RGB color.

## Parameters

| Parameter | Type                                                                                              | Optional | Default | Description                        |
| --------- | ------------------------------------------------------------------------------------------------- | -------- | ------- | ---------------------------------- |
| hex       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | false    |         | The hexadecimal string to convert. |

## Returns

[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## Example

```js
hexToRgb("ffffff"); // { r: 255, g: 255, b: 255 }
hexToRgb("#ffffff"); // { r: 255, g: 255, b: 255 }
```
