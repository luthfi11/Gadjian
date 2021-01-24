import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import Gadjian from '../../image/gadjian-icon.png';
import Ava from '../../image/ava.png';
import Home from '../../image/home.png';
import Personnel from '../../image/personnel.png';
import Attendace from '../../image/attendance.png';

class Navbar extends React.Component {

    _toggleDrawer(event) {
        const drawerElement = document.querySelector('#drawer');
        drawerElement.classList.toggle('open');
        event.stopPropagation();
    }

    render() {
        return (
            <>
                <div className="navbar-header">
                    <button id="hamburger" aria-label="Open Navigation" onClick={this._toggleDrawer}>☰</button>
                    <Link className="navbar-brand" to="/"><img src={Gadjian} alt="Gadjian" /></Link>

                    <div className="user-div">
                        <p className="hide-mobile">Hallo, <strong>Gadjian User</strong></p>
                        <img className="avatar" src={Ava} alt="Avatar" />
                    </div>
                </div>
                
                <nav id="drawer">
                    <ul>
                        <li>
                            <NavLink exact to="/" onClick={this._toggleDrawer}>
                                <img src={Home} alt="Home" />Beranda
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/personnel" onClick={this._toggleDrawer}>
                                <img src={Personnel} alt="Personnel" />Personnel List
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/attendance" onClick={this._toggleDrawer}>
                                <img src={Attendace} alt="Attendace" />Daily Attendance
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default Navbar;
