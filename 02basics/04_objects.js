//const tindderusers=new object()
const tinderusers={}

tinderusers.id="123abc"
tinderusers.name="shabaz"
tinderusers.isloggedin=false
// console.log(tinderusers)

const regularusers={
    email: "shabaz@google.com",
    fullname: {
        username:{
            firstname:"shabaz",
            lastname:"khan"
        }
    }
    
}
// console.log(regularusers.fullname?.username.firstname)

// objects can be combined
// const obj1={
//     1:"a",2:"b"
// }
// const obj2={
//     3:"a",4:"b"
// }
// const obj3={
//     5:"a",6:"b"
// }
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
// const obj4=Object.assign({},obj1,obj2,obj3)
// console.log(obj4)

const users=[
    {
        id:1,
        email:"h@gmail.com"
    }
    
]
// console.log(users[0].id)
// console.log(users[0].email)

console.log(tinderusers)
console.log(Object.keys(tinderusers))
console.log(Object.values(tinderusers))
console.log(Object.entries(tinderusers))

console.log(tinderusers.HasOwnproperty('isloggedin'))