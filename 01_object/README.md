### Javascript Objects
They are mutable data types (can be altered) created by literals and compared by reference maintaining unique identities.
They are the collection of properties, mapping between objects and keys, and values.


### Run
```sh 
    d8 --allow-natives-syntax object.js
```


### Output

##### 01. Object with inline properties
Object <b>test</b> for analysis

```
var test = {
    a: "foo",
    b: "bar",
    0: "foo",
    1: "bar",
};
```
<img src='output/01_inobject_properties.png' alt='inobject_properties'/>

##### 02. Fast Properties
Adding property c and d to test.
```
test.c = 'i am late';
test.d = 'i am late too';
```
<img src='output/02_fast_properties.png' alt='fast_properties'/>

##### 03. Dictionary Properties
Removing property a to test object.
```
delete test.a;
```
<img src='output/03_dictionary_properties.png' alt='dictionary_properties'/>
