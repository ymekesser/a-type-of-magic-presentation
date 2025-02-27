// Products
let p: [number, boolean] = [5, true];

type Product<A, B> = { fst: A, snd: B };
let prod: Product<number, boolean> = { fst: 5, snd: true };

type A = "A";
type B = "B";
type C = "C";

// Commutativity
() => {
    let a: [A, B] = ["A", "B"];
    let b: [B, A] = ["B", "A"];

    const swap = ([x, y]: [any, any]) => [y, x];
}

// Associativity
() => {
    let p1: Product<A, Product<B, C>> = { fst: "A", snd: { fst: "B", snd: "C" } };
    let p2: Product<Product<A, B>, C> = { fst: { fst: "A", snd: "B" }, snd: "C" };

    // p2 can be created from p1 and vice-versa
    p2 = { fst: { fst: p1.fst, snd: p1.snd.fst }, snd: p1.snd.snd };
    p1 = { fst: p2.fst.fst, snd: { fst: p2.fst.snd, snd: p2.snd } };

    // A bit easier with tuples
    let t1: [A, [B, C]] = ["A", ["B", "C"]];
    let t2: [[A, B], C] = [["A", "B"], "C"];

    const f = ([a, [b, c]]: [A, [B, C]]) => [[a, b], c];
    const f_inv = ([[a, b], c]: [[A, B], C]) => [a, [b, c]];

    t1 = [t2[0][0], [t2[0][1], t2[1]]];
    t2 = [[t1[0], t1[1][0]], t1[1][1]];
}

// Neutral-Element
() => {
    let p3: Product<A, null> = { fst: "A", snd: null };
    let a = p3.fst;
    let p4 = { fst: "A", snd: null };

    let t5 = ["A", null];

    const rho = ([a, _]: [any, null]) => a;
    const rho_inv = (a: any) => [a, null];
}