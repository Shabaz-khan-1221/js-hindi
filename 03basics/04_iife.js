// Immediately invoked function expressions (iife)

(function chai(){
    console.log("db connected");
})();

( (name)=> {
    console.log(`db connected twice ${name}`)
})("shabaz")