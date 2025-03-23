// 演習4（関数） ある1つの引数を取る関数を作って下さい。
// 数字の1から25のうち、引数の倍数だけを出力するプログラムを作成します。
// ただし、引数が25より大きい場合は、そのまま数字を出力して下さい。
// 以下の出力になります。 modulus(5)
// 5
// 10
// 15
// 20
// 25
// modulus(7)
// 7
// 14
// 21

function module(num){
    if (num > 25){
        return console.log(num)
    }
    for(let i = 1;i <= 25;i++){
        if (num * i > 25){
            return
        }
        else console.log(num * i)
    }
}

module(28)

// おけ。んで以下答え
