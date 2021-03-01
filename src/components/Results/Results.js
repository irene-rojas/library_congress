import React from 'react';
import "./Results.css";

const Results = (props) => {
    return (

        <content className="resultsContent card">

            <div className="card-body">

                <strong>{props.title}</strong>
                <br />
                <img src={props.image} alt={props.title} />
                <br/>
                <p>{props.description}</p>

            </div>
        </content>

    )
}

export default Results;