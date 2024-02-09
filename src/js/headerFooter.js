
class theHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
        `
    <nav class="navbar navbar-expand-md navbar-light fixed-top">
        <div class="container-xxl">
          <!--TOGGLE-BAR-->
          <div class="top d-flex">
          <button class="navbar-toggler toggle-bar collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#toggle-bar"aria-controls="toggle-bar">
            <span class="navbar-toggler-icon"></span>
          </button>
    
            <!--BRAND-->
          <a class="navbar-brand" href="index.html">
          fruitshaven
          </a>
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
                <li class="nav-item dropdown ">
                  <button class="nav-link btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Products
                  </button>
                  <ul class="dropdown-menu dropdown-menu-hover">
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
                  <a class="nav-link" href="#contact">contact us</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    sections
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="index.html#features">features</a></li>
                    <li><a class="dropdown-item" href="index.html#offer">offers</a></li>
                    <li><a class="dropdown-item" href="index.html#category">category</a></li>
                    <li><a class="dropdown-item" href="index.html#blog">blog</a></li>
                    <li><a class="dropdown-item" href="index.html#reviews">reviews</a></li>
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
              <span id="quantity">0</span>
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
      
      <div class="offcanvas-body">
       <div class="cart-content" id="prod">
        <div class="shop" id="shop"></div>
        
       </div>
       <div id="label" class="text-center"></div>
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
              <input type="password" class="form-control" id="password" placeholder="enter password">
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

class theFooter extends HTMLElement{
  connectedCallback(){
      this.innerHTML = 
     `<div class="container-xxl">
     <div class="row justify-content-center">
     <div class="col-md-3 col-lg-2">
         <h1 class="text-center">fruits haven</h1>
         <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, repellendus.</p>
         <div class="stars text-center">
         <i class="bi bi-facebook"></i>
         <i class="bi bi-instagram"></i>
         <i class="bi bi-twitter"></i>
         <i class="bi bi-whatsapp"></i>
         </div>
     </div>
     <div class="col-md-2 col-lg-2">
         <h1 class="text-center">quick links</h1>
         <div class="links text-center">
         <a href="index.html" class="q-link">
             <i class="bi bi-arrow-right"></i>home
         </a>
         <a href="products.html" class="q-link">
             <i class="bi bi-arrow-right"></i>Products
         </a>
         <a href="#" class="q-link">
             <i class="bi bi-arrow-right"></i>Contact Us
         </a>
         <a href="#" class="q-link">
             <i class="bi bi-arrow-right"></i>about us
         </a>
         <a href="#" class="q-link">
             <i class="bi bi-arrow-right"></i>login
         </a>
         </div>
     </div>
     <div class="col-md-3 col-lg-3" id="contact">
         <h1 class="text-center">contact info</h1>
         <div class="links">
         <div class="link">
             <i class="bi bi-phone"></i>
             <p>25588899966</p>
         </div>
         <div class="link">
             <i class="bi bi-phone"></i>
             <p>25588899966</p>
         </div>
         <div class="link">
             <i class="bi bi-envelope"></i>
             <p>dsdjsdhjoj@kssksjkdsd</p>
         </div>
         <div class="link">
             <i class="bi bi-geo-alt-fill"></i>
             <p>dksdsjdsldjs</p>
         </div>
         </div>
     </div>
     <div class="col-md-4 col-lg-3 btt text-center">
       <h1 class="text-center">newsletter</h1>
       <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
       <form action="#" class="">
           <div class="mb-3 input-group">
           <span class="input-group-text">
            <i class="bi bi-envelope-fill"></i>
           </span>
           <input type="email
           " class="form-control" id="emaill" placeholder="e.g. myemail@email.com">
           <span class="input-group-text">
            <span class="info"  data-bs-placement="top" title="Enter an email address to get the latest news">
              <i class="bi bi-question-circle text-muted"></i>
            </span>
           </span>
           </div>
           <button class="btn mb-2">subscribe</button>
       </form>
       <div class="cards">
           <img class="img-fluid" src="src/images/express.webp" alt="american express">
           <img class="img-fluid" src="src/images/master.png" alt="master card">
           <img class="img-fluid" src="src/images/visa.png" alt="visa card">
           <img class="img-fluid" src="src/images/pay.png" alt="paypal">
       </div>
     </div>
     </div>
  </div>
  <div class="foot">
   <h6 class="text-center">created by rashdowdev | all rights reserved</h6>
  </div>
     `
  }
};

customElements.define("the-footer", theFooter);




