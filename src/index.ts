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
enum Size {small = 1, medium, large}
let selectedSize: Size = Size.medium
console.log(selectedSize)

//functions
function calculateIncome(income: number, taxyear = 2022): number
{
    let tax: number = 0
    console.log(tax);

   if(taxyear < 2022)
   {
       return income*0.1
   }
   //undefined
   return income*0.2
}

console.log(calculateIncome(10_000)) //typescript allows _ in numbers to make it more readable

//objects
let student:{
    readonly id : number,
    name: string,
    age: number,
    class?: string
    graduate : (date : Date) => void
} = {
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