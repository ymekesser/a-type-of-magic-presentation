// Sums

// Without discriminated unions:

type Sum1<A, B> = A | B;

type Result1 = Sum<string, string>;

// With discriminated unions:
type Left<T> = { type: "Left", val: T };
type Right<T> = { type: "Right", val: T };

type Sum<A, B> = Left<A> | Right<B>;

type Either<A, B> = Sum<A, B>;
type Maybe<A> = Either<A, "Nothing">;

let numberOrBool: Sum<number, boolean> = { type: "Left", val: 5 };

// Associativity


// Algebra of Types

// Multiplication, Summation, One-Element and Zero-Element

// Distributivity
// a x (b + c) = a x b + a x c

type X<A, B, C> = [A, Either<B, C>];
type Y<A, B, C> = Either<[A, B], [A, C]>

function prodToSum<A, B, C>([a, e]: [A, Either<B, C>]): Either<[A, B], [A, C]> {
    if (e.type === "Left") {
        return { type: "Left", val: [a, e.val] }
    } else {
        return { type: "Right", val: [a, e.val] }
    }
}

function sumToProd<A, B, C>(e: Either<[A, B], [A, C]>): [A, Either<B, C>] {
    if (e.type === "Left") {
        return [e.val[0], { type: "Left", val: e.val[1] }]
    } else {
        return [e.val[0], { type: "Right", val: e.val[1] }]
    }
}