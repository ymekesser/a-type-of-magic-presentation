type InitAction = { type: "INIT" }
type LoginAction = { type: "LOGIN", name: string, password: string }
type LogOutAction = { type: "LOGOUT" }

type Actions = InitAction | LoginAction | LogOutAction;

function handleAction(action: Actions) {
    switch (action.type) {
        case "INIT":
            return "Initialized";
        case "LOGIN":
            console.log(action.name + " logged in");
            return "Logged In"
        default:
            console.log("WTF");
    }
}

function handleAction2(action: Actions): string { // compiler complains because actual return type is string | undefined
    switch (action.type) {
        case "INIT":
            return "Initialized";
        case "LOGIN":
            console.log(action.name + " logged in");
            return "Logged In"
        default:
            console.log("WTF");
    }
}

function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}

function exhaustiveHandleAction(action: Actions) {
    switch (action.type) {
        case "INIT":
            return "Initialized";
        case "LOGIN":
            console.log(action.name + " logged in");
            return "Logged In"
        default:
            return assertNever(action); // compiler complains because should not be possible to ever return an instance of type never
    }
}