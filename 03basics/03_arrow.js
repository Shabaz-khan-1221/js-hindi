const user={
    username: "shabaz",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username="shabaz"
//     console.log(this.username)
// }
// chai()

// const chai=function(){
//     let username="shabaz"
//     console.log(this.username)
// }
// const chai= () => {
//     let username="shabaz"
//     console.log(this)
// }
// chai()



// const addtwo=(num1,num2) =>  num1 + num2
// const addtwo=(num1,num2) =>  (num1 + num2)
const addtwo=(num1,num2) =>  ({ username:"shabaz"})

console.log(addtwo(2,5))
