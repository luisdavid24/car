import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import Recipe from './recipe'

 
class Cart extends Component{
    //Aqui se elimina el articulo de forma completa
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //Aqui se van a cambiar las cantidades
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
     //Quitar la cantidad
     handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li key={item.id}>
                                    <div > 
                                        <img src={item.img} alt={item.img} />
                                    </div>
                                
                                    <div>
                                        <span >{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div >
                                            <Link to="/cart"><i  onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i  onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button  onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div >
                <div >
                    <h5>You have ordered:</h5>
                    <ul>
                        {addedItems}
                    </ul>
                </div> 
                <Recipe />          
            </div>
       )
    }
              
}
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)