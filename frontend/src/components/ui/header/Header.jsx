import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className='header flex flex-row justify-between'>
            <Link to={"/orders/1"}>order 1</Link>
            <Link to={"/orders"}>orders</Link>
            <Link to={"/profile"}>profile</Link>
            <Link to={"/auth"}>auth</Link>
        </header>
    );
}

export default Header;
