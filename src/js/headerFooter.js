/*
let imageData = [
{
    id: "ft-1",
    name: "apples",
    img: ("../images/apples.jpeg"),
    alt:"apple"
},
{
    id: "ft-2",
    name: "grover",
    price: "30.99",
    img: ("../images/grover.jpg"),
    alt:"grover",
},
{
    id: "ft-3",
    name: "cherry",
    price: "35.99",
    img: ("../images/cherry.jpg"),
    alt: "cherry",
},
{
    id: "ft-4", 
    name: "pawpaw",
    price: "40.99",
    img: ("../images/pawpaw.jpg"),
    alt:"pawpaw",
}
];
class theHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
        `
        <nav class="navbar navbar-expand-md navbar-light fixed-top">
        <div class="container-fluid">
          <!--TOGGLE-BAR-->
          <div class="top d-flex">
          <button class="navbar-toggler toggle-bar collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#toggle-bar"aria-controls="toggle-bar">
            <span class="navbar-toggler-icon"></span>
          </button>
    
            <!--BRAND-->
          <a class="navbar-brand" href="#">fruitshaven</a>
            <!--BRAND-->
          </div>
    
          <div class="offcanvas offcanvas-start bg-primary" tabindex="-1" id="toggle-bar" aria-labelledby="toggle-barLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasLabel"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav  justify-content-start flex-grow-1 pe-3 d-flex">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="index.html">home</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="products.html"  data-bs-toggle="dropdown" aria-expanded="false">
                    Products
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="products.html#fruits">fruits</a></li>
                    <li><a class="dropdown-item" href="products.html#veg">vegetables</a></li>
                    <li><a class="dropdown-item" href="products.html#meat">meat</a></li>
                    <li><a class="dropdown-item" href="products.html#dairy">dairy</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#banner">about us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">contact us</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    sections
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#features">features</a></li>
                    <li><a class="dropdown-item" href="#offer">offers</a></li>
                    <li><a class="dropdown-item" href="#category">category</a></li>
                    <li><a class="dropdown-item" href="#blog">blog</a></li>
                    <li><a class="dropdown-item" href="#reviews">reviews</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <!--TOGGLE-BAR-->
    
          <div class="nav-icons d-flex">
            
            <!--SEARCH-->
            <button class="navbar-toggler search-bar " type="button" data-bs-toggle="offcanvas" data-bs-target="#search-bar"aria-controls="search-bar">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg></span>
            </button>
            <div class="offcanvas offcanvas-end bg-primary" tabindex="-1" id="search-bar" aria-labelledby="search-barLabel">
              <div class="offcanvas-body">
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn" type="submit"><i class="bi bi-search"></i></button>
                </form>
              </div>
            </div>
             <!--SEARCH-->
          
            <!--CART-->
            <div class="shopping">
              <button class="navbar-toggler cart" type="button" data-bs-toggle="offcanvas" data-bs-target="#cart"aria-controls="cart">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg></span>
              </button>
              <span id="quantity"></span>
            </div>
            <!--CART-->
    
            <!--LOGIN-BOX-->
            <button class="navbar-toggler login-box" type="button" data-bs-toggle="offcanvas" data-bs-target="#login-box"aria-controls="login-box">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
              </svg></span>
            </button>
            <!--LOGIN-BOX-->
    
          </div>
        </div>
    </nav>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="cart" aria-labelledby="cartLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body" id="prod">
      <div class="cart-content">
      <div class="cart-content">
      <img src="" alt="" class="img-fluid">
      <div class="cart-des">
          <div class="prd-title"></div>
          <div class="prd-price"></div>
          <div class="prod-btn">
            <i class="bi bi-dash" ></i>
            <div  class="prod-quantity">0</div>
            <i  class="bi bi-plus" ></i>
          </div>
      </div>
      <i class="bi bi-trash3-fill remove-item"></i>
    </div>
        </div>
        <div class="total">
          <div class="total-title">total</div>
          <div class="total-price">N0</div>
        </div>
        <button type="submit" class="check-out">check out</button>
      </div>
    </div>
    <div class="offcanvas offcanvas-end bg-primary" tabindex="-1" id="login-box" aria-labelledby="login-boxLabel">
      <div class="offcanvas-body">
        <form action="">
          <div class="text-center pt-4">
            <h3>login</h3>
          </div>
          <div class="mb-4 input-group">
              <span class="input-group-text">
                <i class="bi bi-envelope-fill"></i>
              </span>
              <input type="email
               " class="form-control" id="email" placeholder="e.g. myemail@email.com">
               <span class="input-group-text">
                  <span class="info" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Enter an email address to login">
                  <i class="bi bi-question-circle text-muted"></i>
                  </span>
               </span>
          </div> 
          <div class="mb-4 input-group">
              <span class="input-group-text">
                  <i class="bi bi-key-fill"></i>
              </span>
              <input type="password" class="form-control" id="password" placeholder="enter your password">
               <span class="input-group-text">
                  <span class="info" data-bs-toggle="tooltip"data-bs-placement="bottom" title="Enter a password to sign up">
                      <i class="bi bi-question-circle text-muted"></i>
                  </span>
               </span>
          </div> 
          <div class="mb-4 input-group d-flex">
            <input type="checkbox" name="remmber me" id="rbm">
            <span class="rmbm">remmber me</span>
          </div>
          <div class="mb-3 text-center">
              <button type="submit" class="btn btn-sm">submit</button>
          </div>
          <div class="">
            <p>forgot password/email?<a href="#"><small>click here</small></a></p>
            <p>don't have an acccount? <a href="#"><small>create one</small></a></p>
          </div>
    
        </form>
      </div>
      </div>
        `
    }
};

customElements.define("the-header", theHeader);

// let customHead = document.getElementsByName(the-header);
*/



const navHead =
document.querySelector(".nav-bar");
fetch("../navbar.html")
.then(res=>res.text())
.then(data=>{
  navHead.innerHTML=data
  const parser = new DOMParser();
  
});



