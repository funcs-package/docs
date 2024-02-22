---
sidebar_position: 1
---

# Timer

A Timer class that can start and stop timers using a unique key. All instances of Timer are stored in a static Map.

## Parameters

| Parameter | Type                                                                                                  | Optional | Default                                | Description                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------- | -------- | -------------------------------------- | --------------------------------------------------------------------------- |
| callback  | [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) | false    |                                        | The function to call when the timer ends.                                   |
| duration  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)     | true     | 0                                      | The duration of the timer in milliseconds.                                  |
| \_init    | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)   | true     | true                                   | Starts the timer and sets up the callback to be called when the timer ends. |
| key       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)     | true     | [randomKey](../functions/randomKey.md) | The unique key for this timer.                                              |

## Properties

### duration

The duration of the timer in milliseconds.

**Type:** [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

### key

The unique key for this timer.

**Type:** [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### isStarted

A boolean indicating whether the timer has started.

**Type:** [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### startedAt

The timestamp when the timer was started.

**Type:** [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

### \_init

Starts the timer and sets up the callback to be called when the timer ends.

**Type:** [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

## Methods

### \_init()

Starts the timer and sets up the callback to be called when the timer ends.

**Returns:** [Timer](./Timer.md) | [false](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### kill()

Stops the timer and removes it from the Map.

**Returns:** [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
