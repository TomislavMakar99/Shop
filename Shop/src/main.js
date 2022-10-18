
let shop = document.getElementById("shop")
let basket = JSON.parse(localStorage.getItem("data")) || []
let regLog = document.getElementById("regLog")

    //Checking if user is registered --- displaying diferent navbars
 let  generateNavbar = () =>{
    if(window.localStorage.getItem("discount")==="false"){
        regLog.innerHTML = `      
        <a href="registration.html">
            <div class="registration"></div>
            <h2>Registration</h2>
        </a>
        <a href="login.html">
            <div class="registration"></div>
            <h2>Login</h2>
        </a>
        `}else{
        regLog.innerHTML =`  
        <a href="index.html" id="logOut">
        <h2>Log-out</h2>  
        </a>`}}
    generateNavbar();

// function for generating and displaying items
let generateShop =(h)=>{
    return (shop.innerHTML = h.map((x) => {
        let { id, name, price, desc, img } = x;
        // console.log(x);
        let search = basket.find((y) => y.id === id) || [];    
        return `
        <div id=product-id-${id} class="item">
                <img width="200"  src=${img} alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>$ ${price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">${
                                search.item === undefined ? 0 : search.item
        }</div>
                            <i onclick="increment(${id})"class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
 
            </div>
        `;
      })
      .join(""));
}
generateShop(shopItemsData);
 
 
//FILTER
    let searchBar = document.getElementById("searchBar");
    searchBar.addEventListener("keyup",(e)=>{
 
    const searchString = e.target.value.toLowerCase();
    const filteredData = shopItemsData.filter(item =>{
        
    return  item.name.toLowerCase().includes(searchString)
    })
     generateShop(filteredData);
})

//Filter by range
  let range1 = document.getElementById("range1")
  let range2 = document.getElementById("range2")
  let range3 = document.getElementById("range3")
  let range4 = document.getElementById("range4")

range1.addEventListener("click", function(){
    fill(0,20);
})
range2.addEventListener("click", function(){
    fill(20,100);
})
range3.addEventListener("click", function(){
    fill(100,200);
})
range4.addEventListener("click", function(){
    fill(200, Number.MAX_SAFE_INTEGER)
})
 function fill(pricee, price2){
 
    const filteredData = shopItemsData.filter(item =>{ 
        
        return  (item.price >= pricee && item.price <= price2)
    })
    generateShop(filteredData)
 }
 

// Reset search = ""
function clearData() {
    document.getElementById('searchBar').value = "";
    generateShop(shopItemsData);
    
    }
//Sorting from lower price to higher
    let lower = document.getElementById("lower")
    lower.addEventListener("click", function(){
        let dataF = shopItemsData ;
        const r = [...dataF].sort((a,b)=>a.price-b.price)
        // dataF.sort(function(a,b){
        //     if( a.price < b.price){
        //         return -1;
        //         }
        //         if(a.price > b.price){
        //         return 1;
        //         }
        //         return 0; 
        // })
        generateShop(r)
        
    });
    
    //Sorting from higher price to lower
    let higher = document.getElementById("higher")
    higher.addEventListener("click", function(){
        let dataF = shopItemsData ;
        const r = [...dataF].sort((a,b)=>b.price-a.price)
        generateShop(r) 
    });
    // Sort non
    let normal = document.getElementById("normal")
    normal.addEventListener("click", function(){
        generateShop(shopItemsData);
    })

    // incrementing items
let increment = (id) =>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id)
 
    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        })
    }else{
        search.item +=1 ;
    }
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket) )
};
 
    // decrement items
let decrement = (id) =>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id)
    if(search === undefined) return
    else if(search.item === 0) return;
    else{
        search.item -=1 ;
    }

    update(selectedItem.id);
    basket = basket.filter((x)=>x.item !==0)
    localStorage.setItem("data", JSON.stringify(basket));
}
 
    // function for finding all the items 
 let update = (id) =>{
    let search = basket.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item;
    calculation();
 }
    // Suming up all items and displaying it on icon
let calculation= () =>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0); 
}
calculation()

let logOut = document.getElementById("logOut") 
     logOut.addEventListener("click", function(){
        localStorage.setItem("discount", false )
        generateNavbar();
    })
