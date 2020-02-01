import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CardUi from '../Cards/CardUi';
import { withRouter, NavLink } from 'react-router-dom'; // using withRouter to redirect once the form is submitted 

import Cart from '../ShoppingCart/Cart';

class MainStyle extends Component {
    state = {
        color: "#ff1493"
    }
    
    render(){
        
        const renderProducts = this.props.products.map(product => (
        <CardUi
        id={product.id}
        name={product.name}
        image={product.image}
        description={product.description}
        price={product.price}
        key={product.id} 
        />
    ))        
        return (
            <div>
            <Header />
            <div className="container">
            <div className="row">
                {renderProducts}
            </div>
            </div>
            <Footer colorize={this.state.color} /> 
            </div>
        )
    }
}


export default withRouter(MainStyle)
