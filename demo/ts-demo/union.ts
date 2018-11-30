function foo(x: string | number | boolean) {
    if (typeof x === "string") {
        const a = x;
        x = 1;
        const b = x;
    }
    const c = x;
}

function bar(x: string | null) {
    if (x === null) {
        return;
    }
    // in strict mode
    // type of x is string in remainder of function
}

// Discriminate Unions

type Shape = 
    | {kind: "circle", radius: number}
    | {kind: "square", size: number}
    | {kind: "rectangle", w: number, h: number};

function area(shape: Shape) : number {
    switch(shape.kind) {
        case "circle": return Math.PI * shape.radius ** 2;
        case "square": return Math.PI * shape.size ** 2;
        case "rectangle": return Math.PI * shape.w * shape.h;
    }
}