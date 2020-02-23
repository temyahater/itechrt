import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MainNavbar, NavbarModalAccountDelete, NavbarModalRegistration, NavbarModalBasket, NavbarCarousel,
Notebooks, SomeInformation, Contacts, Companys} from './user/user';


ReactDOM.render(<MainNavbar />, document.getElementById('header-nav'));

ReactDOM.render(<NavbarModalAccountDelete />, document.getElementById('deleteAccount'));

ReactDOM.render(<NavbarModalRegistration />, document.getElementById('account'));

ReactDOM.render(<NavbarModalBasket />, document.getElementById('basket'));

ReactDOM.render(<NavbarCarousel />, document.getElementById('header-slider'));

ReactDOM.render(
    <div>
        <span><img src="images/quality.png" alt="quality"/>Quality</span>
        <span><img src="images/w512h5121377939972185093dashboardspeedstreamline.png" alt="performance"/>Performance</span>
        <span><img src="images/dollar_sign_PNG43.png" alt="availability"/>Availability</span>
    </div>
    ,document.getElementById('main-head'));

ReactDOM.render(<span className="display-4 shadow">Notebooks</span>, document.getElementById('main-title'));

ReactDOM.render(<Notebooks />, document.getElementById('notebooks'));

ReactDOM.render(<Companys />, document.getElementById('companys'));

ReactDOM.render(<SomeInformation />, document.getElementById('footer-info'));

ReactDOM.render(<Contacts />, document.getElementById('footer-author'));

