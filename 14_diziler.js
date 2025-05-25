let ürün1="iphone 11";
let ürün2="iphone 12";
let ürün3="iphone 13";

// bunları liste olarak depolayabiliriz pratik bir şekilde (array)

var ürünler=["iphone 11","iphone 12","iphone 13"];
var fiyat=[15000,20000,30000];
var renk=["gold","beyaz","siyah"];

console.log(ürünler[2]);

var tel1=["iphone 11",15000,"gold"];
tel1[0]="iphone 11+";//bu şekilde güncelleme de yapılabilir

console.log(tel1);

var tel2=[];
tel2[0]="iphone 12";// bu şekilde sonradan da eklenebilir
tel2[1]=20000;
tel2[2]="beyaz";

console.log(tel2);

var tel3=[
    "iphone 13",
    30000,
    ["siyah","sarı","mavi"],//bu şekilde dizi içinde dizi de olabilir
];

console.log(tel3[2][2]);//erişmek ise bu şekilde

var metin="selam olsun herkese";

console.log(metin.split(" ")[2]);//bu şekilde de array yapabiliyorduk
