import React, { Component } from "react";

export default class Modal extends Component {
  renderCartTable = () =>
    this.props.cart.map(product => (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td style={{ maxWidth: "250px" }}>{product.shortDescription}</td>
        <td>
          <img src={product.image} width={50} alt="" />
        </td>
        <td>
          <button
            className="px-2"
            onClick={() => this.props.changeQuantity(product, "-")}
          >
            -
          </button>
          {` ${product.quantity} `}
          <button
            className="px-2"
            onClick={() => this.props.changeQuantity(product, "+")}
          >
            +
          </button>
        </td>
        <td>{`${product.price} $`}</td>
        <td>{`${product.price * product.quantity} $`}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.deleteProduct(product)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));

  render() {
    const { cart } = this.props;

    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cart</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>{this.renderCartTable()}</tbody>
              </table>
              <p className="text-right">
                {`Total Price: 
                ${cart.reduce(
                  (total, product) =>
                    (total += product.quantity * product.price),
                  0
                )}`}
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
