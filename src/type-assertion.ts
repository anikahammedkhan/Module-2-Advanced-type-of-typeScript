let emni: any;

emni = "Next level Web Developer";

(emni as string).length;


function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The converted value is ${value} gram`
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return `The converted value is ${value} gram`;
    }
}

const resultToBeString = kgToGram("5") as string;
const resultToBeNumber = kgToGram(5) as number;

console.log(resultToBeString);
console.log(resultToBeNumber);

type CustomError = {
    message: string;
}


try {

} catch (err) {
    console.log((err as CustomError).message);
}
