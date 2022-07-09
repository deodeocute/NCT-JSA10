let products = [
    {
        name: 'Pho',
        title: 'Day la mon an co truyen cua Ha Noi va Viet Nam',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Bun rieu',
        title: 'Day la mon an tuyet voi va rat thich hop de di an voi nguoi yeu',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Banh da cua',
        title: 'Day la mot mon sieu ngon cua HaiPhong',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Bun bo Hue',
        title: 'Mon ngon cua Hue',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Banh bot loc',
        title: 'Mon ngon dac san cua Hue',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Bun oc ',
        title: 'Mot mon ngon va dinh cao vao mua dong',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
]

// -------------- local Storage done -------------- 
// Chạy đoạn code này trước để khởi tạo Local Storage 


// let productsCart = []
// let productsCartString = JSON.stringify(productsCart)
// localStorage.setItem('productsCart', productsCartString)

// let productsString = JSON.stringify(products)
// console.log(productsString)

// localStorage.setItem('products',productsString)

// let productsData = localStorage.getItem('products')
// console.log(JSON.parse(productsData))
// -------------- -------------- --------------------

let items = document.querySelector('.items')
// let a = document.getElementsByClassName('.item')
console.log(items);
// console.log(a);
for (product of products){
    items.innerHTML +=
    // `
    // <div class="item">
    //     <img src="${product.img}" alt="">
    //     <h4>${product.name}</h4>
    //     <p>${product.title}</p>
    // </div>
    // `
     `
    <div class="item">
        <div class="product-view">
            <img class="img-icon" src=${product.img} alt="">
            <button type="button"
                value='${product.name}' >add to list</button>
        </div>
    <div class="content">
        <h3>${product.name}</h3>
        <p> 
            ${product.title}
        </p> 
    </div>
    </div>
    `
}
let pro = JSON.stringify(products)
localStorage.setItem('productsCart', pro)

let item = document.querySelector('.items')
console.log(item);
let cart = document.querySelector('.container-right')

let cartParse = JSON.parse(localStorage.getItem('productsCart'))
console.log('cartParse',cartParse)

// for(food of cartParse){
    
//     cart.innerHTML += `<p>${food.name}</p>`
// }

// function addToList() {
//     let btn_add = document.getElementById('add_btn')
//     console.log(btn_add.value)
//     let i = btn_add.value

// }


item.addEventListener('click', function (event){
    console.log(event.srcElement);
    if(event.srcElement.tagName === 'BUTTON'){
        console.dir(event.srcElement);
        // alert(event.srcElement.value)
        let item = event.srcElement.value
        console.log('item', item)
        cartParse.push(`${item}`)
        localStorage.setItem('productsCart', JSON.stringify(cartParse))
        
        cart.innerHTML += `<p>${item}</p>`
    }
})

