ReactDOM.render(
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
    ,document.getElementById('header-nav'));

    //modals

ReactDOM.render(
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
    ,document.getElementById('deleteAccount'));

ReactDOM.render(
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
    ,document.getElementById('account'));

ReactDOM.render(
    <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="basket">Your basket</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="basket-list">
                  <ol className="list-group">
                    <li className="list-group-item">
                        <div className="card">
                          <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                              <button className="basket-product btn btn-link">  
                                Product 1
                                <input type="button" className="basket-delete ml-5 btn btn-secondary" value="Delete"/>
                              </button>
                            </h5>
                          </div>
                          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne">
                              <div className="card-body">Info about product</div>
                          </div>
                        </div>
                    </li>
                  </ol>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-dark"> Pay all</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
    ,document.getElementById('basket'));

ReactDOM.render(
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
    ,document.getElementById('header-slider'));

ReactDOM.render(
    <div>
        <span><img src="images/quality.png" alt="quality"/>Quality</span>
        <span><img src="images/w512h5121377939972185093dashboardspeedstreamline.png" alt="performance"/>Performance</span>
        <span><img src="images/dollar_sign_PNG43.png" alt="availability"/>Availability</span>
    </div>
    ,document.getElementById('main-head'));

ReactDOM.render(<span className="display-4 shadow">Notebooks</span>,document.getElementById('main-title'));

// ReactDOM.render(
//     <div>
//           <div>
//             <img src="images/omen1.png" alt="laptop"/>
//             <h2>Model</h2>
//             <img src="images/omenlogo.png" alt="laptop logo"/>
//             <p>Price</p>
//             <p>Description</p>
//             <button className="buy-product btn btn-secondary">Buy</button>
//           </div>
//           <div>
//             <img src="images/omen2.png" alt="laptop"/>
//             <h2>Model</h2>
//             <img src="images/omenlogo.png" alt="laptop logo"/>
//             <p>Price</p>
//             <p>Description</p>
//             <button className="buy-product btn btn-secondary">Buy</button>
//           </div>
//           <div>
//             <img src="images/omen3.png" alt="laptop"/>
//             <h2>Model</h2>
//             <img src="images/omenlogo.png" alt="laptop logo"/>
//             <p>Price</p>
//             <p>Description</p>
//             <button className="buy-product btn btn-secondary">Buy</button>
//           </div>
//           <div>
//             <img src="images/asus1.png" alt="laptop"/>
//             <h2>Model</h2>
//             <img src="images/asuslogo.png" alt="laptop logo"/>
//             <p>Price</p>
//             <p>Description</p>
//             <button className="buy-product btn btn-secondary">Buy</button>
//           </div>
//           <div>
//             <img src="images/asus2.png" alt="laptop"/>
//             <h2>Model</h2>
//             <img src="images/asuslogo.png" alt="laptop logo"/>
//             <p>Price</p>
//             <p>Description</p>
//             <button className="buy-product btn btn-secondary">Buy</button>
//           </div>
//           <div>
//             <img src="images/asus3.png" alt="laptop"/>
//             <h2>Model</h2>
//             <img src="images/asuslogo.png" alt="laptop logo"/>
//             <p>Price</p>
//             <p>Description</p>
//             <button className="buy-product btn btn-secondary">Buy</button>
//           </div>
//           <div>
//             <img src="images/msi3.png" alt="laptop"/>
//             <h2>Model</h2>
//             <img src="images/msilogo.png" alt="laptop logo"/>
//             <p>Price</p>
//             <p>Description</p>
//             <button className="buy-product btn btn-secondary">Buy</button>
//           </div>
//           <div>
//             <img src="images/msi2.png" alt="laptop"/>
//             <h2>Model</h2>
//             <img src="images/msilogo.png" alt="laptop logo"/>
//             <p>Price</p>
//             <p>Description</p>
//             <button className="buy-product btn btn-secondary">Buy</button>
//           </div>
//     </div>
//     ,document.getElementById('notebooks'));