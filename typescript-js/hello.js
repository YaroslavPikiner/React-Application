const someGreet = 'asdasd';
console.log(someGreet);
let mgs = 'ehho';
// This is an industrial-grade general-purpose greeter function:
const greet1 = (person, date) => {
    console.log(`Hello ${person}, today is ${date.toLocaleDateString()}!`);
};
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toLocaleDateString()}!`);
}
greet("Brendan", new Date());
greet1("Brendan", new Date());
// Примитивы:string number boolean
const a = 'Hello';
const b = 123;
const c = true;
// Массивы
const arr = ['asdasd', 'asd', 'asd'];
const boolsArr = [true, false, true];
const numArr = [1, 2, 3, 4, 5];
// Any
let obj = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n = obj;
// function 
function greet3(name) {
    console.log(`${name.toLocaleUpperCase}`);
}
greet3('42');
// greet3(42);
// Argument of type 'number' is not assignable to parameter of type 'string'.
// annotation return type 
function greet4() {
    return 'KOLBASA';
}
greet4();
// Anon Function
const names = ['a', 'b', 'c'];
names.forEach((s) => {
    console.log(s.toUpperCase());
});
// OBJECT TYPE
const fnPrintColor = (pt) => {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
};
fnPrintColor({ x: 3, y: 7 });
const getHeigthAndWidth = (size) => {
    let { width, heigth, correct } = size;
    if (correct) {
        return width * heigth;
    }
    else {
        return 0;
    }
};
console.log(getHeigthAndWidth({ width: 1, heigth: 2, correct: true }));
// Conditional arguments
const getPrintName = (priority) => {
    console.log(priority.first);
    console.log(priority.last);
    if (priority.last === undefined) {
        console.log('dont have priority ');
    }
    else {
        console.log(priority.first);
    }
};
getPrintName({ first: "Bob" });
getPrintName({ first: "Alice", last: "Alisson" });
// types of unions
const unions = (id) => {
    console.log('your id', id);
};
unions(122);
unions('123');
unions(true);
function unions1(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id.toString().toUpperCase());
    }
}
unions1('asdasd');
function union2(id) {
    id.map((item) => console.log(item));
}
function getFirstThree1(x) {
    return x.slice(0, 3);
}
const someFunc = (pt) => {
    console.log("The coordinate's x value is " + pt.n);
    console.log("The coordinate's y value is " + pt.s);
    console.log("The coordinate's y value is " + pt.s);
    console.log("The coordinate's y value is " + pt.an);
    console.log("The coordinate's y value is " + pt.as);
    console.log("The coordinate's y value is " + pt.ab);
};
const someFunc1 = (str) => {
    console.log('id', str);
};
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
const getBear = (anim) => {
    console.log(anim);
};
getBear('griiizllly');
const getObjToReq = (obj) => {
    pushToPostReq(obj);
};
const pushToPostReq = (obj) => {
    fetch('asdasd', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
const req = { url: "https://example.com", method: "GET" };
function compareNums(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function someNull(a) {
    if (a === null) {
        console.log(a.toFixed());
    }
}
function toPadLeft(count, input) {
    if (typeof count === 'string') {
        return new Array(count + 1).join('') + input;
    }
    else {
        return count + input;
    }
}
const checkeds = [];
const checkCheckedInput = (e) => {
    if (checkeds.includes(e)) {
        checkeds.filter((item) => item !== e.target.id);
    }
    else {
        checkeds.concat(e);
    }
};
function example(x, y) {
    if (x === y) {
        x.toUpperCase();
        y.toUpperCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
function getArea(shape) {
    if (shape.shapeKind === 'oval') {
        return Math.PI * shape.radius ** 2;
    }
}
function getAre1a(shape) {
    if (shape.kind === 'square') {
        return Math.PI * shape.radius ** 2;
    }
}
function getArea2(shape) {
    switch (shape.kind) {
        case 'square':
            return Math.PI * shape.radius ** 2;
        case 'circle':
            return Math.PI * shape.sidelength ** 2;
    }
}
const basda = (fn) => {
    fn(123123);
};
const fn = (a) => {
    return 123123 + a;
};

