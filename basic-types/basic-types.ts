
declare function printName(p: Person): string;
{
    type Person = { name: string }
    type Contact = { phone: string }

    type PersonWithContact = {
        name: string;
        phone: string;
    }

    declare function call(c: Contact): boolean;

    var personWithContact = {
        name: "JoJo",
        phone: "079 123 45 67"
    }

    call(personWithContact);
    
    type Foo = { name: string }
    type Bar = { name: string }

    let foo: Foo = { name: "JoJo" };
    let bar: Bar = foo; // OK

    type Point = {
        x: number;
        y: number;
    }


    let u; // undefined

    let a = null; // null

    const x = "foo";

    const y = 5;

    let c: any = "foo";
    let d: number = c;

    let e: unknown = 42;
    let f: string = e; // Error

    let g: never = ({} as any); // Error
}
