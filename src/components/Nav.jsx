import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
    componentDidMount() {
        const nav = document.querySelector('.nav');
        const navLinks = document.querySelector('.nav-links-ul');

        nav.addEventListener('click', () =>{
            navLinks.classList.toggle('nav-active');
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="nav" id="nav">
                    <div className="burger one"></div>
                    <div className="burger two"></div>
                    <div className="burger three"></div>
                </div>
                    <div className="nav-links">
                        <ul className="nav-links-ul">
                            <li><Link to="/">Home</Link> </li>
                            <li><NavLink to="/episodes">Episodes</NavLink></li>
                            <li><NavLink to="/quotes">Quotes</NavLink></li>
                            <li><NavLink to="/deaths">Deaths</NavLink></li>
                        </ul>
                    </div>
            </React.Fragment>
        )
    }
}

export default Nav;