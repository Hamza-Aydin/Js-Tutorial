let kursadi="Komple Uygulamalı Web Geliştirme Eğitimi";

let sonuc;

sonuc=kursadi.toLocaleLowerCase();//küçük ve büyük harflerle oynayabiliriz
sonuc=kursadi.toUpperCase();

sonuc=kursadi.length;//uzunluğunu verir

sonuc=kursadi[3];//indexler arasında dolaşırız(0'dan başlar index)
sonuc=kursadi.slice(0,6);//belirli indexler arasındaki değerleri tutarız
sonuc=kursadi.slice(-10,-5);//- olanlar sondan indeksleme mantığıdır
sonuc=kursadi.slice(10);//bitiş belirtmezsek direkt başlangıç indeksinden bitişe alır

sonuc=kursadi.substring(5);//slice ile tamamen aynı metot

sonuc=kursadi.replace("Uygulamalı","Modellemeli");//belirli şeyleri değiştmemizi sağlar

sonuc=kursadi.trim();//baştaki ve sondaki boşlukları siler
sonuc=kursadi.trimEnd();
sonuc=kursadi.trimStart();

sonuc=kursadi.indexOf("Geliştirme");// içine girilen ifadeyi hangi indeks'de başladığını gösterir(yoksa -1 döner)

sonuc=kursadi.split(" ");//içine girilen ifadeye göre string içinde de olması lazım tabi bu ifade ona göre dizi oluşturur.
sonuc=kursadi.split(" ")[2];//bu şekilde dizisinin içindeki elamanlara da erişebiliriz

sonuc=kursadi.includes("Web");//string'in içinde bu ifade var mı yok mu onu kontrol eder(true/false döner)


console.log(sonuc);