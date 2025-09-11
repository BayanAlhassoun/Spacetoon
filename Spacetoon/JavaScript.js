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


//document.getElementById("p1").remove();

//let newP = document.createElement("p"); // <p> </p>
//let text = document.createTextNode("New Paragraph"); // New Paragraph
//newP.appendChild(text); // <p> New Paragraph </p>

//let parent = document.getElementsByTagName("div"); // [div1, div2]
//let child = document.getElementById("p2") // p

//parent[0].replaceChild(newP, child);

//let image = document.getElementsByTagName("img")[0]
//image.src = "Images/Abjad.png"
//image.style.width = "80px"

//document.getElementsByClassName("c2")[0].className = "c1";

//document.getElementsByClassName("c1")[0].style.color = "green"
//document.getElementsByClassName("c1")[0].style.backgroundColor = "lightblue"
//document.getElementsByClassName("c1")[0].style.fontFamily = "Arial"


function ChangeText(element) {
    console.log(element)
    element.innerHTML = "Hello Trainees :)"
}

function ShowDate() {
    let date = new Date().toDateString();
    document.getElementById("p3").innerHTML = date
}

function ToUpper(element) {
    console.log(element)
    element.value = element.value.toUpperCase();
    document.getElementById("p4").innerHTML = `Hello ${element.value}`
}


function CheckPassword(element) {
    console.log(element)
    if (element.value.length < 8) {
        document.getElementById("pass").style.color = "red"
        document.getElementById("pass").innerHTML = "password should be greater than 8 chars"
    }
}





function Lamps() {

    let lamp = document.getElementById("img3");

    if (lamp.src == "https://www.w3schools.com/js/pic_bulboff.gif") {
        lamp.src = "https://www.w3schools.com/js/pic_bulbon.gif"
    }
    else {
        lamp.src = "https://www.w3schools.com/js/pic_bulboff.gif"
    }
}


function Over(element)
{
    element.innerHTML = "Hello Trainees";
    element.style.fontSize = "30px";
    element.style.color = "red";
    element.style.backgroundColor = "lightpink"
}

function Out(element) {
    element.innerHTML = "Welcome"
    element.style.fontSize = "20px";
    element.style.color = "blue";
    element.style.backgroundColor = "lightblue"

}