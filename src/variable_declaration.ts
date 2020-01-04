/**
 * var declarations are accessible anywhere within their containing
 * function, module, namespace, or global scope
 *
 * Parameters are also function scoped.
 */

// BLOCK SCOPPING

// 1) block-scoped variables (once declared using let)
// are not visible outside of their nearest containing block or for-loop.

// 2) block-scoped variables can’t be read or written to before they’re actually declared.

// a++; // illegal to use 'a' before it's declared; 
// let a;

// 3) One can still capture a block-scoped variable before it’s declared.
// The only catch is that it’s illegal to call that function before the declaration.


function foo() {
    // okay to capture 'a'
    return a;
}

// illegal call 'foo' before 'a' is declared
// runtimes should throw an error here
// foo();

let a: number = 1;

// 4) variables declared as "let" can only be declared once in a block
// 5) The block-scoped variable just needs to be declared within a distinctly different block.

let y: number = 10;
// let y = 20; // error: can't re-declare 'x' in the same scope

function f(z: any) {
    //  let z = 100; // error: interferes with parameter declaration
}

function g() {
    //  let z = 100;
    //  var z = 100; // error: can't have both declarations of 'z'
}

// DESCRUCTURING
let input = [1, 2];
let [firstNumber, second] = input;
console.log(firstNumber); // outputs 1
console.log(second); // outputs 2

let first: number = 1;
let secound: number = 2;

[first, secound] = [secound, first]; // swap two numbers

console.log(first);
console.log(secound);

function fun([first1, second1]: [number, number]) {
    console.log(first1);
    console.log(second1);
}
fun([1, 2]);


let [first1, ...rest] = [1, 2, 3, 4];
console.log(first1); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

let [, second1, , fourth] = [1, 2, 3, 4];
console.log(second1); // outputs 2
console.log(fourth); // outputs 4

let tuple: [number, string, boolean] = [7, 'hello', true];
console.log(tuple[0]);
console.log(tuple[1]);
let [a1, b, c1] = tuple; // a: number, b: string, c: boolean
console.log(a1);
console.log(b);

let [a2, b1, c2, ...d] = tuple;
console.log(d);

// You can also destructure objects:

let { a3, b3 } = { a3: "baz", b3: 101 };

let o = {
    a4: "foo",
    b4: 12,
    c4: "bar"
};
// property renaming, 'a4' is extracted from object 'o' and then renamed to 'a5'
let { a4: a5, b4 } = o;

let { a4, ...passthrough } = o;
let total = passthrough.b4 + passthrough.c4.length;
console.log(total);

// a4 and b4 are extracted from "o" a4 and b4 types are set to string and number respectively,
// the type should match that of attributes in object "o"
let { a4: a6, b4: b5 }: { a4: string, b4: number } = o;

type C = { a: string, b?: number };

function fun2({ a: az, b: b5 }: C): void {
    console.log("f2 az=>" + az);
    console.log("f2 b5=>" + b5);
}

function fun1({ az, b5 = 0 } = { az: '' }): void {
    console.log("f1 az=>" + az);
    console.log("f1 b5=>" + b5);
}

fun1({ az: 'a', b5: 1 });
fun1({ az: 'a' });
fun2({ a: 'a', b: 1 });
fun2({ a: 'a' });

// SPREAD

let first2 = [1, 2];
let second2 = [3, 4];
let bothPlus = [0, ...first2, ...second2, 5];

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };

// "food" attribute is overwritten and set to "rich"
console.log(search);

// Limitations of SPREAD

// 1) it only includes an objects’ own, enumerable properties. 
// Basically, that means you lose methods when you spread instances of an object:
class C1 {
    p = 12;
    m() {
    }
}
let newObject = new C1();
let clone = { ...newObject };
console.log(clone.p); // ok
// clone.m(); // error!