import React from 'react';
import Input from '../../components/Input/Input';
import classnames from 'classnames/bind';
import s from './Main.styl';

const cx = classnames.bind(s);

export class Main extends React.Component {
  render() {
    return (
      <div className={cx('main')}>
        <p className={cx('main-title')}>Month-to-month subscription</p>
        <p>Billed monthly. Renews automatically, cancel any time. Free shipping.</p>
        <p className={cx('main-subtitle')}>Create account</p>
        <Input/>
        <Input/>
        <p className={cx('main-subtitle')}>Shipping address</p>
        <p className={cx('main-subtitle')}>Secure credit card payment</p>
      </div>
    );
  }
}
