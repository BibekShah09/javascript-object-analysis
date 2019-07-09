const array = [ "a" , "b" , "c" ];
delete array[ 1 ]; // Introduces a hole in the elements store.
%DebugPrint(array);

print(array[ 1 ]); // Prints "undefined"; property 1 does not exist.
array.__proto__ = { 1 : "B" }; // Define property 1 on the prototype.

%DebugPrint(array);


//d8 --allow-natives-syntax  03_elements/element.js
