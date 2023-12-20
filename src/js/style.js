
/* FRUITS */

let fruitItems = document.getElementById("fruit-slide1");

let fruitItemsData = [{
    id: "ft-1",
    name: "apples",
    star1: "bi bi-star-fill",
    star2: "bi bi-star-fill",
    star3: "bi bi-star-fill",
    star4: "bi bi-star",
    star5: "bi bi-star",
    price: "25.99",
    img: ("../src/images/apples.jpeg"),
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
    img: ("../src/images/grover.jpg"),
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
    img: ("../src/images/cherry.jpg"),
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
    img: ("../src/images/pawpaw.jpg"),
    alt:"pawpaw",
}];

let generateFruitItems = () => {
    return (fruitItems.innerHTML = fruitItemsData.map((x) => {
        let { id, name, star1, star2, star3, star4, star5, price, img, alt } = x;

        return `
        <div class="col-6 col-md-3 col-lg-2">
        <div class="item my-2">
          <div id = product-id-${id} class="item-body text-center py-2">
            <div class="item-img">
                <img src= ${img} alt= ${alt} class="image-fluid">
            </div>
            <div class="item-des">
                <h3>${name}</h3>
                <div class="stars">
                    <i class= "${star1}"></i>
                    <i class= "${star2}"></i>
                    <i class= "${star3}"></i>
                    <i class= "${star4}"></i>
                    <i class= "${star5}"></i>
                </div>
                <p>$ ${price}</p>
                <button type="submit" class="btn shop" >add to cart</button>
            </div>
          </div>
        </div>
      </div>
      
        `
     }).join(""));
};generateFruitItems();

let fruitItems2 = document.getElementById("fruit-slide2");
let fruitItemsData2 = [{
    id: "ft-5",
    name: "apple",
    star1: "bi bi-star-fill",
    star2: "bi bi-star-fill",
    star3: "bi bi-star-fill",
    star4: "bi bi-star",
    star5: "bi bi-star",
    price: "25.99",
    img: ("../src/images/apple.jpeg"),
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
    img: ("../src/images/pear.jpg"),
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
    img: ("../src/images/peach.jpg"),
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
    img: ("../src/images/berry2.jpg"),
    alt:"strawberry",
}];

let generateFruitItems2 = () => {
    return (fruitItems2.innerHTML = fruitItemsData2.map((x) => {
        let { id, name, star1, star2, star3, star4, star5, price, img, alt } = x;

        return `
        <div class="col-6 col-md-3 col-lg-2">
        <div class="item my-2">
          <div id = product-id-${id} class="item-body text-center py-2">
            <div class="item-img">
                <img src= ${img} alt= ${alt} class="image-fluid">
            </div>
            <div class="item-des">
                <h3>${name}</h3>
                <div class="stars">
                    <i class= "${star1}"></i>
                    <i class= "${star2}"></i>
                    <i class= "${star3}"></i>
                    <i class= "${star4}"></i>
                    <i class= "${star5}"></i>
                </div>
                <p>$ ${price}</p>
                <button type="submit" class="btn shop" >add to cart</button>
            </div>
          </div>
        </div>
      </div>
      
        `
     }).join(""));
};generateFruitItems2();

let fruitItems3 = document.getElementById("fruit-slide3");
let fruitItemsData3 = [{
    id: "ft-9",
    name: "grapes",
    star1: "bi bi-star-fill",
    star2: "bi bi-star-fill",
    star3: "bi bi-star-fill",
    star4: "bi bi-star",
    star5: "bi bi-star",
    price: "25.99",
    img: ("../src/images/grapes.jpeg"),
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
    img: ("../src/images//melon.jpeg"),
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
    img: ("../src/images/lemon.jpg"),
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
    img: ("../src/images/mangoes2.webp"),
    alt:"mangoes",
}];
let generateFruitItems3 = () => {
    return (fruitItems3.innerHTML = fruitItemsData3.map((x) => {
        let { id, name, star1, star2, star3, star4, star5, price, img, alt } = x;

        return `
        <div class="col-6 col-md-3 col-lg-2">
        <div class="item my-2">
          <div id = product-id-${id} class="item-body text-center py-2">
            <div class="item-img">
                <img src= ${img} alt= ${alt} class="image-fluid">
            </div>
            <div class="item-des">
                <h3>${name}</h3>
                <div class="stars">
                    <i class= "${star1}"></i>
                    <i class= "${star2}"></i>
                    <i class= "${star3}"></i>
                    <i class= "${star4}"></i>
                    <i class= "${star5}"></i>
                </div>
                <p>$ ${price}</p>
                <button type="submit" class="btn shop" >add to cart</button>
            </div>
          </div>
        </div>
      </div>
      
        `
     }).join(""));
};generateFruitItems3();

