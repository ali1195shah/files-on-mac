import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import CartLogo from './CartLogo'
import '../../App.css'


export default class Header extends Component {


    
    render() {
        return (
            <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                        <NavLink to="/home" style={{textDecoration: "none"}}><span className="logo1">&</span><span className="logo mr-4">Shop</span></NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                        <NavLink className="nav-item nav-link " to="/home">Home</NavLink>
                                        <NavLink className="nav-item nav-link" to="/admin">Admin</NavLink>
                            </div>
                                <div className="navbar-nav ml-auto" >
                                        <CartLogo/>
                                        <NavLink to="/register" className="nav-item nav-link mr-2"><i className="fas fa-sign-in-alt"></i> | Sign up</NavLink>
                                        <NavLink to="/signin" className="nav-item nav-link ml-1 mr-2"><i className="far fa-user"></i> | Login</NavLink>
                                </div>
                        </div>
                        </nav>
            </div>
        )
    }
}


















// ============================================{ to be removed once done}=============================================










// import React, { Component } from 'react'
// // import { Navbar, Nav, Button, Form, FormControl  } from 'react-bootstrap';
// import '../../App.css'
// import { Link, NavLink } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart,faUser,faUserPlus } from '@fortawesome/free-solid-svg-icons'





// export default class Header extends Component {
//     render() {
//         return (
//             <div>

//                     {/* <Navbar bg="dark" expand="lg" variant="dark">
//                     <Navbar.Brand href="#home"><span className="logo1">&</span><span className="logo">Shop</span></Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">



//                         <Nav className="mr-auto">
//                         <Nav.Link href="#home">Home</Nav.Link>
//                         <Nav.Link href="#link">About</Nav.Link>
//                         <Nav.Link href="#link">Products</Nav.Link>
//                         </Nav>

//                         <Nav inline>
//                         <Nav.Link href="#Nothing"component={'AdminPage'} className="mr-2 cart"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
//                         <Nav.Link href="#link" className="mr-2"><FontAwesomeIcon icon={faUserPlus} /> | Sign up</Nav.Link>
//                         <Nav.Link href="#link" className="ml-1 mr-2"><FontAwesomeIcon icon={faUser} /> | Login</Nav.Link>
//                         </Nav>

//                     </Navbar.Collapse>
//                     </Navbar> */}

//                     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                         {/* <Link className="navbar-brand" to="/home">Navbar</Link> */}
//                         <Link to="/home"><span className="logo1">&</span><span className="logo">Shop</span></Link>

//                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//                             <ul className="navbar-nav">
//                             <li>
//                             <Link className="nav-item nav-link active" to="/home">Home <span className="sr-only">(current)</span></Link>
//                             </li>
//                             <li> 
//                             <Link className="nav-item nav-link" to="/about">About</Link>
//                             </li>

//                             <li>
//                             <Link className="nav-item nav-link" to="#">Products</Link>
//                             </li>
//                             </ul>
//                             <ul className="nav navbar-nav ml-auto">
//                             <li>
//                             <Link to="/home" component={'AdminPage'} className="mr-2 cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
//                             </li>
                            
//                             <li>
//                             <Link to="/register" className="mr-2"><FontAwesomeIcon icon={faUserPlus} /> | Sign up</Link>                    
//                             </li>

//                             <li>
//                             <Link to="/signin" className="ml-1 mr-2"><FontAwesomeIcon icon={faUser} /> | Login</Link>
//                             </li>
                            
//                             </ul>
//                         </div>
//                         </nav>






//             </div>
//         )
//     }
// }
