var isim="ahmet"; //bu global scope'da
var cinsiyet="erkek";
const adres="istanbul";//const ile tanımlanan değişkenler güncellenemez!
//adres="bursa" hata alırız

function yazdir(){
    var yas=22; //bu function scope'unda yani dışarısında hata verir
    var isim="mehmet";
    console.log(isim);//ahmet'i alır normalde eğer function'da başka bir isim tanımlaması yoksa
    console.log(yas);
}
yazdir();
//console.log(yas); bu hata verecek çünkü yas function scope'da

if(true){
    var isim="deniz";//if ve for bloklarında değişkenleri eğer var ile tanımlarsak global scope olur
    let cinsiyet="kadın";//if ve for'da global'de kalmaması için değişkenleri let ile tanımlamamız gerekir
}
console.log(isim,cinsiyet);