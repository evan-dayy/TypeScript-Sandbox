"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
function get(document) {
    console.log(document);
}
let age = 12;
age += 10;
console.log(age);
const numbers = [1, 2, 3, 4];
// const another = numbers.forEach((n) => n.toString());
numbers.forEach((n) => console.log(n.toString()));
// console.log(another
// tuple same as the python
const user = [1, 'Mosh'];
user[1].charAt(0);
console.log(user[1][0]);
// enums, list of related contents 
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
const mySize = Size.Medium;
console.log(mySize);
console.log(typeof mySize);
// funcitons
// adding taxYear? to state it may undefined
// for JS, you can give any as you want
// for TS, much strict
function calculateTax(income, taxYear = 2022) {
    if (income < 50 && taxYear < 2019)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(20, 2019));
// Object 
const employees = {
    id: 12,
    name: "Mosh"
};
// employees.name = "eav";
employees.retire = () => { console.log(12); };
console.log(employees);
console.log(1 /* Tpyes.Small */);
const employee2 = {
    id: 12, name: 'a', retire: () => { console.log(12); }
};
console.log(employee2);
// Union Tyoe
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.5;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgToLbs(10));
const textBox = {
    drag: () => console.log(12),
    resize: () => console.log(30)
};
console.log(textBox);
const quantity = 50;
console.log(quantity);
// nullable types
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola");
}
// by default 
greet(null);
// Optinal Chaining
// using ?. if not sure whehter it is a null or undefined
function getCustomerBirthday(n) {
    return n === 0 ? null : { birthday: new Date() };
}
const customer = getCustomerBirthday(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getUTCHours());
const nums = null;
nums === null || nums === void 0 ? void 0 : nums[0];
// nullish operator, check wether it is nullish or undefined
const another = null;
const speed = another !== null && another !== void 0 ? another : 30;
console.log(speed);
// Type Assertion, tell the compiler we know better by it,
// however there may have some runtime error
// const phone = document.getElementById('phone') as HTMLInputElement;
// const phone2 = <HTMLInputElement> document.getElementById('phone');
// phone.value;
// phone2.value;
// the unknown type
// function render(document: unknown) {
//     // narrowing 
//     // if (typeof document === 'string') {
//     // if (instanceof document === customized object) {
//     //     // 
//     // } 
//     // document.move();
// }
// the never type, value never occured
// function processEvents(): never {
// while (true) {
//     // read a message from queue
//     // break;
// }
// }
// processEvents();
// console.log(12); // shadow, meaning that it never gonna execute
// class
class Account {
    constructor(id, name, amount) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }
    deposit(amount) {
        this.amount += amount;
    }
    display() {
        return this.amount;
    }
}
// a concise way to create constructor
class Account2 {
    // id: number;
    // name: string;
    // nickname?: string;
    // private amount: number;
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    deposit(amount) {
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value;
    }
}
// index signature, create property dynamically 
// [seat: string]:string; 
class SeatAssignment {
    constructor(id) {
        this.id = id;
    }
}
const obj = new SeatAssignment(12);
obj.A1 = "Mosh";
console.log(obj);
// static method
class Count {
    inc() {
        Count._cnt++;
    }
    dec() {
        Count._cnt--;
    }
    static get cnt() {
        return Count._cnt;
    }
}
Count._cnt = 0;
const a1 = new Count();
const a2 = new Count();
a1.inc();
a2.inc();
console.log(Count.cnt);
// inhertiance
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._fullName = firstName + lastName;
    }
    get fullName() {
        return this._fullName;
    }
}
class Teacher extends Person {
    constructor(TID, firstName, lastName) {
        super(firstName, lastName);
        this.TID = TID;
    }
    // override is not 
    get fullName() {
        // get method do not need to add parathesis, 
        // indeed it is actually an property value 
        return "Prof." + super.fullName;
    }
}
const teacher = new Teacher(12, "Evan", "Day");
console.log(teacher.fullName);
class Shape {
    constructor(olor) {
        this.olor = olor;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    area() {
        console.log(this.radius);
    }
}
class Person2 {
    constructor(date) {
        this.date = date;
    }
    draw() {
        console.log(12);
    }
}
class PersonClass {
    constructor() {
        this.name = "Jhon";
    }
}
class CheckClass {
    constructor() {
        this.age = 12;
        this.name = "ebance";
    }
}
const check = new CheckClass();
console.log(check.name);
// Generic type
// generic with the class
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const obj1 = new KeyValuePair("Str", 12);
obj1.key.charAt(0);
// function generic
function wrap(obj) {
    return [obj];
}
const res2 = wrap(2);
function fetch(url) {
    return { data: null, error: url };
}
const gg = fetch('url');
// generic constraint
class Person5 {
    constructor(_name) {
        this._name = _name;
    }
}
class Customer5 extends Person5 {
    get name() {
        return this._name;
    }
}
const p5 = new Person5('a');
const c5 = new Customer5('b');
// console.log(p5.name);
console.log(c5.name);
function echo(value) {
    return value;
}
console.log(echo(new Customer5('a')));
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
class CompressibleStore extends Store {
    compress() {
        console.log(1212);
    }
}
const store = new Store();
const com_store = new CompressibleStore();
// interesting thing is extends some property then it is ok
class AnotherStore extends Store {
    find(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
// terminate Generic tuype
class ProductStore extends Store {
    filter() {
        return [];
    }
}
class StoreXX {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    // the keyof operator, return the key of the objects, in this case string | name
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
// decorator
function Component(constructor) {
    console.log('Component decorator called');
    constructor.prototype.uniqueId = Date.now();
    console.log('Component decorator called');
    console.log(constructor.prototype.uniqueId);
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting the component in the DOM');
    };
}
let ProfileComponent = class ProfileComponent {
    constructor(a) {
        this.a = a;
    }
};
ProfileComponent = __decorate([
    Component
], ProfileComponent);
let profile1 = new ProfileComponent('evan');
profile1;
function Component1(value) {
    return (constructor) => {
        console.log('Component decorator called');
        constructor.prototype.value = value;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component in the DOM');
        };
    };
}
let ProfileComponent1 = class ProfileComponent1 {
    constructor() { }
};
ProfileComponent1 = __decorate([
    Component1({ name: "evan" })
], ProfileComponent1);
// method decorator
function Log(target, methodName, descriptor) {
    const origin = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before");
        origin.call(this, ...args);
        console.log("After");
    };
}
class PersonX {
    say(message) {
        console.log("Person says: " + message);
    }
}
__decorate([
    Log
], PersonX.prototype, "say", null);
let newPerson = new PersonX();
newPerson.say("12");
// accessor decorator: getter and setter
function Captilized(target, methodName, descriptor) {
    const origin = descriptor.get;
    descriptor.get = function () {
        const res = origin === null || origin === void 0 ? void 0 : origin.call(this);
        return (typeof res === 'string') ? res.toUpperCase() : res;
    };
}
class PersonG {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Captilized
], PersonG.prototype, "fullName", null);
const pg = new PersonG("evan", 'day');
console.log(pg.fullName);
// Property Decorator
function MinLength(length) {
    return function (target, propertyName) {
        let value;
        const descriptor = {
            get() { return value; },
            set(newValue) {
                if (newValue.length < length) {
                    throw new Error("smaller than required one");
                }
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class UserX {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], UserX.prototype, "password", void 0);
let ux = new UserX("12345");
console.log(ux.password);
const watchParameter = [];
function Watch(target, methodName, parameterIndex) {
    watchParameter.push({
        methodName,
        parameterIndex
    });
}
class Vehicle {
    move(speed) { }
}
__decorate([
    __param(0, Watch)
], Vehicle.prototype, "move", null);
// integrate with javascript
const tax_1 = require("./tax");
let tax = (0, tax_1.calculateTax2)(12);
console.log(tax);
