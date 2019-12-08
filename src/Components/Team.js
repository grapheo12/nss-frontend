import React,{Component} from 'react';
import CardGroup from './Card-group';

 class Members extends Component{
     team = [
         {
             header: "Member 1",
             points: [
                 "Github handle: ajfoaslkfs"
             ]
         },
         {
             header: "Member 1",
             points: [
                 "Github handle: ajfoaslkfs"
             ]
         },
         {
             header: "Member 1",
             points: [
                 "Github handle: ajfoaslkfs"
             ]
         },
         {
             header: "Member 1",
             points: [
                 "Github handle: ajfoaslkfs"
             ]
         }
     ];

     render(){
         return(
         <div>
            <CardGroup cards={this.team} />            
        </div>
         )
     }
 }

 export default Members;
