function Point(x, y) {
    this.x = x;
    this.y = y;
}

var p1 = new Point(10, 11);
%DebugPrint(p1);

var p2 = new Point(12, 13);
%DebugPrint(p2);

print('check if p1 and p2 have same map:', % HaveSameMap(p1, p2));

p2['0'] = 'Nepal';

// addition of numbered attribute do not change hidden class.
print('check if p1 and p2 have same map:', % HaveSameMap(p1, p2));

// changes the hidden class
p2.z = 13;
%DebugPrint(p2);

// p1 and p2 now have different hidden class.
print('check if p1 and p2 have same map:', % HaveSameMap(p1, p2));


