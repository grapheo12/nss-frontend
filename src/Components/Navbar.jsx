import React,{Component} from 'react';
import {Link} from 'react-router-dom';

 class Navbar extends Component{

    render(){
        return(
          <nav className="topbar topbar-expand-md topbar-sticky">
          <div className="container">
            <div className="topbar-left">
              <button className="topbar-toggler text-info">☰</button>
              <Link className="topbar-brand" to="/">
                <h3 className="text-info">IIT Kharagpur</h3>
              </Link>
            </div>
            <div className="topbar-right">
              <ul className="topbar-nav nav">
                <li className="nav-item">
                  <Link className="nav-link text-info" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-info" to="/">About US
                    <i className="fa fa-caret-down" />
                  </Link>
                  <div class="nav-submenu">
                    <Link class="nav-link" to="/Units">Units</Link>
                    <Link class="nav-link" to="/Team">Web Team</Link>
                  </div>
                </li>
                <li className="nav-item">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */ /* eslint-disable-next-line no-script-url*/}
                  <a className="nav-link text-info" href="javascript: document.body.scrollIntoView(false);">Contact Us</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-info" to="/Blog">Our Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-info" to="/Notifications">Notifications</Link>
                </li>
               <li className="nav-item">
                  <Link className="nav-link text-info" to="/Submit">Internal Links</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        )
    }

 }

 export default Navbar;
