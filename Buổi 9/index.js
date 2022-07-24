// Đồng bộ là gì?
function dongBo(){
    console.log(1);
    console.log(2);
    console.log(3);
}
dongBo()
// Bất đồng bộ là gì?
function batDongBo(){
    setTimeout(()=>{console.log(4)}, 0)
    console.log(5);
    console.log(6);
}
batDongBo()
// Callback ? - là hàm (func) đc truyền qua đối số khi gọi hàm khác
function myFunc(param){
    console.log(typeof param)
    param("JSA10")
}
function myCallBack(value){
    console.log('myCallBack');
    console.log('value:',value)
}
// myFunc("123")
myFunc(myCallBack)

//Promise? 
const currentPromise= new Promise((resolve, reject)=>{
    //logic
    if(true){
        resolve()
    }
    else{
        reject()
    }
    //thành công: resolve()
    //thất bại: reject()
})

currentPromise
    .then(()=>{
        console.log("Success");
    })
    .catch(()=>{
        console.log("Error");
    })
    .finally(()=>{
        console.log("Finally");
    })

// async await?
const wait = (ms)=>{
    return new Promise((r)=>{setTimeout(r, ms)})
}
const runner = async ()=>{
    console.log("sắp rồi ...");
    await wait(3000)
    console.log("đợi tẹo ...");
    await wait(5000)
    console.log("tí nữa thôi ...");
    await wait(8000)
    throw new Error(8000)
}
const main = async () =>{
    try{
        await runner()
        console.log("xong xong xong");
    } catch(e){
        console.log(`lỗi ở ${e}`);
    }
}
main()