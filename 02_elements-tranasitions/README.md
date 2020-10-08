### Elements
Indexed properties in javascript are called elements and are treated separately from the named properties
They are mostly prominent in arrays and used for different prototype method.


### Run
```sh 
   d8 --allow-natives-syntax element-transition.js
```

### Output

#### 01. Packed SMI Elements
```
const array = [1, 2, 3];
```
<img src='output/01_packed_smi_elements.png' alt='smi_elements'/>

#### 02. Packed Double Elements
```
array.push(4.44);
```
<img src='output/02_packed_double_elements.png' alt='packed_double_elements'/>

#### 03. Packed Elements
```
array.push('x');
```
<img src='output/03_packed_elements.png' alt='packed_elements'/>

#### 04. Holey SMI Elements
```
const newArray = [1, 2, 3];
delete newArray[1];
```
<img src='output/04_holey_smi_elements.png' alt='holey_smi_elements'/>

#### 05. Holey SMI Elements
```
newArray[1] = 2;
```
<img src='output/05_holey_smi_elements.png' alt='holey_smi_elements'/>
<br />
<b> Once hole is created it cannot be reverted back.</b>

#### 06. Holey Double Elements
```
newArray.push(3.33);
```
<img src='output/06_holey_double_elements.png' alt='holey_double_elements'/>

#### 07. Holey Elements
```
newArray.push('x');
```
<img src='output/07_holey_elements.png' alt='smi_elements'/>

