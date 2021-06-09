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

const pushToPostReq = (obj: any) => {
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
    if (checkeds.indexOf(e) !== -1) {
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
    return 0
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


const enum links {
    youtube = 'asjdhakjdhak',
    google = 'asdkasdjal',
    tg = 120938102938
}


const createPass = (name, pass) => `${name}${pass}`
const createPass1 = (name: string, pass: number | string) => `${name}${pass}`
const createPass2 = (name: string = 'Yar', pass: number | string = 190) => `${name} ${pass}`
const createPass3 = (name?: string, pass?: number | boolean) => `${name}, ${pass}`;

// // rest 

const createPass4 = (name: string, ...skills: Array<string>) => {
    `${name}, have skills ${skills.join()}`
}

createPass4('a', 'b', 'c', 'd')


// void 

const voidFunction = (): void => {
    console.log('asasdaskld')
}

const neverFunction = (msg: string): never => {
    throw new Error('asldaj')
}

const neverFunction2 = (msg: string): never => {
    while (true) {

    }
}


// function varialble type

let newFn: (firstArg: string) => void;

const oldFn = (name: string): void => {
    console.log('void old fn ' + name)
}

newFn = oldFn

// with legasy code 

let newFn1;

function oldFn1(name: string): void {
    console.log('allala')
}

newFn1 = oldFn1;



// object 

let user: { name: string, age: string, email?: string } = {
    name: 'Yar',
    age: '990'
}

user.email = 'aslkdjaskld@lksfdkl.com'
user.age = '150';
user.name = '12'

// type 

type User = {
    name: string,
    age: number,
    isMarried: boolean
    someInfo: string[]
}


let user111: User = {
    name: "yar",
    age: 122,
    isMarried: true,
    someInfo: ['a', '2', '@@']
}


//interface 

type User1 = {
    name: string,
    age: number,
    isMarried: boolean
    someInfo: Array<string>
    alala?: string,
    getPassa?: () => string,
}


let user1112: User1 = {
    name: "yar",
    age: 122,
    isMarried: true,
    someInfo: ['a', '2', '@@'],
    getPassa(): string {
        return `${this.name}${this.age}`
    }
}

let user1113: User1 = {
    name: "yar",
    age: 122,
    isMarried: true,
    someInfo: ['a', '2', '@@'],
    alala: 'petro'
}


// classes 
// class types 

class UserAs {
    name: string;
    age: number;
    nickName: string;

    constructor(name: string, age: number, nickName: string) {
        this.name = name,
            this.age = age,
            this.nickName = nickName
    }

}
const userAs = new UserAs('Yar', 990, 'Deymos')


class UserAs1 {
    public name: string;
    private age: number;
    protected nickName: string;
    readonly isHere: boolean

    constructor(name: string, age: number, nickName: string, isHere: boolean) {
        this.name = name,
            this.age = age,
            this.nickName = nickName
        this.isHere = isHere
    }
}


// add default property to class 

class UserAs2 {
    name: string;
    surname: string = 'ayaya';
    age: number = 123;

    constructor(name: string) {
        this.name = name
    }

    getPass(): string {
        return `${this.name}`
    }
}


const nema = new UserAs2("yarka")

nema.getPass();


class UserAs3 {
    constructor(
        public name: string,
        public surname: string,
        public age: number,
        private list: string[],
    ) { }
}



// getter setter

class User33 {
    private age: number = 20;
    constructor(public name: string) { }

    setAge(age: number) {
        this.age = age
    }

    set myAge(age: number) {
        this.age = age
    }
}

const alalala = new User33('yar')

alalala.setAge(30);
alalala.myAge = 132;

// с помощью методов и сеттеров можно менять свойства 

// интерфейсы выполняют фн именование типов , надобьектная форма сущность которая помогает описат ьформу обьекта или как она будет выглядет в будущем

interface UserLog {
    name: string,
    number: number
}


// расширямый интерфейс 

interface SomeInterface {
    name: string,
    age: number,
    [propName: string]: any
}

const yar: SomeInterface = {
    name: 'yaraa',
    age: 1250,
    nickName: 'asdasda',
    lala: true,
    somkelol: 12
}




interface UserSomeInterFace {
    name: string,
    age: number,
    getPassed(): string,
}


// для передачи в класс интерфейса делаем implements
class Y121aar implements UserSomeInterFace {
    name: string = 'Yararara';
    age: number = 31;
    getPassed() {
        return `${this.name}${this.age}`
    }
}

// JENERIC


const getter = (data: any): any => data;
// к каким ошибкам может привести 
getter(10).lenght;
getter('test').lenght; //undefined


const getter1 = <T>(data: T): T => data;
// es6

function getter2<T>(data: T): T {
    return data;
}

const fanc = <T>(agrs: T): T => {
    return agrs
}
// es5
fanc(10).length;
fanc('test').length; //undefined
fanc([11, 2, 2, 3, 4]).length; //undefined
fanc<number>(10).length;
fanc<number[]>([1, 2, 23, 3])



class Usera<Karas, Lyash> {
    constructor(public name: Karas, public age: Lyash) { }
    public getPasssat(): string {
        return `${this.name}${this.age}`
    }
}

class Usera1<Karas> {
    constructor(public name: Karas, public age: Karas) { }
    public getPasssat(): string {
        return `${this.name}${this.age}`
    }
}
const ararat3 = new Usera1(true, false);

const ararat = new Usera('ASDASD', 123123)
const ararat2 = new Usera(123123, 'ASDASD');
const ararat3 = new Usera(true, false);
const ararat4 = new Usera([12, 31, 23, 123], true)

ararat.getPasssat()

class Calculator<Num> {
    constructor(public arg1: Num, public arg2: Num, public res?: Num) { }

    public add(): number {
        this.print(this.res);
        return this.res = this.arg1 + this.arg2
    }

    public minus(): number {
        this.print(this.res);
        return this.res = this.arg1 - this.arg2
    }

    public divide(): number {
        this.print(this.res);
        return this.res = this.arg1 - this.arg2
    }

    public multipy(): number {
        this.print(this.res);
        return this.res = this.arg1 - this.arg2
    }

    public getRandom(): number {
        this.print(this.res);
        return this.res = Math.floor(Math.random() * 30)
    }

    private print(data): string {
        return `result${data}`
    }
}

const calc = new Calculator(106, 241);
calc.add()