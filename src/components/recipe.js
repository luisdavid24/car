import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addShipping } from './actions/cartActions'
class Recipe extends Componenet{
    ComponenetWillUnmount(){
        if(this.refs.shipping.checked)
            this.props.substractShipping() 
    }
}
export default Recipe