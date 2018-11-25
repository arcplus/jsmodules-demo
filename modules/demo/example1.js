
//导出变量
export let firstName = 'Michael';
export let lastName = 'Jackson';
export let year = 1958;

//导出函数
export function examFun(){
    console.log('example function!');
}

//值动态改变

export let foo = 'bar';
setTimeout(()=>{
    foo = 'par';
},1000)

// 导出函数
let arr = [1,2,3];
export { arr };