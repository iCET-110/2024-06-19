// let name = [];


// var address = "gampaha";


// {
//     let name = "saman";
// }

// {
//     var name ="saman";
// }


// console.log(name);

// const age = "12";

// age="15";

// console.log(typeof name);

// console.log(typeof age);


// let x = 10;

// let y = 20;

// let z = x+y;


// //  || && !

// console.log(z);



function calc() {
   

    // let number1;
    // let number2;
    // number1 =  Number(document.getElementById("number01").value);
    // number2 =  Number(document.getElementById("number02").value);
    // console.log(typeof number1);
    // console.log(typeof number2);
    // let op = document.getElementById("op").value;
    // let lblOutput = document.getElementById("output");

    // lblOutput.innerHTML = number1 + number2;

    //lblOutput.innerHTML=number1+number2;

    let number01;
    let number02;

    number01 = new Number(document.getElementById("number01").value);
    number02 = new Number(document.getElementById("number02").value);

    let op=document.getElementById("op").value;
    let lblOutput = document.getElementById("output");

    // number1 =  Number(document.getElementById("number01").value);
    // number2 =  Number(document.getElementById("number02").value);

    console.log(number01+number02);

    switch(op){
        case "+":lblOutput.innerHTML=number01+number02; break;
    }
    

    console.log(typeof number01);
    console.log(typeof number02);



}


