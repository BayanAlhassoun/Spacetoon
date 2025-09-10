//let element = document.getElementById("p1")
//console.log(element)
//console.log(element.innerText)
//element.innerText = "P1 ID changed"
//console.log(element.innerText)

//let element2 = document.getElementsByClassName("c1");
//console.log(element2)
//element2[1].innerHTML = "element 2 changed"

//let element3 = document.getElementsByTagName("p");
//console.log(element3)
//element3[3].innerHTML = "paragraph #4"

//let c1= document.getElementsByClassName("c1")
//let el2 = document.getElementById("p1");
//let el3 = document.getElementById("p2");

//el2.innerText = c1[0].innerText;
//el3.innerText = c1[1].innerText;

//let p = document.createElement("p"); // <p> </p>
//let text = document.createTextNode("Paragraph 3") // Pargraph 3
//p.appendChild(text) // <p> Paragraph 3 </p>

//let parentDiv = document.getElementsByTagName("div"); // [div]
///*parentDiv[0].appendChild(p)*/
//let child = document.getElementById("p2");
//parentDiv[0].insertBefore(p, child);

let x1 = document.createElement("label"); // <label> </label>

let x2 = document.createTextNode("Email"); // Email

x1.appendChild(x2); // <label> Email </label>


let y1 = document.createElement("label"); // <label> </label>

let y2 = document.createTextNode("password"); // password

y1.appendChild(y2); //<label> password </label>


let c1 = document.createElement("button"); // <button> </button>

let c2 = document.createTextNode("Login") // Login

c1.appendChild(c2); // <button> Login </button>



let form = document.getElementsByTagName("form"); // [form]
form[0].appendChild(c1);


let inputs = document.getElementsByTagName("input"); // [input1, input2]


form[0].insertBefore(x1, inputs[0]);

form[0].insertBefore(y1, inputs[1]);




