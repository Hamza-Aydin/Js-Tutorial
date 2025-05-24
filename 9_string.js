var isim="hamza";
var soyisim="aydın";
var yas=24;
var sehir="istanbul";

var mesaj="ismim: "+isim+ ' soyismim:'+ soyisim+' yaşadigim şehir:'+sehir+' emekliliğime kalan yil:'+(65-yas);
//bunu bu şekilde yazmak zor o yüzden backtick kullanıyoruz

mesaj=`ismim:${isim}, soyisimim:${soyisim}, yaşadığım şehir:${sehir}, emekliliğime kalan yıl:${65-yas} `;
//bu şekilde çok daha kolay oluyor

console.log(mesaj);

//ternary oparetors
var yas2=20;
var ogrencilik=(24-yas2>0)? `öğrencilik bitimine ${24-yas2} yıl kaldı.`:"öğrenci değilisiniz!!";

console.log(ogrencilik);