import React from 'react';
import classnames from 'classnames/bind';
import s from './Sidebar.styl';
import product from '../../images/free_perfume_product.png';
import shipping from '../../images/shipping.png';

const cx = classnames.bind(s);

export class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <div className={cx('sidebar-product')}>
          <div className={cx('sidebar-product-image')}>
            <img src={product}/>
          </div>
          <div className={cx('sidebar-product-info')}>
            <table className={cx('sidebar-product-table')}>
              <tbody>
                <tr>
                  <td>Monthly subscription</td>
                  <td className={cx('sidebar-product-value')}>$14.95</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td className={cx('sidebar-product-value')}>FREE</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td className={cx('sidebar-product-value')}>$2.35</td>
                </tr>
                <tr>
                  <td>Discount</td>
                  <td className={cx('sidebar-product-value')}>-$5</td>
                </tr>
                <tr>
                  <td>Credit (Balance $100)</td>
                  <td className={cx('sidebar-product-value')}>$50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <table className={cx('sidebar-product-table')}>
            <tbody>
              <tr>
                <td>TOTAL</td>
                <td className={cx('sidebar-product-value')}>$25.00</td>
              </tr>
            </tbody>
          </table>
          <p>Have a <span className={cx('sidebar-product-link')}>coupon code</span>?</p>
        </div>


        <img src={shipping}/>
        <p>You will receive an email confirmation when recipient accepts your gift. Scentbird ships between the 15th and the 18th of every month. Recipient will receive an email confirmation of shipment every month. Please allow 5-7 days for delivery.</p>
      </div>
    );
  }
}
