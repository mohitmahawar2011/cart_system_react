import {createContext, useContext, useReducer} from 'react';
// import { faker } from '@faker-js/faker';
import faker from 'faker';
import CartReducers  from './CartReducers';
import { productReducer } from './CartReducers';


const Cart = createContext();
// faker.seed(99);

const Context = ({children}) =>{
    // console.log(faker)
    const products = [...Array(20)].map(()=>({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    }));
    console.warn(products)

    const [state, dispatch] = useReducer(CartReducers, {
        products:products,
        cart:[]
    });

    const [productState, productDispatch] = useReducer(productReducer, {
        byStack: false,
        byFastDelivery: false,
        byRating:0,
        searchQuery:"", 
    })

    return <Cart.Provider value={{state, dispatch, productState, productDispatch}}>{children}</Cart.Provider>
};

export default Context;

export const CartState = () => {
    return useContext(Cart)

}