let fruitItems4 = document.getElementById("fruit-slide4");
let fruitItemsData4 = [{
    id: "ft-13",
    name: "pomegranate",
    star1: "bi bi-star-fill",
    star2: "bi bi-star-fill",
    star3: "bi bi-star-fill",
    star4: "bi bi-star",
    star5: "bi bi-star",
    price: "25.99",
    img: ("../src/images/pom.jpg"),
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
    img: ("../src/images//bananas.jpeg"),
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
    img: ("../src/images/pine.jpeg"),
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
    img: ("../src/images/oranges2.jpeg"),
    alt:"oranges",
}];
let generateFruitItems4 = () => {
    return (fruitItems4.innerHTML = fruitItemsData4.map((x) => {
        let { id, name, star1, star2, star3, star4, star5, price, img, alt } = x;

        return `
        <div class="col-6 col-md-3 col-lg-2">
        <div class="item my-2">
          <div id = product-id-${id} class="item-body text-center py-2">
            <div class="item-img">
                <img src= ${img} alt= ${alt} class="image-fluid">
            </div>
            <div class="item-des">
                <h3>${name}</h3>
                <div class="stars">
                    <i class= "${star1}"></i>
                    <i class= "${star2}"></i>
                    <i class= "${star3}"></i>
                    <i class= "${star4}"></i>
                    <i class= "${star5}"></i>
                </div>
                <p>$ ${price}</p>
                <button type="submit" class="btn shop" >add to cart</button>
            </div>
          </div>
        </div>
      </div>
      
        `
     }).join(""));
};generateFruitItems4();



/* FRUITS SLIDER STARTS HERE */

const slides1 = document.querySelectorAll(".fruit-slide");
const nextBtn1 = document.querySelector("#fruit-next-btn");
const prevBtn1 = document.querySelector("#fruit-prev-btn");
const slideInd1 = document.querySelector("#fruit-indicator-box");
let index1 = 0;


//slide indicator uptdate

function updateIndicator1(){
    slideInd1.querySelectorAll('.indicator').forEach((item, i) => {
        item.classList.toggle("active", i === index1);
    });
}

//show slide

function showSlide1(i) {
    slides1.forEach(slide => slide.classList.remove("active"));
    slides1[i].classList.add("active");
    index1 = i;
    updateIndicator1();
}

//previous button

prevBtn1.addEventListener("click", function() {
    showSlide1(index1 === 0 ? slides1.length - 1 : index1 - 1);
    updateIndicator1();
});

//next button

nextBtn1.addEventListener("click", function() {
    showSlide1(index1 === slides1.length - 1 ? 0 : index1 + 1);
    updateIndicator1();
});

//indicate slide

function indicateSlide1(element){
    showSlide1(parseInt(element.id));
}

//create indicators

function createIndicators1 (){
    for(let i=0; i< slides1.length; i++){
        const div = document.createElement("div");
        // div.className="indicator";
        div.innerHTML= i+1;
        div.id = i;
        div.className = i === 0 ? "indicator active" : "indicator";
        div.addEventListener("click", function() {
            indicateSlide1(this);
        });
        slideInd1.appendChild(div);
    } 
} createIndicators1();

// /* FRUITS SLIDER ENDS HERE */

/* VEG */

let vegItems = document.getElementById("veg-slide1");
let vegItemsData = [{
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
}];

let generateVegItems = () => {
    return (vegItems.innerHTML = vegItemsData.map((x) => {
        let { id, name, star1, star2, star3, star4, star5, price, img, alt } = x;

        return `
        <div class="col-6 col-md-3 col-lg-2">
        <div class="item my-2">
          <div id = product-id-${id} class="item-body text-center py-2">
            <div class="item-img">
                <img src= ${img} alt= ${alt} class="image-fluid">
            </div>
            <div class="item-des">
                <h3>${name}</h3>
                <div class="stars">
                    <i class= "${star1}"></i>
                    <i class= "${star2}"></i>
                    <i class= "${star3}"></i>
                    <i class= "${star4}"></i>
                    <i class= "${star5}"></i>
                </div>
                <p>$ ${price}</p>
                <button type="submit" class="btn shop" >add to cart</button>
            </div>
          </div>
        </div>
      </div>
      
        `
}).join(""));
};generateVegItems();

