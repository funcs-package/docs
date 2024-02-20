---
sidebar_position: 4
---

# forMatTimeMs

Converts a duration in milliseconds into a time string in the format HH:MM:SS.

## Parameters

| Parameter | Type                                                                                              | Optional | Default | Description                    |
| --------- | ------------------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------ |
| duration  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | false    |         | Time measured in milliseconds. |

## Returns

[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Example

```js
formatTimeMs(60100); // "00:01:01"
formatTimeMs(1000 * 60 * 80 * 24); // "24:00:00"
```
