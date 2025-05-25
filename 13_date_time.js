let simdi=new Date();// bu class'ın içindeki metotları kullanacağız

var sonuc=simdi;

//get

sonuc=simdi.getDate();//günü getirir
sonuc=simdi.getFullYear();//yılı getirir
sonuc=simdi.getDay();//günü getirir 0=pazar
sonuc=simdi.getHours();// sadece saati getiri 16 gibi
sonuc=simdi.getTime();//milisaniye cinsinden saati getirir

//set

sonuc=simdi.setDate(5);//günü değiştiririz
sonuc=simdi.setFullYear(2024);//yılı değiştirdik
sonuc=simdi.setMonth(8);//aylar da 0'dan başlar 0=ocak(yani burada eylül ayı gelir)
sonuc=simdi;

let dogumtarihi=new Date(2001,3,30);//(5/5) özelliğini kullnadık new Date'in

let yas=simdi.getFullYear()-dogumtarihi.getFullYear();//bu şekilde yaş bulunabilir
yas=simdi-dogumtarihi;//bu sefer milisaniye olarak çıkar
yas=yas/1000;//saniyeye döner
yas=yas/60;//dakikaya döner
yas=yas/60;//saate döner
yas=yas/24;//güne döner
console.log(yas);

console.log(typeof sonuc);
console.log(sonuc);