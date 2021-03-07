import React from 'react';
// import "./Results.css";

const Pagination = (props) => {
    return (
        <content className="pagesContent">

            <nav aria-label="Page navigation">

            <ul className="pagination justify-content-center">

                {/* <li classNameName="page-item disabled">
                    <a classNameName="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li> */}

                <li className="page-item">
                    <a className="page-link" href="https://www.google.com/" aria-disabled="true">First</a>
                </li>

                <li className="page-item">
                    <a className="page-link" href="https://www.google.com/">1</a>
                </li>

                <li className="page-item">
                    <a className="page-link" href="https://www.google.com/">2</a>
                </li>

                <li className="page-item">
                    <a className="page-link" href="https://www.google.com/">3</a>
                </li>

                <li className="page-item">
                    <a className="page-link" href={props.nextPage}>Next</a>
                </li>

                <li className="page-item">
                    <a className="page-link" href={props.lastPage}>Last</a>
                </li>
                
            </ul>

            </nav>

        </content>
    )
}

export default Pagination;