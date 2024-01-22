"use strict";
// console.log("Hello World");
// alert("Salam Bu bir alertdir...");

// ? logic Operators
// let a =7;
// ! - not

// let isStudent = false;
// console.log(!isStudent);
// && - ve and
// || - ve ya or

// let number1 = 10;
// let number2 =12;

// let number3 =20;
// let number4=25;

// ? && - and
// console.log(number1<number2 && number3>number4);
// ? && her teref true-disa bize true qaytaracag.
// ? bir teref false, her teref false-disa false.

// let number1 =10;
// let number2=15;
// let number3 =20;

// console.log(number1>number3 && number3>number1 && number1<number2);

// ? ||  - or ve ya

let age1 = 18;
let age2 = 20;
let age3 = 35;
let age4 = 90;

// console.log( age2<age1 || age3<age4);

//  true  true  == true
// false  true == true
// true false == true
// false false == false
// ? her teref false olmalidi ki, false qaytarsin.

// console.log( (3>5 && 10>25) || (4>5 && 29>35));
// sol teref false false ==== false
// sag teref false  false ==== false

// 1 = true
//0 = false

// ? Template literals;

// let name = "Sunal";
// let surname="Jabili";
// let age =25;
// let jobTitle="Frontend Dev";
// let isStudent =!false;

// console.log(`Adi: ${name}, soyadi : ${surname}, yaşı :${age} , işi : ${jobTitle} . Telebedirmi ? ${isStudent}`);

// let proName = "Kartof";
// let proPrice =1.2;
// let proWeigth = 500;

// let proName2 = "Alma";
// let proPrice2 =1;
// let proWeigth2 = 350;

// console.log(`Mehsulumuz ${proName} kilosu ${proPrice} manatdan satisha cixarilmishdir. Stockda ${proWeigth} kq qalmishdir.`)

// console.log(`Mehsulumuz ${proName2} kilosu ${proPrice2} manatdan satisha cixarilmishdir. Stockda ${proWeigth2} kq qalmishdir.`)

// ? Conditons

let age = 23;

if (age > 18) {
  console.log(`${age} Yashin 18den boyukdur.`);
} else {
  console.log(` ${age} Yashin 18den kicikdir...hele ushagsan))`);
}

//? Task  :1 Reqemin musbet ve ya menfi olmagin tapin.0 oldugunu.

let number = 0;

// if (number > 0) {
//   console.log("Bu eded musbetdir.");
// } else if (number == 0) {
//   console.log("Bu eded 0-dir");
// } else {
//   console.log("Bu eded menfidir.");
// }

// ? Task: 2 imtahan balina gore aldigini herfi tap.
// A,B,C,D,E

// let resultScore =44;

// if (resultScore > 51 && resultScore < 60) {
//   console.log("Bu qiymet E-dir");
// } else if (resultScore > 60 && resultScore < 70) {
//   console.log("Bu qiymet D-dir ");
// } else if (resultScore > 70 && resultScore < 80) {
//   console.log("Bu qiymet C-dir");
// } else if (resultScore > 80 && resultScore < 90) {
//   console.log("Bu qiymet B-dir");
// } else if (resultScore > 90 && 100>=resultScore) {
//   console.log("Bu qiymet A-dir");
// } else {
//   console.log("Bele qiymet uygun imtahan bali yoxdur.");
// }

//? Task - 3 Havanin  isti ve soyuq olmagini yoxlayin.
//0C dereceden ashagidirsa donma bash verir.
// 20C-0C hava soyuq
// 20C 40C hava isti
//40C coxdursa hava olsun qaynar

// let tempurature =prompt("Zehmet olmasa, tempuratoru daxil edin.")

// if (tempurature > 40) {
//   console.log("Hava qaynardir.");
// } else if (tempurature > 20 && tempurature < 40) {
//   console.log("Hava istidir.");
// } else if (tempurature > 0 && tempurature < 20) {
//   console.log("Hava soyuqdur.");
// } else {
//   console.log("Hava donur");
// }


//? Task -4
// let number1 = +prompt("Birinci ededi daxil edin...");
// let number2 = +prompt("ikinci ededi daxil edin ...");

// if (number1 + number2 > 0) {
//   console.log("Bu ededlerin cemi musbetdir.");
// } else if (number1 + number2 == 0) {
//   console.log("Bu ededlerin cemini sifira bereabedir.");
// } else {
//   console.log("Bu ededlerin cemi menfidir.");
// }


// ? Task -5
// let username = prompt("Username daxil edin..");
// let password = prompt("Shifrenizi daxil edin..");

// username = Sunal123;
// password = 123456;

// if (username=="Sunal123" && password=="123456") {
//     console.log("Tebrikler siz sisteme daxil oldunuz...")
// }else if(username!="Sunal123" && password!="123456"){
//     console.log("Username ve password yanlishdir.")
// }
