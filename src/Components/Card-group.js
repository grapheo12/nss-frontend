import React from 'react';
import Card from './Cards';

export default function CardGroup(props){
    let containers = [];
    let tot_fill = Math.floor(props.cards.length / 3) * 3;

    let i = 0;
    for (i = 0; i < tot_fill; i += 3){
        containers.push((
            <div className="call-outs-container">
                <Card header={props.cards[i].header} points={props.cards[i].points} />
        
                <Card header={props.cards[i + 1].header} points={props.cards[i + 1].points} />

                <Card header={props.cards[i + 2].header} points={props.cards[i + 2].points} />
            </div>
        ));
    }
    
    let elems = [];
    for (; i < props.cards.length; i++){
        elems.push((<Card header={props.cards[i].header} points={props.cards[i].points} />));
    }

    containers.push((
        <div className="call-outs-container">
        {elems}
        </div>
    ));

    console.log(containers);

    return (
        <div>
         {containers} 
        </div>
    );
}
