let url="https://www.google.com/"
let siteadi="Js Web Geliştime"

//-1- url kaç karakterlidir?

//-2- site adi kaç kelimeden oluşmaktadır?

//-3- url https ile mi başlıyor?

//-4- site adi içerisinde eğitimi kelimesi var mı?

//-5- url ve site adi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz
//https://www.google.com/js-web-geliştime

//1)

let sonuc;

sonuc=url.length;

//2)

sonuc=siteadi.split(" ").length;

//3)
sonuc=url.indexOf("https");

sonuc=url.startsWith("https");//bu metot'da kullanılabilir(true/false döndürür)

if(sonuc){
    console.log("evet başlıyor");
}

//4)

sonuc=siteadi.includes("eğitimi");

if(sonuc){
    console.log("evet var");
}
else{
    console.log("hayır yok");
}
//5)

sonuc=url+siteadi.toLocaleLowerCase().replaceAll(" ","-");
//bunu seo için kullanacağız linkin belirli kısımlarını google tarafından tanınır olması için

console.log(sonuc);