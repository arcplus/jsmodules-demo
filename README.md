# JS模块化以及TypeScript

## 模块

### 什么是模块？

[10.Modules](https://eloquentjavascript.net/10_modules.html)

> A module is a piece of program that specifies which other pieces it relies on and which functionality it provides for other modules to use (its interface).
>
> ...
>
> They make part of the module available to the outside world and keep the rest private.
> 
> From "eloquent javascript"


### 模块化包含什么？

- 对外接口(interface)
- 封装(private scope)
- 依赖管理(dependency)

### ES Modules


#### use modules

```html
<!-- code.js will run as a module -->
<script type="module" src="code.js"></script>
<!-- an inline script tag as as module -->
<script type="module">
console.info(`It's module time!`);
</script>
```


## npm包(package)

### CommonJS

[CommonJS的模块导入功能require函数的伪代码实现](https://eloquentjavascript.net/10_modules.html#p_vmJrDleGRH)

```js

require.cache = Object.create(null);

function require(name) {
  if (!(name in require.cache)) {
    let code = readFile(name); // implemented by node or browser
    let module = {exports: {}};
    require.cache[name] = module;
    let wrapper = Function("require, exports, module", code);
    wrapper(require, module.exports, module);
  }
  return require.cache[name].exports;
}
```

### [node中模块解析](https://www.typescriptlang.org/docs/handbook/module-resolution.html#node)


示例：

```js
// file /root/src/moduleA.js
const x = require("./moduleB");
```
1. 判断是否 `/root/src/moduleB.js`文件是否存在，若存在，则导入此文件
2. 判断文件夹`/root/src/moduleB`是否存在；若存在，找到`package.json`文件里的主模块`main`（比如：`{"main":"lib/mainModule.js"}`），若找到，则导入`/root/src/moduleB/lib/mainModule.js`
3. 判断`/root/src/moduleB/index.js`文件是否存在，若存在，则导入此文件

## TypeScript

### ts的能力

- 编写代码过程中的强类型检查
- 面向接口编程
- 模块支持，可以通过编译选项(`--moduleResolution`)的设置编译为node的模块解析方式或es6 modules方式
- JS文件中代码的类型检查([支持通过JSDoc进行JS代码的类型检查](https://github.com/Microsoft/TypeScript/wiki/JSDoc-support-in-JavaScript))

typescript官方提供了[从JS迁移到TS的指南](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html)


## 参考资料

- [Eloquent Javascript](https://eloquentjavascript.net/)
- [JS Modules](https://developers.google.cn/web/fundamentals/primers/modules)
- [Universal Module Definition](https://github.com/umdjs/umd)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
- [typescript中文文档站](https://www.tslang.cn/docs/home.html)
- [TS快速上手样例](https://www.typescriptlang.org/samples/index.html)