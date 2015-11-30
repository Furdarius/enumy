# Enumy
Tiny javascript library that introduces basic Enum functionality

# Usage

````js
// Include library
var enumy = require('enumy');

// Create enum object
var types = enumy(['Integer', 'Boolean', 'String', 'Array', 'Html']);
/*
    Interer = 1
    Boolean = 2
    ...
*/


// Use it
var htmlEnum = types.Html;

if (htmlEnum === types.Html) {
    // ...
}

alert(types[htmlEnum])
// Output: Html

var listOfEnums = types.getList();
// Array: ['Integer', 'Boolean', 'String', 'Array', 'Html']
````