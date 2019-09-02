type Person = { name: string, age: number }
type Serializable = { serialize: () => string }

let i: Person & Serializable;
i.name = "JoJo";
i.age = 17;
i.serialize();