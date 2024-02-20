---
sidebar_position: 2
---

# fetchWithTimeout

Sends a fetch request to a specified URL with a timeout. If the request does not complete within the specified timeout, it is aborted.

## Parameters

| Parameter | Type                                                                                                           | Optional | Default | Description                                 |
| --------- | -------------------------------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------- |
| url       | [RequestInfo](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node-fetch/index.d.ts#L202) | false    |         | A string representing the URL for fetching. |
| options   | [RequestInit](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node-fetch/index.d.ts#L30)  | true     | { }     | Options for the HTTP(S) request.            |
| timeout   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)              | true     | 5000    | Time measured in milliseconds.              |

## Returns

[Promise\<Response>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node-fetch/index.d.ts#L158)

## Example

```js
fetchWithTimeout("https://google.com/", {}, 2000); // Promise<Response>
```
