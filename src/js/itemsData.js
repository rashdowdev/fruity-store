

let basket = JSON.parse(localStorage.getItem("data")) || [];
let cartBox = document.getElementById("prod");
let label = document.getElementById("label")
// let cart = document.getElementById("prod");
let items = [
  {
      id: "ft-1",
      name: "apples",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "25.99",
      img: ("./src/images/apples.jpeg"),
      alt:"apple"
  },
  {
      id: "ft-2",
      name: "grover",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "30.99",
      img:("./src/images/grover.jpg"),
      alt:"grover",
  },
  {
      id: "ft-3",
      name: "cherry",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star-fill",
      star5: "bi bi-star",
      price: "35.99",
      img: ("./src/images/cherry.jpg"),
      alt: "cherry",
  },
  {
      id: "ft-4", 
      name: "pawpaw",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "40.99",
      img: ("./src/images/pawpaw.jpg"),
      alt:"pawpaw",
  },
  {
      id: "ft-5",
      name: "apple",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "25.99",
      img: ("./src/images/apple.jpeg"),
      alt:"apple",
  },
  {
      id: "ft-6",
      name: "pear",
      star1: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "30.99",
      img: ("./src/images/pear.jpg"),
      alt:"pear",
  },
  {
      id: "ft-7",
      name: "peach",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star-fill",
      star5: "bi bi-star",
      price: "35.99",
      img: ("./src/images/peach.jpg"),
      alt: "peach",
  },
  {
      id: "ft-8", 
      name: "strawberry",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "40.99",
      img: ("./src/images/berry2.jpg"),
      alt:"strawberry",
  },
  {
      id: "ft-9",
      name: "grapes",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "25.99",
      img: ("./src/images/grapes.jpeg"),
      alt:"grapes",
  },
  {
      id: "ft-10",
      name: "melon",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "30.99",
      img: ("./src/images//melon.jpeg"),
      alt:"melon",
  },
  {
      id: "ft-11",
      name: "lemon",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star-fill",
      star5: "bi bi-star",
      price: "35.99",
      img: ("./src/images/lemon.jpg"),
      alt: "lemon",
  },
  {
      id: "ft-12", 
      name: "mangoes",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "40.99",
      img: ("./src/images/mangoes2.webp"),
      alt:"mangoes",
  },
  {
      id: "ft-13",
      name: "pomegranate",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "25.99",
      img: ("./src/images/pom.jpg"),
      alt:"pomegranate",
  },
  {
      id: "ft-14",
      name: "banana",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "30.99",
      img: ("./src/images//bananas.jpeg"),
      alt:"banana",
  },
  {
      id: "ft-15",
      name: "pine",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star-fill",
      star5: "bi bi-star",
      price: "35.99",
      img: ("./src/images/pine.jpeg"),
      alt: "pine",
  },
  {
      id: "ft-16", 
      name: "oranges",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "40.99",
      img: ("./src/images/oranges2.jpeg"),
      alt:"oranges",
  },
  {
      id: "vg-1",
      name: "cucumber",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "25.99",
      img: ("./src/images/bam.jpeg"),
      alt:"cucumber"
  },
  {
      id: "vg-2",
      name: "ginger",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "30.99",
      img: ("./src/images/ginger.jpeg"),
      alt:"ginger",
  },
  {
      id: "vg-3",
      name: "chilly",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star-fill",
      star5: "bi bi-star",
      price: "35.99",
      img: ("./src/images/illy.jpeg"),
      alt: "chilly",
  },
  {
      id: "vg-4", 
      name: "onions",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "40.99",
      img: ("./src/images/onion.webp"),
      alt:"onions",
  },
  {
      id: "vg-5",
      name: "mushroom",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "25.99",
      img: ("./src/images/room.jpeg"),
      alt:"mushroom",
  },
  {
      id: "vg-6",
      name: "carrot",
      star1: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "30.99",
      img: ("./images/rot.jpeg"),
      alt:"carrot",
  },
  {
      id: "vg-7",
      name: "chilly",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star-fill",
      star5: "bi bi-star",
      price: "35.99",
      img: ("./src/images/ily.jpg"),
      alt: "chilly",
  },
  {
      id: "vg-8", 
      name: "tomatoes",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "40.99",
      img: ("./src/images/mato.jpg"),
      alt:"tomatoes",
  },
  {
      id: "vg-9",
      name: "green beans",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "25.99",
      img: ("./src/images/g-beans.jpg"),
      alt:"green beans",
  },
  {
      id: "vg-10",
      name: "pumpkin",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "30.99",
      img: ("./src/images/poku.jpg"),
      alt:"pumpkin",
  },
  {
      id: "vg-11",
      name: "corn",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star-fill",
      star5: "bi bi-star",
      price: "35.99",
      img: ("./src/images/corn.jpg"),
      alt: "corn",
  },
  {
      id: "vg-12", 
      name: "egg plant",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "40.99",
      img: ("./src/images/egg-plant.jpg"),
      alt:"egg plant",
  },
  {
      id: "vg-13",
      name: "broccoli",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "25.99",
      img: ("./src/images/broccoli.jpg"),
      alt:"broccoli",
  },
  {
      id: "vg-14",
      name: "paprika",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "30.99",
      img: ("./src/images/paprika.jpg"),
      alt:"paprika",
  },
  {
      id: "vg-15",
      name: "lettuce",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star-fill",
      star5: "bi bi-star",
      price: "35.99",
      img: ("./src/images/lettuce.jpg"),
      alt: "lettuce",
  },
  {
      id: "vg-16", 
      name: "lemon",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "40.99",
      img: ("./src/images/lemon.jpg"),
      alt:"lemon",
  },
  {
      id: "mt-1",
      name: "lobster",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "25.99",
      img: ("./src/images/lobster.jpg"),
      alt:"lobster"
  },
  {
      id: "mt-2",
      name: "pork",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "30.99",
      img: ("./src/images/pork.jpg"),
      alt:"pork",
  },
  {
      id: "mt-3",
      name: "catfish",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star-fill",
      star5: "bi bi-star",
      price: "35.99",
      img: ("./src/images/catfish.jpg"),
      alt: "catfish",
  },
  {
      id: "mt-4", 
      name: "chicken",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "40.99",
      img: ("./src/images/chicken.jpg"),
      alt:"chicken",
  },
  {
      id: "mt-5",
      name: "beef",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "25.99",
      img: ("./src/images/beef.jpeg"),
      alt:"beef",
  },
  {
      id: "mt-6",
      name: "mutton",
      star1: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "30.99",
      img: ("./src/images/mutton.jpg"),
      alt:"mutton",
  },
  {
      id: "mt-7",
      name: "shrimps",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star-fill",
      star5: "bi bi-star",
      price: "35.99",
      img: ("./src/images/shrimps.jpg"),
      alt: "shrimps",
  },
  {
      id: "mt-8", 
      name: "turkey",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "40.99",
      img: ("./src/images/turkey.jpg"),
      alt:"turkey",
  },
  {
      id: "mt-9",
      name: "oyster",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "25.99",
      img: ("./src/images/oyster.jpg"),
      alt:"oyster",
  },
  {
      id: "mt-10",
      name: "mackerel",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "30.99",
      img: ("./src/images/mackerel.jpg"),
      alt:"mackerel",
  },
  {
      id: "mt-11",
      name: "snail",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star-fill",
      star5: "bi bi-star",
      price: "35.99",
      img: ("./src/images/snail.jpg"),
      alt: "snail",
  },
  {
      id: "mt-12", 
      name: "crabs",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "40.99",
      img: ("./src/images/crabs.jpg"),
      alt:"crabs",
  },
  {
      id: "mt-13",
      name: "star fish",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "25.99",
      img: ("./src/images/star-fish.jpg"),
      alt:"star fish",
  },
  {
      id: "mt-14",
      name: "lobster",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "30.99",
      img: ("./src/images/lobster.jpg"),
      alt:"lobster",
  },
  {
      id: "mt-15",
      name: "ray",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star-fill",
      star5: "bi bi-star",
      price: "35.99",
      img: ("./src/images/ray.jpg"),
      alt: "ray",
  },
  {
      id: "mt-16", 
      name: "clown",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "40.99",
      img: ("./src/images/clown.jpg"),
      alt:"clown",
  },
  {
      id: "dy-1",
      name: "milk",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "25.99",
      img: ("./src/images/milk.webp"),
      alt:"milk"
  },
  {
      id: "dy-2",
      name: "cheese",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "30.99",
      img: ("./src/images/cheese.webp"),
      alt:"cheese",
  },
  {
      id: "dy-3",
      name: "curd",
      price: "35.99",
      img: ("./src/images/curd.jpg"),
      alt: "curd",
  },
  {
    id: "dy-4",
    name: "kefir",
    price: "45.99",
    img: ("./src/images/kefir.jpg"),
    alt: "kefir",
  },
  {
      id: "dy-5",
      name: "yougurt",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "25.99",
      img: ("./src/images/yug.jpg"),
      alt:"yougurt",
  },
  {
      id: "dy-6",
      name: "ghee",
      star1: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "30.99",
      img: ("./src/images/ghee.jpg"),
      alt:"ghee",
  },
  {
      id: "dy-7",
      name: "magarine",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star-fill",
      star5: "bi bi-star",
      price: "35.99",
      img: ("./src/images/mag.jpg"),
      alt: "magarine",
  },
  {
      id: "dy-8", 
      name: "eggs",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "40.99",
      img: ("./src/images/eggs.jpeg"),
      alt:"eggs",
  },
  {
      id: "dy-9",
      name: "sour milk",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "25.99",
      img: ("./src/images/sour.jpeg"),
      alt:"sour milk",
  },
  {
      id: "dy-10",
      name: "butter",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "30.99",
      img: ("./src/images/butter.jpg"),
      alt:"butter",
  },
  {
      id: "dy-11",
      name: "feta",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star-fill",
      star5: "bi bi-star",
      price: "35.99",
      img: ("./src/images/feta.jpg"),
      alt: "feta",
  },
  {
      id: "dy-12", 
      name: "pudding",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "40.99",
      img: ("./src/images/pudding.jpg"),
      alt:"pudding",
  },
  {
      id: "dy-13",
      name: "condensed milk",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "25.99",
      img: ("./src/images/condensed.jpg"),
      alt:"condensed milk",
  },
  {
      id: "dy-14",
      name: "quark",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "30.99",
      img: ("./src/images/quark.jpg"),
      alt:"quark",
  },
  {
      id: "dy-15",
      name: "sherbet",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star-fill",
      star5: "bi bi-star",
      price: "35.99",
      img: ("./src/images/sherbet.jpg"),
      alt: "sherbet",
  },
  {
      id: "dy-16", 
      name: "powdered milk",
      star1: "bi bi-star-fill",
      star2: "bi bi-star-fill",
      star3: "bi bi-star-fill",
      star4: "bi bi-star",
      star5: "bi bi-star",
      price: "40.99",
      img: ("./src/images/kefir.jpg"),
      alt:"powdered milk",
  }
  
  
];

