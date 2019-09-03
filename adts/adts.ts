let product: [number, boolean] = [5, true];

type Product<A, B> = { fst: A, snd: B };

let prod: Product<number, boolean> = { fst: 5, snd: true };

type Sum<A, B> = { type: "Left", val: A } | { type: "Right", val: B }
type Either<A, B> = Sum<A, B>;
type Maybe<A> = Sum<A, null>;

let sum: Sum<number, boolean> = { type: "Left", val: 5 };