let vegItems2 = document.getElementById("veg-slide2");
let vegItemsData2 = [{
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
    img: ("./src/images/rot.jpeg"),
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
}];

let generateVegItems2 = () => {
    return (vegItems2.innerHTML = vegItemsData2.map((x) => {
        let { id, name, star1, star2, star3, star4, star5, price, img, alt } = x;

        return `
        <div class="col-6 col-md-3 col-lg-2">
        <div class="item my-2">
          <div id = product-id-${id} class="item-body text-center py-2">
            <div class="item-img">
                <img src= ${img} alt= ${alt} class="image-fluid">
            </div>
            <div class="item-des">
                <h3>${name}</h3>
                <div class="stars">
                    <i class= "${star1}"></i>
                    <i class= "${star2}"></i>
                    <i class= "${star3}"></i>
                    <i class= "${star4}"></i>
                    <i class= "${star5}"></i>
                </div>
                <p>$ ${price}</p>
                <button type="submit" class="btn shop" >add to cart</button>
            </div>
          </div>
        </div>
      </div>
      
        `
}).join(""));
};generateVegItems2();

let vegItems3 = document.getElementById("veg-slide3");
let vegItemsData3 = [{
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
}];
let generateVegItems3 = () => {
    return (vegItems3.innerHTML = vegItemsData3.map((x) => {
        let { id, name, star1, star2, star3, star4, star5, price, img, alt } = x;

        return `
        <div class="col-6 col-md-3 col-lg-2">
        <div class="item my-2">
          <div id = product-id-${id} class="item-body text-center py-2">
            <div class="item-img">
                <img src= ${img} alt= ${alt} class="image-fluid">
            </div>
            <div class="item-des">
                <h3>${name}</h3>
                <div class="stars">
                    <i class= "${star1}"></i>
                    <i class= "${star2}"></i>
                    <i class= "${star3}"></i>
                    <i class= "${star4}"></i>
                    <i class= "${star5}"></i>
                </div>
                <p>$ ${price}</p>
                <button type="submit" class="btn shop" >add to cart</button>
            </div>
          </div>
        </div>
      </div>
      
        `
}).join(""));
};generateVegItems3();

let vegItems4 = document.getElementById("veg-slide4");
let vegItemsData4 = [{
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
}];
let generateVegItems4 = () => {
    return (vegItems4.innerHTML = vegItemsData4.map((x) => {
        let { id, name, star1, star2, star3, star4, star5, price, img, alt } = x;

        return `
        <div class="col-6 col-md-3 col-lg-2">
        <div class="item my-2">
          <div id = product-id-${id} class="item-body text-center py-2">
            <div class="item-img">
                <img src= ${img} alt= ${alt} class="image-fluid">
            </div>
            <div class="item-des">
                <h3>${name}</h3>
                <div class="stars">
                    <i class= "${star1}"></i>
                    <i class= "${star2}"></i>
                    <i class= "${star3}"></i>
                    <i class= "${star4}"></i>
                    <i class= "${star5}"></i>
                </div>
                <p>$ ${price}</p>
                <button type="submit" class="btn shop" >add to cart</button>
            </div>
          </div>
        </div>
      </div>
      
        `
}).join(""));
};generateVegItems4();

/* VEG SLIDER STARTS HERE */

const slides2 = document.querySelectorAll(".veg-slide");
const nextBtn2 = document.querySelector("#veg-next-btn");
const prevBtn2 = document.querySelector("#veg-prev-btn");
const slideInd2 = document.querySelector("#veg-indicator-box");
let index2 = 0;


//slide indicator uptdate

function updateIndicator2(){
    slideInd2.querySelectorAll('.indicator').forEach((item, i) => {
        item.classList.toggle("active", i === index2);
    });
}

//show slide

function showSlide2(i) {
    slides2.forEach(slide => slide.classList.remove("active"));
    slides2[i].classList.add("active");
    index2 = i;
    updateIndicator2();
}

//previous button

prevBtn2.addEventListener("click", function() {
    showSlide2(index2 === 0 ? slides2.length - 1 : index2 - 1);
    updateIndicator2();
});

//next button

nextBtn2.addEventListener("click", function() {
    showSlide2(index2 === slides2.length - 1 ? 0 : index2 + 1);
    updateIndicator2();
});

//indicate slide

function indicateSlide2(element){
    showSlide2(parseInt(element.id));
}

