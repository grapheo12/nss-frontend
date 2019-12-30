import React,{Component} from 'react';
import Header from './Components/Header.jsx'
import Home_container from './Components/Home_container.jsx'
import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx'
import Units from './Components/Units'
import Team from './Components/Team'
import Notifications from './Components/Notifications'
import Blog from './Components/Blog'
import Reporter from './Components/Reporter'
import {BrowserRouter, Route} from 'react-router-dom';
import {Lines,Cube,Sugar} from 'react-preloaders'


class App extends Component{
	
	
	render(){
			return(
				<div>
					<BrowserRouter>
						<div>
							<Navbar />
							<Header />
							<Route exact path="/" component={Home_container} />
							<Route path="/Notifications" component={Notifications} />
							<Route path="/Units" component={Units} />
							<Route path="/Team" component={Team} />
							<Route path="/Blog" component={Blog} />
													<Route path="/Submit" component={Reporter} />
							<Footer />
						</div>
					</BrowserRouter>
				<Sugar background="#202020" color="white" time="3000"/>
				</div>
			)
	}
}

export default App;
