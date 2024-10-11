//array

// const myarr=[0,1,2,3,4,5]
// const myheroes=["krrish","shaktiman","flying_jatt"]
// const myarr2=new Array(1,2,3,4,5,6,7)

// // console.log(myarr)
// // console.log(myheroes)
// // console.log(myarr2)

// console.log(myarr[0])

//arrays methods

// myarr.push(7)
// console.log(myarr)
// myarr.pop()
// console.log(myarr)

// myarr.unshift(9)
// console.log(myarr)
// myarr.shift()
// console.log(myarr)

// console.log(myarr.includes(9))
// console.log(myarr.indexOf(2))

// const newarr=myarr.join()
// console.log(myarr)
// console.log(typeof newarr)

//slice ,splice
// impoprtant according to interview

// console.log("A",myarr)

// const myn1=myarr.slice(1,3)
// console.log(myn1)
// console.log("B",myarr)

// const myn2=myarr.splice(1,3)
// console.log(myn2)
// console.log("C",myarr)


//***************part 2 of array **************


const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)

// console.log(marvel_heroes[3][0])

// const all_heroes =marvel_heroes.concat(dc_heroes)

// console.log(marvel_heroes)
// console.log(all_heroes)

const all_new_heroes=[...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usable_array=another_array.flat(Infinity)
console.log(usable_array)

console.log(usable_array.length)



console.log(Array.isArray("shabaz"))
console.log(Array.from("shabaz"))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))