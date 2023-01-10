import { Link } from 'react-router-dom';

const AreasGr = (props) => {
    return (
        <li >
        { <Link class="dropdown-item"  to={{pathname: "/options-grafics/" + props.link}}>{props.text}</Link> }
        </li>
    )
}

export {
    AreasGr
}