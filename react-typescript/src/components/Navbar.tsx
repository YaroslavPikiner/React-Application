/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

    return (
        <>

            <nav>
                <div className="nav-wrapper indigo lighten-4">
                    <a href="#" className="brand-logo left">ReactTs</a>
                    <ul className="right hide-on-med-and-down">
<<<<<<< HEAD
                        <li><a href="#">  <Link to='/todo' className='logo'>
                            Todo
                        </Link></a></li>
                        <li><a href="#">  <Link to='/charts' className='logo'>
                            Charts
                        </Link></a></li>
                        <li className="active"><a href="#">  <Link to='/counter' className='logo'>
                            Counter
                        </Link></a></li>
                        <li className="active"><a href="#">  <Link to='/form' className='logo'>
                            Form
                        </Link></a></li>
=======
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
>>>>>>> 221627c7c9dd459009914c5273f7ab8c4e3e3375
                    </ul>
                </div>
            </nav>
        </>
    )
}


export default Navbar;