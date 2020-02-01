import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';



export default class CardInfo extends Component {


    render() {
        return (
            <div>
            <Header/>
            <div className="d-flex justify-content-center align-items-center">
            <div className="col-sm-4">
                <div className="card mb-3 mt-4">
                    <img src="http://iamgalla.com/wp-content/uploads/2015/01/DSC_5669-edit.jpg" className="card-img-top img-fluid" alt="xyz"/>
                    <div className="card-body">
        <h5 className="card-title text-secondary font-weight-bold">{this.props.products.name}</h5>
                        <h5 className="card-title text-info font-weight-bold">{this.props.products.price}</h5>
        <p className="card-text">{this.props.products.description}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <button type="button" className="btn btn-outline-dark btn-lg btn-block font-weight-bold">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
            </div>
        )
    }
}
