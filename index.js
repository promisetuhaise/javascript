//html cheat sheet by hostiger
//w3c DOM
//objectsAndArrays
let car = {
    make: "Toyota",
    model: "corona",
    year: 2022,
    color: "silver",
    start: function () {
        console.log("the car has started")
    }
};
console.log(car);//objects are not put in quotes
console.log(car.make);
car.start ();
//example1
//document.getElementBy() //document object
//.innerHTML ="Hello World"



//recreating 2 to 7
//solution
/*let document = {
    getElementBy: function(id){
        //returns element by id
    },
    innerHTML = "hello World"
}*/

//inbuilt objects
//Math object
const PI = Math.PI
console.log(PI)
console.log(Math.round(PI))
let cosin =Math.cos (60)
console.log (Math.round (cosin))
console.log(Math.cos(60))

