/* 
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 
        ürün id: 5
        ürün başlığı: IPhone 13 Pro
        ürün url: http://abc.com/iphone-13-pro
        ürün fiyatı: 22000

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

    sipariş id: 102
    sipariş tarihi: 30.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

*/

//-1-

var siparis1={
    "sipariş_id":"101",
    "sipariş_tarihi":"31.12.2022",
    "ödeme_şekli":"kredi kartı",
    "kargo_adresi":"Yahya kaptan mah. Kocaeli İzmit",
    "satın_alınan_ürünler":[//burada arada boşluk bırakmamalıyız key'lerde
        {
            "ürün_id":5,
            "ürün_başlığı":"iphone 15",
            "ürün_url":"http://abc.com/iphone-13-pro",
            "ürün_fiyat":22000,
        },
        {
            "ürün_id":6,
            "ürün_başlığı":"IPhone 13 Pro Max",
            "ürün_url":"http://abc.com/iphone-13-pro-max",
            "ürün_fiyat":25000,
        }
    ],
    "müşteri":{
        "müşteri_id":12,
    },
    "satici":{
        "firma_id":"34",
        "firma_adı":"apple Türkiye",
    }
    }
var siparis2={
    "sipariş_id":"102",
    "sipariş_tarihi":"30.12.2022",
    "ödeme_şekli":"kredi kartı",
    "kargo_adresi":"Yahya kaptan mah. Kocaeli İzmit",
    "satın_alınan_ürünler":[
        {
            "ürün_id":5,
            "ürün_başlığı":"iphone 15",
            "ürün_url":"http://abc.com/iphone-13-pro",
            "ürün_fiyat":22000,
        },
        {
            "ürün_id":6,
            "ürün_başlığı":"IPhone 13 Pro Max",
            "ürün_url":"http://abc.com/iphone-13-pro-max",
            "ürün_fiyat":25000,
        }
    ],
    "müşteri":{
        "müşteri_id":12,
    },
    "satici":{
        "firma_id":"34",
        "firma_adı":"apple Türkiye",
    },    
}
let sonuc=siparis1.satın_alınan_ürünler[1].ürün_fiyat;//bu şekilde ulaşabiliriz
sonuc=siparis1.müşteri.müşteri_id;
console.log(sonuc);

//-2- kdv hesabı

let odeme1=(siparis1.satın_alınan_ürünler[0].ürün_fiyat*1.18)+(siparis1.satın_alınan_ürünler[1].ürün_fiyat*1.18);
//aynısının odeme2'si yazılacak

console.log(odeme1);

//-3- toplam
// let total=odeme1+odeme2 





