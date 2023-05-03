const myRollNumbers: number[] = [1, 2, 3, 4, 5];
const myRollNumbers2: Array<number> = [1, 2, 3, 4, 5];
const myRollNumbers3: ReadonlyArray<number> = [1, 2, 3, 4, 5];
const myRollNumbers4: Array<string> = ["1", "2", "3", "4", "5"];
const myRollNumbers5: Array<boolean> = [true, false, true, false, true];
const userRollAndName: Array<{ roll: number, name: string }> = [
    { roll: 1, name: "Mr. X" },
    { roll: 2, name: "Mr. Y" },
]


// generic type 

type GenericArray<T> = Array<T>;

const myRollNumbers6: GenericArray<number> = [1, 2, 3, 4, 5];
const myRollNumbers7: GenericArray<string> = ["1", "2", "3", "4", "5"];
const myRollNumbers8: GenericArray<boolean> = [true, false, true, false, true];
const userRollAndName2: GenericArray<{ roll: number, name: string }> = [
    { roll: 1, name: "Mr. X" },
    { roll: 2, name: "Mr. Y" },
]

type GenericTuple<T, U> = [T, U];
const relation: GenericTuple<string, string> = ["Cat", "Dog"];
const relation2: GenericTuple<number, string> = [1, "Dog"];
const relation3: GenericTuple<number, boolean> = [1, true];
const relation4: GenericTuple<object, string> = [{
    name: "Mr. X",
    age: 25,
    salary: 25000
}, "Persian Cat"];