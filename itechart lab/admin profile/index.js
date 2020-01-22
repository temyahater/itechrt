ReactDOM.render(
    <nav className="header-nav navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
          <span className="navbar-brand">eShop</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                  <a className="nav-link" href="../index.html">Home</a> 
              </li>
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Account
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="https://www.google.com/" data-toggle="modal">Enter/exit</a>
                  </div>
              </li>
              </ul>
              <div className="d-flex my-2">
                  <input className="form-control mr-2" type="search" placeholder="Search"/>
                  <button className="btn btn-outline-light" type="submit">Search</button>
              </div>
          </div>
      </nav>
    , document.getElementById('admin-header'));

ReactDOM.render(
    <div>
        <div className="card-header" id="headingOne">
        <h5 className="mb-0">
            <button className="users-screen btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
             aria-expanded="true" aria-controls="collapseOne" onClick={loadUsers()}>
                Users
            </button>
        </h5>
    </div>
    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionMe">
        <div className="card-body">
            <table id="users-table" className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Username</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    </div>
    </div>
    ,document.getElementById('users-screen'));

ReactDOM.render(
    <div>
        <div className="card-header" id="headingTwo">
        <h5 className="mb-0">
            <button className="users-delete btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" 
            aria-expanded="false" aria-controls="collapseTwo" onClick={loadUsersToDelete()}>
            Users to delete
            </button>
        </h5>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionMe">
        <div className="card-body">
            <table className="table" id="users-delete-table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Lastname</th>
                <th scope="col">Username</th>
                <th scope="col">Delete check</th>
                <th scope="col"><button className="btn btn-secondary" id="delete-users">Delete</button></th>
                </tr>
            </thead>
            <tbody>
            </tbody>
            </table>
        </div>
        </div>
    </div>
    ,document.getElementById('users-delete'));

ReactDOM.render(
    <div>
        <div className="card-header" id="headingThree">
        <h5 className="mb-0">
            <button className="products-screen btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree"
             aria-expanded="false" aria-controls="collapseThree" onClick={loadProducts()}>
            Products
            </button>
        </h5>
        </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionMe">
        <div className="card-body">
            <table className="table" id="products-table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Model</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Picture</th>
                <th scope="col">Delete check</th>
                <th scope="col">
                    <button id="delete-product" className="delete-product btn btn-secondary">Delete</button>
                    <button className="btn btn-dark ml-1" data-toggle="modal" data-target="#product-model">Add product</button>
                </th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
            </table>
        </div>
    </div>
    </div>
    ,document.getElementById('products'));

ReactDOM.render(
    <div>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title">Product</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="modal-body">
                    
                    <div className="form-group">
                        <label>Model</label>
                        <input type="text" className="add-model form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="add-price form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" className="add-description form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="load-file">Input file</label>
                        <input type="file" className="form-control-file" id="load-file"/>
                    </div>
                    <button id="add" className="btn btn-dark">Add product</button>
                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    ,document.getElementById('product-model'));