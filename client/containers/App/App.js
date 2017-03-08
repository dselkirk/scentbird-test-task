import React from 'react';
import classnames from 'classnames/bind';
import s from './App.styl';

import * as logo from '../../images/logo.png';
import { Main } from '../../containers/Main/Main.js';
import { Sidebar } from '../../containers/Sidebar/Sidebar.js';

const cx = classnames.bind(s);

export class App extends React.Component {
  render() {
    return (
      <div className={cx('page')}>
          <img className={cx('page-logo')} src={logo}/>
          <Sidebar/>
          <Main/>
      </div>
    );
  }
}
