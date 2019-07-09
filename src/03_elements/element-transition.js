const array = [1, 2, 3];
%DebugPrint(array);
// elements: PACKED_SMI_ELEMENTS
// length: 3

array.push(4.44);
%DebugPrint(array);
// elements: PACKED_DOUBLE_ELEMENTS
// const array = [1, 2, 3]; %DebugPrint(array);
// length: 4

array.push('x');
%DebugPrint(array);
// PACKED_ELEMENTS

const newArray = [1, 2, 3];
delete newArray[1];
%DebugPrint(newArray);
// HOLEY_SMI_ELEMENTS

newArray[1] = 2;
print(newArray[1]);
%DebugPrint(newArray);
// HOLEY_SMI_ELEMENTS,
// Although index 1 is filled it cannot be moved to more specific elements.

newArray.push(3.33);
%DebugPrint(newArray);
// HOLEY_DOUBLE_ELEMENTS

newArray.push('x');
%DebugPrint(newArray);
// HOLEY_ELEMENTS