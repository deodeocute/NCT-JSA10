var items = document.querySelector('.items')
fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  )
    .then( (response) =>{
      console.log('response', response);
      // console.log(' response.json()',  response.json());
      response.json().then((data) => {
        console.log('data',data);
        for (product of data){
          items.innerHTML +=
           `
          <div class="item">
              <div class="product-view">
                  <img class="img-icon" src=${product.api_featured_image} alt="">
              </div>
          <div class="content">
              <h3>${product.name}</h3>
              <p> 
                  ${product.price}
              </p> 
          </div>
          </div>
          `
      }
      });
    })
    .catch((err) => {
      console.log("Error :-S", err);
    });