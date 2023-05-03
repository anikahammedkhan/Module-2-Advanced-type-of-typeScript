type User = {
    name: string;
    age: number;
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