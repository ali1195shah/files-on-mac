import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HeaderAdmin from '../Header/HeaderAdmin';
import UpdateCardUI from '../Cards/UpdateCardUI';
import Footer from '../Footer/Footer';
import swal from 'sweetalert';


class AdminUpdatePro extends Component {
    state = {
        color: "#6ac304"
    }
    onClick =(event)=>{
        event.preventDefault();
         this.props.updateProduct(this.props.product)
            swal("Ok!", "Your product is removed!", "error");
    }

    render(){
        const renderProducts = this.props.products.map(product => (
            
        <UpdateCardUI
        updateProduct={this.props.updateProduct}
        name={product.name}
        image={product.image}
        description={product.description}
        price={product.price}
        productId={product.id}
        key={`${product.name}-${product.id}`} />
    ))        
        return (
            <div>
            <HeaderAdmin />
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



export default  withRouter(AdminUpdatePro);
