---
sidebar_position: 12
---

# isFunction

Check if a value is a function.

## Parameters

| Parameter | Type                                                                     | Optional | Default | Description         |
| --------- | ------------------------------------------------------------------------ | -------- | ------- | ------------------- |
| value     | [any](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) | false    |         | The value to check. |

## Returns

[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

## Example

```js
isFunction(16777215); // false
isFunction(() => {
  console.log("hello world!");
}); // true
```
