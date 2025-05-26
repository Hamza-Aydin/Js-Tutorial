//-1-"elma,armut,muz,çilek" elemanlarına sahip bir dizi oluşturun

let meyveler=["elma","armut","muz","çilek"];

//-2- dizi kaç elemanlıdır?

let elemansayisi=meyveler.length;
console.log(elemansayisi);

//-3- dizinin ilk ve son elemanı nedir?

let son=meyveler[elemansayisi-1];
let ilk=meyveler[0];

console.log(son);
console.log(ilk);


//-4- elma dizinin bir elemanı mıdır?

let sonuc=meyveler.includes("elma");

if(sonuc){
    console.log("elma bu dizinin bir elemanıdır.");
}
else{
    console.log("elemanı değildir!!");
}

//-5- kiraz meyvesini dizinin sonuna ekleyin

let yeniliste=meyveler.push("kiraz");

console.log(meyveler);

//-6- dizinin son iki elemanını silin

let silinmis=meyveler.splice(3,meyveler.length-1);

console.log(meyveler);

//-7- aşağıdaki öğrencileri liste içerisinde tanımlayıp yaşlarını ve not ortalamalarını bulun

let ogr1=[
    "yiğit",
    "bilgi",
    2010,
    [70,60,80]
];
let ogr2=[
    "ada",
    "bilgi",
    2012,
    [80,80,90]]
    ;
let ogr3=[
    "ahmet",
    "turan",
    2009,
    [60,60,70]
];

let ogranciler=[ogr1,ogr2,ogr3];

let yas1=new Date().getFullYear()-ogr1[2];
let yas2=new Date().getFullYear()-ogr2[2];
let yas3=new Date().getFullYear()-ogr3[2];

console.log(`yiğitin yaşı:${yas1}\nadanın yaşı:${yas2}\nahmetin yaşı:${yas3}`);

let ort1=(ogr1[3][0]+ogr1[3][1]+ogr1[3][2])/3;
let ort2=(ogr2[3][0]+ogr2[3][1]+ogr2[3][2])/3;
let ort3=(ogr3[3][0]+ogr3[3][1]+ogr3[3][2])/3;

console.log(`yiğitin ortalamsı:${ort1.toFixed(1)}\nadanın ortalaması:${ort2.toFixed(1)}\nahmetin ortalaması:${ort3.toFixed(1)}`);
//tofixed() virgülden sonra kaç basamak alacağımızı söylüyordu.


