type PersonType = {
    name: string;
    age: number;
    address: string;
};

type newType = "name" | "age" | "address";

type newTypeUsingKeyOf = keyof PersonType;

const a: newType = "name";
const b: newTypeUsingKeyOf = "name";

function getProperty<x, y extends keyof x>(obj: x, age: y) {
    return obj[age];
}

const result = getProperty({ name: "John", age: 30 }, "age");