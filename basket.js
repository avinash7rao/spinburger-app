export default function Basket() {
  return (
    <div id="basket" className="tm-page-content">
      <div className="tm-list-item">
        <div className="tm-black-bg tm-list-item-text">
          <h3 className="tm-list-item-name">
            Total
            <span id="checkoutPrice" className="tm-list-item-price">
              $0
            </span>
          </h3>
        </div>
      </div>
      <form className="checkout-button" action="javascript:Checkout()">
        <p>
          <button>Checkout</button>
        </p>
      </form>
    </div>
  );
}
