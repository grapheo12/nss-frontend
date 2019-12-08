import React,{Component} from 'react';
import CardGroup from './Card-group';
import axios from 'axios';

 class Members extends Component{
     constructor(props){
         super(props);

         let team = [
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

         this.state = {
             team: team
         }
     }

     componentDidMount(){
         axios.get("https://nsskgpapi.herokuapp.com/json/team.json")
              .then((res) => {
                  this.setState({
                      team: res.data.team.map(member => (
                          {
                              header: member.name,
                              points: [
                                  `Unit: ${member.unit}`,
                                  `Github Handle: ${member.handle}`
                              ]
                          }
                      ))
                  })
              })
              .catch(err => {
                  console.log(err);
              })
     }


     render(){
         return(
         <div>
            <CardGroup cards={this.state.team} />            
        </div>
         )
     }
 }

 export default Members;
