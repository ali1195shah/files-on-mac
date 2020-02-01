import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Cart from './Cart';
import Subtotal from './Subtotal';


export default class CartList extends Component {
    render() {
        return (
            <div>
            <Header />
                <Cart/>
                <Cart/>
                <Cart/>
               
                <Subtotal/>

            <Footer /> 
            </div>


        )
    }
}







