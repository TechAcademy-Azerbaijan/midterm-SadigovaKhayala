
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
    var a = parseInt(numbers[0]); // Ilk daxil olunmuş ədədi alırıq. Nümunə - 12 
    let b;
let sum=0;
while(a>0){
    b=a%10;
    a=parseInt(a/10);
    sum=sum+b;

}
console.log(sum);
});
