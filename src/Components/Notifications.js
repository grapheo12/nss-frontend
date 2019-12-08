import React,{Component} from 'react';
import CardGroup from './Card-group';

 class Notifs extends Component{
     notifications = [
         {
             header: "Notif 1",
             points: [
                 "Do this: ajfoaslkfs"
             ]
         },
         {
             header: "Notif 1",
             points: [
                 "Do this: ajfoaslkfs"
             ]
         },
         {
             header: "Notif 1",
             points: [
                 "Do this: ajfoaslkfs"
             ]
         },
         {
             header: "Notif 1",
             points: [
                 "Do this: ajfoaslkfs"
             ]
         }
     ];

     render(){
         return(
         <div>
            <CardGroup cards={this.notifications} />            
        </div>
         )
     }
 }

 export default Notifs;
