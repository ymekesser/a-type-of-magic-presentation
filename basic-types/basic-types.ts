// Structural type equality
() => {

    type A = { foo: string };
    type B = { foo: string };

    const a: A = { foo: "bar" }
    const b: B = a; // no compile error, type A is equal to B

    type Person = { name: string }
    type Contact = { phone: string }
    type PersonWithContact = {
        name: string;
        phone: string;
    }

    function call(c: Contact): boolean { 
        return true
    };

    var personWithContact = {
        name: "JoJo",
        phone: "079 123 45 67"
    }

    call(personWithContact);
}


// Basic Types
() => {

    let u; // undefined

    let a = null; // null

    const x = "foo";

    const y = 5;

    let c: any = "foo";
    c.someFunction();
    let d: number = c;

    let e: unknown = 42;
    e.toString() // Error
    let f: string = e; // Error

    let g: never = ({} as any); // Error

}