//create indicators

function createIndicators2 (){
    for(let i=0; i< slides2.length; i++){
        const div = document.createElement("div");
        // div.className="indicator";
        div.innerHTML= i+1;
        div.id = i;
        div.className = i === 0 ? "indicator active" : "indicator";
        div.addEventListener("click", function() {
            indicateSlide2(this);
        });
        slideInd2.appendChild(div);
    } 
} createIndicators2();

/* MEAT */

let meatItems = document.getElementById("meat-slide1");
let meatItemsData = [{
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
}];

let generateMeatItems = () => {
    return (meatItems.innerHTML = meatItemsData.map((x) => {
        let { id, name, star1, star2, star3, star4, star5, price, img, alt } = x;

        return `
        <div class="col-6 col-md-3 col-lg-2">
        <div class="item my-2">
          <div id = product-id-${id} class="item-body text-center py-2">
            <div class="item-img">
                <img src= ${img} alt= ${alt} class="image-fluid">
            </div>
            <div class="item-des">
                <h3>${name}</h3>
                <div class="stars">
                    <i class= "${star1}"></i>
                    <i class= "${star2}"></i>
                    <i class= "${star3}"></i>
                    <i class= "${star4}"></i>
                    <i class= "${star5}"></i>
                </div>
                <p>$ ${price}</p>
                <button type="submit" class="btn shop" >add to cart</button>
            </div>
          </div>
        </div>
      </div>
      
        `
}).join(""));
};generateMeatItems();

let meatItems2 = document.getElementById("meat-slide2");
let meatItemsData2 = [{
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
}];

let generateMeatItems2 = () => {
    return (meatItems2.innerHTML = meatItemsData2.map((x) => {
        let { id, name, star1, star2, star3, star4, star5, price, img, alt } = x;

        return `
        <div class="col-6 col-md-3 col-lg-2">
        <div class="item my-2">
          <div id = product-id-${id} class="item-body text-center py-2">
            <div class="item-img">
                <img src= ${img} alt= ${alt} class="image-fluid">
            </div>
            <div class="item-des">
                <h3>${name}</h3>
                <div class="stars">
                    <i class= "${star1}"></i>
                    <i class= "${star2}"></i>
                    <i class= "${star3}"></i>
                    <i class= "${star4}"></i>
                    <i class= "${star5}"></i>
                </div>
                <p>$ ${price}</p>
                <button type="submit" class="btn shop" >add to cart</button>
            </div>
          </div>
        </div>
      </div>
      
        `
}).join(""));
};generateMeatItems2();

let meatItems3 = document.getElementById("meat-slide3");
let meatItemsData3 = [{
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
}];
let generateMeatItems3 = () => {
    return (meatItems3.innerHTML = meatItemsData3.map((x) => {
        let { id, name, star1, star2, star3, star4, star5, price, img, alt } = x;

        return `
        <div class="col-6 col-md-3 col-lg-2">
        <div class="item my-2">
          <div id = product-id-${id} class="item-body text-center py-2">
            <div class="item-img">
                <img src= ${img} alt= ${alt} class="image-fluid">
            </div>
            <div class="item-des">
                <h3>${name}</h3>
                <div class="stars">
                    <i class= "${star1}"></i>
                    <i class= "${star2}"></i>
                    <i class= "${star3}"></i>
                    <i class= "${star4}"></i>
                    <i class= "${star5}"></i>
                </div>
                <p>$ ${price}</p>
                <button type="submit" class="btn shop" >add to cart</button>
            </div>
          </div>
        </div>
      </div>
      
        `
}).join(""));
};generateMeatItems3();

let meatItems4 = document.getElementById("meat-slide4");
let meatItemsData4 = [{
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
}];
let generateMeatItems4 = () => {
    return (meatItems4.innerHTML = meatItemsData4.map((x) => {
        let { id, name, star1, star2, star3, star4, star5, price, img, alt } = x;

        return `
        <div class="col-6 col-md-3 col-lg-2">
        <div class="item my-2">
          <div id = product-id-${id} class="item-body text-center py-2">
            <div class="item-img">
                <img src= ${img} alt= ${alt} class="image-fluid">
            </div>
            <div class="item-des">
                <h3>${name}</h3>
                <div class="stars">
                    <i class= "${star1}"></i>
                    <i class= "${star2}"></i>
                    <i class= "${star3}"></i>
                    <i class= "${star4}"></i>
                    <i class= "${star5}"></i>
                </div>
                <p>$ ${price}</p>
                <button type="submit" class="btn shop" >add to cart</button>
            </div>
          </div>
        </div>
      </div>
      
        `
}).join(""));
};generateMeatItems4();

 /* MEAT SLIDER STARTS HERE */

 const slides3 = document.querySelectorAll(".meat-slide");
 const nextBtn3 = document.querySelector("#meat-next-btn");
 const prevBtn3 = document.querySelector("#meat-prev-btn");
 const slideInd3 = document.querySelector("#meat-indicator-box");
 let index3 = 0;
 
 
 //slide indicator uptdate */
 
 function updateIndicator3(){
    slideInd3.querySelectorAll('.indicator').forEach((item, i) => {
        item.classList.toggle("active", i === index3);
    });
}

