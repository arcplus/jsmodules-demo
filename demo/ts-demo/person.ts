type Person = {
    firstName: string;
    lastName: string;
}


function greeting(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

function greeting2(person: {name:string}) {
    return `Hello, ${person.name}`;
}

let user: Person = { firstName: "San", lastName: "Zhang"};

var greeting1 = greeting(user);