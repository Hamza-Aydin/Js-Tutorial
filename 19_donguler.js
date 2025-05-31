for(let i=0; i<10; i++){ // ortadaki koşul durumu sağlandığı sürece döngü dönmeye devam eder
    console.log(i);
}
console.log("--------------------------------");
let toplam=0;

for(i=1;i<=10; i++){//bu şekilde 1'den 10'a kadar olan sayıları topladık
    toplam+=i;
}

console.log(toplam);

console.log("--------------------------------");

let dizi=[1,3,6,8,0];
let toplam1=0;

for(let i=0; i<dizi.length; i++){
    toplam1+=dizi[i];//bu şekilde dizi içindeki sayıları toplayabiliriz
}
console.log(toplam1);

console.log("--------------------------------");

let dizi1=[1,3,6,8,0];
let toplam2=0;

for(let i in dizi1){//in şeklinde yapınca i direkt index numaralarının yerini tutar
    toplam2+=dizi1[i];
}
console.log(toplam2);

console.log("--------------------------------");

for(let sayi of dizi1){//of operatörü de index'i değil de direkt o index'deki veriyi tutar
    console.log(sayi);
    toplam2+=sayi;
}
console.log(toplam2);

console.log("--------------------------------");

let user={
    "kullanıcıadi":"hamza",
    "şehir":"istanbul",
    "yaş":24,
    "üniversite":"ytü",
};

for(key in user){
    console.log(key);//indexler objelerde key'lere denk geliyordu
    console.log(user[key]);//bu şekilde de key'lere karşılık gelen değerlere ulaşırız
}
