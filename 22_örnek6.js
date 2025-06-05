//-1- kendisine verilen kelimeyi belirtilen kez ekrana yazan fonksiyonu yapınız

function tekrarla(kelime,tekrar){
    for(let i=0;i<tekrar;i++){
        console.log(kelime);
    };
};

tekrarla("merhaba",5);

//-2- dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız

function dikdörtgen_alan_cevre(kısa,uzun){
    let cevre=(kısa+uzun)*2;
    let alan=kısa*uzun;
    console.log(`Dikdörtgenin Alanı:${alan}\nDikdörtgenin Çevresi:${cevre} `);
}
dikdörtgen_alan_cevre(5,10);

//-3- yazı tura uygulamasını fonksiyon olarak yapınız

function yazi_tura(){
    let random=Math.round(Math.random());//0-1 arası rastgele sayıya göre yazı-tura atıyoruz
    if(random==0){
        console.log("YAZI")
    }
    else{
        console.log("TURA");
    }
}
yazi_tura();
yazi_tura();
yazi_tura();
yazi_tura();

//-4- kendisine girilen sayının tam bölenlerini dizi olarak döndüren fonksiyon yazın

function tam_bölenler(sayi){
    let dizi=[];
    let a=0;
    for(let i=1;i<=sayi;i++){
        if(sayi%i==0){
            dizi[a]=i;
            a++;
        }
    }
    return dizi;
}

let seksendort=tam_bölenler(84);
seksendort=tam_bölenler(84)[3];//bu şekilde 3.tam bölenine ulaşılabilir
console.log(seksendort);

//-5- değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız

function toplam(a,b){
    console.log(a+b);
}
toplam(3,4);//ancak daha fazla değişken girersek yanlış sonuç alırız

function toplam1(){
    let sonuc=0;
    for(let i=0;i<arguments.length;i++){
        sonuc+=arguments[i];//arguments burada parametre sayısına bağlı kalmadan esnek işlem yapabilmemizi sağlar
    }
    return sonuc;
}
var toplama=toplam1(2,3,5,7,9,10);
console.log(toplama);