let generateItems = ()=>{
  if(basket.length !== 0){
    return(cartBox.innerHTML= basket.map((x)=>{
      let {id, item} = x;
     
      let search = items.find((y)=>y.id ===id) || [];
      let {img, alt, name, price} = search;
      return `
     <div class="shop" id="shop">
    <img src="${img}" alt="${alt}" class="img-fluid">
      <div class="cart-des">
       <div class="prd-title">${name}</div>
       <div class="prd-price" id="prd-price">
        N ${Math.round(price * item * 100) / 100 }
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
    <div>
    <h4>this is empty</h4>
    <a href="index.html">
      <button class="homePage">back to home</button>
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
          let search = items.find((y)=>y.id===id) || [];
          return search.price * item;
        }).reduce((x,y)=>x+y,0);
        label.innerHTML = `
        <div class="total">
         <div class="total-title">total: N</div>
         <div class="total-price" id="total">0</div>
        </div>
        <button type="submit" onclick="checkOut()" id="checkout">check out</button>
        <button type="submit" onclick="clearCart()" id="clear-cart">clear cart</button> 
        `
        let total = document.getElementById("total");total.innerHTML= Math.round(amount * 100) / 100;
        
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
}
let checkOut = ()=>{
  alert("Your Order Has Been Placed")
  basket=[];
  generateItems();
  cumulative();
  localStorage.setItem("data", JSON.stringify(basket));
}
















