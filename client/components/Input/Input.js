import React from 'react';
import classnames from 'classnames/bind';
import s from './Input.styl';

const cx = classnames.bind(s);

export default class Input extends React.Component {
  render() {
    return (
      <div className={cx('input')}>
        <input type="text" value="test"/>
      </div>
    );
  }
}
