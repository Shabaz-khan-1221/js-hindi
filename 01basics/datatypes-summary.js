//primitive and non primitive

//primitve datatype(call by value)
//7 categories=> String,Number,Boolean,null,undefined,symbol,BigINt


const score=false
console.log(typeof score)//will give boolean
const scorevalue=100.3
console.log(typeof scorevalue)//will give number

const isloggedin=false
console.log(typeof isloggedin)//will give boolean

const outsidetemp=null
console.log(typeof outsidetemp)//will give object

let useremail;
console.log(typeof useremail)//will give undefined


// console.log(score)

// const id=Symbol('123')
// const anotherid=Symbol('123')
// console.log(id===anotherid)
// console.log(id)

// const bignumber=12345678908865234n
// console.log(bignumber)



//non primitve(call by reference)
//array,objects,functions

const heros=["shaktiman","naagraj","doga"]
//objects are written in curly  braces
let myObj={
    name:"shabaz",
    age: 20,
}
const Myfunction=function(){
    console.log("hello, world");
}

console.log(typeof  heros)//will give either object or function



//stack(primitive), heap(non-primitive)
//example

let myyoutubename="bawa_official.com"
console.log(myyoutubename)
let anothername=myyoutubename
anothername="chai aur code"
console.log(anothername)
let user1={
email:"user@email.com",
upi:"user@ybl"

}
console.log(user1.email)
let user2=user1
user2.email="najim@gmail.com"
console.log(user1.email)