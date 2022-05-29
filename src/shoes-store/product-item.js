import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { product, addProduct } = this.props;

    return (
      <div className="card mb-4">
        <div class="img-box">
          <img
            className="card-img-top"
            src={product.image}
            alt={`image ${product.id}`}
          />
        </div>
        <div className="card-body">
          <a href="#" className="card-title">
            {product.name}
          </a>
          <p className="card-title--alias">{product.alias}</p>
          <p className="card-price">{`$ ${product.price}`}</p>
          <button className="btn btn-dark" onClick={() => addProduct(product)}>
            <i className="fa-solid fa-cart-plus mr-1"></i> Add to Cart
          </button>
        </div>
      </div>
    );
  }
}
