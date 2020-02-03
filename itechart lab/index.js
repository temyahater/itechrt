function MainNavbar(){
  return (
    <nav className="header-nav navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <span className="navbar-brand">eShop</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#header">Home</a> 
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#main">Main Content</a> 
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#footer">Contacts</a> 
            </li>
            <li className="nav-item dropdown">
                <a className="account-menu nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Account
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#basket">Basket</a>
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#account">Enter/exit</a>
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#deleteAccount">Delete account</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">About us</a>
                </div>
            </li>
            </ul>
            <div className="d-flex my-2">
                <input className="form-control mr-2" type="search" placeholder="Search"/>
                <button id="search" className="search btn btn-outline-light" type="submit">Search</button>
            </div>
        </div>
    </nav>
  );
}

function NavbarModalAccountDelete(){
  return (
    <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="deleteLabel">Delete account</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                 Your account will be deleted soon!
            </div>
            <div className="modal-footer">
                <button type="button" className="delete-account btn btn-secondary" data-dismiss="modal">Okay</button>
                <button type="button" className="btn btn-dark" data-dismiss="modal">Cancel</button>
            </div>
            </div>
        </div>
  );
}

function NavberModalRegistration(){
  return (
    <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="account">Authentication</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Email address</label>
                    <input type="text" id="login" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small className="form-text text-muted">*If u are Admin, then enter 'admin' login and 'admin' password</small>
                  </div>
                  <div className="form-group">
                      <label>Name</label>
                      <input type="text" className="name-user form-control"/>
                      <small className="form-text text-muted">*Only not Vlad</small>
                  </div>
                  <div className="form-group">
                      <label>Surname</label>
                      <input type="text" className="lastname-user form-control"/>
                      <small className="form-text text-muted">*Only not Savinov</small>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Password"/>
                  </div>
                  <div>
                    <input id="adminEnter" className="btn btn-secondary" type="button" value="Sign in"/>
                    <input className="register btn btn-secondary" type="button" value="Register" data-dismiss="modal"/>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="exit-account btn btn-dark" data-dismiss="modal">Exit</button>
              </div>
            </div>
          </div>
  );
}

function NavbarModalBasket(){
  return (
    <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="basket">Your basket</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="basket-list">
                  <ol className="list-group">
                    <li className="list-group-item">
                        <div className="card">
                          <div className="card-header">
                            <h5 className="mb-0">
                              <button className="basket-product btn btn-link">
                                Product 1
                              <input type="button" className="basket-delete ml-5 btn btn-secondary" value="Delete"/>
                              </button>
                            </h5>
                          </div>
                          <div className="collapse show">
                              <div className="card-body">Info about product</div>
                          </div>
                        </div>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-dark"> Pay all</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
  );
}

function NavbarCarousel(){
  return (
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img className="d-block slider-img" src="images/114231.jpg" alt="first notebook"/>
        </div>
        <div className="carousel-item">
            <img className="d-block slider-img" src="images/5730-asus-notebooks-1920x1080-computer-wallpaper.jpg" alt="second notebook"/>
        </div>
        <div className="carousel-item">
            <img className="d-block slider-img" src="images/HP_CES_2019_Virtual_Press_Briefing_Deck_12.20.2018_01.png" alt="third notebook"/>
        </div>
    </div>
  );
}

