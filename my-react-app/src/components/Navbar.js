
import React from 'react';
import {Link} from 'react-router-dom';

// class Navbar extends Component {
    const Navbar =()=>{
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">MyApp</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                    </ul>

                </div>
            </nav>
        );
}

export default Navbar;
