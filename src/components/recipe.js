import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addShipping } from './actions/cartActions'
class Recipe extends Componenet{
    //El componenetWiilUnmout se va desmontar
    ComponenetWillUnmount(){
        if(this.refs.shipping.checked)
            this.props.substractShipping() 
    }
    //Aqui se va a manejar los click con el handleChecked
    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }
    render(){
        return(
            <div>
                <div >
                    <li >
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li>
                        <li ><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div >
                        <button>Checkout</button>
                    </div>
                 </div>
        )
    }
}
//Recibe los datos que necesita el componente almacenar
const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}
//Permite crear funciones para cuando que se usaran cuando se necesite 
const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Recipe)