function Notebooks(){
  return (
    <div>
          <div>
            <img src="images/omen1.png" alt="laptop"/>
            <h2>Model</h2>
            <img src="images/omenlogo.png" alt="laptop logo"/>
            <p>Price</p>
            <p>Description</p>
            <button className="buy-product btn btn-secondary">Buy</button>
          </div>
          <div>
            <img src="images/omen2.png" alt="laptop"/>
            <h2>Model</h2>
            <img src="images/omenlogo.png" alt="laptop logo"/>
            <p>Price</p>
            <p>Description</p>
            <button className="buy-product btn btn-secondary">Buy</button>
          </div>
          <div>
            <img src="images/omen3.png" alt="laptop"/>
            <h2>Model</h2>
            <img src="images/omenlogo.png" alt="laptop logo"/>
            <p>Price</p>
            <p>Description</p>
            <button className="buy-product btn btn-secondary">Buy</button>
          </div>
          <div>
            <img src="images/asus1.png" alt="laptop"/>
            <h2>Model</h2>
            <img src="images/asuslogo.png" alt="laptop logo"/>
            <p>Price</p>
            <p>Description</p>
            <button className="buy-product btn btn-secondary">Buy</button>
          </div>
          <div>
            <img src="images/asus2.png" alt="laptop"/>
            <h2>Model</h2>
            <img src="images/asuslogo.png" alt="laptop logo"/>
            <p>Price</p>
            <p>Description</p>
            <button className="buy-product btn btn-secondary">Buy</button>
          </div>
          <div>
            <img src="images/asus3.png" alt="laptop"/>
            <h2>Model</h2>
            <img src="images/asuslogo.png" alt="laptop logo"/>
            <p>Price</p>
            <p>Description</p>
            <button className="buy-product btn btn-secondary">Buy</button>
          </div>
          <div>
            <img src="images/msi3.png" alt="laptop"/>
            <h2>Model</h2>
            <img src="images/msilogo.png" alt="laptop logo"/>
            <p>Price</p>
            <p>Description</p>
            <button className="buy-product btn btn-secondary">Buy</button>
          </div>
          <div>
            <img src="images/msi2.png" alt="laptop"/>
            <h2>Model</h2>
            <img src="images/msilogo.png" alt="laptop logo"/>
            <p>Price</p>
            <p>Description</p>
            <button className="buy-product btn btn-secondary">Buy</button>
          </div>
    </div>
  );
}

function Company1() {
  return (
    <div className="test container h-100 pt-4 d-flex flex-column align-items-center">
    <img src="images/omenlogo.png" alt="laptop logo"/>
    <p className="mt-4">
      The Omen series leads off with two laptops simply called the Omen. 
      They're identical black notebooks with red highlights — sorry, "dragon red" highlights, 
      according to HP — around each key and on the lid. HP's logo only shows up on the inside; 
      instead, the back of the laptops display a strange red diamond that looks vaguely gamery.
    </p>
    <p className="mt-4"> 
      The line is kicking off today with the announcement of four products: two laptops, a tower, and a display.
      For the most part, these first products are starting toward the higher end of the market.
    </p>
    <p className="mt-4">
      The two Omen laptops are differentiated by size and specs. 
      The smaller model has a 15.6-inch display and starts with one of Intel's Core i3 processors; 
      the larger model has a 17.3-inch display and starts with an i5 processor. 
      Both can be configured with up to an i7 processor, 16GB of RAM, a GeForce GTX 965M GPU, and a 4K display.
    </p>
    <div className="container p-0 d-flex justify-content-center align-items-center">
      <img className="like" src="images/like.png" alt="like"/>
    </div>
  </div>
  );
}

function Company2(){
  return (
    <div className="container h-100 pt-4 d-flex flex-column align-items-center">
    <img src="images/asuslogo.png" alt="laptop logo"/>
      <p className="mt-4">
        AsusTek Computer Inc. is a Taiwan-based multinational computer and phone hardware and electronics company 
        headquartered in Beitou District, Taipei, Taiwan. Its products include desktops, laptops, netbooks, mobile phones, 
        networking equipment, monitors, WIFI routers, projectors, motherboards, graphics cards, optical storage, multimedia 
        products, peripherals, wearables, servers, workstations, and tablet PCs. The company is also an original equipment 
        manufacturer.
      </p>
      <p className="mt-4">
        Asus was founded in Taipei in 1989 by T.H. Tung, Ted Hsu, Wayne Hsieh and M.T. Liao, 
        all four having previously worked at Acer as hardware engineers. 
        At this time, Taiwan had yet to establish a leading position in the computer-hardware business. 
        Intel Corporation would supply any new processors to more established companies like IBM first, 
        and Taiwanese companies would have to wait for approximately six months after IBM received their engineering prototypes.
      </p>
      <div className="container p-0 mt-3 d-flex justify-content-center align-items-center">
        <img className="like" src="images/like.png" alt="like logo"/>
      </div>
  </div>
  );
}

