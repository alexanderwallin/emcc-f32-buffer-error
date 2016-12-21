# Emscripten \_malloc/pointer/\_free test with Float32Array

This test allocates a `Float32Array` of 32 bytes onto `Module.HEAPF32.buffer` and fills the array with float numbers where each number is its index multiplied by a value.

Depending on the value, an error is thrown as `Module._abort()` is called.

I'm testing the following multipliers:

* 1.1 - throws an error
* 1.2 - works
* 1.3 - works
* 1.4 - throws an error

## Running the test

1. Compile an empty Emscripten module: `emcc -o empty.js empty.c`
2. Open index.html
3. Check the console
