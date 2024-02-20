---
sidebar_position: 18
---

# isUrl

Check if a value is an url.

## Parameters

| Parameter | Type                                                                     | Optional | Default | Description         |
| --------- | ------------------------------------------------------------------------ | -------- | ------- | ------------------- |
| value     | [any](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) | false    |         | The value to check. |

## Returns

[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

## Example

```js
isUrl("discord.com"); // false
isUrl("https://discord.com"); // true
```
