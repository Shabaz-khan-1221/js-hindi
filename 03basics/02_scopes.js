//  const a=20



// {
// let a =10
// const b=20
//  c=30
//  console.log("inner ",a)
// }
// // console.log(a)
// // console.log(b)
// console.log(a)
//************nested scops********************/

function one(){
const username="shabaz"
function two(){
    const website="youtube"
    console.log(username)
}
// console.log(website)
// two()
}

// one()
if(true){
    const username="shabaz"
    if(username==="shabaz"){
        const website="youtube"
        // console.log(username+website)
    }
    // console.log(username)
}
// **************8 interesting *************8

console.log(addone(5))
function addone(num){
    return num+1
}
addtwo(5)
const addtwo=function(num){
    return num+2
}
