function foo() {
    const x = { bar: 'bar' };
%DebugTrackRetainingPath(x);
    return () => { return x; }
}
const closure = foo();
gc();

// d8 --allow-natives-syntax --track-retaining-path --expose-gc trace-memory-leaks.js
