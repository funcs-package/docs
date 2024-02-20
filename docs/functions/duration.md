---
sidebar_position: 1
---

# duration

Converts a duration in milliseconds into a human-readable string that represents the duration in terms of days, hours, minutes, seconds, and optionally milliseconds.

## Parameters

| Parameter | Type                                                                                                | Optional | Default | Description                               |
| --------- | --------------------------------------------------------------------------------------------------- | -------- | ------- | ----------------------------------------- |
| duration  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | false    |         | Time measured in milliseconds.            |
| useMili   | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | true     | false   | Return duration with milliseconds or not. |

## Returns

[Array\<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Example

```js
duration(60100); // [ '1 Min' ]
duration(60100, true); // [ '1 Min', '100 ms' ]
```
