import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING} from './action-types/cart-actions'
//Agregar accion al carro
export const addTocart=(id)=>{
    return{
        type:ADD_TO_CART,
        id
    }
} 
//eliminar la acción del elemento
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    
    }
}
//resta la acción qt
export const subtractQuantity=(id)=>{
    return{
        type:SUB_QUANTITY,
        id
    }
}