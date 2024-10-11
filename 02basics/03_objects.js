//singleton     
// Object.create

// object literals
const mysym=Symbol("key1")

const jsuser={
    name: "shabaz",
    "full name":"shabaz khan",
    [mysym]:"mykey1",
    age: 20,
    email:"shabaz@google.com",
    isloggedin:false,
    lastlogindays:["monday","saturday"]

}

console.log(jsuser.name)

console.log(jsuser["name"])
console.log(jsuser["full name"])
console.log(typeof jsuser[mysym])

jsuser.email="shabaz@1221.com"
// Object.freeze(jsuser)
jsuser.email="shabaz@microsoft.com"
console.log(jsuser.email)
console.log(jsuser)



jsuser.greeting=function(){
    console.log("namaste sir")
}

console.log(jsuser.greeting())

// console.log(jsuser)

jsuser.greetingtwo=function(){
    console.log(`hello js users, ${this.name}`)
}
console.log(jsuser.greetingtwo())