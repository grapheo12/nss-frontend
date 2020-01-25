import React,{Component} from 'react';
import CardGroup from './Card-group';
import axios from 'axios';
import { Lines, Sugar } from 'react-preloaders';

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
             team: team,
	     preloader: true
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
                      )),
			preloader: false
                  })

              })
              .catch(err => {
                  console.log(err);
              })
     }


     render(){
         return(
         <div>
            	<Sugar background="#202020" color="white" customLoading={this.state.preloader} />

            <CardGroup cards={this.state.team} />            
        </div>
         )
     }
 }

 export default Members;
