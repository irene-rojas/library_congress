import React from 'react';
import "./Results.css";
import ReadMoreReact from 'read-more-react';

const Results = (props) => {
    return (
        <div className="resultsContent card">

            <div className="card-body">

                <strong>{props.title}</strong>
                <br />
                <img src={props.image} alt={props.title} />
                <br/>
                <p>Original format: {props.format}</p>

                <ReadMoreReact
                    text={`${props.description}`}
                    readMoreText="Expand"
                />
                
                <br/>
                <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-secondary" role="button">See original</a>
                {/* className="stretched-link" is bootstrap; turns entire card into a link, rather than trying to wrap <a> around the card */}
            </div>

        </div>
    )
}

export default Results;