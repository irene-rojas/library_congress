import React from 'react';
import "./Results.css";

const Results = (props) => {
    return (

        <content className="resultsContent">

            <strong>{props.title}</strong>
            <br/>
            <p>{props.description}</p>
            <img src={props.image} alt={props.title} />
            <br/>
        </content>

    )
}

export default Results;