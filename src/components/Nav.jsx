import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
    componentDidMount() {
        const nav = document.querySelector('.nav');
        const navLinks = document.querySelector('.nav-links-ul');
        const navLinksLi = document.querySelector('.nav-links-ul li');
        const oneId = document.querySelector('#one');
        const twoId = document.querySelector('#two');
        const threeId = document.querySelector('#three');

        nav.addEventListener('click', () =>{
            navLinks.classList.toggle('nav-active');
        })
        navLinksLi.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
        })
        oneId.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
        })
        twoId.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
        })
        threeId.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
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
                            <li><NavLink id="one" to="/episodes">Episodes</NavLink></li>
                            <li><NavLink id="two" to="/quotes">Quotes</NavLink></li>
                            <li><NavLink id="three" to="/deaths">Deaths</NavLink></li>
                        </ul>
                    </div>
            </React.Fragment>
        )
    }
}

export default Nav;