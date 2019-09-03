function double(x: number | string) {
    if(typeof x == "number") {
        return x * 2;
    }

    return (2 * Number(x)).toString();
}