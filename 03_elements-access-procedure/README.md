# Elements Access Procedure in JavaScript
Let us consider a holey array <br />
```
const holeyArray = [1, 2, 3, 4.56, 'x', null, null, null, null, null, 1];
```

## Access procedure in Holey Array (if property doesn't exist)
holeyArray[8] = ?

### Step 1: Bound check
Check if specified index is within array bound.
```
8 >= 0 && 8 < holeyArray.length
```

### Step 2: Check in object property
Check if object has specified object property with hasOwnProperty method.
<br />
```
hasOwnProperty(holeyArray, '8'):
```

### Step 3: Check in prototype chain for Array
```
hasOwnProperty(Array, 8);
```

### Step 4: Check in prototype chain for Object
```
hasOwnProperty(Object, 8);
```
<br />
<b>
Things get even worse if holeyArray is extended via inheritance.
</b>

<br /> Finally returns undefined.

## Access procedure in Holey Array (if property exists)
holeyArray[1] = ? 

### Step 1: Bounds Check 
```
1 >= 0 && 1 < array.length;
```

### Step 2: Check in object property
Check if object has specified object property with hasOwnProperty method.
<br />
```
hasOwnProperty(holeyArray, '1'):
```

<br /> Then, the value is returned.

## Access procedure in Packed Array
#### Step 1: Bounds Check and return result
Check if specified index is within array bound.
```
<br /> 8 >= 0 && 8 < array.length 
```

<br /> Then, the value is returned.
<br />

<b>Operations in packed array can be much more optimized.</b>
