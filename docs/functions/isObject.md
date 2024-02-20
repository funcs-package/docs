---
sidebar_position: 15
---

# isObject

Check if a value is an Object.

## Parameters

| Parameter | Type                                                                     | Optional | Default | Description         |
| --------- | ------------------------------------------------------------------------ | -------- | ------- | ------------------- |
| value     | [any](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) | false    |         | The value to check. |

## Returns

[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

## Example

```js
isObject(16777215); // false
isObject({ name: "John" }); // true
isObject([1, 2, 3]); // true
```
