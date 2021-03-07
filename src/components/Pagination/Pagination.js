import React from 'react';
// import "./Results.css";

const Pagination = (props) => {
    return (
        <content className="pagesContent">

            <nav aria-label="Page navigation example">

            <ul class="pagination justify-content-center">

                <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li>

                <li class="page-item">
                    <a class="page-link" href={props.pageUrl}>{props.pageNum}</a>
                </li>

                <li class="page-item">
                    <a class="page-link" href={props.pageUrl}>{props.pageNum}</a>
                </li>

                <li class="page-item">
                    <a class="page-link" href="#">2</a>
                </li>

                <li class="page-item">
                    <a class="page-link" href="#">3</a>
                </li>

                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>

            </nav>

        </content>
    )
}

export default Pagination;