function selamlama(){
    console.log("selam!!")
}
selamlama();

function selamlama_v1(isim){
    console.log("selam",isim);
}
selamlama_v1("hamza");//tırnak içinde yazmamız lazım mecbur
selamlama_v1();

function yas_hesaplama(dogumyılı){
    return new Date().getFullYear()-dogumyılı;//return bu değeri ilerde değişken içinde saklayabilmemizi sağlar
}

var ahmet_yas=yas_hesaplama(2003);
console.log(ahmet_yas);

function emeklilik(dogumyılı,isim){
    let kalan_yıl=65-yas_hesaplama(dogumyılı);//burada return ile kullandığımız için kullanbildik
    if(kalan_yıl>0){
        console.log(`${isim} emekliliğinize ${kalan_yıl} kaldı.`);
    }
    else{
        console.log("zaten emekli oldunuz!!");
    }
}

emeklilik(2001,"hamza");