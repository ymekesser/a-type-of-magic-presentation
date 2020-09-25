// f(Sum<A, B>) => C = [f(A) => C, f(B) => C>]
() => {
    type Sum<A, B> = Left<A> | Right<B>;
    type Success = { value: string, correlationId: number };
    type Failure = { error: string };

    function handleResult(result: Sum<Success, Failure>): string {
        if (result.type == "Left") {
            return "Success: " + result.val.value;
        }
        else {
            return "Failure: " + result.val.error;
        }
    }

    function handleSuccess(result: Success): string {
        return "Success: " + result.value;
    }

    function handleFailure(result: Failure): string {
        return "Failure: " + result.error;
    }

    let result = { type: "Right", val: { error: "Something went terribly wrong!" } } as Sum<Success, Failure>;

    if (result.type == "Left") {
        return handleSuccess(result.val);
    }
    else {
        return handleFailure(result.val);
    }
}

// f(A, B) => C = f(A) => F(B) => C
// = Currying!
() => {
    function add(x: number, y: number): number {
        return x + y;
    }

    function add_curried(x: number): (y: number) => number {
        return function (y: number): number {
            return x + y;
        }
    }

    const result1 = add(5, 3);
    const result2 = add_curried(5)(3);
}