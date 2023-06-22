function get(document){
    console.log(document);
}

let age = 12;
age += 10;
console.log(age);

const numbers: number[] = [1,2,3,4];
// const another = numbers.forEach((n) => n.toString());
numbers.forEach((n) => console.log(n.toString()));

// console.log(another
// tuple same as the python
const user: [number, string] = [1, 'Mosh'];
user[1].charAt(0);
console.log(user[1][0]);

// enums, list of related contents 
enum Size {Small=1, Medium, Large}
const mySize: Size = Size.Medium;
console.log(mySize);
console.log(typeof mySize);


// funcitons
// adding taxYear? to state it may undefined
// for JS, you can give any as you want
// for TS, much strict

function calculateTax(income: number, taxYear=2022){
    if (income < 50 && taxYear < 2019) return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(20, 2019));

// Object 
const employees : {
    id: number,
    readonly name?: string,
    retire?: (date: Date) => void;
} = {
    id : 12,
    name : "Mosh"
}
// employees.name = "eav";
employees.retire = () => {console.log(12)};
console.log(employees);

const enum Tpyes { Small = 1, Medium, Large}
console.log(Tpyes.Small);


// Type Alias
type Employee = {
    id: number,
    readonly name?: string,
    retire?: (date: Date) => void;
}
const employee2: Employee = {
    id: 12, name: 'a', retire: () => {console.log(12)}
}
console.log(employee2);

// Union Tyoe

function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number') {
        return weight * 2.5;
    } else {
        return parseInt(weight) * 2.2;
    }
}

console.log(kgToLbs(10));

// intersection type
type Draggable = {
    drag: () => void
};
type Resizable = {
    resize: () => void;
};
type UIWidget = Draggable & Resizable;
const textBox: UIWidget = {
    drag: () => console.log(12),
    resize: () => console.log(30)
}
console.log(textBox);

// literal type, it can be stirng 
type Quantity = 50 | 100;
const quantity : Quantity = 50;
console.log(quantity);

// nullable types
function greet(name : string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola");
}
// by default 
greet(null);

// optinal chaining
type Customer = {
    birthday?: Date
};

// Optinal Chaining
// using ?. if not sure whehter it is a null or undefined
function getCustomerBirthday(n : number): Customer | null | undefined {
    return n === 0 ? null : {birthday: new Date()};
}
const customer = getCustomerBirthday(1);
console.log(customer?.birthday?.getUTCHours());

type Nums = number[] | null;
const nums: Nums = null;
nums?.[0];


// nullish operator, check wether it is nullish or undefined
const another : number | null = null;
const speed: number =  another ?? 30;
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
class Account{
    id: number;
    name: string;
    nickname?: string;
    private amount: number;

    constructor(id, name, amount) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }
    deposit(amount: number) {
        this.amount += amount;
    }
    display() :number {
        return this.amount;
    }

}
// a concise way to create constructor
class Account2{
    // id: number;
    // name: string;
    // nickname?: string;
    // private amount: number;

    constructor(
        public readonly id : number, 
        public name : string, 
        private _balance : number) {
    }
    deposit(amount: number) {
        this._balance += amount;
    }
    get balance() : number {
        return this._balance;
    }
    set balance(value: number){
        this._balance = value;
    } 

}


    // index signature, create property dynamically 
    // [seat: string]:string; 
class SeatAssignment {
    [seatNumber: string]:string;
    public id: string;

    constructor(id) {
        this.id = id;
    }
}
const obj: SeatAssignment = new SeatAssignment(12);
obj.A1 = "Mosh";
console.log(obj);

// static method

class Count{
    private static _cnt = 0;

    inc():void {
        Count._cnt++;
    }
    dec(): void {
        Count._cnt--;
    }
    static get cnt() {
        return Count._cnt;
    }
}

const a1 = new Count();
const a2 = new Count();
a1.inc();
a2.inc();
console.log(Count.cnt);

// inhertiance
class Person {
    private _fullName;
    constructor(public firstName: number, public lastName: number){
        this._fullName = firstName + lastName;
    }
    get fullName() {
        return this._fullName;
    }
}

class Teacher extends Person {
    constructor(public TID: number, firstName, lastName){
        super(firstName, lastName)
    }
    // override is not 
    override get fullName() {
        // get method do not need to add parathesis, 
        // indeed it is actually an property value 
        return "Prof." + super.fullName;
    }
}

const teacher = new Teacher(12, "Evan", "Day");
console.log(teacher.fullName);


abstract class Shape {
    constructor(public olor: string) {}
    abstract area(): void;
}

class Circle extends Shape {
    
    constructor(public radius: number, color){
        super(color);
    }

    override area() : void{
        console.log(this.radius);
    }
}

// interface 
interface Mixins {
    draw() : void;
}

class Person2 implements Mixins{
    constructor(public date:Date){}
    draw() {
        console.log(12);
    }
}

class PersonClass { name = "Jhon" }
// interestring about the interface is that it can also extend a class
// which only inheriate the class property not implementations 

