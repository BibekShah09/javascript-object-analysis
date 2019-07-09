function Point(x, y) {
    this.x = x;
    this.y = y;
}

var p1 = new Point(10, 11);
%DebugPrint(p1);

var p2 = new Point(12, 13);
%DebugPrint(p2);

print('check if p1 and p2 have same map:', %HaveSameMap(p1, p2));
p2['0'] = 'Nepal';

// addition of numbered attribute do not change hidden class.
print('updating numbered properties cause hidden class to alter:', !%HaveSameMap(p1, p2));

// changes the hidden class
p2['120'] = 3.04;
p2['320'] = 'Nepal 120';

p2.z = 13;
p2.a = 11;
p2.b = 112;
p2.c = 1143;
p2.d = 11343;
p2.e = 1143;
p2.f = 11;
p2.g = 112;
p2.h = 116;
p2.i = 117;
p2.j = 118;
// %DebugPrint(p2);

// p1 and p2 now have different hidden class.
print('updating named properties cause hidden class to alter:', !%HaveSameMap(p1, p2));
