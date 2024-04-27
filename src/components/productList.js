import myProducts from '../assets/products.json';
import Products from '../components/productPage';
import '../productPageCSS.css';

import { Container } from "react-bootstrap";


export default function ProductList() {
    return (
    <div class="container-fluid">
        <div class="row">
        <div className="product-list">

            {
                myProducts.map(product => (
                    <Products key={product.id} product={product.product} stock={product.stock} price={product.price}/>
                ))
            }

        </div>
        </div>
    </div>
    );
}