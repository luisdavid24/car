import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';
class Home extends Component{
    //Esto el handleClick se encarga de manejar cuando da click
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            //Aqui estamos guardado toda la informacion en una variable tipo let que
            //que en este caso se va sobre escribir y hace la funcion de un arreglo. 
            return(
                <div key={item.id}>
                        <div >
                            <img src={item.img} alt={item.title}/>
                            <span >{item.title}</span>
                            <span to="/" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div>
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
//Recibe el estado (o sea los datos) devuelve un objeto
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
}
//Permite crear funciones que se usan cuando se llamas
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)