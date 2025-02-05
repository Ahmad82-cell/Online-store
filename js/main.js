// open and close cart
let cart=document.querySelector(".cart");
function openCart(){
cart.classList.add('active');
}
function cloisCart(){
cart.classList.remove('active');
}

// add items in crat
let all_prodeut;
let items_in_cart=document.querySelector(".items-in-cart");
let product_cart=[];
function addTocart(id,btn){
   product_cart.push(all_prodeut[id])
   btn.classList.add("active");
   getCartitem();

}
// tiottal the price
let count_item=document.querySelector(".count-item");
let price_cart_head=document.querySelector(".price-cart-head");


let item_incart=document.querySelector(".item-incart");
let price_cart_total=document.querySelector(".price-cart-total");

function getCartitem(){
   let tottal_price=0;
   let items_a="";
   for(let i=0;i<product_cart.length;i++){
      items_a +=`
         <div class="item-cart">
      <img src="${product_cart[i].img}" alt="" />
      <div class="content">
      <h6>${product_cart[i].name}</h6>
      <p class="price-cart">$${product_cart[i].price}</p>
      </div>
      <button onclick="remove_items_in_cart(${i})" class="delete-item">
      <i class="fa-solid fa-trash-can"></i>
      </button>
   </div>
      `
   tottal_price +=product_cart[i].price;
   }
   items_in_cart.innerHTML=items_a;
   price_cart_head.innerHTML="$" +tottal_price;
   count_item.innerHTML=product_cart.length;

   price_cart_total.innerHTML="$" +tottal_price;
   item_incart.innerHTML=`(${product_cart.length} itemin cart)`;
}



function remove_items_in_cart(index){
product_cart.splice(index,1);
getCartitem();

let addToCartbutton=document.querySelectorAll(".fa-cart-plus");
for (let i = 0; i < addToCartbutton.length; i++) {
   addToCartbutton[i].classList.remove('active')
   product_cart.forEach(product =>{
      if(product.id ==i){
         addToCartbutton[i].classList.add("active")
      }
   })
}
}

let Back_to_top=document.querySelector(".Back_to_top");
Back_to_top.addEventListener("click",function(){
window.scrollTo({
   top:0,
   behavior:"smooth",
})

})

// open meun end close meun
let menu=document.querySelector(".menu");
function opan_menu(){
menu.classList.add("active");
}
function close_menu(){
   menu.classList.remove("active");
   }



   // js for two page the click for img
   let big_img=document.querySelector("#big_img");
   function change(img){
      big_img.src=img;
   }
   
// ################

// add dirk mode
// let icon=document.getElementById("icon");
// icon.onclick=function(){
//     document.body.classList.toggle("dark-theme");
//     if(document.body.classList.contains("dark-theme")){
//         icon.src="dark theme icon/sun.png";
//     }
//     else{
//         icon.src="dark theme icon/moon.png";
//     }
// }





