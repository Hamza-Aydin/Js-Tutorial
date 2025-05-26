let ogrenciler=["hamza","ahmet","mehmet","veli"];

let sonuc=ogrenciler.length;

sonuc=ogrenciler.toString();//diziyi direkt düz string'e çevirir
sonuc=ogrenciler.join(" ");//dizi elamanları arasına belirttiğimiz ifadeyi girerek string'e çevirir

//eleman silme

sonuc=ogrenciler.pop();//sondan siler ve silinen elamını döndürür
sonuc=ogrenciler.shift();//baştan siler

//eleman ekleme

sonuc=ogrenciler.push("sena");//sonuna ekler
sonuc=ogrenciler.unshift("ayşe");//başına ekler

let marka1=["samsung","apple"];
let marka2=["huawei","oppo"];
let marka3=["xiaomi"];

//dizi birleştirme

sonuc=marka1.concat(marka2,marka3);//hepsini birleştirir ama marka1'i etkilemez bu durum

sonuc=marka3.splice(0,1,"casper");//2.işlevini kullanıyoruz ve bu şekilde hem silme hem de ekleme yapabiliyoruz illa ekleme olacak diye bir şey de yok

let kisiler=["ali","beril","mahmut","cemil","zeynep"];

sonuc=kisiler.sort();//alfabetik olarak sıralar

console.log(sonuc);
console.log(marka3);