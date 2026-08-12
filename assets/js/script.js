const category = $(".categories ul")
const subcategories = $(".subcategories ul")
const children = $(".children ul")

$.get("./assets/data/categories.json", (data) => {
    data.forEach(ele => {
        const li = $("<li>").text(ele.name)
        // console.log(li)
        category.append(li)
        li.mouseenter(() => {
            subcategories.html("")
            children.html("")
            ele.subcategories.forEach(sub => {
                const subLi = $("<li>").text(sub.name)
                subcategories.append(subLi)
                subLi.mouseenter(() => {
                    children.html("")
                    sub.children.forEach(child => {
                        const chLi = $("<li>").text(child)
                        children.append(chLi)
                    })
                })
                // sub.children.forEach(child=>{
                //     const chLi = $("<li>").text(child)
                //     children.append(chLi)
                // })
            })
        })
    });
})


const dropdownContainer = $(".dropdownContainer")
const categoryBtn = $(".catgoryBtn")
categoryBtn.click(() => {
    dropdownContainer.toggleClass("active")
})


const productContainer = $(".productContainer")



$.get("./assets/data/products.json", (data) => {
    data.forEach(product => {

        const productCard = $("<div>")
        productCard.addClass("productCard")

        const productDetails = `
                                <div class="cardTop">
                                    <div class="batch">${product.discount}</div>
                                    <img src="${product.image}" alt="">
                                </div>
                                <div class="delMinute">
                                    <p><i class="fa fa-flash"></i>10 MINS</p>
                                </div>
                                <div class="title">
                                    <small>${product.brand}</small>
                                    <p>${product.productName}</p>
                                </div>
                                <div class="unit">
                                    <select class="selectUnit">
                                        <option value="${product.variant}">${product.variant}</option>
                                    </select>
                                </div>
                                <div class="price">
                                    <p>₹ ${product.price}<small><del>₹ ${product.originalPrice}</del></small></p>
                                </div>
                                <div class="buyAndWishlist">
                                    <i class="fa fa-heart-o"></i>
                                    <button>Add</button>
                                </div>
                                `
        productCard.html(productDetails)
        productContainer.append(productCard)
        
    })
     productContainer.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });
})

const catCardContainer = $(".catCardContainer")
$.get("./assets/data/products.json", (data) => {
    data.forEach(product => {
        if(product.catImg != null){
            console.log(product)
             const catCard = $("<div>")
            catCard.addClass("catCard")

            const catCardHTML = `
                                <div class="box">
                                    <div>
                                        <img src="${product.catImg}" alt=""> <br>
                                        <h4>${product.category}</h4> <br>
                                        <h2>MIN 27% OFF</h2>
                                    </div>
                                </div> 
                                `
            catCard.html(catCardHTML)
            catCardContainer.append(catCard)
        }
       
        
    })
})


const bevCardContainer = $(".bevCardContainer")
$.get("./assets/data/products.json", (data) => {
    data.forEach(product => {
        if(product.bevImg != null){
            console.log(product)
             const bavcard = $("<div>")
            bavcard.addClass("bavcard")

            const bavcardHTML = `
                                <div class="box">
                                    <div>
                                        <img src="${product.bevImg}" alt=""> <br>
                                        <p>${product.category}</p> <br>
                                        <h4>MIN 24% OFF</h4>
                                    </div>
                                </div> 
                                `
            bavcard.html(bavcardHTML)
            bevCardContainer.append(bavcard)
        }
       
        
    })
})



const SnacksCardContainer = $(".SnacksCardContainer")
$.get("./assets/data/products.json", (data) => {
    data.forEach(product => {
        if(product.SnacksImg != null){
            console.log(product)
             const Snackscard = $("<div>")
            Snackscard.addClass("Snackscard")

            const SnackscardHTML = `
                                <div class="box">
                                    <div>
                                        <img src="${product.SnacksImg}" alt=""> <br>
                                        <h4>${product.category}</h4> <br>
                                        <h2>MIN 40% OFF</h2>
                                    </div>
                                </div> 
                                `
            Snackscard.html(SnackscardHTML)
            SnacksCardContainer.append(Snackscard)
        }
       
        
    })
})


const CleaningCardContainer = $(".CleaningCardContainer")
$.get("./assets/data/products.json", (data) => {
    data.forEach(product => {
        if(product.CleaningImg != null){
            console.log(product)
             const Cleaningcard = $("<div>")
            Cleaningcard.addClass("Cleaningcard")

            const CleaningcardHTML = `
                                <div class="box">
                                    <div>
                                        <img src="${product.CleaningImg}" alt=""> <br>
                                        <h4>${product.category}</h4> <br>
                                        <h2>MIN 40% OFF</h2>
                                    </div>
                                </div> 
                                `
            Cleaningcard.html(CleaningcardHTML)
            CleaningCardContainer.append(Cleaningcard)
        }
       
        
    })
})


console.log(productContainer)

// $('.imgSlider').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });
const footerlink = $(".footerlink")
footerlink.mouseenter(function(){
    const i = $(this).children("i")
    if(i.attr("class").includes("fa-angle-right")){
        i.removeClass("fa-angle-right")
        i.addClass("fa-angle-down")
    }
})
footerlink.mouseleave(function(){
    const i = $(this).children("i")
    if(i.attr("class").includes("fa-angle-down")){
        i.addClass("fa-angle-right")
        i.removeClass("fa-angle-down")
    }
})
