var someGreet = 'asdasd';
console.log(someGreet);
var mgs = 'ehho';
// This is an industrial-grade general-purpose greeter function:
var greet1 = function (person, date) {
    console.log("Hello " + person + ", today is " + date.toLocaleDateString() + "!");
};
function greet(person, date) {
    console.log("Hello " + person + ", today is " + date.toLocaleDateString() + "!");
}
greet("Brendan", new Date());
greet1("Brendan", new Date());
// Примитивы:string number boolean
var a = 'Hello';
var b = 123;
var c = true;
// Массивы
var arr = ['asdasd', 'asd', 'asd'];
var boolsArr = [true, false, true];
var numArr = [1, 2, 3, 4, 5];
// Any
// function 
function greet3(name) {
    console.log("" + name.toLocaleUpperCase);
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
var names = ['a', 'b', 'c'];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// OBJECT TYPE
var fnPrintColor = function (pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
};
fnPrintColor({ x: 3, y: 7 });
var getHeigthAndWidth = function (size) {
    var width = size.width, heigth = size.heigth, correct = size.correct;
    if (correct) {
        return width * heigth;
    }
    else {
        return 0;
    }
};
console.log(getHeigthAndWidth({ width: 1, heigth: 2, correct: true }));
// Conditional arguments
var getPrintName = function (priority) {
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
var unions = function (id) {
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
    id.map(function (item) { return console.log(item); });
}
function getFirstThree1(x) {
    return x.slice(0, 3);
}
var someFunc = function (pt) {
    console.log("The coordinate's x value is " + pt.n);
    console.log("The coordinate's y value is " + pt.s);
    console.log("The coordinate's y value is " + pt.s);
    console.log("The coordinate's y value is " + pt.an);
    console.log("The coordinate's y value is " + pt.as);
    console.log("The coordinate's y value is " + pt.ab);
};
var someFunc1 = function (str) {
    console.log('id', str);
};
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
var getBear = function (anim) {
    console.log(anim);
};
getBear('griiizllly');
var getObjToReq = function (obj) {
    pushToPostReq(obj);
};
var pushToPostReq = function (obj) {
    fetch('asdasd', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
var req = { url: "https://example.com", method: "GET" };
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
var checkeds = [];
var checkCheckedInput = function (e) {
    if (checkeds.indexOf(e) !== -1) {
        checkeds.filter(function (item) { return item !== e.target.id; });
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
        return Math.PI * Math.pow(shape.radius, 2);
    }
    return 0;
}
function getAre1a(shape) {
    if (shape.kind === 'square') {
        return Math.PI * Math.pow(shape.radius, 2);
    }
}
function getArea2(shape) {
    switch (shape.kind) {
        case 'square':
            return Math.PI * Math.pow(shape.radius, 2);
        case 'circle':
            return Math.PI * Math.pow(shape.sidelength, 2);
    }
}
var basda = function (fn) {
    fn(123123);
};
var fn = function (a) {
    return 123123 + a;
};
function greeter(fn) {
    // ...
}
var createPass = function (name, pass) { return "" + name + pass; };
var createPass1 = function (name, pass) { return "" + name + pass; };
var createPass2 = function (name, pass) {
    if (name === void 0) { name = 'Yar'; }
    if (pass === void 0) { pass = 190; }
    return name + " " + pass;
};
var createPass3 = function (name, pass) { return name + ", " + pass; };
// // rest 
var createPass4 = function (name) {
    var skills = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        skills[_i - 1] = arguments[_i];
    }
    name + ", have skills " + skills.join();
};
createPass4('a', 'b', 'c', 'd');
// void 
var voidFunction = function () {
    console.log('asasdaskld');
};
var neverFunction = function (msg) {
    throw new Error('asldaj');
};
var neverFunction2 = function (msg) {
    while (true) {
    }
};
// function varialble type
var newFn;
var oldFn = function (name) {
    console.log('void old fn ' + name);
};
newFn = oldFn;
// with legasy code 
var newFn1;
function oldFn1(name) {
    console.log('allala');
}
newFn1 = oldFn1;
// object 
var user = {
    name: 'Yar',
    age: '990'
};
user.email = 'aslkdjaskld@lksfdkl.com';
user.age = '150';
user.name = '12';
var user111 = {
    name: "yar",
    age: 122,
    isMarried: true,
    someInfo: ['a', '2', '@@']
};
var user1112 = {
    name: "yar",
    age: 122,
    isMarried: true,
    someInfo: ['a', '2', '@@'],
    getPassa: function () {
        return "" + this.name + this.age;
    }
};
var user1113 = {
    name: "yar",
    age: 122,
    isMarried: true,
    someInfo: ['a', '2', '@@'],
    alala: 'petro'
};
// classes 
// class types 
var UserAs = /** @class */ (function () {
    function UserAs(name, age, nickName) {
        this.name = name,
            this.age = age,
            this.nickName = nickName;
    }
    return UserAs;
}());
var userAs = new UserAs('Yar', 990, 'Deymos');
var UserAs1 = /** @class */ (function () {
    function UserAs1(name, age, nickName, isHere) {
        this.name = name,
            this.age = age,
            this.nickName = nickName;
        this.isHere = isHere;
    }
    return UserAs1;
}());
// add default property to class 
var UserAs2 = /** @class */ (function () {
    function UserAs2(name) {
        this.surname = 'ayaya';
        this.age = 123;
        this.name = name;
    }
    UserAs2.prototype.getPass = function () {
        return "" + this.name;
    };
    return UserAs2;
}());
var nema = new UserAs2("yarka");
nema.getPass();
var UserAs3 = /** @class */ (function () {
    function UserAs3(name, surname, age, list) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.list = list;
    }
    return UserAs3;
}());
// getter setter
var User33 = /** @class */ (function () {
    function User33(name) {
        this.name = name;
        this.age = 20;
    }
    User33.prototype.setAge = function (age) {
        this.age = age;
    };
    Object.defineProperty(User33.prototype, "myAge", {
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    return User33;
}());
var alalala = new User33('yar');
alalala.setAge(30);
alalala.myAge = 132;
var yar = {
    name: 'yaraa',
    age: 1250,
    nickName: 'asdasda',
    lala: true,
    somkelol: 12
};
// для передачи в класс интерфейса делаем implements
var Y121aar = /** @class */ (function () {
    function Y121aar() {
        this.name = 'Yararara';
        this.age = 31;
    }
    Y121aar.prototype.getPassed = function () {
        return "" + this.name + this.age;
    };
    return Y121aar;
}());
// JENERIC
var getter = function (data) { return data; };
// к каким ошибкам может привести 
getter(10).lenght;
getter('test').lenght; //undefined
var getter1 = function (data) { return data; };
// es6
function getter2(data) {
    return data;
}
var fanc = function (agrs) {
    return agrs;
};
// es5
fanc(10).length;
fanc('test').length; //undefined
fanc([11, 2, 2, 3, 4]).length; //undefined
fanc(10).length;
fanc([1, 2, 23, 3]);
var Usera = /** @class */ (function () {
    function Usera(name, age) {
        this.name = name;
        this.age = age;
    }
    Usera.prototype.getPasssat = function () {
        return "" + this.name + this.age;
    };
    return Usera;
}());
var Usera1 = /** @class */ (function () {
    function Usera1(name, age) {
        this.name = name;
        this.age = age;
    }
    Usera1.prototype.getPasssat = function () {
        return "" + this.name + this.age;
    };
    return Usera1;
}());
var ararat3 = new Usera1(true, false);
var ararat = new Usera('ASDASD', 123123);
var ararat2 = new Usera(123123, 'ASDASD');
var ararat3 = new Usera(true, false);
var ararat4 = new Usera([12, 31, 23, 123], true);
ararat.getPasssat();
var Calculator = /** @class */ (function () {
    function Calculator(arg1, arg2, res) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.res = res;
    }
    Calculator.prototype.add = function () {
        this.print(this.res);
        return this.res = this.arg1 + this.arg2;
    };
    Calculator.prototype.minus = function () {
        this.print(this.res);
        return this.res = this.arg1 - this.arg2;
    };
    Calculator.prototype.divide = function () {
        this.print(this.res);
        return this.res = this.arg1 - this.arg2;
    };
    Calculator.prototype.multipy = function () {
        this.print(this.res);
        return this.res = this.arg1 - this.arg2;
    };
    Calculator.prototype.getRandom = function () {
        this.print(this.res);
        return this.res = Math.floor(Math.random() * 30);
    };
    Calculator.prototype.print = function (data) {
        return "result" + data;
    };
    return Calculator;
}());
var calc = new Calculator(106, 241);
calc.add();
