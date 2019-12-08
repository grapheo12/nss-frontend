import React,{Component} from 'react';
import CardGroup from './Card-group';

 class Units extends Component{
     units = [
         {
             header: "Unit 1",
             points: [
                 "Leader: ajfoaslkfs"
             ]
         },
         {
             header: "Unit 1",
             points: [
                 "Leader: ajfoaslkfs"
             ]
         },
         {
             header: "Unit 1",
             points: [
                 "Leader: ajfoaslkfs"
             ]
         },
         {
             header: "Unit 1",
             points: [
                 "Leader: ajfoaslkfs"
             ]
         }
     ];

     render(){
         return(
         <div>
            <CardGroup cards={this.units} />            
        </div>
         )
     }
 }

 export default Units;
