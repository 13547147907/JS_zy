const xf = [] // 小费
const all = [] // 总金额
function num(a, b, c) {
    for (let i = 0; i < arguments.length; i++) {
        let sum = 0;
        let xfSum = 0;
        if (arguments[i] < 50) {
            xfSum = arguments[i] * 0.2
            sum = arguments[i] + xfSum
            xf[i] = xfSum
            all[i] = sum;
        }
        else if (arguments[i] > 50 && arguments[i] < 200) {
            xfSum = arguments[i] * 0.15
            sum = arguments[i] + xfSum
            xf[i] = xfSum
            all[i] = sum
        }
        else {
            xfSum = arguments[i] * 0.1
            sum = arguments[i] + xfSum
            xf[i] = xfSum
            all[i] = sum
        }
    }
}
num(124, 48, 268)
console.log("小费数组：");
console.log(xf);
console.log("支付金额：");
console.log(all);