import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class Subtotal extends Component {
    render() {
        return (
            <div className="container w-75 p-3">
            <h3>Subtotal</h3>

            <div className="container border">
            <div className="row my-1 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <h2>Total</h2>
                    <h2 >0</h2>
                    <h2 >Proceed</h2>
                </div>
                </div>

                
 
            </div>
            </div>
    
        )
    }
}







