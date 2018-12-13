type Person = {
    firstName: string;
    lastName: string;
}

const p = {
    firstName: 'Jeff',
    lastName: 'Zhang'
};


function greeting(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

function greeting2(person: {name:string}) {
    return `Hello, ${person.name}`;
}

let user: Person = { firstName: "San", lastName: "Zhang"};

var greeting1 = greeting(user);

// const a = greeting([p]); // type error

let s1: string = '123';