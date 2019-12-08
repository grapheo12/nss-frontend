import React from 'react';

export default function Card(props){

    return (
        <div className="call-out">
            <h4>{ props.header }</h4>
            <ul>{ props.points.map(point =>
                (<li>{ point }</li>)
            ) }</ul>
        </div>
    );
}
