# Enumit

Super simple Enum's for JavaScript.

```javascript
var Enum = require("enumit");

var State = new Enum("ON", "OFF");

var myState = State.ON; // myState is an instanceof EnumValue (private class of Enum)
var value = myState.value; // Sets `value` to "ON"
var num1 = State.ON.toNumber(); // Sets `num1` to 1
var num2 = State.OFF.toNumber(); // Sets `num2` to 2

console.log(State.ON); // Calls toString() which in turns returns the value "ON"
```

### Githooks

For developers contributing to this repo's source code, please run the following npm script:

```
npm run githooks
```

This script provides:

- pre commit: Runs jshint before commit is added to history.
- pre push: Runs tests before code is pushed up to remote.
