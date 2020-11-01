// 平均分
let MarkAvg1 = (116 + 94 + 123) / 3;
let JohnAvg1 = (89 + 120 + 103) / 3;
let MaryAvg1 = (97 + 134 + 105) / 3;
console.log('Mark的队平均分为：' +MarkAvg1 +'\n' +
            'John的队平均分为：' +JohnAvg1 +'\n' +
            'Mary的队平均分为：' +MaryAvg1);

// 判断哪个队平均分获胜
if ((MarkAvg1 > JohnAvg1) && (MarkAvg1 > MaryAvg1)){
    console.log('Mark的队获胜，平均分为：' +MarkAvg1);
}
else if ((JohnAvg1 > MarkAvg1) && (JohnAvg1 > MaryAvg1)){
    console.log('John的队获胜，平均分为：' +JohnAvg1);
}
else if ((MaryAvg1 > JohnAvg1) && (MaryAvg1 > MarkAvg1)){
    console.log('Mary的队获胜，平均分为：' +MaryAvg1);
}
else{
    console.log('平局');
}

console.log("\n");

// 改变分数进行判断
let MarkAvg2 = (115 + 90 + 123) / 3;
let JohnAvg2 = (88 + 129 + 103) / 3;
let MaryAvg2 = (95 + 130 + 107) / 3;
console.log('Mark的队平均分为：' +MarkAvg2 +'\n' +
            'John的队平均分为：' +JohnAvg2 +'\n' +
            'Mary的队平均分为：' +MaryAvg2);

if ((MarkAvg2 > JohnAvg2) && (MarkAvg2 > MaryAvg2)){
    console.log('Mark的队获胜，平均分为：' +MarkAvg2);
 }
else if ((JohnAvg2 > MarkAvg2) && (JohnAvg2 > MaryAvg2)){
    console.log('John的队获胜，平均分为：' +JohnAvg2);
}
else if ((MaryAvg2 > JohnAvg2) && (MaryAvg2 > MarkAvg2)){
    console.log('Mary的队获胜，平均分为：' +MaryAvg2);
}
else{
    console.log('平局');
}

