import React,{Component} from 'react';
import Card from './Cards';
import axios from 'axios';

 class Notifs extends Component{
     constructor(props){
         super(props);
         this.state = {
             cards: [
                 (<Card header="No notifications" points={[]} />)
             ]
         }
     }

     componentDidMount(){
         axios.get("https://nsskgpapi.herokuapp.com/notifications")
              .then((res) => {
                  this.setState({
                      cards: res.data.notifications.reverse().map(card => (
                          <Card header={card.header} points={card.points} />
                      )
                    )
                  })
              })
              .catch(err => {
                  console.log(err);
              })
     }

     render(){
         return(
         <div class="container" style={{paddingTop: "1rem"}}>
            {this.state.cards} 
        </div>
         )
     }
 }

 export default Notifs;