interface Person3 extends PersonClass { age: number }
class CheckClass implements Person3 {
    age = 12;
    name = "ebance"
}
const check = new CheckClass();
console.log(check.name);


// Generic type
// generic with the class
class KeyValuePair<K, V> {
    constructor(public key: K, public value: V){}
}
const obj1 = new KeyValuePair("Str", 12);
obj1.key.charAt(0);

 // function generic

function wrap<T>(obj: T) {
    return [obj];
}

const res2: number[] = wrap(2);

// generic interface 

interface Result<T> {
    data: T | null;
    error: string | null;
}

function fetch<T>(url: string): Result<T> {
    return { data: null, error: url};
}

interface User {
    username: string;
}

interface Product {
    title: string;
}

const gg = fetch<User>('url');

// generic constraint


class Person5 {
    constructor(protected _name: string){}
}

class Customer5 extends Person5 {
    get name(): string {
        return this._name;
    }
}

const p5 = new Person5('a');
const c5 = new Customer5('b');
// console.log(p5.name);
console.log(c5.name);

function echo<T extends Person5>(value: T): T {
    return value;
}

console.log(echo(new Customer5('a')));

// extending generic class

interface ProductX {
    name: string;
    price: number;
}

class Store<T> {
    protected _objects: T[] = [];
    add(obj: T): void {
        this._objects.push(obj);
    }
}

class CompressibleStore<T> extends Store<T> {
    compress() {
        console.log(1212);
    }
}

const store = new Store<ProductX>();
const com_store = new CompressibleStore<ProductX>();

// interesting thing is extends some property then it is ok
class AnotherStore<T extends {name: string}> extends Store<T> {
    find(name: string): T | undefined {
        return this._objects.find((obj) => obj.name === name);
    }
}

// terminate Generic tuype

class ProductStore extends Store<Product> {
    filter(): Product[] {
        return [];
    }
 }

// keyof
interface ProductXX {
    name: string;
    price: number;
}

class StoreXX<T> {
    protected _objects: T[] = [];
    add(obj: T): void {
        this._objects.push(obj);
    }
     // the keyof operator, return the key of the objects, in this case string | name
    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find((obj) => obj[property] === value);
    }
}

// type mapping, T can be product, customer, or any other object
type ReadOnly<T> = {
    readonly [Property in keyof T]: T[Property];
}

type Optional<T> = {
    [K in keyof T]? : T[K];
}

type Nullable<T> = {
    [K in keyof T]: T[K] | null;
}

// decorator
function Component(constructor: Function) {
    console.log('Component decorator called');
    constructor.prototype.uniqueId = Date.now();
    console.log('Component decorator called');
    console.log(constructor.prototype.uniqueId);
    
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting the component in the DOM');
    }
}

@Component
class ProfileComponent {
    constructor(public a: string){}
}

let profile1 = new ProfileComponent('evan');
profile1



// paramalized decorator

type ComponentOption = {
    name : string
}

function Component1(value: ComponentOption) {
    return (constructor: Function) => {
        console.log('Component decorator called');
        constructor.prototype.value = value;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
        console.log('Inserting the component in the DOM');
        }
    }
}

@Component1({name: "evan"})
class ProfileComponent1 {
    constructor(){}
}


// method decorator
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const origin = <Function> descriptor.value;
    descriptor.value = function(...args: any){
        console.log("Before");
        origin.call(this, ...args);
        console.log("After");
    }
}

class PersonX {
    @Log
    say(message: string) {
        console.log("Person says: " + message);
    }
}

let newPerson = new PersonX();
newPerson.say("12");

// accessor decorator: getter and setter
function Captilized(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const origin = descriptor.get;
    descriptor.get = function() {
        const res = origin?.call(this);
        return (typeof res === 'string') ? res.toUpperCase() : res;
    }
}

class PersonG {
    constructor(public firstName: string, public lastName: string){}
    @Captilized
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const pg = new PersonG("evan", 'day');
console.log(pg.fullName);


// Property Decorator
function MinLength(length: number) {
    return function(target: any, propertyName: string) {
        let value: string;
        const descriptor: PropertyDescriptor = {
            get() { return value; },
            set(newValue: string) {
                if(newValue.length < length) {
                    throw new Error("smaller than required one");
                }
                value = newValue;
            }
        }
        Object.defineProperty(target, propertyName, descriptor);
    }
}

class UserX {
    @MinLength(4)
    readonly password: string;
    constructor(password: string) {
        this.password = password;
    }
}

let ux = new UserX("12345");
console.log(ux.password);

// parameter decprator, try to collect some meta data
type WatchParameter = {
    methodName: string,
    parameterIndex: number
}

const watchParameter: WatchParameter[] = []

function Watch(target: any, methodName: string, parameterIndex: number) {
    watchParameter.push({
        methodName,
        parameterIndex
    });

}

class Vehicle {
    move(@Watch speed: number) {}
}

// integrate with javascript
import { calculateTax2 } from "./tax";
let tax = calculateTax2(12);
console.log(tax);

// lodsh: pure java script
// npm i --save-dev @types/lodash   
import * as _ from 'lodash';
_.clone([1 , 2, 3]);
