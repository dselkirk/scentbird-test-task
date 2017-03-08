import React from 'react';
import product from '../../images/free_perfume_product.png';
import shipping from '../../images/shipping.png';

export class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <img src={product}/>
        <p>
          <span>Monthly subscription</span>
          <span>$14.95</span>
        </p>
        <p>
          <span>Shipping</span>
          <span>FREE</span>
        </p>
        <p>
          <span>Tax</span>
          <span>$2.35</span>
        </p>
        <p>
          <span>Discount</span>
          <span>-$5</span>
        </p>
        <p>
          <span>Credit (Balance $100)</span>
          <span>$50</span>
        </p>
        <p>
          <span>Total</span>
          <span>$25.00</span>
        </p>
        <p>Have a coupon code?</p>

        <img src={shipping}/>
        <p>You will receive an email confirmation when recipient accepts your gift. Scentbird ships between the 15th and the 18th of every month. Recipient will receive an email confirmation of shipment every month. Please allow 5-7 days for delivery.</p>
      </div>
    );
  }
}
