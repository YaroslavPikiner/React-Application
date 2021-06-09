import React from 'react'

const Navbar: React.FC = () => {

    return (
        <>

            <nav>
                <div className="nav-wrapper indigo lighten-4">
                    <a href="#" className="brand-logo center">ReactTs</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#">Todo</a></li>
                        <li><a href="#">About Us</a></li>
                        <li className="active"><a href="#">Counter</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}


export default Navbar;