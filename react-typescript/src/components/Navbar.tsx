/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <>
            <nav >
                <div className="nav-wrapper indigo lighten-4">
                    <a href="#" className="brand-logo left"><Link to='/' className='logo'>
                        React Ts App
                    </Link></a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <a href="#">  <Link to='/todo' className='logo'>
                                Todo
                            </Link>
                            </a>
                        </li>
                        <li>
                            <a href="#">  <Link to='/charts' className='logo'>
                                Charts
                            </Link>
                            </a>
                        </li>
                        <li >
                            <a href="#">  <Link to='/counter' className='logo'>
                                Counter
                            </Link>
                            </a>
                        </li>
                        <li >
                            <a href="#">  <Link to='/forms' className='logo'>
                                Forms
                            </Link>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Link to='/articles' className='logo'>
                                    Articles
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Link to='/space' className='logo'>
                                    Space Station
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Link to='/books' className='logo'>
                                    Book Store
                                </Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}


export default Navbar;