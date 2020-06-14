import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { addToCart } from './actions/cartActions'
class Home extends Component{
    render(){
        let itemList = this.props.items.map(item=>{
            //Aqui estamos guardado toda la informacion en una variable tipo let que
            //que en este caso se va sobre escribir y hace la funcion de un arreglo. 
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