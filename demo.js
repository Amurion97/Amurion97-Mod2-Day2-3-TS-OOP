"use strict";
exports.__esModule = true;
function showMessage(message) {
    return message;
}
console.log(showMessage("Hello world!"));
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.age = age;
        this.name = name;
    }
    Person.prototype.getInfo = function () {
        console.log(this.age);
    };
    return Person;
}());
var giang = new Person("Giang", 25);
for (var giangKey in giang) {
    // if (giang.hasOwnProperty(giangKey)) {
    if (typeof giang[giangKey] !== typeof console.log) {
        console.log(giangKey, giang[giangKey], typeof giangKey, typeof giang[giangKey]);
    }
}
