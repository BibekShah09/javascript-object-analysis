const arrary = [1, 2, 3, 4.56, 'x', null, null, null, null, null, 1];
// array[8] = ?;

// Step 1: Bounds Check
// Step 1: 8 >=0 && 8 < array.length; // bounds check

// for holey elements: Step 2
// hasOwnProperty(array, '8'): say it is false

// Step 3: Move to prototype chain
// hasOwnProperty(Array, 8);
// say it returns false.


// Step 4: Move again to prototype chain of object
// hasOwnProperty (Array, 8);
// say it returns false

// can get even worse if someone extend it.
// bad practise but as js engine you have to support it.

// finally returns undefined.


// for packed array
// Step1: Bounds Check & then returns the result.


// For Holey Array, Even if property exists. a[1] lets say
// Step 1: 1 >= 0 && 0 < array.length; // Bounds check

// Step 2: hasOwnProperty(array, 1); true. finally return its value.
// This is very best case scenario for holey array.

// operations in packed array can be much more optimized in packed array.
