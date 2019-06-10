const array = [1, 2, 3];
const start = +new Date();
let i = 0;

while(i < 100000000) {
    const test = array[i];
    ++i;
}

print(+new Date() - start);

const newArray = [1, 2, 3];
delete newArray[1];
i=0;

while(i < 100000000) {
    const test = array[i];
    ++i;
}

print(+new Date() - start);