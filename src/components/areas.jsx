import React from 'react';
import { Link } from 'react-router-dom';

const Areas = (props) => {
    return (
        <li >
        { <Link class="dropdown-item"  to={{pathname: "/register-options/" + props.link}}>{props.text}</Link> }
        </li>
    )
}

export {
    Areas
}