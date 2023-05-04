const arrayOfNumbers = [1, 2, 3];
const arrayOfStrings = arrayOfNumbers.map((item) => item.toString());
console.log(arrayOfStrings);

type Area = {
    hight: number;
    width: number;
};

type A = Area["hight"]
type B = keyof Area;

type AreaString = {
    hight: string;
    width: string;
}

type AreaReadOnly = {
    readonly hight: number;
    readonly width: number;
}

const ractangleArea: Area = {
    hight: 10,
    width: 20
};

type Jayga = {
    [key in "hight" | "width"]: number;
}

type Jayga2<T> = {
    [key in keyof T]: T[key];
};