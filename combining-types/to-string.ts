type A = string | never; // A = string

type TriState = "True" | "False" | "Maybe";

function ToString(value: number | boolean): string {
    switch (value) {
        case true:
            return "True";
        case false:
            return "False";
        default:
            return value.toString(); // TS infers number here
    }
}
