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



// function calc() {
   

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

    // let number01;
    // let number02;

    // number01 = new Number(document.getElementById("number01").value);
    // number02 = new Number(document.getElementById("number02").value);

    // let op=document.getElementById("op").value;
    // let lblOutput = document.getElementById("output");

    // // number1 =  Number(document.getElementById("number01").value);
    // // number2 =  Number(document.getElementById("number02").value);

    // console.log(number01+number02);

    // switch(op){
    //     case "+":lblOutput.innerHTML=number01+number02; break;
    // }
    

    // console.log(typeof number01);
    // console.log(typeof number02);



// }


// function num9Click(){
//     document.getElementById("number01").value=9;
// }

// function num8Click(){
//     document.getElementById("number01").value=8;
// }


// function calc(x,y){
//     return x+y;
// }

// let num = calc(10,20);

// console.log(num);


// function sample(){
//     console.log("hello");
// }

// sample();


// const customer ={
//     name:"saman",
//     age:12,
//     run: ()=>console.log("hello")
// }

// customer.run();



// function sample(){
//     console.log("hello");
// }

// let sample = function(){
//     console.log("hello");
// }

// let sample = ()=>{
//     console.log("hello");
// }

// let sample = ()=>console.log("hello");


// let numbers = [10,50,67,85,11,25,658,25,45];

// console.log(numbers.sort());
// console.log(numbers.pop());
// console.log(numbers.push(500));
// console.log(numbers.length);
// console.log(numbers.shift());
// console.log(numbers.toString());

const customers = [
    {
        name:"saman",
        age:12,
        address:"gampaha"
    },
    {
        name:"kamal",
        age:11,
        address:"kurunegala"
    },
    {
        name:"nimal",
        age:15,
        address:"anuradhapura"
    },
    {
        name:"sunimal",
        age:20,
        address:"panadura"
    },
    {
        name:"wimal",
        age:30,
        address:"moratuwa"
    },

]


function addCustomer(){

    let name = document.getElementById("txtUserName").value;
    let age = document.getElementById("txtAge").value;
    let address = document.getElementById("txtAddress").value;

    customers.push({
        name,
        age,
        address
    })
    console.log(customers);
    showAllCustomers();
}



function showAllCustomers(){
    let tblCustomers=document.getElementById("tblCustomers");

    let tableBody = `<tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>`;


    customers.forEach(data =>{
        console.log(data);

        tableBody+=` <tr>
                        <td> ${data.name}</td>
                        <td> ${data.age}</td>
                        <td> ${data.address}</td>
                    </tr>`;

    })
    tblCustomers.innerHTML=tableBody;
    console.log(tableBody);
}













