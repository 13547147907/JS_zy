// Mark
let MarkMass = 60;
let MarkHeight = 1.7;
let MarkBMI = MarkMass / (MarkHeight * MarkHeight);
console.log('Mark的BIM为：' +MarkBMI);

// John
let JohnMass = 52;
let JohnHeight = 1.67;
let JohnBMI = JohnMass / (JohnHeight * JohnHeight);
console.log('John的BIM为：' +JohnBMI);

// 比较BIM
let BMI = (MarkBMI > JohnBMI) ? true : false;
console.log('Mark的BIM是否比John更高？' +BMI);