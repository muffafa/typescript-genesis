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

//tuple
let user: [string, number] = ["mustafa", 123456]
console.log(user[0].toUpperCase())

//enums
enum Size { small = 1, medium, large }
let selectedSize: Size = Size.medium
console.log(selectedSize)

//functions
function calculateIncome(income: number, taxyear = 2022): number {
    let tax: number = 0
    console.log(tax);

    if (taxyear < 2022) {
        return income * 0.1
    }
    //undefined
    return income * 0.2
}

console.log(calculateIncome(10_000)) //typescript allows _ in numbers to make it more readable

//type aliases
type Student = {
    readonly id: number,
    name: string,
    age: number,
    class?: string
    graduate: (date: Date) => void
}

//objects
let student: Student = {
    id: 1,
    name: "mustafa",
    age: 20,
    graduate: (date: Date) => {
        console.log(`Graduated on ${date}`)
    }
}

console.log(student.name)
console.log(student.class)

student.class = "12"
console.log(student.class)

//student.id = 2 //readonly error

student.graduate(new Date())

//union types
function kilogramToPound(weight: number | string): number {
    //narrowing
    if (typeof weight === "string")
        weight = parseInt(weight)

    return weight * 2.20462
}

console.log(kilogramToPound(10))
console.log(kilogramToPound("10"))

//intersection types
type Dragable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIwidget = Dragable & Resizable

let textBox: UIwidget = {
    drag: () => {
        console.log("dragging")
    },
    resize: () => {
        console.log("resizing")
    }
}

textBox.drag()

//literal types
type TshirtSize = "small" | "medium" | "large"
let selectedTshirtSize: TshirtSize = "medium"

type Quantity = 1 | 2 | 3 | 4 | 5
let selectedQuantity: Quantity = 5

console.log(selectedQuantity)

//null check
type Customer = {
    brithday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
   return id === 0 ? null : { brithday: new Date() }
}

let customer = getCustomer(0)
//if (customer !== null && customer !== undefined)
//optinal property access operator ?. optinal chaining
console.log(customer?.brithday)

customer = getCustomer(1)
console.log(customer?.brithday?.getFullYear()) // if there is customer and customer has birthday then get year

//optinal element access operator ?.
let customers = [customer]
//if (customers !== null && customers !== undefined)
console.log(customers?.[1])

//optinal call operator ?.
//let log: any = (message: string) => { console.log(message) }
let log: any = null;
//log("hello world") //program will crash
log?.("hello world") //program will not crash

//arrow function example

const heroes = ["thor", "spiderman", "ironman", "captain america"]
//const heroes = [1,2,2] //error

const arr = heroes.map((hero: string): string => { //it means you have to send stirng and return string
    //return 1 //error
    return `hero is ${hero}`
})

arr.map((hero: string) => console.log(hero));

//good array union example 

const arrNum: number[] = [1, 2, 3, 4, 5]
const arrStr: string[] = ["1", "2", "3", "4", "5"]
const arrUnion: (number | string)[] = [1, "2", 3, "4", 5]
const arrNumWStr: Array<number | string> = [1, "2", 3, "4", 5] // sane as above
const arrJNumOrJStr: number[] | string[] = [1,2,3,4,5] 
const arrJNumOrJStr2: number[] | string[] = ["1","2","3","4","5"]

//good object union example

type User = {
    name: string
    age: number
}

type Admin = {
    name: string
    age: number

    role: string
}

type UserOrAdmin = User | Admin

const userOrAdmin: UserOrAdmin = {
    name: "mustafa",
    age: 20,
    role: "admin"
}

//good object intersection example

type User2 = {
    name: string
    age: number
}

type Admin2 = {


    role: string
}

type UserAndAdmin = User2 & Admin2

const userAndAdmin: UserAndAdmin = {
    name: "mustafa",
    age: 20,
    role: "admin"
}

//interface example

interface User3 {
    readonly dbId: number
    name: string
    age: number
    email?: string
    sayHello(): string
    getCupon(cupponName: string, datex: number): number
}

interface User3 {
    githubToken: string
}

//inheritance for interface
interface Admin3 extends User3 {
    role: "admin" | "mod"
}

const user3: Admin3 = {
    dbId: 1,
    githubToken: "123456",
    role: "admin",
    name: "mustafa",
    age: 20,
    sayHello: () => {
        return "hello"
    },
    getCupon: (name: string, datex: number) => {
        return 10
    }
}


