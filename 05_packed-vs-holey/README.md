# Packed Vs Holey Array Performance
Holes are created in object backing stores if you delete it or don’t define it. Creating holes in the array cause the engine to go through expensive table lookup in the prototype chain.

## Run
 ```sh
 node packed-vs-holey.js
 ```

### Output
```
   console.timeEnd: packedArray, 122033.288000
   console.timeEnd: holeyArray, 152669.351000
```
