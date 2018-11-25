# JS模块化部分

![](https://img.shields.io/badge/license-MIT-orange.svg)

## 什么是模块化

在js发展的历史上，一直没有模块（modules）体系，无法将大的程序拆分成相互依赖的小程序，在通过简单的方法拼装成一个完整的程序。
在es6之前，js社区提供了一些模块化的方法，主要的有commonJS和AMD，前者用于服务器，后者用于浏览器。es6采用了新的语法（import 和 export）来实现模块化的功能。

ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。

```js
let { stat, exists, readFile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;
```
上面代码的实质是整体加载fs模块（即加载fs的所有方法），生成一个对象（_fs），然后再从这个对象上面读取 3 个方法.

```js
// ES6模块
import { stat, exists, readFile } from 'fs';
```

上面代码的实质是从fs模块加载 3 个方法，其他方法不加载。

## export命令

es6模块主要功能又export和import组成，export规定了模块对外的接口，import命令用于输入其他模块提供的功能。
一个文件就是一个模块，如果想要在另一个模块中使用该模块的变量，必须使用import导出该变量。

```js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;

//另一种写法
var firstName = 'Michael';
var lastName = 'Jackson'
var year = 1958;

export { firstName, lastName, year}

```
export命令除了输出变量，还可以输出函数或类（class）。
```js
export function examFun(){
    console.log('example function');
}
```

通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。
```js
function v1() { ... }
function v2() { ... }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};

```
上面代码使用as关键字，重命名了函数v1和v2的对外接口。重命名后，v2可以用不同的名字输出两次。

另外，export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。

```js

export let foo = 'bar';
setTimeout(()=>{
    foo = 'par';
},1000)

```

上面代码输出变量foo，值为bar，500 毫秒之后变成baz。这一点与 CommonJS 规范完全不同。CommonJS 模块输出的是值的缓存，不存在动态更新。

### import

使用export命令规定了模块对外的接口，其他js文件就可以通过import来加载这个模块。

```js
import {firstName, lastName, year} from './profile.js';
```

如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。

```js
import {fisrtName as otherName } from './profiles.js';
```

import 命令导入的变量都是只读的，但是如果导入的变量是一个引用类型，可以修改引用类型的key值。
```js
import {a} from './xxx.js'

a = {}; // Syntax Error : 'a' is read-only;
import {a} from './xxx.js'

a.foo = 'hello'; // 合法操作
```

另外 import命令具有提升效果 会提升到整个模块的头部,因此，下面的写法也是ok的。
```js
foo();

import { foo } from 'my_module';
```

### 模块的整体加载

除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。

下面是一个circle.js文件，它输出两个方法area和circumference.
```js
export function area(radius) {
  return Math.PI * radius * radius;
}

export function circumference(radius) {
  return 2 * Math.PI * radius;
}
```
单独加载里面的方法

```js
import {area,circumference} from 'circle.js'
```

上面写法是逐一指定要加载的方法，整体加载的写法如下。

```js
import * as circle from './circle.js'
```

### export default 

还可以为模块指定默认输出

```js
export default function () {
  console.log('foo');
}
```
上面代码是一个模块文件export-default.js，它的默认输出是一个函数。

其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。

```js
// import-default.js
import customName from './export-default';
customName(); // 'foo'
```

注意：一个模块只能有一个默认输出，因此export default命令只能使用一次。




## 参考资料

- [阮一峰老师的es6教程](http://es6.ruanyifeng.com/#docs/module)