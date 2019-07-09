var test = {
    a: "foo",
    b: "bar",
    0: "foo",
    1: "bar",
};

%DebugPrint(test);

test.c = 'i am late';
test.d = 'i am late too';

%DebugPrint(test);

delete test.a;

%DebugPrint(test);

// Run the command
// d8 --allow-natives-syntax object.js
