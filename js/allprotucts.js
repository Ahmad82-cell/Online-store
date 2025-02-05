fetch(`js/items.json`)
.then(Response => Response.json())
.then(data =>{
    
    const protuct_div=document.getElementById("protuct_div");
    all_prodeut=data; 
    data.forEach(product => {
        const product_old_price=product.old_price ? `<p class="old-price"><del>$${product.old_price}</del></p>`:"";

            const disc=product.old_price ?`<span class="sale-product">%${Math.floor((product.old_price - product.price) / product.old_price *100)}</span>`:""
            protuct_div.innerHTML +=`
                    <div class="product swiper-slide ">
            <div class="icon">
            <span><i onclick="addTocart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
            <span> <i class="fa-solid fa-heart"></i></span>
            <span><i class="fa-solid fa-share"></i></span>
            </div>
            ${disc}
            <div class="img-product">
            <img src="${product.img}" alt="" />
            <img class="img-hover" src="${product.img_hover}" alt="" />
            </div>
            <h3 class="name-product">
            <a href="protucts.html"
                >${product.name}</a
            >
            </h3>
            <div class="stars">
            <i class="fa-solid fa-star" style="color: #ffd43b"></i>
            <i class="fa-solid fa-star" style="color: #ffd43b"></i>
            <i class="fa-solid fa-star" style="color: #ffd43b"></i>
            <i class="fa-solid fa-star" style="color: #ffd43b"></i>
            <i class="fa-solid fa-star" style="color: #ffd43b"></i>
            </div>
            <div class="price">
            <p><span>$${product.price}</span></p>
            ${product_old_price}
            </div>
        </div>

            
            `
        
        
    });


})


// filter 
let fliter=document.querySelector(".fliter");
function cloes_fliter(){
    fliter.classList.toggle("active");

}