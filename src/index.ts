// let myName: string = "Muffafa"
// myName = myName.toLowerCase()
// console.log(myName)

// let user = {name: "msutafa", password: "123456"}

// console.log("hello world")
// console.log(user.name)
// console.log(user.email)

// let age: number = 5
// age = 'five'
// if(age<18)
// {
//     age+=10
// }

// console.log(age)

// let greetings: string = "hello world"
// greetings = greetings.toUpperCase()
// console.log(greetings)

let user: [string, number] = ["mustafa", 123456]
console.log(user[0].toUpperCase())

enum Size {small = 1, medium, large}
let selectedSize: Size = Size.medium
console.log(selectedSize)

function add(a: number, b: number): number {
    return a + b
}

console.log(add(1, 2))