import React, { Component } from 'react'
import '../../App.css'


export default class SwitchBtn extends Component {
    
    state={
        isActive: false
    }

    handleClick = () =>
     this.setState({
          isActive: !this.state.isActive 
        })

    newBackGround  = () =>{
        document.body.style.backgroundImage = `url("https://www.sasiwallpaper.co.za/content/products/12586-black-brick/Black-Brick.jpg")`
        document.body.style.backgroundPosition = 'center'
        // document.body.style.backgroundRepeat= 'no-repeat'
        document.body.style.backgroundSize= 'cover';
        document.body.style.backgroundAttachment= 'fixed';

    }

    render() {

        return (
            <div className="container">

            <div 
                className={
                    !this.state.isActive 
                    ? 
                    (document.body.style.backgroundColor = "white")
                    :
                    (this.newBackGround)()

                }
                onClick={ this.handleClick } >
                <span className="switch"><i className="fas fa-plug"></i></span>                
            </div>

            </div>
        )
    }
}
