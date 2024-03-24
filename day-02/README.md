# Day-02

## Data Types

- Primitive
- Non Primitive

### Primitive

1.  **Number**: Represents both integer and floating-point numbers.

    ```
    const integer = 42;
    const floatingPoint = 3.14;

    ```

    _Key Points_:

    - JavaScript uses the 64-bit floating-point format defined by the IEEE 754 standard to represent numbers.
    - JavaScript has several special values for representing special numbers like positive infinity, negative infinity, and NaN (Not-a-Number).

    ```
     const positiveInfinity = Infinity;
     const negativeInfinity = -Infinity;
     const notANumber = NaN;

    ```

    - The Number object in JavaScript also provides methods for working with numbers, such as toFixed(), toPrecision(), and toString().
    - JavaScript automatically converts between Number and String types as needed, using functions like parseInt() and parseFloat().

2.  **String**: Represents a sequence of characters.
    _Creating Strings:_ 
    - Strings can be created using single or double quotes.
    ```
    const singleQuotedString = 'Hello, world!';
    const doubleQuotedString = "Hello, world!";

    ```
    _String Length:_
    - The length of a string can be obtained using the length property.
    ```
        const str = 'Hello, world!';
        console.log(str.length); // 13
    ```       
    _String Concatenation:_
    - Strings can be concatenated using the + operator.
    ```
    const str1 = 'Hello, ';
    const str2 = 'world!';
    const greeting = str1 + str2;
    console.log(greeting); // "Hello, world!"

    ```

    _String Methods:_
    - JavaScript provides many built-in methods for working with strings, such as toUpperCase(), toLowerCase(), charAt(), substring(), split(), and indexOf().
    ```
    const str = 'Hello, world!';
    console.log(str.toUpperCase()); // "HELLO, WORLD!"
    console.log(str.indexOf('world')); // 7

    ```
    _Template Literals (ES6+):_
    - Template literals allow for easier string interpolation and multiline strings using backticks (`).
    ```
    const name = 'Alice';
    const message = `Hello, ${name}!`;
    console.log(message); // "Hello, Alice!"

    ```
    _Unicode Support:_
    - JavaScript strings support Unicode characters, allowing you to work with a wide range of characters from different languages.
    ```
    const heart = '\u2764'; // Unicode character for a heart
    console.log(heart); // "❤"

    ```
    _Immutability:_
    - Strings in JavaScript are immutable, meaning once a string is created, it cannot be changed. However, you can create new strings based on existing ones.

3.  **Boolean**: Represents a logical value, true or false.
4.  **Null**: Represents an intentional absence of any object value.
5.  **Undefined**: Represents a variable that has been declared but has not yet been assigned a value.
6.  **Symbol** (new in ECMAScript 6): Represents a unique identifier.
7.  **bigInt**

### Non Primitive

**Reference Types**:
    - Object: Represents a collection of key-value pairs.
    - Array: Represents a special kind of object used to store a list of values.
    - Function: Represents a callable object.
    - Date: Represents a date and time.
    - RegExp: Represents a regular expression object for pattern matching.

**Other Objects**: There are other built-in objects like Map, Set, WeakMap, WeakSet, etc.
