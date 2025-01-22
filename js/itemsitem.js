fetch(`js/items.json`)
.then(Response => Response.json())
.then(data =>{
    
    const productes=document.querySelector(".productes")
    // add product there section 7
    const other_product_swiper=document.querySelector('#other_product_swiper')

    const other_product_swiper2=document.querySelector("#other_product_swiper2")
    all_prodeut=data; 
    data.forEach(product => {
        if(product.old_price){

            const disc=Math.floor((product.old_price - product.price) / product.old_price *100)
            productes.innerHTML +=`
                    <div class="product swiper-slide ">
            <div class="icon">
            <span><i onclick="addTocart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
            <span> <i class="fa-solid fa-heart"></i></span>
            <span><i class="fa-solid fa-share"></i></span>
            </div>
            <span class="sale-product">%${disc}</span>
            <div class="img-product">
            <img src="${product.img}" alt="" />
            <img class="img-hover" src="${product.img_hover}" alt="" />
            </div>
            <h3 class="name-product">
            <a href="http://127.0.0.1:5500/protucts.html"
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
            <p class="old-price"><del>$${product.old_price}</del></p>
            </div>
        </div>

            
            `
        }
        
    });
    data.forEach(product => {
            other_product_swiper.innerHTML +=`
                    <div class="product swiper-slide ">
            <div class="icon">
            <span><i onclick="addTocart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
            <span> <i class="fa-solid fa-heart"></i></span>
            <span><i class="fa-solid fa-share"></i></span>
            </div>
            <div class="img-product">
            <img src="${product.img}" alt="" />
            <img class="img-hover" src="${product.img_hover}" alt="" />
            </div>
            <h3 class="name-product">
            <a href="http://127.0.0.1:5500/protucts.html"
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
            </div>
        </div>

            
            `
        
    });
    
    data.forEach(product => {
        other_product_swiper2.innerHTML +=`
                <div class="product swiper-slide ">
        <div class="icon">
        <span><i onclick="addTocart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
        <span> <i class="fa-solid fa-heart"></i></span>
        <span><i class="fa-solid fa-share"></i></span>
        </div>
        <div class="img-product">
        <img src="${product.img}" alt="" />
        <img class="img-hover" src="${product.img_hover}" alt="" />
        </div>
        <h3 class="name-product">
        <a href="http://127.0.0.1:5500/protucts.html"
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
        </div>
    </div>

        
        `
    
});

})