import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className='nav-item'>
                        <Link className='nav-link active' to='/'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link active' to='/listado'>Listado</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link active' to='/contacto'>Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;