function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const obj = { text: "hello", count: 42};

let s = getProp(obj, "text"); // string
let n = getProp(obj, "count"); // number
// let x = getProp(obj ,"foo"); // error