//show slide

function showSlide3(i) {
    slides3.forEach(slide => slide.classList.remove("active"));
    slides3[i].classList.add("active");
    index3 = i;
    updateIndicator3();
}

//previous button

prevBtn3.addEventListener("click", function() {
    showSlide3(index3 === 0 ? slides3.length - 1 : index3 - 1);
    updateIndicator3();
});

//next button

nextBtn3.addEventListener("click", function() {
    showSlide3(index3 === slides3.length - 1 ? 0 : index3 + 1);
    updateIndicator3();
});

//indicate slide

function indicateSlide3(element){
    showSlide3(parseInt(element.id));
}

//create indicators

function createIndicators3 (){
    for(let i=0; i< slides3.length; i++){
        const div = document.createElement("div");
        div.innerHTML= i+1;
        div.id = i;
        div.className = i === 0 ? "indicator active" : "indicator";
        div.addEventListener("click", function() {
            indicateSlide3(this);
        });
        slideInd3.appendChild(div);
    } 
} createIndicators3();
 
 /* MEAT SLIDER ENDS HERE */



 /* DIARY */

 let dairyItems = document.getElementById("dairy-slide1");
let dairyItemsData = [{
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
    star1: "bi bi-star-fill",
    star2: "bi bi-star-fill",
    star3: "bi bi-star-fill",
    star4: "bi bi-star-fill",
    star5: "bi bi-star",
    price: "35.99",
    img: ("./src/images/curd.jpg"),
    alt: "curd",
},
{
    id: "dy-4", 
    name: "kefir",
    star1: "bi bi-star-fill",
    star2: "bi bi-star-fill",
    star3: "bi bi-star-fill",
    star4: "bi bi-star",
    star5: "bi bi-star",
    price: "40.99",
    img: ("./src/images/kefir.jpg"),
    alt:"kefir",
}];

let generateDairyItems = () => {
    return (dairyItems.innerHTML = dairyItemsData.map((x) => {
        let { id, name, star1, star2, star3, star4, star5, price, img, alt } = x;

        return `
        <div class="col-6 col-md-3 col-lg-2">
        <div class="item my-2">
          <div id = product-id-${id} class="item-body text-center py-2">
            <div class="item-img">
                <img src= ${img} alt= ${alt} class="image-fluid">
            </div>
            <div class="item-des">
                <h3>${name}</h3>
                <div class="stars">
                    <i class= "${star1}"></i>
                    <i class= "${star2}"></i>
                    <i class= "${star3}"></i>
                    <i class= "${star4}"></i>
                    <i class= "${star5}"></i>
                </div>
                <p>$ ${price}</p>
                <button onclick="addToCart('${id}')" onclick="addToCart('${id}')" type="submit" class="btn shop" >add to cart</button>
            </div>
          </div>
        </div>
      </div>
      
        `
}).join(""));
};generateDairyItems();

let dairyItems2 = document.getElementById("dairy-slide2");
let dairyItemsData2 = [{
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
}];

let generateDairyItems2 = () => {
    return (dairyItems2.innerHTML = dairyItemsData2.map((x) => {
        let { id, name, star1, star2, star3, star4, star5, price, img, alt } = x;

        return `
        <div class="col-6 col-md-3 col-lg-2">
        <div class="item my-2">
          <div id = product-id-${id} class="item-body text-center py-2">
            <div class="item-img">
                <img src= ${img} alt= ${alt} class="image-fluid">
            </div>
            <div class="item-des">
                <h3>${name}</h3>
                <div class="stars">
                    <i class= "${star1}"></i>
                    <i class= "${star2}"></i>
                    <i class= "${star3}"></i>
                    <i class= "${star4}"></i>
                    <i class= "${star5}"></i>
                </div>
                <p>$ ${price}</p>
                <button onclick="addToCart('${id}')" type="submit" class="btn shop" >add to cart</button>
            </div>
          </div>
        </div>
      </div>
      
        `
}).join(""));
};generateDairyItems2();

