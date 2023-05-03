const addMeInMyCrush = <T extends { name: string }>(obj1: T, obj2: T) => {
    const crush = "Kate Winslet"
    return { ...obj1, ...obj2, crush }
}

const result10 = addMeInMyCrush({ name: "Sakib", age: 25 }, { name: "Sakib", salary: 25000 })