import React, { Component } from 'react'
import EventsList from './EventsList'

const Header = (props) => {
    const { branding } = props;
    return (
        <nav className='navbar navbar-dark bg-dark mb-3 py-0'>
            <div className="conatiner"></div>
            <a href="/" className="navbar-brand"> {branding}</a>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="/" className='nav-link'> Home </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header

