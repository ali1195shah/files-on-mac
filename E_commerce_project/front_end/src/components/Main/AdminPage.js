import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import HeaderAdmin from '../Header/HeaderAdmin';
import swal from 'sweetalert';





class AdminPage extends Component {

    state ={ 
        name: '',
        description: '',
        image: '',
        price: null
    }


    handleChangeName = event=>{
        this.setState({name: event.target.value })
    }
    handleChangeDescription = event=>{
        this.setState({description: event.target.value })
    }
    handleChangeImage = event=>{
        this.setState({image: event.target.value})
    }
    handleChangePrice = event=>{
        this.setState({price: event.target.value})
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.props.makeNewProduct(this.state)
        this.props.history.push('/home')
        
        swal("Good job!", "Your Product Is Added Successfully!", "success");


    }

    render() {
        
        return (
            <div>
                <HeaderAdmin />
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="col-sm-8">
                            <div className="containercard mb-3 mt-4">
                                <div className="container text-center  mt-4">
                    
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput" className="pink-text">Admin | Add Product</label>
                                            <input type="text" className="form-control"  placeholder="Name" onChange={this.handleChangeName}/>
                                        </div>
                                        <div className="form-group">
                                            {/* <label for="formGroupExampleInput2">Description</label> */}
                                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Description" onChange={this.handleChangeDescription}/>
                                        </div> 
                                        <div className="form-group">
                                            {/* <label for="formGroupExampleInput2">Price</label> */}
                                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Price" onChange={this.handleChangePrice}/>
                                        </div>
                                        <div className="form-group">
                                            {/* <label for="formGroupExampleInput2">Image</label> */}
                                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Image" onChange={this.handleChangeImage}/>
                                        </div>
                                        <input type="submit" className="btn buttons-color btn-lg btn-block font-weight-bold" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        
        )
    }
}


export default  withRouter(AdminPage);
