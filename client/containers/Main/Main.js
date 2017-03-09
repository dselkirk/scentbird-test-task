import React from 'react';
import Input from '../../components/Input/Input';

export class Main extends React.Component {
  render() {
    return (
      <div>
        <p>Month-to-month subscription</p>
        <p>Billed monthly. Renews automatically, cancel any time. Free shipping.</p>
        <p>Create account</p>
        <Input/>
        <Input/>
        <p>Shipping address</p>
        <p>Secure credit card payment</p>
      </div>
    );
  }
}
