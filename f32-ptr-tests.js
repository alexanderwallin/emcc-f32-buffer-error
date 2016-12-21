let testValues = [1.1, 1.2, 1.3, 1.4]
let bufferLength = 32

console.log(`
this test allocates a Float32Array of 32 bytes onto Module.HEAPF32.buffer
and fills the array with float numbers where each number is its index
multiplied by a value.

depending on the value, an error is thrown as Module._abort() is called.

i'm testing the following multipliers:

  * 1.1 - throws an error
  * 1.2 - works
  * 1.3 - works
  * 1.4 - throws an error

let's have a look:

`)

for (let multiplier of testValues) {
  console.log(`- - - - - - - \n`)
  console.log(`testing multiplier: ${multiplier}`)

  try {
    let ptr = Module._malloc(bufferLength)
    let buf = new Float32Array(Module.HEAPF32.buffer, ptr, bufferLength)

    for (let i = 0; i < bufferLength; i++) {
      buf[i] = i * multiplier
    }

    console.log('... did fill array')

    Module._free(ptr)

    console.log('all good')
  }
  catch (err) {
    console.log('oh nose!')
    console.error(err)
  }

  console.log('\n\n')
}
