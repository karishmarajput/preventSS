let pass = document.getElementById('password');
let colour = ['blue','green','yellow','red', 'pink','grey'];
let userColour = "yellow";
let password = "acb123";
let numbers = [
    {
        innerOrbit: "a",
        outerOrbit: 1,
    },
    {
        innerOrbit: "b",
        outerOrbit: 2,
    },
    {
        innerOrbit: "c",
        outerOrbit: 3,
    },
    {
        innerOrbit: "d",
        outerOrbit: 4,
    },
    {
        innerOrbit: "e",
        outerOrbit: 5,
    },
    {
        innerOrbit: "f",
        outerOrbit: 6,
    }
]

function submitEmail(){
    // get the password and color for that email from backend if email exist in backend.
    console.log('submit');
    if(true){
        document.getElementById('loginEmailDiv').style.display="none";
        document.getElementById('loginPasswordDiv').style.display="block";
    }else{
        alert('enter a valid email');
    }
 
}
function updateColor(){
    for(let i = 1; i <= 6;i++){
        let id = "item"+i;
        console.log(id);
        let con =  document.getElementById(id);
        console.log(con)
        con.style.background = colour[i-1];
    }
}
updateColor()
function updateContent(){
    // let num1 = document.getElementById("one");
    // num1.innerHTML = "2 a"
    for(let i = 1; i <= 6;i++){
        let id = "content"+i;
        console.log(id);
        let con =  document.getElementById(id);
        console.log(con)
        let str = numbers[i-1].innerOrbit +"  "+numbers[i-1].outerOrbit;
        console.log(str)
        con.innerHTML= str
    }
}
updateContent();
console.log(numbers);
function checkPass(){
    console.log(pass.value);
    if(pass.value === password){
        alert('correct password');
    }else{
        alert('incorrect');
        pass.value = "";
    }
}

function clockWise(){
    console.log('antiClock')
    console.log(colour);
    let newcolor = colour.slice();
    console.log(newcolor)
    for(let i = 0; i < colour.length; i++){
        colour[i] = newcolor[i-1];
    }
    colour[0] = newcolor[colour.length - 1];
    console.log(colour)
    updateColor();
}
function antiClockWise(){
    console.log('Clock')
    let newcolor = colour.slice();
    console.log(newcolor)
    for(let i = 0; i < colour.length; i++){
        colour[i] = newcolor[i+1];
    }
    colour[colour.length-1] = newcolor[0];
    console.log(colour)
    updateColor();
}
function leftBtn(){
    let index = colour.indexOf(userColour);
    console.log(index)
    pass.value += numbers[index].innerOrbit;
}
function rightBtn(){
    let index = colour.indexOf(userColour);
    console.log(index)
    pass.value += numbers[index].outerOrbit;
}