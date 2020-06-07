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
    
}    
export default cartReducer;