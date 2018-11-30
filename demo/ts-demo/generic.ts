// https://www.typescriptlang.org/docs/handbook/generics.html

function identity<T>(arg: T) : T {
    return arg;
}

function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

let strOutput = identity('test'); // string

interface IdentityFn {
    <T>(arg: T): T;
}

let g: IdentityFn = identity;

let numberOutput = g(123); // number