function Company3(){
  return (
    <div className="container h-100 pt-4 d-flex flex-column align-items-center">
    <img src="images/msilogo.png" alt="laptop logo"/>
      <p className="mt-4">
        Micro-Star International Co., Ltd is a Taiwanese multinational information 
        technology corporation headquartered in New Taipei City, Taiwan. It designs, develops and provides computer hardware, 
        related products and services, including laptops, desktops, motherboards, graphics cards, All-in-One PCs, 
        servers, industrial computers, PC peripherals, car infotainment products, etc.
        The company has a primary listing on the Taiwan Stock Exchange and was established in August 1986 by 5 founders 
        – Hsu Xiang, Huang Jinqing, Lin Wentong, 
        Yu Xian'neng, and Lu Qilong. 
        The company has been a sponsor for a number of eSports teams and is also the host of the international gaming 
        event MSI Masters Gaming Arena. The earliest Beat IT tournament can 
        be traced back to 2010, featuring Evil Geniuses winning the championship. The company's slogan as seen in 2017 
        is "TRUE GAMING. SOME ARE PC, WE ARE GAMING."
      </p>
      <div className="like-container container p-0 d-flex justify-content-center align-items-center">
          <img className="like" src="images/like.png" alt="like logo"/>
      </div>
  </div>
  );
}

function SomeInformation(){
  return (
    <div className="container d-flex align-items-center justify-content-around p-0">
        <ul>
          Contacts :
          <li>Some contact information</li>
          <li>Some contact information</li>
          <li>Some contact information</li>
          <li>Some contact information</li>
          <li>Some contact information</li>
        </ul> 
        <ul>
          About us :
          <li>Some information about us</li>
          <li>Some information about us</li>
          <li>Some information about us</li>
          <li>Some information about us</li>
          <li>Some information about us</li>
        </ul>
        <ul>
          Link :
          <li>Some information link</li>
          <li>Some information link</li>
          <li>Some information link</li>
          <li>Some information link</li>
          <li>Some information link</li>
        </ul>
  </div>
  
  );
}

function Contacts(){
  return (
    <div className="container d-flex justify-content-around">
      <img src="images/instagram.png" alt="Instagram"/><span><a href="https://www.instagram.com/temyahater" target="_blank">Instagram</a></span>
      <img src="images/twitter.png" alt="Twitter"/><span><a href="https://twitter.com" target="_blank">Twitter</a></span>
      <img src="images/facebook.png" alt="Facebook"/><span><a href="https://www.facebook.com" target="_blank">Facebook</a></span>
      <img src="images/vk.png" alt="Vk"/><span><a href="https://vk.com/temyahater" target="_blank">Vk</a></span>
      <img src="images/github.png" alt="GitHub"/><span><a href="https://github.com/temyahater" target="_blank">GitHub</a></span>
  </div>
  );
}

ReactDOM.render(MainNavbar(),document.getElementById('header-nav'));

ReactDOM.render(NavbarModalAccountDelete(),document.getElementById('deleteAccount'));

ReactDOM.render(NavberModalRegistration(),document.getElementById('account'));

ReactDOM.render(NavbarModalBasket(),document.getElementById('basket'));

ReactDOM.render(NavbarCarousel(),document.getElementById('header-slider'));

ReactDOM.render(
    <div>
        <span><img src="images/quality.png" alt="quality"/>Quality</span>
        <span><img src="images/w512h5121377939972185093dashboardspeedstreamline.png" alt="performance"/>Performance</span>
        <span><img src="images/dollar_sign_PNG43.png" alt="availability"/>Availability</span>
    </div>
    ,document.getElementById('main-head'));

ReactDOM.render(<span className="display-4 shadow">Notebooks</span>,document.getElementById('main-title'));

ReactDOM.render(Notebooks(),document.getElementById('notebooks'));

ReactDOM.render(Company1(),document.getElementById('company1'));

ReactDOM.render(Company2(),document.getElementById('company2'));

ReactDOM.render(Company3(),document.getElementById('company3'));

ReactDOM.render(SomeInformation(), document.getElementById('footer-info'));

ReactDOM.render(Contacts(),document.getElementById('footer-author'));