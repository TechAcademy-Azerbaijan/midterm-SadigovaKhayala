
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
    let a=n%10;
let b=parseInt(n/10)%10;
let c=parseInt(n/100)%10;
let d=parseInt(n/1000)%10;
let e=parseInt(n/10000);


if(a==b||a==c||a==d||a==e){
    console.log('YES')
}
else{
    console.log('NO')
}
  
});




