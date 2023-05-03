const createArray = (param: string): string[] => {
    return [param]
}

const result1 = createArray("Hello")

const arrayBanaw = <T>(param: T): T[] => {
    return [param]
}

const result2 = arrayBanaw<string>("Hello")
const result3 = arrayBanaw<number>(1)
const result4 = arrayBanaw<boolean>(true)
const result5 = arrayBanaw<{ name: string }>({ name: "Hello" })

const arrayBanawAro = <T, U>(param1: T, param2: U): [T, U] => {
    return [param1, param2]
}

const result6 = arrayBanawAro<string, number>("Hello", 1)
const result7 = arrayBanawAro<number, string>(1, "Hello")
const result8 = arrayBanawAro<boolean, { name: string }>(true, { name: "Hello" })


// Spread Operator in Generic Function

const Crush = "Kate Winslet"
const myInfo = {
    name: "Sakib",
    age: 25,
    salary: 25000
}

const newData = { ...myInfo, crush: Crush }


const addMeinMyCrushMind = (param: any) => {
    const crush = "Kate Winslet"
    return { ...param, crush }
}
const result9 = addMeinMyCrushMind("Sakib")