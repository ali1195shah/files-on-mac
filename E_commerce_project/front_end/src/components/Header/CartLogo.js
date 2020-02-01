import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


export default class CartLogo extends Component {
    render() {
        return (
            <div>
             <NavLink to="/cart" className="nav-item nav-link mr-2 cart"><i className="fab fa-opencart"></i></NavLink>
            </div>
        )
    }
}
