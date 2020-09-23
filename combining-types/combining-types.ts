// Intersection Type
() => {
    type Person = { name: string, age: number }
    type Contact = { phone: string }

    let i: Person & Contact = {
        name: "JoJo",
        age: 17,
        phone: "079 123 45 67",
    };
}

// Union Type
() => {
    let h: string | number;
    h = "hello";
    h = 42;

    type Period = "am" | "pm"

    type Workdays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
    type Weekdays = Workdays | "Sat" | "Sun";

    type MyBoolean = true | false; // MyBoolean = boolean

    const x: MyBoolean = true;
    const y: boolean = x;
}

// Set Algebra
() => {
    // Identity Laws:
    type X = number | never; // X = number
    type Y = number & unknown; // Y = number

    // commutativity
    type A = "foo" | "bar"; type B = "bar" | "foo";
    let a: A = "foo";
    let b: B = "bar";
    a = b;

    type C = {foo: string} & {bar: string}; type D = {bar: string} & {foo: string};
    let c: C = { foo: "bar", bar: "foo" };
    let d: D = { foo: "bar", bar: "foo" };
    c = d;

    // associativity
    type E = ( A | B) | C;
    type F = A | (B | C);
    let e: E = "foo";
    let f: F = "bar";
    e = f;

    type G = ( A & B) & C;
    type H = A & (B & C);
    let g: G = {} as any; // too lazy to write the type
    let h: H = {} as any;
    e = f;

    // no intersection
    type N = "foo" & "bar"; // N = never;

    type z = ("foo" | "bar") & "foo";
}