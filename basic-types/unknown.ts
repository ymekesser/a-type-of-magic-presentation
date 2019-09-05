type Duck = { walkSpeed: number, quack: () => string };

function isDuck(thing: unknown): thing is Duck {
    return typeof (thing as Duck).walkSpeed === "number"
        && typeof (thing as Duck).quack === "function";
}

function tryQuack(x: unknown) {
    if (isDuck(x)) {
        return x.quack();
    }

    console.log("Wasn't a duck, sorry.")
}
