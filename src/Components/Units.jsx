import React,{Component} from 'react';
import CardGroup from './Card-group';
import axios from 'axios';
import { Lines, Sugar } from 'react-preloaders';

 class Units extends Component{
     constructor(props){
         super(props)

         this.state = {
             units: [],
	     preloader: true
         }
     }

     componentDidMount(){
         axios.get("https://nsskgpapi.herokuapp.com/json/units.json")
            .then((res) => {
                this.setState({
                    units: res.data.units.map((unit) => (
                        {
                            "header": `Unit - ${unit.id}`,
                            "points": [
                                `Program Officer: ${unit.officer}`,
                                `Leader(s): ${unit.leaders.join(', ')}`
                            ]
                        }
                    )),
		    preloader: false
                });
            })
            .catch((err) => {
                this.setState({
                        units: []
                    })
                })
     }
                   
     render(){
         console.log(this.state)
         return(

         <div>

	     <CardGroup cards={this.state.units} />        
	    <Sugar background="#202020" color="white" customLoading={this.state.preloader} />

        </div>
         )
     }
 }

 export default Units;
