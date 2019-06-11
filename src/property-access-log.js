const packed_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

const holey_array = [1, null, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 'x', 50.23];

delete holey_array[1];

// %DebugPrint(packed_array);
// %DebugPrint(holey_array);

console.time("packedArray");
for (var count = 0; count < 10000000000; count++) {
    var val = packed_array[1];
}
console.timeEnd("packedArray");

console.time("holeyArray");
for (var count = 0; count < 10000000000; count++) {
    var val = holey_array[1];
}

console.timeEnd("holeyArray");

// console.timeEnd: packedArray, 122033.288000
// console.timeEnd: holeyArray, 152669.351000
