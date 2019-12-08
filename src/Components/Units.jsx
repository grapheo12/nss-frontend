import React,{Component} from 'react';
import CardGroup from './Card-group';
import axios from 'axios';


 class Units extends Component{
     constructor(props){
         super(props)

         this.state = {
             units: []
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
                    ))
                })
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
        </div>
         )
     }
 }

 export default Units;
