import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { addToCart } from './actions/cartActions'
class Home extends Component{
    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>

            )
        })
        return(
            <div >
                <h3>Our items</h3>
                <div>
                    {itemList}
                </div>
            </div>
        )
    }   
}
export default Home;