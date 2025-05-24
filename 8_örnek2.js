//1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz

//2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz

//3- x,y,z sayılarının büyüklük karşılaştırmasını yapınız(else if'i araştırın)

//4- 2 vize(%40) 1 final(%60) notu için hesaplanan ortalamaya göre;
//      a)ortalama 50 üstündeyse geçdi değilse kaldı yazsın
//      b)geçmek için ortalama 50 bile olsa final notu da en az 50 olmalıdır
//      c)finalden 79 üstü aldığında ortalama 50 altında bile olsa geçsin

//-1-

var sayi=35;

if(sayi<=50 && sayi>=10){
    console.log("sayi belirtilen aralıktadır");
}
else{
    console.log("aralık dışı!!");
}

//2 

var sayi2=-23;

if(sayi2%2!==0 && sayi2>0){
    console.log("sayi pozitif bir tek sayıdır");
}
else{
    console.log("sayı pozitif bir tek sayı değildir!!");
}

//3

var x,y,z;
x=5;
y=10;
z=20;

if(x>y && x>z){
    console.log("x en büyük sayıdır");
}
else if(y>x && y>z){ // else if, if bloğu çalışmazsa başka koşul bloğu eklemek istediğimizde kullanıdığımız bir bloktur
    console.log("y en büyük sayıdır");
}
else{
    console.log("z en büyük sayıdır");
}
if(x>y && x<z){
    console.log("x 2.en büyük sayıdır");
}
else if(y>x && y<z){
    console.log("y 2.en büyük sayıdır");
}
else{
    console.log("z 2.en büyük sayıdır");
}
if(x<y && x<z){
    console.log("x en küçük sayıdır");
}
else if(y<z && y<x){
    console.log("y en küçük sayıdır");
}
else{
    console.log("z en küçük sayıdır");
}

//4
//a)
let vize1=47;
let vize2=45;
let final=70;
let ortalama=vize1*0.2+vize2*0.2+final*0.6;

if(ortalama>=50){
    console.log("ortalamanız:",ortalama,"\ntebrikler sınavdan geçtiniz.");
}
else{
    console.log("ortalamanız:",ortalama,"\nmaalesef sınavdan kaldınız :(");
}

//b)
let vize3=60;
let vize4=70;
let final2=45;
let ortalama2=vize3*0.2+vize3*0.2+final2*0.6;

if(ortalama2>=50 && final2>=50){
    console.log("sınavdan geçtiniz.");
}
else if(ortalama2>=50 && final2<50){
    console.log("final notunuzun 50'den düşük olması sebebiyle kaldınız!");
}

//c)

let vize5=10;
let vize6=35;
let final3=75;
let ortalama3=vize5*0.2+vize5*0.2+final3*0.6;

if(ortalama3>=50){
    console.log("ortalamanız:",ortalama3,"geçtiniz.");
}
else if(final3>=70){
    console.log("ortalamanız:",ortalama3,"\nfinal notunuzun 70'den yüksek olması sebebiyle geçtiniz");
}
else{
    console.log("kaldınız!!");
}