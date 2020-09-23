// Sums

// Without discriminated unions:
type Sum1<A, B> = A | B;
type Result1 = Sum1<string, string>; // is just string, no distinction between A and B

// With discriminated unions:
type Left<T> = { type: "Left", val: T };
type Right<T> = { type: "Right", val: T };

type Sum<A, B> = Left<A> | Right<B>;

type Either<A, B> = Sum<A, B>;
type Maybe<A> = Either<A, "Nothing">;

let numberOrBool: Sum<number, boolean> = { type: "Left", val: 5 };

// Commutativity
() => {
    type S1 = Sum<"A", "B">;
    type S2 = Sum<"B", "A">;

    function swapSum(s: Sum<"A", "B">): Sum<"B", "A"> {
        return s.type == "Left"
            ? { type: "Right", val: s.val }
            : { type: "Left", val: s.val };
    }
}

// Associativity
() => {
    type S1 = Sum<Sum<"A", "B">, "C">;
    type S2 = Sum<"A", Sum<"B", "C">>;

    function f(s: Sum<Sum<"A", "B">, "C">): Sum<"A", Sum<"B", "C">> {
        if (s.type == "Left") {
            const inner = s.val;
            if (inner.type == "Left") {
                return { type: "Left", val: inner.val };
            }
            else {
                return { type: "Right", val: { type: "Left", val: inner.val } };
            }
        } else {
            return { type: "Right", val: { type: "Right", val: s.val } };
        }
    }

    function f_inv(s: Sum<"A", Sum<"B", "C">>): Sum<Sum<"A", "B">, "C"> {
        if (s.type == "Left") {
            return { type: "Left", val: { type: "Left", val: s.val } };
        } else {
            const inner = s.val;
            if (inner.type == "Left") {
                return { type: "Left", val: { type: "Right", val: inner.val } };
            }
            else {
                return { type: "Right", val: inner.val };
            }
        }
    }
}

// Neutral Element
() => {
    const s: Sum<string, never> = { type: "Left", val: "foo" };

    const roh = <T>(x: Sum<T, never>): T => x.val;
    const roh_inv = <T>(x: T): Sum<T, never> => ({ type: "Left", val: x });
}


// Distributivity
() => {
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
}