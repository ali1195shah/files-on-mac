import React from 'react';
import MainStyle from './components/Main/MainStyle';
import AdminPage from './components/Main/AdminPage';
import CardUi from './components/Cards/CardUi';
import Header from './components/Header/Header';

import SignIn from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';
import Default from './components/Main/Default';
import CartList from './components/ShoppingCart/CartList';

import {BrowserRouter, Route, Switch } from 'react-router-dom';



import './App.css';
import AdminDeleteProducts from './components/Main/AdminDeleteProducts';
import AdminUpdatePro from './components/Main/AdminUpdatePro';

class App extends React.Component {

        state = {
                  products: [],
                  displayProducts: [],
                  counter:0,
                  token: localStorage.token,
                loggedInUserId: localStorage.userId,
        }


        // setUser= userInformation =>{
        //         this.setState({ user: userInformation})
        // }

        componentDidMount(){
                fetch(`http://localhost:3000/products`)
                    .then(r => r.json())
                    .then(data => { this.setState({ products: data, displayProducts: data }) })         
        }

        makeNewProduct = (newProduct) => {
                fetch(`http://localhost:3000/products`, 
                {
                method: 'POST',
                headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                       name: newProduct.name,
                       description: newProduct.description,
                       price: newProduct.price,
                       image: newProduct.image
                })
                })
                .then(res => res.json())
                .then(data => {
                        this.setState({
                                products: [...this.state.products, data],
                                displayProducts: [...this.state.products, data]
                        })

                })
                .catch(err => console.log(err))
        }

        deleteProduct =(id)=>{
                fetch(`http://localhost:3000/products/${id}`, {
                  method: 'DELETE',
                  headers: {
                    'content-type': 'application/json'
                  }
                })
                .then()
                this.setState({
                        displayProducts: this.state.displayProducts.filter(product => product.id !== id) 
                })
        }


        updateProduct = (product)=>{
          fetch(`http://localhost:3000/products/${product.id}`, {
                   method: 'PATCH',
                   headers: {
                           'content-type': 'application/json'
                   },
                   body: JSON.stringify({
                        name: product.name,
                        description: product.description,
                        price: product.price,
                        image: product.image
                   })
                })
           .then(r => r.json())
           .then(updatedProduct => {

               this.setState({
                       products: this.state.products.map(product => product.id !== updatedProduct.id ? product : updatedProduct),
                       displayProducts: this.state.products.map(product => product.id !== updatedProduct.id ? product : updatedProduct)            
               })

                 })
        }


        handleItem=(id)=>{
                const item = this.state.products.find((product) => product.id === id)
                console.log(item)

        }

        addToCart = ()=>{
                this.setState({ counter: this.state.counter + 1 })
        }

        render(){
          return (

      <BrowserRouter>
        <Switch>                      
              <Route exact path={"/home"} activeClassName="active">
                 <MainStyle handleItem={this.handleItem} products={this.state.displayProducts} counter={this.state.counter}/>
                 <CardUi addToCart={this.addToCart}/>
              </Route >  
              


              <Route  path={"/admin"} activeClassName="active">
                 <AdminPage makeNewProduct={this.makeNewProduct} />
              </Route>

              <Route  path={"/delete"} activeClassName="active">
                <AdminDeleteProducts products={this.state.displayProducts} deleteProduct={this.deleteProduct}/>
              </Route >

              <Route  path={"/update"} activeClassName="active">
                <AdminUpdatePro products={this.state.products} updateProduct={this.updateProduct}/>
              </Route >


              <Route path={"/signin"} activeClassName="active">
                <SignIn />
              </Route>

              <Route path={"/item/:id"} activeClassName="active">
                {this.renderItem}
              </Route>
              <Route  path={"/cart"} component={CartList} activeClassName="active"/>




              {/* AdminUpdatePro */}

              {/* <Route  path={"/item"} component={CardInfo} activeClassName="active"/> */}
              <Route path={"/register"} component={SignUp} activeClassName="active"/>
              <Route component={Default} activeClassName="active"/>
        </Switch>

      </BrowserRouter>

      )}
      renderItem = (renderParams) => {
        const id = parseInt(renderParams.match.params.id)
        let product = this.state.products.find(product => product.id === id)
        return <CardUi 
        id={product.id}
        // handleItem={this.props.handleItem} 
        name={product.name}
        image={product.image}
        description={product.description}
        price={product.price}
        key={product.id} />
}
}



export default App;
