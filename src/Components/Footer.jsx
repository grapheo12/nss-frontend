import React,{Component} from 'react';

class Footer extends Component{
    render(){
        return(
            
                <footer className="site-footer" style={{backgroundColor: "#000000"}}>
        <div className="container">
        <div className="row gap-y align-items-center">
          <div className="col-12 col-lg-6">
            <img className="rounded" style={{height: "160px", margin: "auto"}} src="assets/img/nss-trans.png" alt="Logo" />
          </div>
            <div className="col-12 col-lg-6">
              <h3>&nbsp; &nbsp; &nbsp;Contact Us</h3>
              <ul style={{listStyleType: "none"}}>
                <li className="text-white">
                  PC: Prof. B.M. Manoj<br/> <a href="mailto:bmmanoj@phy.iitkgp.ac.in">[bmmanoj@phy.iitkgp.ac.in]</a>
                </li>
		<li className="text-white">
		    CPC: Prof. A. Shaw<br /> <a href="mailto:abshaw@civil.iitkgp.ac.in">[abshaw@civil.iitkgp.ac.in]</a>
		</li>
                <li className="text-white">
                  Site Admin: <br/> <a href="mailto:nsskgpsite@gmail.com">[nsskgpsite@gmail.com]</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
           
        )
    }
}

export default Footer;
