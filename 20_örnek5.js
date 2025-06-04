let sayilar=[1,5,7,15,3,25,34,12];

//-1- sayılar listesindeki her elemanın karesini yazdırın

let index=1;
for(let i of sayilar){
    console.log(`${index}.elamanın karesi:${i*i}`);
    index++;
};

//-2- sayilar listesindeki hangi sayılar 5'in katıdır?

console.log("5'in katı olan sayılar:")
for(let i of sayilar){
    if(i%5==0){
        console.log(i);
    };
}

//-3- sayılar listesindeki çift sayıların toplamını bulunuz

var toplam=0;

for(let i of sayilar){
    if(i%2==0){
        toplam+=i;
    }
}
console.log(`çift sayıların toplamı:${toplam}`);

let ürünler=["iphone 15","samsung 24","iphone 16","samsung s25"];

//-4- ürünler listesinde içinde samsung geçen kaç ürün vardır?

let ürüncheck=0;

for(let i of ürünler){
    if(i.includes("samsung")){
        ürüncheck++;
    }
}
console.log(`samsung olan ürün sayısı:${ürüncheck}`);


//-5- Ürünler listesindeki tüm ürünleri büyük harf ile yazdırın

var a=1;

for(let i of ürünler){
    i=i.toUpperCase();
    console.log(`${a}.ürün:${i}`);
    a++;
};

var ogrenciler=[
    {
        "isim":"ali",
        "soyisim":"kılıç",
        "notlar":[60,70,60],
    },
        {
        "isim":"mehmet",
        "soyisim":"öz",
        "notlar":[80,70,80],
    },
        {
        "isim":"betül",
        "soyisim":"yıldız",
        "notlar":[70,70,60],
    }
];

//-6- öğrenci listesindeki her öğrencinin not ortalamasını ve başarı durumunu yazdırın

let b=1;
for(let i=0;i<3;i++){
    console.log(`${b}.öğrenci ortalaması:${((ogrenciler[i].notlar[0])+(ogrenciler[i].notlar[1])+(ogrenciler[i].notlar[2]))/3}`);
    b++;
};

//bu şekilde yapmak yerine for içine for döngüsüyle daha profesyonel yazabiliriz.

for(let ogrenci of ogrenciler) {
    let not_toplam = 0;
    let ortalama = 0;
    let adet = 0;
    for(let not of ogrenci.notlar) {
        not_toplam += not;
        adet++;
    }
    ortalama = not_toplam / adet;

    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrencimnin not ortalaması : ${ortalama}.`);

    if(ortalama>=50) {
        console.log("başarılı.");
    } 
    else {
        console.log("başarısız.");
    }    
}//bunları daha sonra fonksiyonlar için kullanacağız

//-7- tüm öğrencilerin not ortalaması kaçtır?

var total=0;

for(let i=0; i<3;i++){
    total+=ogrenciler[i].notlar[0];
    total+=ogrenciler[i].notlar[1];
    total+=ogrenciler[i].notlar[2];

}
total/=9;

console.log(`tüm öğrencilerin not ortalaması:${total}`);
