let loggin=false;

if(loggin==true){//if bloğu içinde değer true ise çalışır sadece!
    console.log("uygulamaya giriş yapıldı.");
}

else{
    console.log("giriş yok!");//if doğru değilse direkt else bloğu çalışır
}

console.log("merhaba");//bu her türlü çalışır

if(loggin){
    console.log("zaten true");
}
if(!loggin){
    console.log("tersini aldık");
}

var username="hamza";
var password=1234;

if(username=="hamza"){
    if(password==1234){
        console.log("giriş başarılı");
    }
    else{
        console.log("şifre hatalı!");
    }
}
else{
    console.log("kullanıcı adı hatalı!");
}
