
<div style="text-align: center;">
  <img src="https://github.com/user-attachments/assets/a3601eb8-c10a-442b-8cc3-b04a923919f8" alt="Description" />
</div>
<br/>


<p>
String Utility TS is a lightweight, easy-to-use library for JavaScript and TypeScript that provides a collection of commonly used string manipulation functions. Whether you're working on a small project or a large-scale application, this library aims to simplify string operations with clean, efficient, and well-tested utility functions.
</p>

<h4> 1) Reverse String </h4>

*Reverses the characters in the string.*

```js
import { reverseString } = from 'string-utility-ts'

const str = 'Hello World'

const result = reverseString(str)
console.log(result) // dlroW olleH
```
<h4> 2) Truncate </h4>

*Truncates the string to a specified length and appends "..." if necessary.*

```js
import { truncate } = from 'string-utility-ts'

const str = `String Utility TS is a lightweight, easy-to-use library for JavaScript and TypeScript that provides a collection of commonly used string manipulation functions.`

const result = truncate(str2, 20)
console.log(result);    // String Utility TS is...
```
<h4> 3) Starts With </h4>

*Checks if the string starts with the specified substring.*

```js
import { startsWith } = from 'string-utility-ts'

const str = 'Hello World'

const result = startsWith(str, 'Hello')
console.log(result);    // true
```

<h4> 4) Ends With </h4>

*Checks if the string ends with the specified substring.*

```js
import { endsWith } = from 'string-utility-ts'

const str = 'Hello World'

const result = endsWith(str, 'Hello')
console.log(result);    // false
```

<h4> 5) Capitalize </h4>

*Capitalizes the first letter of the input string and converts the rest to lowercase.*

```js
import { capitalize } = from 'string-utility-ts'

const str = 'Hello World'

const result = capitalize(str)
console.log(result);    // Hello world
```

<h4> 6) Camel Case </h4>

*Converts a string to camelCase.*

```js
import { camelCase } = from 'string-utility-ts'

const str = 'Hello World'

const result = camelCase(str)
console.log(result);    // helloWorld
```

<h4> 7) Kebab Case </h4>

*Converts a string to kebab-case.*

```js
import { kebabCase } = from 'string-utility-ts'

const str = 'Hello World'

const result = kebabCase(str)
console.log(result);    // hello-world
```

<h4> 8) Repeat </h4>

*Repeats the string a specified number of times.*

```js
import { repeat } = from 'string-utility-ts'

const str = 'Hello World'

const result = repeat(str, 3)
console.log(result);    // Hello World Hello World Hello World
```
