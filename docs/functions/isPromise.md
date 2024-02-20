---
sidebar_position: 16
---

# isPromise

Check if a value is a Promise.

## Parameters

| Parameter | Type                                                                     | Optional | Default | Description         |
| --------- | ------------------------------------------------------------------------ | -------- | ------- | ------------------- |
| value     | [any](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) | false    |         | The value to check. |

## Returns

[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

## Example

```js
isPromise(16777215); // false
isPromise(new Promise(() => {})); // true
```
