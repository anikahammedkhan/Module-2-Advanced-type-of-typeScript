type User = {
    name: string;
    age: number;
}

type extendsUser = User & {
    address: string;
}


interface IUser {
    name: string;
    age: number;
}

interface extendsIUser extends IUser {
    address: string;
}

const userWithTypeAlias: User = {
    name: "Emni",
    age: 25
}


const userWithInterface: IUser = {
    name: "Emni",
    age: 25
}

const userWithInterfaceExtends: extendsIUser = {
    name: "Emni",
    age: 25,
    address: "Dhaka"
}

const userWithTypeAliasExtends: extendsUser = {
    name: "Emni",
    age: 25,
    address: "Dhaka"
}

type rollNumber = number;

type addNumberType = (num1: number, num2: number) => number;
const addNumber: addNumberType = (num1, num2): number => num1 + num2;

interface IAddNumbers {
    (num1: number, num2: number): number;
}

const addNumbers: IAddNumbers = (num1, num2): number => num1 + num2;

type rollNumbersType = number[];
const rollNumbers: rollNumbersType = [1, 2, 3, 4, 5];

interface IRollNumbers {
    [index: number]: number;
}

const rollNumbersInterface: IRollNumbers = [1, 2, 3, 4, 5];