let dairyItems3 = document.getElementById("dairy-slide3");
let dairyItemsData3 = [{
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
}];
let generateDairyItems3 = () => {
    return (dairyItems3.innerHTML = dairyItemsData3.map((x) => {
        let { id, name, star1, star2, star3, star4, star5, price, img, alt } = x;

        return `
        <div class="col-6 col-md-3 col-lg-2">
        <div class="item my-2">
          <div id = product-id-${id} class="item-body text-center py-2">
            <div class="item-img">
                <img src= ${img} alt= ${alt} class="image-fluid">
            </div>
            <div class="item-des">
                <h3>${name}</h3>
                <div class="stars">
                    <i class= "${star1}"></i>
                    <i class= "${star2}"></i>
                    <i class= "${star3}"></i>
                    <i class= "${star4}"></i>
                    <i class= "${star5}"></i>
                </div>
                <p>$ ${price}</p>
                <button onclick="addToCart('${id}')" type="submit" class="btn shop" >add to cart</button>
            </div>
          </div>
        </div>
      </div>
      
        `
}).join(""));
};generateDairyItems3();

let dairyItems4 = document.getElementById("dairy-slide4");
let dairyItemsData4 = [{
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
    name: "powerdered milk",
    star1: "bi bi-star-fill",
    star2: "bi bi-star-fill",
    star3: "bi bi-star-fill",
    star4: "bi bi-star",
    star5: "bi bi-star",
    price: "40.99",
    img: ("./src/images/kefir.jpg"),
    alt:"powerdered milk",
}];
let generateDairyItems4 = () => {
    return (dairyItems4.innerHTML = dairyItemsData4.map((x) => {
        let { id, name, star1, star2, star3, star4, star5, price, img, alt } = x;

        return `
        <div class="col-6 col-md-3 col-lg-2">
        <div class="item my-2">
          <div id = product-id-${id} class="item-body text-center py-2">
            <div class="item-img">
                <img src= ${img} alt= ${alt} class="image-fluid">
            </div>
            <div class="item-des">
                <h3>${name}</h3>
                <div class="stars">
                    <i class= "${star1}"></i>
                    <i class= "${star2}"></i>
                    <i class= "${star3}"></i>
                    <i class= "${star4}"></i>
                    <i class= "${star5}"></i>
                </div>
                <p>$ ${price}</p>
                <button onclick="addToCart('${id}')" type="submit" class="btn shop" >add to cart</button>
            </div>
          </div>
        </div>
      </div>
      
        `
}).join(""));
};generateDairyItems4();

 /* DAIRY SLIDER STARTS HERE */

 const slides4 = document.querySelectorAll(".dairy-slide");
 const nextBtn4 = document.querySelector("#dairy-next-btn");
 const prevBtn4 = document.querySelector("#dairy-prev-btn");
 const slideInd4 = document.querySelector("#dairy-indicator-box");
 let index4 = 0;
 
 
 //slide indicator uptdate
 
 function updateIndicator4(){
    slideInd4.querySelectorAll('.indicator').forEach((item, i) => {
        item.classList.toggle("active", i === index4);
    });
}

//show slide

function showSlide4(i) {
    slides4.forEach(slide => slide.classList.remove("active"));
    slides4[i].classList.add("active");
    index4 = i;
    updateIndicator4();
}

//previous button

prevBtn4.addEventListener("click", function() {
    showSlide4(index4 === 0 ? slides4.length - 1 : index4 - 1);
    updateIndicator4();
});

//next button

nextBtn4.addEventListener("click", function() {
    showSlide4(index4 === slides4.length - 1 ? 0 : index4 + 1);
    updateIndicator4();
});

//indicate slide

function indicateSlide4(element){
    showSlide4(parseInt(element.id));
}

//create indicators

function createIndicators4 (){
    for(let i=0; i< slides4.length; i++){
        const div = document.createElement("div");
        div.innerHTML= i+1;
        div.id = i;
        div.className = i === 0 ? "indicator active" : "indicator";
        div.addEventListener("click", function() {
            indicateSlide4(this);
        });
        slideInd4.appendChild(div);
    } 
} createIndicators4();

 /* DAIRY SLIDER ENDS HERE */


// //cart 










