/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

    return (
        <>

            <nav>
                <div className="nav-wrapper indigo lighten-4">
                    <a href="#" className="brand-logo center">ReactTs</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#">  <Link to='/todo' className='logo'>
                            Todo
                        </Link></a></li>
                        <li><a href="#">  <Link to='/charts' className='logo'>
                            Charts
                        </Link></a></li>
                        <li className="active"><a href="#">  <Link to='/counter' className='logo'>
                            Counter
                        </Link></a></li>
                        <li className="active"><a href="#">  <Link to='/forms' className='logo'>
                            forms
                        </Link></a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}


export default Navbar;