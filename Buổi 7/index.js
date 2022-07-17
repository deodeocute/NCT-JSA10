{
    let a = 10 // bị giới hạn bỏi block-scope
    var b = 20 // k bị giới hạn bỏi block-scope
    const pi = 3.14  // bị giới hạn bỏi block-scope
    a = 11
    b = 30
    // pi = 5
    console.log(a);
    console.log(b);
    console.log(pi);
}
// console.log(a);
console.log(b);
// console.log(pi);

// function scope
// function check(){
//     let c = 30 
//     var d = 40
//     const e = 22
//     console.log(c);
//     console.log(d);
//     console.log(e);
// }
check = (name, age) => {
    let c = 30
    var d = 40
    const e = 22
    console.log(c);
    console.log(d);
    console.log(name, age);
}
check('Quỳnh', 'k biết')
// console.log(c);
// console.log(d);
// console.log(e);

// Gán cho chuỗi NIIT cho biến thuongHieu
thuongHieu = "NIIT";
// Sử dụng biến thuongHieu
console.log(thuongHieu);
// Khai báo thuongHieu
var thuongHieu;

var thuongHieu = "NIIT";
// var namThanhLap
// In ra thông tin biến
console.log(thuongHieu + " thành lập năm: " + namThanhLap);
// Khai báo và khởi tạo biến namThanhlap
var namThanhLap = 2002;
console.log(thuongHieu + " thành lập năm: " + namThanhLap);