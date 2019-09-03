type Point = { x: number, y: number };

function isPoint(thing: unknown): thing is Point {
    return (thing as Point).x !== undefined && (thing as Point).y !== undefined;
}

function tryGetProduct(value: unknown): number | undefined {
    if (isPoint(value)) {
        return value.x * value.y;
    }

    return undefined;
}
