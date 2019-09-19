{
    type List<T> = { head: T, tail: List<T> };

    type Leaf<T> = { kind: "leaf", value: T };
    type Node<T> = { kind: "node", element: T, left: Tree<T>, right: Tree<T> };
    type Tree<T> = Leaf<T> | Node<T>;

    type Success = { status: "success", value: string, correlationId: number };
    type Failure = { status: "failure", error: string };
    type Response = Success | Failure;
}

{
    function assertNever(x: never): never {
        throw new Error("Unexpected object: " + x);
    }

    type Person = { id: string, name: string, age: number };
    type Pet = { id: string, name: string, species: "Cat" | "Dog" | "Fish" };

    type Found<T> = { status: "Found", value: T };
    type NotFound = { status: "Not Found" };
    type Error = { status: "Error", message: string };
    type QueryResult<T> = Found<T> | NotFound | Error;

    function query<T>(sql: string): QueryResult<T> {
        // ...
        return {} as any;
    }

    function getPetNames(personName: number): string[] | undefined {
        const personResult = query<Person>(`Select * FROM Person WHERE name = ${personName}`);

        switch (personResult.status) {
            case "Found":
                const petResult = query<Pet[]>(`Select * FROM Pet WHERE ownerId = ${personResult.value.id}`);

                switch (petResult.status) {
                    case "Found":
                        return petResult.value.map(p => p.name);
                    case "Not Found":
                        return [];
                    case "Error":
                        console.log(`There was an error while querying: ${petResult.message}`);
                        break;
                    default:
                        assertNever(petResult);
                }
            case "Not Found":
                return [];
            case "Error":
                console.log(`There was an error while querying: ${personResult.message}`);
                break;
            default:
                assertNever(personResult);
        }
    }



    function getPetNamesFancy(personName: number): string[] | undefined {
        return handleResult(
            query<Person>(`Select * FROM Person WHERE name = ${personName}`),
            foundPersonResult => handleResult(
                query<Pet[]>(`Select * FROM Pet WHERE ownerId = ${foundPersonResult.value.id}`),
                foundPetResult => foundPetResult.value.map(pet => pet.name),
                _ => [],
            ),
            _ => [],
        );
    }

    function handleResult<T, U>(
        result: QueryResult<T>,
        found: (r: Found<T>) => U,
        notFound: (r: NotFound) => U,
    ) {
        switch (result.status) {
            case "Found":
                return found(result);
            case "Not Found":
                return notFound(result);
            case "Error":
                return printError(result.message);
            default:
                assertNever(result);
        }
    }

    function printError(message: string) {
        console.log(`There was an error while querying: ${message}`);
        return undefined;
    }
}