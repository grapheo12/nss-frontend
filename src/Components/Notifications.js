import React,{Component} from 'react';
import Card from './Cards';
import axios from 'axios';
import { Lines, Sugar } from 'react-preloaders';

 class Notifs extends Component{
     constructor(props){
         super(props);
         this.state = {
             cards: [
                 (<Card header="No notifications" points={[]} />)
             ],
	     preloader: true
         }
     }

     componentDidMount(){
         axios.get("https://nsskgpapi.herokuapp.com/notifications")
              .then((res) => {
                  this.setState({
                      cards: res.data.notifications.reverse().map(card => (
                          <Card header={card.header} points={card.points} />
                      )
                    ),
		      preloader: false
                  });


              })
              .catch(err => {
                  console.log(err);
              })
     }

     render(){
         return(
         <div class="container" style={{paddingTop: "1rem"}}>
                 	<Sugar customLoading={this.state.preloader} background="#202020" color="white" />

	     {this.state.cards} 
        </div>
         )
     }
 }

 export default Notifs;
