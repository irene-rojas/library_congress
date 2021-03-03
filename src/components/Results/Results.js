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
                <p>Original format: {props.format}</p>
                <p>{props.description}</p>
                <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-secondary stretched-link" role="button">See original</a>
                {/* stretched-link is bootstrap; turns entire card into a link, rather than trying to wrap <a> around the card */}
            </div>

        </content>
    )
}

export default Results;