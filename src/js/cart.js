

let basket = JSON.parse(localStorage.getItem("data")) || [];
let cartBox = document.getElementById("prod");
let label = document.getElementById("label")

// let cart = document.getElementById("prod");

let generateItems = ()=>{
  if(basket.length !== 0){
    return(cartBox.innerHTML= basket.map((x)=>{
      let {id, item} = x;
     
      let search = allItemsData.find((y)=>y.id ===id) || [];
      let {img, alt, name, price} = search;
      return `
     <div class="shop" id="shop">
    <img src="${img}" alt="${alt}" class="img-fluid">
      <div class="cart-des">
       <div class="prd-title">${name}</div>
       <div class="prd-price" id="prd-price">
        $ ${Math.round(price * item * 100) / 100 }
       </div>
       <div class="prod-btn">
        <i onclick="decrement('${id}')" class="bi bi-dash"></i>
         <div id="${id}" class="prod-quantity">${item}</div>
        <i onclick="increment('${id}')" class="bi bi-plus"></i>
       </div>
      </div>
      <i  onclick="removeItem('${id}')" class="bi bi-trash3-fill remove-item"></i>
      </div>
        
      `;
    }).join("")); 
    
  }else{ 
    cartBox.innerHTML= `
    <div class="cart-note">
     <h4>cart is empty</h4>
     <a href="products.html">
      <button type="submit" class="home-page">back to items</button>
     </a> 
    </div>
    `;
    label.innerHTML=`
   
    `;
  }
}; generateItems();

let cumulative = ()=>{
  let counterValue = basket.map((x)=> x.item).reduce((x,y)=> x + y, 0);
  let  cartInd= document.getElementById("quantity");
  cartInd.innerHTML = counterValue > 99? "99+" : counterValue;
 
};cumulative();

let addToCart = (id) =>{
     
  let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);
    if (search === undefined) {
      basket.push({
        id: selectedItem,
        item: 1,
      });
    }
    else if(search === 0) {
      search.item +=1;
      
    }else{
      alert("Item Already Added")
      return
    }
    generateItems();
    totalAmount();
    cumulative();  
  
  
  localStorage.setItem("data", JSON.stringify(basket));
};
let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);
  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  generateItems();
  update(selectedItem);
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);
  if (search === undefined) return; 
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem);
  basket = basket.filter((x)=>x.item!==0);
   generateItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id)=>{
  
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  cumulative();
  totalAmount();

};


let removeItem =(id)=>{
  let selectedItem =id;
  basket=basket.filter((x)=>x.id !==selectedItem);
  
  generateItems();

  cumulative();
  
  localStorage.setItem("data", JSON.stringify(basket));
  totalAmount();
};

let totalAmount = ()=>{
    if(basket.length !==0){
        let amount = basket.map((x)=>{
          let {item,id} =x;
          let search = allItemsData.find((y)=>y.id===id) || [];
          return search.price * item;
        }).reduce((x,y)=>x+y,0);
        label.innerHTML = `
        <div class="total">
         <div class="total-title">total: </div>
         <div class="total-price" id="total">$ 0</div>
        </div>
        <div class="btns">
         <button type="submit" class="btn" onclick="checkOut()" id="checkout">check out</button>
         <button type="submit" class="btn" onclick="clearCart()" id="clear-cart">clear cart</button> 
        </div>
        `

        let total = Math.round(amount * 100) / 100;
        document.getElementById("total").innerText= "$ " + total;
        
        
    } 
    else{
      let total = document.getElementById("total");total.innerHTML= 0;
    }
}; 
totalAmount();



let clearCart = ()=>{
  
  basket=[];
  generateItems();
  cumulative();
  localStorage.setItem("data", JSON.stringify(basket));
};
let checkOut = ()=>{
  alert("Your Order Has Been Placed")
  basket=[];
  generateItems();
  cumulative();
  localStorage.setItem("data", JSON.stringify(basket));
};
















