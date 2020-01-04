// ARRAY
// Declare an Array.
const list: number[] = [1, 2, 3];
export const arrayExample = list;


// TUPIL
// Declare a Tupil
let x: [string, number];
x = ['hello', 1];
// x = ['hello', 'world']; // this gives error as the secound argument of the tupil should be number

// Access Tupil value
console.log(x[0]);
console.log(x[1]);
// console.log(x[1].substring(1)); Tupil values are type safe here x[1] is supposed to be number.

// ENUMS
// enum begins numbering its members starting from 0 but can be changed.
enum Color { Red = 1, Green, Blue }
let c: Color = Color.Green;
// enum values can be accessed by index
let colorName: string = Color[2];
console.log(colorName);

// ANY
// Useful if at compile time we do not know its type.
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean

// The following will not give a compile time error,
// but at runtime it may fail if the methods do not actually exist

/**
 * notSure.ifItExists(); // okay, ifItExists might exist at runtime
 * notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
 */


// Avoid using Object as type, instead use object (with a small o) if required
// let prettySure: Object = 4;
// prettySure.toFixed(); // Compile Time Error: Property 'toFixed' doesn't exist on type 'Object'.

// VOID

// variable of type void can only be assigned to "undefined"
let unusable: void = undefined;
unusable = null; // OK if `--strictNullChecks` is not given

// UNDEFINED and NULL

// In TypeScript, both undefined and null actually have their own types named undefined
// and null respectively. Much like void, they’re not extremely useful on their own:

// Not much else can be assign to these variables!
let u: undefined = undefined;
let n: null = null;

// By default null and undefined are subtypes of all other types.
// That means you can assign null and undefined to something like number.
let num: number = null;
num = undefined;

// undefined and null variables can be assigned "any" type varialbes
let anyVariable: any = 'santosh';
u = anyVariable;
n = anyVariable;


let sampleFunction = async (variable: string | undefined | null): Promise<string> => {

    return new Promise<string>((resolve, reject) => {
        if (variable === null || variable === undefined) {
            reject('variable is null or undefined');
        }
        resolve('sample');
    });
};

// In cases where you want to pass in either a string or null or undefined,
// you can use the union type string | null | undefined.
sampleFunction('name').then((returnValue: string) => {
    console.log(returnValue);
}).catch((error: number) => {
    console.log(error);
});

sampleFunction(null).then((returnValue: string) => {
    console.log(returnValue);
}).catch((error: Error) => {
    console.log(error.message);
});

sampleFunction(undefined).then((returnValue: string) => {
    console.log(returnValue);
}).catch((error) => {
    console.log(error);
});

// TYPE ASSERTIONS
let someValue: any = "My Name";

// Though the varialbe is of type any I am asserting that its string explicitly.
let strLength: number = (<string>someValue).length; // This way of assertion is discouraged it will give problems if we use JSX
strLength = (someValue as string).length;
console.log('The type is =>' + typeof (strLength));
console.log('ddd =>' + strLength);

// VERY IMPORTANT...
// Type assertion is like type casting in other languages, 
// but in TypeScript it is only a compile time feature.


// NEVER

/**
 * The never type represents the type of values that never occur.
 * never is the return type for a function expression or an arrow function expression that
 *      always throws an exception or
 *      one that never returns;
 *
 * Variables also acquire the type never when narrowed by any type guards that can never be true.
 *
 * The never type is a subtype of, and assignable to, every type; however,
 * no type is a subtype of, or assignable to, never (except never itself).
 * Even any isn’t assignable to never.
 */
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error('Something failed');
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}

let sampleArray: any = 1;
let intArray = sampleArray as string;
console.log("hhhhhhhhhh=>" + intArray.length);