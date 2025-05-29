let dizi=["hamza","aydın",24];
//diziler içinde depoladıkları şeyler hakkında açıklama yapmaz bunun gerekli olduğu durumlarda objeleri kullanacağız

var kullanici1={//obje adında da türkçe karakter olmayacak
    "isim":"hamza",
    "soyisim":"aydın",
    "şehir":"istanbul",
    "yas":24,
    "konum":{//obje içinde obje de olur
        "ilçe":"tuzla",
        "mahalle":"yayla",
    },
    "hobiler":["futbol","satranç"],//bu şekilde objenin içine dizi de atayabiliriz
}
var kullanici2={
    "isim":"ahmet",
    "soyisim":"şeker",
    "şehir":"istanbul",
    "yas":28,
    "konum":{
        "ilçe":"beşiktaş",
        "mahalle":"bebek",
    },
    "hobiler":["koşu","basketbol"],
}

let kullanicilar=[kullanici1,kullanici2];
let urunler=[{
    "isim":"samsung s25",
    "fiyat":"40000",
},
{
    "isim":"iphone 16",
    "fiyat":"55000",
}];//bu şekilde değişken tanımlamadan da direkt liste içine objeleri tanımlayabiliriz

let sonuc;

sonuc=kullanici1.isim;
sonuc=kullanici1.yas;
sonuc=kullanici1.konum.mahalle;
sonuc=kullanici1.hobiler[1];
sonuc=kullanicilar[1].konum.ilçe;//bu şekilde dizi içerisindeki 2 objeden çağırma yapabiliriz
sonuc=urunler[0].fiyat;


console.log(sonuc);