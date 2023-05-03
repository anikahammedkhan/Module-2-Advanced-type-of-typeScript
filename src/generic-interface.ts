// generic interface 

interface CrushInterface<T> {
    name: string;
    husband: T
}

const myCrush: CrushInterface<string> = {
    name: "Miss. X",
    husband: "Mr. X"
}

const myCrush2: CrushInterface<number> = {
    name: "Miss. X",
    husband: 1
}

const myCrush3: CrushInterface<boolean> = {
    name: "Miss. X",
    husband: true
}

const myCrush4: CrushInterface<{ name: string, age: number }> = {
    name: "Miss. X",
    husband: {
        name: "Mr. X",
        age: 25
    }
}