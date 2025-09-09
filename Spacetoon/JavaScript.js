console.log("Hello Trainees")
console.log("Hi")

//let name = "Bayan"
//alert(`Hello ${name} :)`)


//let result = confirm("Are you happy?")// true
//if (result == true) {
//    alert("🤩")
//}
//else {
//    alert("😥")
//}


//let name = prompt("what's your name?")
//alert(`Hello ${name}`);

//function Sum(num1, num2) {
//    alert(num1+num2)
//}


//Sum(10,20)

/*var, let, const*/
//var x = 1; //
//x = "Name";
//x = true;
//x = 'a';

//var x = 3;




/*var global scope, function scope*/

//var y = 1; //global scope
//var y = 3;
//function Print() {
//    console.log(y)
//}

//Print();

//var z = 3;
//function Print2() {
//    var z = 1;
//    var z = 2;
//    console.log(z); // 2
//}
//Print2();
//console.log(z)

//var z = 2;
//if (true) {
//    var z = 1;
//}

//console.log(z);

//var s = 1;
//while (true)
//{
//    var s = 5;
//    break;
//}

//console.log(s)

/*let Global, function, local scope*/

//let y = 1; //global scope
//let y = 2
//function Print() {
//    console.log(y)
//}

//Print();

//let z = 2;
//function Print2() {
//    let z = 1;
//}
//Print2();
//console.log(z)

//let z = 5;
//if (true) {
//    let z = 1;
//}

//console.log(z);

//let s = 10;
//while (true) {
//    let s = 5;
//    break;
//}

//console.log(s)

//var c = 5;
//let d = 3;
//function Print()
//{
//    var a = 1;
//    let b = 3;
//}

//{
//    let s = 10;
//    var z = 4;
//}

//Print();
//console.log(a); // no
//console.log(b); // no
//console.log(c); // Yes
//console.log(d); //yes
//console.log(s); //no
//console.log(z); // yes


//var i = 20;

//for (var i = 0; i < 10; i++) { // i = 10
//    console.log(i) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

//}

//console.log(i); // 10

//let a = 50;

//for (let a = 0; a < 10; a++) { // i =10
//    console.log(a) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
//}

//console.log(a);



//let x = 10;
//var y = 20;
//let z = 30
//function Print() {
//    let x = 1;
//    var y = 2;
//    let z = x+y
//}

//console.log(x); // 10
//console.log(y); // 20
//console.log(z); // 30


//let r;
//r = 5;

//const h;
//h = 7;

//const pi = 3.14;


//let names = ["bayan", "Ahmad", "Shaima", "Mohammad"]

//for (var i in names) {// i = 1
//    alert(names[i]);
//}

let person = {
    id: 1,
    name: "Shaima",
    email: "Shaima@gmail.com",
    age: 22
}

let car = {
    color: "red",
    model: 2020,
    capacity: 5
}

console.log(car.color)