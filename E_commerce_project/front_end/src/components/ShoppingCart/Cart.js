import React, { Component } from 'react';
import swal from 'sweetalert';


export default class Cart extends Component {

    state={
        counter: 0,
        price: 150,
        total: 0
    }
    increment =()=>{
        this.setState({counter: this.state.counter + 1 })
    }

    decrement =()=>{
        if (this.state.counter > 0){
            this.setState({counter: this.state.counter - 1 })
        }else{
            swal("You forgot to add a quantity!", "Please add a quantity", "error")

        }
    }

    totalPrice = () => {
        this.setState({total:(this.state.counter) * (this.state.price) })

    }



    render() {
        return (
            <div className="container w-75 p-3 bgWhite">
            <div className="container border border-pink">
            <div className="row my-1 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img 
                    src="https://images-na.ssl-images-amazon.com/images/I/71UEGismafL._AC_UY780_.jpg"
                    style={{width:"5rem", height: "5rem"}}
                    className="img-fluid"
                    alt="product"
                    />
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2">
                    <span className="d-lg-none ">Product :</span>
                    Shoes for men
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2">
                    <span className="d-lg-none">Price :</span>
                    $3000
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center my-2">
                    <span className="btn btn-incDec mx-1" onClick={this.decrement}>-</span>
                    <span className="btn btn-incDec mx-1">{this.state.counter}</span>
                    <span className="btn btn-incDec mx-1" onClick={this.increment}>+</span>                
                    <span className="btn btn-remove mx-1"><i className="far fa-trash-alt"></i></span>
                </div>
                </div>
                </div>
 
            </div>
    <h1>Total price:{this.state.total}</h1>
            </div>
    
        )
    }
}







