var urunadi="iphone";//string
let fiyat=2000; //number

console.log(typeof urunadi);
console.log(typeof fiyat);

var sayi1="10";
var sayi2="20";

console.log(sayi1+sayi2);// bu şekilde string olarak yan yana yazar
console.log(Number(sayi2)+Number(sayi1)); //bu şekilde dönüşüm yaparsak normal olarak toplar(30)
//ancak dönüştürülebilir formda olması gerekiyor!!

var sayi3=20;
var sayi4=60;

console.log(sayi3.toString()+sayi4.toString());//bu şekilde de strig'e dönüştürmüş oluruz

let isim="hamza";
let soyisim="aydin";

console.log(isim+" "+ soyisim);

let sinavnotu=50;
let basari= sinavnotu>=50;//bloolean veri tipi (true-false)

console.log(basari);
console.log(typeof basari);

let yas;

console.log(yas); //undefined veri tipi
console.log(typeof yas);


