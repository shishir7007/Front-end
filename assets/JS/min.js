// function myFun() {
//     alert("Welcome to JS");
// }

// let a=10; //declare//
// document.write(a);

// function aalu(){
//     document.write(a);
//      a=20;  //assign//
//     document.write(a);
// }
// aalu();
// function lalu(){
//     const a=30;
// }
// lalu();

// alert(4+9);
// console.log(6+23);


// document.getElementById("demo").innerHTML = "Hello World this is me";
// var x =  document.getElementsByClassName("new");
// document.getElementById("new").innerHTML =
//  x[0].innerHTML + x[1].innerHTML + x[2].innerHTML;
//  document.getElementsByTagName("h1").innerHTML = "Hello World";

//  document.querySelector("#demo").innerHTML = "Hello World";
//  document.querySelector(".new").innerHTML = "Hello World";
//  document.querySelectorAll(".new").innerHTML = "Hello World";

// 1. arithmetic operator:
// var x = 3;
// var y = 8;
// document.write(x + y);
// y++;
// document.write(y - x);
// x--;
// document.write(y / x);

// alert(y - x);
// console.log(x * y);

// 2. assignment operator:
// var x = 3;
// var y = 8;
// document.write(x+=y); //11 is assigned to x
// document.write(x%=y);
// document.write(x/=y);

// 3. comparison operator : answer in boolean i.e either true or false
// var x = 4; 
// var y = 6;
// var z = "shishir";
// document.write(x==y); 
// document.write(x<y);
// document.write(x===z);

// 4. logical operator : and or  not
// var w = 10;
// document.write(x>y && x>w ); //both conditions false so output will be false too
// document.write(x!=w);
// document.write(w>y || w>x); //any one condition should be true

// conditional statements:
// 1. if, if else, if else if  statement :


// if(x<y){
//     document.write("x is less than y"); // Note: if x is not less than y then no output is shown
// }
// var x = 10;
// var y = 15;
// var z = 5;
// 1. if(x>y){
//     document.write("x is greater less than y"); 
// }
// else{
//     document.write("y is greater than x");
// }

// 2. if(x>y && x>z ){
//     document.write("x is greater");
// }
// else if(y>x && y>z){
//     document.write("y is greater");
// }
// if(x<y){
//     if(y>z){
//         document.writer("y is greater");
//     }
// } 
// loop :
// var i = 1;
// while(i<=9){
//     document.write(i);
//     i++
// }
// do{
//     document.write(i);
//     i++;
// }
// while(i<=13)

// var aalu;
// switch(3){
//     case 0:
//         aalu = 1;
//         break;
//     case 1:
//         aalu = 2;
//         break;
//     case 2:
//         aalu = 3;
//         break;
//     case 3:
//         aalu = google;
//         break;
// }

function newDate(){
    document.getElementById("date").innerHTML = "This is on click event";
}
function onmouseOut(){
    var x = document.getElementById("jscss");
    x.style.backgroundColor = "violet";
    x.style.padding = "4rem";
}
function onMouseDown(){
    var x = document.getElementById("loading");
    x.style.backgroundColor = "tomato";

}
function onMouseDown(){
    var x = document.getElementById("loading");
    x.style.backgroundColor = "tomato";

}

//object : 
// var laptop = {
//     brand: "Acer",
//     price: 135000,
//     color: "black",
// }
// document.write("My laptop brand is " + laptop.brand + " The laptop price is " + laptop.price);

// array:
// var student = ["shishir", "Bipin", "Manish"];
// var phone = [984548, 9834530, 9834593];
// var address = ["Lamachaur", "Malepatan", "Khahare"];
// for(var i=0;i<=2;i++){
//     document.write("<br><br>" + "Student Name is : " + student[i]+ "<br> Phone Number is : " + phone[i] + "<br> Address is : " +address[i]);
// }
//css:  

function formValidation(){
    if(document.myForm.name.value==""){
        document.getElementById("nmessage").innerHTML="Name is required";
    return false;
    }
    if(document.myForm.phone.value==""){
        document.getElementById("pmessage").innerHTML="Phone is required";
    return false;
    }
    if(isNaN(document.myForm.phone.value)){
        document.getElementById("pmessage").innerHTML="Phone number must be numeric";
    return false;
    }
    if(document.myForm.phone.value.length!=10){
        document.getElementById("pmessage").innerHTML="Phone number must be 10 digits";
    return false;
    }
    if(document.myForm.email.value==""){
        document.getElementById("emessage").innerHTML="Email is required";
    return false;
    }
    if(document.myForm.password.value==""){
        document.getElementById("pssmessage").innerHTML="Password is required";
    return false;
    }
}

function seePassword() {
    var x = document.getElementById("typepass");
     
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
}
