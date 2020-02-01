import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; // using withRouter to redirect once the form is submitted 
import Header from '../Header/Header';

import '../../App.css';


class CardUi extends Component {
  

    render() {
        return (

            <div className="col-sm-4 py-2 px-2">
                        <div className="card card-body h-100 mt-4">
                        <NavLink to={"/item/" + this.props.id}> 
                        <img src={this.props.image} className="card-img-top" alt="169824162"/>     {/* Image */}
                        </NavLink>
                        <div className="card-body ">
                        <h5 className="card-title text-dark ">{this.props.name} {}                 {/* Name */}
                        <span className="badge badge-warning">New</span>
                        </h5>
                        <h5 className="card-title text-info">${this.props.price}</h5>              {/* Price */}
                        <p className="card-text">{this.props.description}</p>                      {/* Descr */}
                        </div>
                        <div>
                        <button type="button" className="btn  btn-lg btn-block font-weight-bold buttons-color"
                        >Add to cart</button>
                        </div>
                        </div>                 
                    </div>

                    
        )
    }
}

export default CardUi;


