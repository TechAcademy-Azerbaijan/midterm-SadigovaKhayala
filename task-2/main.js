

const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "12,5"
    var numbers = input.split(','); // ['12', '5']
    var n = parseInt(numbers[0]); // Ilk daxil olunmuş ədədi alırıq. Nümunə - 12 
    let num=0;
    let c=n%10;
    let b=parseInt(n/10)%10;
    let a=parseInt(n/100)
    if(a>b&&a>c){
       num= a*100+b*10+c
    }
    else if(a<b&&b>c&&c<a){
        num= b*100+a*10+c
    }
    else if (a<c&&b<c){
        num= c*100+b*10+a
    }
    else if(b>a&&b>c){
        num=b*100+c*10+a
    }
    
    
    console.log(num*num)
    
});
