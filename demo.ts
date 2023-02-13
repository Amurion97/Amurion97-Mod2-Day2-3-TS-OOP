import * as string_decoder from "string_decoder";

function showMessage(message: string): string {
    return message;
}

console.log(showMessage("Hello world!"));

class Person {
    private age: number;
    name: string;
    constructor(name: string, age?: number) {
        this.age = age;
        this.name = name;
    }
    getInfo():void {
        console.log(this.age)
    }
}
let giang: Person = new Person("Giang", 25);
for (const giangKey in giang) {
    // if (giang.hasOwnProperty(giangKey)) {
    if (typeof giang[giangKey] !== typeof console.log) {
        console.log(giangKey, giang[giangKey], typeof giangKey, typeof giang[giangKey]);
    }
}

interface Human {
    readonly dog: number;
}

let Giang: Human = {
    dog: 15,
}