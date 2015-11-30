# Enumy
Tiny javascript library that introduces basic Enum functionality

# Installation

    npm install @furdarius/enumy --save
    
# Usage

````js
// Include library
var enumy = require('@furdarius/enumy');

// Create enum object
var types = enumy(['Integer', 'Boolean', 'String', 'Array', 'Html']);
/*
    Integer = 1
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