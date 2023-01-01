"use strict";
var _a;
let user = ["mustafa", 123456];
console.log(user[0].toUpperCase());
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
let selectedSize = Size.medium;
console.log(selectedSize);
function calculateIncome(income, taxyear = 2022) {
    let tax = 0;
    console.log(tax);
    if (taxyear < 2022) {
        return income * 0.1;
    }
    return income * 0.2;
}
console.log(calculateIncome(10000));
let student = {
    id: 1,
    name: "mustafa",
    age: 20,
    graduate: (date) => {
        console.log(`Graduated on ${date}`);
    }
};
console.log(student.name);
console.log(student.class);
student.class = "12";
console.log(student.class);
student.graduate(new Date());
function kilogramToPound(weight) {
    if (typeof weight === "string")
        weight = parseInt(weight);
    return weight * 2.20462;
}
console.log(kilogramToPound(10));
console.log(kilogramToPound("10"));
let textBox = {
    drag: () => {
        console.log("dragging");
    },
    resize: () => {
        console.log("resizing");
    }
};
textBox.drag();
let selectedTshirtSize = "medium";
let selectedQuantity = 5;
console.log(selectedQuantity);
function getCustomer(id) {
    return id === 0 ? null : { brithday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.brithday);
customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.brithday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let customers = [customer];
console.log(customers === null || customers === void 0 ? void 0 : customers[1]);
let log = null;
log === null || log === void 0 ? void 0 : log("hello world");
//# sourceMappingURL=index.js.map