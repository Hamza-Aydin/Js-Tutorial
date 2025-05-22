var isim1="ada bilgi";
var tarih1=2012;
var not1=70;
var not2=70;
var not3=80;

var isim2="ege demir";
var tarih2=2010;
var not4=40;
var not5=40;
var not6=50;

var suankiyil=new Date().getFullYear();//bu direkt hazır fonksiyondur

var yasada=suankiyil-tarih1;
var yasege=suankiyil-tarih2;

var ortalamaada=(not1+not2+not3)/3;
var ortalamaege=(not4+not5+not6)/3;

var gecmeada=ortalamaada>=50;
var gecmeege=ortalamaege>=50;

console.log(yasada,yasege);
console.log(parseFloat(ortalamaada),parseFloat(ortalamaege));//burada parseint dersek ondalıklı kısmı almazdı
console.log(gecmeada,gecmeege);



