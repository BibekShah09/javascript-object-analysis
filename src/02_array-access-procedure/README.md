# Elements Access Procedure in JavaScript
Let us consider holey array as: <br />
const holeyArray = [1, 2, 3, 4.56, 'x', null, null, null, null, null, 1];

holeyArray[8] = ?;

### Holey Array
##### Step 1: Bounds Check
Check if specified index is within array bound.
<br /> 8 >= 0 && 8 < holeyArray.length

##### Step 2: Check in object property,
Check if object has specified object property with hasOwnProperty method.
<br /> hasOwnProperty(holeyArray, '8'):

##### Step 3: Check in Prototype chain for array
hasOwnProperty(Array, 8);

##### Step 4: Check in Prototype chain for object
hasOwnProperty(Object, 8);
<br /> Things get even worse if holeyArray is extended via inheritance.
<br /> Finally returns undefined.

#### Holey Array (If property exists)
holeyArray[1] = ? 

##### Step 1: Bounds Check 
1 >= 0 && 1 < array.length; 

##### Step 2: hasOwnProperty(array, 1); true.
finally return its value.

<br /> This is very best case scenario for holey array.
 
### Packed Array
##### Step 1: Bounds Check and return result
Check if specified index is within array bound.
<br /> 8 >= 0 && 8 < array.length 

<b>Operations in packed array can be much more optimized.</b>
