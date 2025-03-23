// 演習5（関数） ある1つの引数を取る関数を作って下さい。
// 20未満の数字ならば「NG」、20以上の数字ならば「OK」という文字列を返して下さい。
// その戻り値を使って、「あなたの場合は、お酒は〇〇です」という文字列を出力して下さい。
// 関数の引数に20を入れた場合は、以下の出力になります。 コードの最初はこのような感じです。 
// function checkAlcoholIf(age){

function checkAlcoholIf(age){
    if(age >= 20){
        return "OK"
    }else{
        return "NG"
    }
}

checkAlcoholIf(20)
console.log(`あなたの場合はお酒は${checkAlcoholIf(20)}です`)