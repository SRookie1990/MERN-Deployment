import React from 'react';
import { Link } from '@reach/router';

const Fail = (props) => {
    return (
        <div>
           <h3>We're sorry, but we could not find the author you are looking for. If you would like to add this author, <Link to={"/authors/new"}>Click here!</Link></h3>
        </div>
    )
}

export default Fail;
