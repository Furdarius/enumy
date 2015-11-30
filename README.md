# Enumy
Tiny javascript library that introduces basic Enum functionality

# Usage

````js
// Include library
var enumy = require('enumy');

// Create enum object
var types = enumy(['Integer', 'Boolean', 'String', 'Array', 'Html']);

// Use it
var htmlEnum = types.Html;

if (htmlEnum === types.Html) {
    // ...
}

alert(types[htmlEnum])
// Output: Html
````