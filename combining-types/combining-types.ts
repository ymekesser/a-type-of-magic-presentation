type Person = { name: string, age: number }
type Contact = { phone: string }

let i: Person & Contact = {};
i.name = "JoJo";
i.age = 17;
i.phone = "079 123 45 67";


let h: string | number;
h = "hello";
h = 42;

// associativity
type x = number | never; // x = number

type y = number & unknown; // y = number

// commutativity

type a = "foo" | "bar"; type b = "bar" | "foo"; // a = b

type z = ("foo" | "bar") & "foo";