const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "Promise resolved";
        if (data) {
            resolve(data);
        }
        else {
            reject("Promise rejected");
        }
    })
};

const getPromise = async (): Promise<string> => {
    const data = await makePromise();
    console.log(data);
    return data;
}

const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true;
        if (data) {
            resolve(data);
        }
        else {
            reject("Promise rejected");
        }
    })
};

const getPromiseBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean();
    console.log(data);
    return data;
}


const makePromiseObject = (): Promise<{ name: string, age: number }> => {
    return new Promise<{ name: string, age: number }>((resolve, reject) => {
        const data = { name: "John", age: 30 };
        if (data) {
            resolve(data);
        }
        else {
            reject("Promise rejected");
        }
    })
};

const getPromiseObject = async (): Promise<{ name: string, age: number }> => {
    const data = await makePromiseObject();
    console.log(data);
    return data;
};

// json placeholder api call

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getTodos = async (): Promise<ITodo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
}

const getTodoData = async (): Promise<void> => {
    const data = await getTodos();
    console.log(data);
};

getTodos().then(data => console.log(data));

