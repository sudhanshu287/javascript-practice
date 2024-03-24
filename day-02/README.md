# Day-02

## Data Types

- Primitive
- Non Primitive

### Primitive

1. **Number**: Represents both integer and floating-point numbers.

   ```
   const integer = 42;
   const floatingPoint = 3.14;

   ```
   *Key Points*:
   - JavaScript uses the 64-bit floating-point format defined by the IEEE 754 standard to represent numbers.
   - JavaScript has several special values for representing special numbers like positive infinity, negative infinity, and NaN (Not-a-Number).
   ```
    const positiveInfinity = Infinity;
    const negativeInfinity = -Infinity;
    const notANumber = NaN;

   ```
   - The Number object in JavaScript also provides methods for working with numbers, such as toFixed(), toPrecision(), and toString().
   - JavaScript automatically converts between Number and String types as needed, using functions like parseInt() and parseFloat().

2. **String**: Represents a sequence of characters.
3. **Boolean**: Represents a logical value, true or false.
4. **Null**: Represents an intentional absence of any object value.
5. **Undefined**: Represents a variable that has been declared but has not yet been assigned a value.
6. **Symbol** (new in ECMAScript 6): Represents a unique identifier.
7. **bigInt**

### Non Primitive
