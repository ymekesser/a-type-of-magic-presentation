type Foo = { name: string }
type Bar = { name: string }

let foo: Foo = { name: "JoJo" };
let bar: Bar = foo; 

let u; // undefined

let a = null; // null

const x = "foo";

const y = 5;

let c: any = "foo";
let d: number = c;

let e: unknown = 42;
let f: string = e; // Error

let g: never = ({} as any); // Error