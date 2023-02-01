// ******************* Hover functions ********************



// first-row -> image-1 
function sideImg1(){
  document.getElementById('img-change-id1').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/14-1_360x.jpg?v=1601694510";
}
function frontImg1(){
  document.getElementById('img-change-id1').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/14_360x.jpg?v=16016945";
}
// first-row -> image-2
function sideImg2(){
  document.getElementById('img-change-id2').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/1-1_360x.jpg?v=1601694960";
}
function frontImg2(){
  document.getElementById('img-change-id2').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/1_c14253f1-8cb5-4a88-921b-d3dbaffaaafa_360x.jpg?v=1601694960";
}
// first-row -> image-3
function sideImg3(){
  document.getElementById('img-change-id3').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/12_360x.jpg?v=1509980861";
}
function frontImg3(){
  document.getElementById('img-change-id3').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/16_360x.jpg?v=1509980861";
}
// first-row -> image-4
function sideImg4(){
  document.getElementById('img-change-id4').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/25_14925dcf-253e-4ad6-bece-ba55411af4e1_360x.jpg?v=1617528878";
}
function frontImg4(){
  document.getElementById('img-change-id4').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/11_360x.jpg?v=1617528878";
}


// ------------------------------------------------


// second-row -> image-1 
function sideImg5(){
  document.getElementById('img-change-id5').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/9_360x.jpg?v=1509980323";
}
function frontImg5(){
  document.getElementById('img-change-id5').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/9_360x.jpg?v=1509980323";
}
// second-row -> image-2 
function sideImg6(){
  document.getElementById('img-change-id6').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/5_360x.jpg?v=1509980327";
}
function frontImg6(){
  document.getElementById('img-change-id6').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/5_360x.jpg?v=1509980327";
}
// second-row -> image-3 
function sideImg7(){
  document.getElementById('img-change-id7').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/9_d9a89bd5-61ac-4547-b397-bcea7a9b4917_360x.jpg?v=1509981236";
}
function frontImg7(){
  document.getElementById('img-change-id7').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/4_360x.jpg?v=1509980328";
}
// second-row -> image-4 
function sideImg8(){
  document.getElementById('img-change-id8').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/1_af8ffcd4-baeb-4d08-b738-4bf02973df0a_360x.jpg?v=1509980329";
}
function frontImg8(){
  document.getElementById('img-change-id8').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/3_326d5813-829e-4e9b-a568-b62f0d9359dd_360x.jpg?v=1509980329";
}



// Third - row -> image-1
function sideImg9(){
  document.getElementById('img-change-id9').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/13_1c04d432-a1ba-4e9b-88a1-b9c3aecbab9d_360x.jpg?v=1591760416";
}
function frontImg9(){
  document.getElementById('img-change-id9').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/13_1c04d432-a1ba-4e9b-88a1-b9c3aecbab9d_360x.jpg?v=1591760416";
}
// Third - row -> image-2
function sideImg10(){
  document.getElementById('img-change-id10').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/3_360x.jpg?v=1509980332";
}
function frontImg10(){
  document.getElementById('img-change-id10').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/1_360x.jpg?v=1509980332";
}
// Third - row -> image-3
function sideImg11(){
  document.getElementById('img-change-id11').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/13-1_360x.jpg?v=1601694813";
}
function frontImg11(){
  document.getElementById('img-change-id11').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/13_360x.jpg?v=1601694812";
}
// Third - row -> image-4
function sideImg12(){
  document.getElementById('img-change-id12').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/11_63e20b3b-21f2-49ff-93f8-2179551f43e0_360x.jpg?v=1591760332";
}
function frontImg12(){
  document.getElementById('img-change-id12').src = "https://cdn.shopify.com/s/files/1/1573/5553/products/11_63e20b3b-21f2-49ff-93f8-2179551f43e0_360x.jpg?v=1591760332";
}








// ************************************** Add to cart *****************************************

let carts = document.querySelectorAll('.add-cart');

