// // strings
// // arrays
// // numbers
// // objects
// // functions
// // booleans
// // ternary operators
// // conditional statements
// // looping
// // fetching data



// // const first_name = 'Johnson'

// // console.log(name.toUpperCase())
// // console.log(name.split('o'))


// // const firstName = 'Dabo'

// // const lastName = 'Johnnson'

// // const initials = firstName[0] + lastName[0]

// // console.log(initials)


// const numbers = [1,2,4,5,6,8]

// // return the square of the hobbies array in a new Array

// const users = [
//     {
//         id: 0,
//         name: 'Moses',
//         age: 22
//     }, 
//     {
//         id: 1,
//         name: 'Joseph',
//         age: 25
//     }, 
// ]

// users.map(user => {
//     console.log(user.age)
// })

// const newNumbers = []

// numbers.map((number, id) => {
//     console.log(id)
//     newNumbers.push(number**2)
    
// })

// // console.log(newNumbers.)/

// const a = 4
// const b = 6.54


// const sumTotal = a + b
// console.log(Math.random(sumTotal))


// const Person = {
//     name: 'Johnson',
//     age: 54, 
//     department: 'Computer science',
//     skills: ['Javascript', 'React', 'python']
// }

// // Object Destructuring

// const {skills} = Person

// skills.map(skill => {
//     console.log(skill)
// })


// // const User = (props) => {

// //     const {name, age, department, skills} = props
// //     return (
// //         <p>{props.name}</p>
// //     )
// // }

// // export default User

// function addTwoNumbers(a,b){
//     return a + b
// }

// // console.log(addTwoNumbers('and', 8))

// // console.log(addTwoNumbers(45, 55))

// // const addTwoNumbers = (a,b) => {
// //     return a + b
// // }


// const isThereLight = true

// const isLoggedIn = false
// const didRainFall = false

// if(isThereLight){
//     console.log('I will go to the hub')
// }
// else if (isThereLight && didRainFall === false){
//     console.log('I will sleep')
// }
// else{
//     console.log('I am not goin');
// }


// // isLoggedIn ? < Profile /> : console.log('YOU ARE NOT LOGGED IN YET')

// // for loop, while loop, do while, for in, for of


// // for (let i = 0; i <= 10; i++ ){
// //     console.log(i**3)
// // }

// const url = 'https://jsonplaceholder.typicode.com/todos/'

// // fetch(url)
// // .then(res=>res.json())
// // .then(data => console.log(data))



// const getUser = async() => {
//     const res = await fetch(url)
//     const data = await res.json()
//     console.log(data)
// }

// getUser()