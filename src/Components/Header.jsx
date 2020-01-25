import React,{Component} from 'react';
import axios from 'axios';

class Header extends Component{
    render(){
       return(
            <header id="backchange" className="header header-inverse" style={{backgroundImage: `url('assets/img/kgp.jpg')`}} data-overlay={8}>
            <div className="container text-center">
              <div className="row">
                <div className="col-12 col-lg-8 offset-lg-2">
                  <h1>National Service Scheme</h1>
                  <p className="fs-20 opacity-70">Dedicated to the Service of Nation</p>
                </div>
              </div>
            </div>
          </header>
        )
    }

    componentDidMount(){
	const urls = ['kgp.jpg', 'car_1.jpeg', 'car_2.jpeg'];
	var i = 1;
	
	setInterval(() => {
	    document.getElementById("backchange").style.backgroundImage = `url('assets/img/${urls[i]}')`;
	    i = (i + 1) % 3;
	}, 5000);
    }

}

export default Header;
