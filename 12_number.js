let sayi;

sayi=10;
sayi="10"; //yine 10 döner ama string olarak
sayi=Number("10"); //bu şekilde number veri tipine döner

sayi=parseInt("10.6"); //ondalıklı kısmı siler
sayi=parseFloat("10.6");
sayi=parseInt("10a");//ilk sayı geldiği için yine çevirir a'yı görmezden gelir
sayi=parseInt("a10");//burada nan çıktısını verir

sayi=isNaN("a10");//sayı değil mi diye sormuş oluruz

//METOTLAR

sayi=12.68468153;

sayi=sayi.toPrecision(5);//sadece 5 basamak alır ve string döndürür.

sayi=Math.round(2.4);// en yakın tam sayıya yuvarlıyor
sayi=Math.round(2.6);
sayi=Math.ceil(2.2);// bu da direkt üste yuvarlar
sayi=Math.floor(2.6);// bu da her türlü aşağı yuvarlar
sayi=Math.sqrt(25);// karekökünü almış oluruz
sayi=Math.abs(-39);// mutlak değeri alınır
sayi=Math.pow(2,3);// sayının üstünü almamızı sağlar
sayi=Math.min(5,8,9,74,52);// aralarından en küçük olanı alır
sayi=Math.max(1,4,15,50);// aralarından max olan değeri alır
sayi=Math.round(Math.random()*100+40);// rastgele sayı elde etmemizi sağlar(40-140 arası verir burda)

console.log(typeof sayi);
console.log(sayi);