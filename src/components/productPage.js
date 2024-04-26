import React from "react"; // can be removed if using React ver 17 or above
import "bootstrap/dist/css/bootstrap.css";
import '../assets/productPageCSS.css';
import '../assets/products.json';

import { Container } from "react-bootstrap";

export default function Products(props) {
  return (
    <div className="product">
    <div1 className="product-product">
        Product: {props.product}
    </div1>

    <div2 className="product-stock">
        <br></br>Stock: {props.stock}
    </div2>

    <div className="movie-price">
        Price: {props.price}
    </div>
 </div>
  );
}


/*
export default function Products() {
  return (
    <div>
      <h3>Our Products</h3>

      <div class="container">
        <div class="row">
          <div class="border bg-info col-lg-4 col-md-4 col-sm-3">
            <h3>Product One</h3>
            <p>Cost 1</p>
            <p>In Stock 1</p>
          </div>

          <div class="border bg-info col-lg-4 col-md-4 col-sm-3">
            <h3>Product 2</h3>
            <p>Cost 2</p>
            <p>In Stock 2</p>
          </div>

          <div class="border bg-info col-lg-4 col-md-4 col-sm-3">
            <h3>Product 3</h3>
            <p>Cost 3</p>
            <p>In Stock 3</p>
          </div>

          <div class="border bg-info col-lg-4 col-md-4 col-sm-3">
            <h3>Product 4</h3>
            <p>Cost 4</p>
            <p>In Stock 4</p>
          </div>

          <div class="border bg-info col-lg-4 col-md-4 col-sm-3">
            <h3>Product 5</h3>
            <p>Cost 5</p>
            <p>In Stock 5</p>
          </div>

          <div class="border bg-info col-lg-4 col-md-4 col-sm-3">
            <h3>Product 6</h3>
            <p>Cost 6</p>
            <p>In Stock 6</p>
          </div>

          <div class="border bg-info col-lg-4 col-md-4 col-sm-3">
            <h3>Product 7</h3>
            <p>Cost 7</p>
            <p>In Stock 7</p>
          </div>

          <div class="border bg-info col-lg-4 col-md-4 col-sm-3">
            <h3>Product 8</h3>
            <p>Cost 8</p>
            <p>In Stock 8</p>
          </div>

          <div class="border bg-info col-lg-4 col-md-4 col-sm-3">
            <h3>Product 9</h3>
            <p>Cost 9</p>
            <p>In Stock 9</p>
          </div>

          <div class="border bg-info col-lg-4 col-md-4 col-sm-3">
            <h3>Product 10</h3>
            <p>Cost 10</p>
            <p>In Stock 10</p>
          </div>
        </div>
      </div>

    <h3><a href="" target="_blank">Proceed to Check Out</a></h3>

    </div>
  );
}

*/