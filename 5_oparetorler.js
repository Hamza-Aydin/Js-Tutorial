let sonuc;
let a=10, b=20, c=30;


//1-ARİTMETİK OPARETÖRLER

sonuc=a+b;
sonuc=a-b;
sonuc=a*b;
sonuc=a/b;
sonuc=b%a; // bölümünden kalanı verir
sonuc=a++;//ilk yazdırmada yine 10 yazar sonrasında a 11 olarak gözükür
sonuc=++a;//önce arttırıp sonra atamayı yapar
sonuc=--b;
sonuc=b--;

//2-ATAMA OPARETÖRLERİ
sonuc=a;
sonuc+=a;//sonuç=sonuç+a;
sonuc-=a;
sonuc*=a;
sonuc/=a;
sonuc%=a;

//3-KARŞILAŞTIRMA OPARETÖRLERİ

sonuc=a==b;
sonuc=a!=b;
sonuc=a<b;
sonuç=a>b;
sonuc=a<=b;
sonuc=a==="10";//bu veri tipi yönünden de inceler

console.log(sonuc);
