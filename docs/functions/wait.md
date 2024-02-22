---
sidebar_position: 24
---

# wait

Pauses the execution of an asynchronous function for a specified duration.

## Parameters

| Parameter | Type                                                                                              | Optional | Default | Description                            |
| --------- | ------------------------------------------------------------------------------------------------- | -------- | ------- | -------------------------------------- |
| ms        | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | false    |         | The duration to wait, in milliseconds. |

## Returns

[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

## Example

```js
await wait(5000); // wait for 5 secs
```
