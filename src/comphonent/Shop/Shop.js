import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setproducts] = useState(first10)
    const [cart, setcart]= useState([]);
    const handlerAddProduct = (product)=>{
        console.log(product , 'add me');
        const newCart =[...cart, product];
        setcart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product
                        handlerAddProduct ={handlerAddProduct}
                        product={pd}></Product>)
                }
            </div>
            <div className="card-contaioner">
                <Cart cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Shop;