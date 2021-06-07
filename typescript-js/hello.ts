const someGreet: string = 'asdasd';
console.log(someGreet);

let mgs = 'ehho'

// This is an industrial-grade general-purpose greeter function:
const greet1 = (person: string, date: Date) => {
    console.log(`Hello ${person}, today is ${date.toLocaleDateString()}!`);
}

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toLocaleDateString()}!`);
}

greet("Brendan", new Date());
greet1("Brendan", new Date());


// Примитивы:string number boolean

const a: string = 'Hello'
const b: number = 123
const c: boolean = true;

// Массивы

const arr: string[] = ['asdasd', 'asd', 'asd'];
const boolsArr: boolean[] = [true, false, true];
const numArr: number[] = [1, 2, 3, 4, 5]


// Any
let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;


// function 

function greet3(name: string) {
    console.log(`${name.toLocaleUpperCase}`)
}

greet3('42');
// greet3(42);
// Argument of type 'number' is not assignable to parameter of type 'string'.


// annotation return type 
function greet4(): string {
    return 'KOLBASA'
}

greet4()


// Anon Function

const names: string[] = ['a', 'b', 'c']
names.forEach((s: string) => {
    console.log(s.toUpperCase())
})


// OBJECT TYPE

const fnPrintColor = (pt: { x: number, y: number }) => {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

fnPrintColor({ x: 3, y: 7 })



const getHeigthAndWidth = (size: { width: number, heigth: number, correct: boolean }): number => {
    let { width, heigth, correct } = size;
    if (correct) {
        return width * heigth
    } else {
        return 0
    }
}

console.log(getHeigthAndWidth({ width: 1, heigth: 2, correct: true }))



// Conditional arguments

const getPrintName = (priority: { first: string, last?: string }) => {
    console.log(priority.first)
    console.log(priority.last)
    if (priority.last === undefined) {
        console.log('dont have priority ')
    } else {
        console.log(priority.first)

    }
}

getPrintName({ first: "Bob" });
getPrintName({ first: "Alice", last: "Alisson" });


// types of unions

const unions = (id: number | string | boolean) => {
    console.log('your id', id)
}

unions(122);
unions('123');
unions(true);

function unions1(id: number | string) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id.toString().toUpperCase());
    }
}

unions1('asdasd')


function union2(id: string[] | number[]) {
    id.map((item: string | number) => console.log(item))
}

function getFirstThree1(x: number[] | string) {
    return x.slice(0, 3);
}

// TYPES 

type Point = {
    x: number,
    y: number
}

type AllProp = {
    n: number,
    s: string,
    b: boolean,
    an: number[],
    as: string[],
    ab: boolean[],
    on: {
        x: string,
        y: number,
        z: boolean[]
    }
}

type ID = number | string;

const someFunc = (pt: AllProp) => {
    console.log("The coordinate's x value is " + pt.n);
    console.log("The coordinate's y value is " + pt.s);
    console.log("The coordinate's y value is " + pt.s);
    console.log("The coordinate's y value is " + pt.an);
    console.log("The coordinate's y value is " + pt.as);
    console.log("The coordinate's y value is " + pt.ab);
}



const someFunc1 = (str: ID) => {
    console.log('id', str)
}


type UserInputSanitizedString = string;

interface Point1 {
    x: number;
    y: number;
}

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

//   тип нельзя повторно открыть для добавления новых свойств по сравнению с интерфейсом, который всегда можно расширить.

interface Animal {
    name: string
}

interface Bear extends Animal {
    honey: boolean
}

const getBear = (anim: string | boolean) => {
    console.log(anim)
}

getBear('griiizllly');


interface Human {
    id: number,
    name: string,
    surname: string,
    gender: number,
    isDead: boolean,
}

interface Mom extends Human {
    cookEquipment: string[]
}

interface Dad extends Mom {
    gun: {
        name: string,
        calibr: string
    }
}

interface ReqToPost {
    id: number,
    name: string,
    city: string,
    address: string,
    phone: number,
    parents: {
        mom: Mom
        dad: Dad
    }
}

const getObjToReq = (obj: ReqToPost) => {
    pushToPostReq(obj)
}

const pushToPostReq = (obj) => {
    fetch('asdasd', {
        method: 'POST', // или 'PUT'
        body: JSON.stringify(obj), // данные могут быть 'строкой' или {объектом}!
        headers: {
            'Content-Type': 'application/json'
        }
    });
}


const req = { url: "https://example.com", method: "GET" as "GET" };

function compareNums(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}


function someNull(a?: number | null) {
    if (a === null) {
        console.log(a!.toFixed())
    }
}


function toPadLeft(count: number | string, input: number) {
    if (typeof count === 'string') {
        return new Array(count + 1).join('') + input;
    } else {
        return count + input
    }
}


const checkeds: string[] = [];

const checkCheckedInput = (e) => {
    if (checkeds.includes(e)) {
        checkeds.filter((item: string) => item !== e.target.id)
    } else {
        checkeds.concat(e);
    }
}


function example(x: string | number, y: string | boolean) {
    if (x === y) {
        x.toUpperCase()
        y.toUpperCase()
    } else {
        console.log(x)
        console.log(y)
    }
}


interface CarConfig {
    name: string,
    model: string,
    color?: string,
    damage: {
        type?: 'crash' | 'dive' | 'fired'
        frontBump?: boolean,
        rearBump?: boolean,
        body?: boolean | string,
    }
    type: string,
    types: string | number,
    owners: 'one' | 'more one' | 'more than 5',

}


interface Shape {
    width?: number,
    heigth?: number,
    radius: number,
    shapeKind: 'circle' | 'round' | 'oval'
}

function getArea(shape: Shape): number {
    if (shape.shapeKind === 'oval') {
        return Math.PI * shape.radius! ** 2
    }
}

interface Square {
    kind: 'square',
    radius: number,
}

interface Circle {
    kind: 'circle',
    sidelength: number
}


type Shapes = Circle | Square

function getAre1a(shape: Shapes) {
    if (shape.kind === 'square') {
        return Math.PI * shape.radius ** 2;
    }
}


function getArea2(shape: Shapes) {
    switch (shape.kind) {
        case 'square':
            return Math.PI * shape.radius ** 2;
        case 'circle':
            return Math.PI * shape.sidelength ** 2;
    }
}




const basda = (fn: (a: number) => void) => {
    fn(123123);
}


const fn = (a: number): number => {
    return 123123 + a
}


type GreetFunction1 = (a: string) => void;
function greeter(fn: GreetFunction1) {
    // ...
}


const enum links{
    youtube = 'asjdhakjdhak',
    google = 'asdkasdjal',
    tg = 120938102938
}


const createPass = (name, pass) => `${name}${pass}`
const createPass1 = (name: string, pass: number | string) => `${name}${pass}`
const createPass2 = (name: string = 'Yar', pass: number | string = 190) => `${name} ${pass}`
