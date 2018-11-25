
import {firstName, lastName, year} from './example1.js';
import {examFun} from './example1.js'
import { foo, arr } from  './example1.js'
console.log(firstName+':'+lastName+':'+year)

examFun();
console.log(foo);
setTimeout(()=>{
    console.log(foo)
},2000)

// 导出变量是基础类型，不能修改，导出类型是引用类型，可以修改引用类型的key值；

// 修改基础类型变量
//firstName = 'xiao';

//修改引用类型变量
arr[1] = 'li';
console.log(arr);

