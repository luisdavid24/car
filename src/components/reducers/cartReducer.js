import Item1 from '../../images/bananas.jpg'
import Item2 from '../../images/fresas.jpg'
import Item3 from '../../images/magos.jpg'
import Item4 from '../../images/peras.jpg'
import Item5 from '../../images/sandia.jpg'
const initState={
    items:[
        {id:1,title:'Banana', desc: "soy una banana", price:110,img:Item1},
        {id:2,title:'fresas', desc: "somos fresas", price:210,img:Item2},
        {id:3,title:'Mangos', desc: "soy una mango", price:110,img:Item3},
        {id:4,title:'Peras', desc: "somos peras", price:510,img:Item4},
        {id:1,title:'Sandia', desc: "mira soy una sandia", price:510,img:Item5},
    ],
    addedItems:[],
    total: 0
}
const cartReducer=(state=initState,action)=>{
    //Componente interior del hogar
    if(action.type===ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //compruebe si el ID de la acción existe en los artículos agregados
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {   addedItem.quantity += 1 
            return{
               ...state,
                total: state.total + addedItem.price 
                 }
       }else{
            addedItem.quantity = 1;
            //Calculando el total
            let newTotal = state.total + addedItem.price 
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
        }  
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculando el total 
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
}    
export default cartReducer;