let products = [
  {
    productName : 'product1',
    productTag : 'Chair-1',
    productPrice : 260 ,
    inCart : 0
  },
  {
    productName : 'product2',
    productTag : 'Chair-2',
    productPrice : 160 ,
    inCart : 0
  },
  {
    productName : 'product3',
    productTag : 'Chair-3',
    productPrice : 200 ,
    inCart : 0
  },
  {
    productName : 'product4',
    productTag : 'Chair-4',
    productPrice : 190 ,
    inCart : 0
  },
  {
    productName : 'product5',
    productTag : 'Chair-5',
    productPrice : 100 ,
    inCart : 0
  },
  {
    productName : 'product6',
    productTag : 'Chair-6',
    productPrice : 1145 ,
    inCart : 0
  },
  {
    productName : 'product7',
    productTag : 'Chair-7',
    productPrice : 140 ,
    inCart : 0
  },
  {
    productName : 'product8',
    productTag : 'bag-1',
    productPrice : 130 ,
    inCart : 0
  },
  {
    productName : 'product9',
    productTag : 'pillow-1',
    productPrice : 260 ,
    inCart : 0
  },
  {
    productName : 'product10',
    productTag : 'bag-2',
    productPrice : 130 ,
    inCart : 0
  },
  {
    productName : 'product11',
    productTag : 'blub-1',
    productPrice : 50 ,
    inCart : 0
  },
  {
    productName : 'product12',
    productTag : 'clock-1',
    productPrice : 160 ,
    inCart : 0
  },
]

for (let i=0; i < carts.length; i++){
  carts[i].addEventListener('click',() => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  })
}


function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers) { 
    document.querySelector('.cart span').textContent = productNumbers;
  }
}



function cartNumbers(product) {
  let productNumbers = localStorage.getItem('cartNumbers');

  productNumbers = parseInt(productNumbers);

  if(productNumbers) { 
    localStorage.setItem('cartNumbers',productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers +  1;
  }else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }
  
  setItems(product);
}

function setItems(product) {
  var cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems); 

  if(cartItems != null){
    if(cartItems[product.productTag] == undefined){
      cartItems = {
          ...cartItems,
          [product.productTag] : product
      }
    }
    cartItems[product.productTag].inCart += 1;
  }else{
    product.inCart = 1;
     cartItems = {
          [product.productTag]: product
    } 
  }
  localStorage.setItem('productsInCart',JSON.stringify(cartItems));

}

function totalCost(product){
  // console.log("the product price is ",product.productPrice);

  var cartcost = localStorage.getItem('totalCost');
  

  // console.log("My cart cost is ",cartcost);
  // console.log(typeof cartcost)

  if(cartcost != null){
    cartcost = parseInt(cartcost);
    localStorage.setItem('totalCost',cartcost + product.productPrice);
  }else{
    localStorage.setItem('totalCost',product.productPrice);
  }

}


function displayCart(){
  var CartItems = localStorage.getItem('productsInCart');
  CartItems = JSON.parse(CartItems);

  var productContainer = document.querySelector('.products');

  var cartcost = localStorage.getItem('totalCost');
  

  if(CartItems && productContainer){
    productContainer.innerHTML = '';
    Object.values(CartItems).map(item => {
      productContainer.innerHTML += `
      <div class="product">
            <ion-icon name="close-circle-outline"></ion-icon>
            <img src="/project/images/${item.productTag}.jpg" style="width:90px;>
            <span>${item.productName}<span>
      </div>      
      <div class="price" >$${item.productPrice}.00</div>
      <div class="quantity">
          <ion-icon name="caret-back-circle-outline"></ion-icon>
          <span>${item.inCart}</span>
          <ion-icon name="caret-forward-circle-outline"></ion-icon>
      </div>
      <div class="total">
          Total ${item.inCart * item.productPrice}.00
      </div>
      
      `
    });

    productContainer.innerHTML += `
    <div class="BasketTotalContianer">
        <h4 class="BasketTotalTitle">
                 Total Amound : 
        </h4>
        <h4 class="basketTotal">
            $${cartcost}.00
        </h4>        
    ` 


  } 


}

onLoadCartNumbers(); 
displayCart();