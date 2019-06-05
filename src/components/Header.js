import React from 'react';
import { LinkTo } from './utils';
import '../css/header.css';

const HeaderButton = ({setMobileList}) => 
  <button className='header-button' onClick={setMobileList}>
    <div className='header-smallbar' />
    <div className='header-smallbar' />
    <div className='header-smallbar' />
  </button>

const HeaderList = () =>
  <ul className='header-list'>
    <li>
      <LinkTo path='/projects'>Projects</LinkTo>
    </li>
    <li>
      <LinkTo path='/study'>Study</LinkTo>
    </li>
    <li>
      <LinkTo path='/interest'>interest</LinkTo>
    </li>
    <li>
      <a href='https://github.com/hongjisung'>
        <img className='header-img' src={require('../img/GitHub-Mark-64px.png')} alt='github-logo' />
      </a>
    </li>
  </ul>
  
const Header = ({setMobileList, setMLfalse}) =>
  <header className='header-main'>
    <HeaderButton setMobileList={setMobileList}/>
    <div className='header-text'>
      <LinkTo path='/' setMobileList={setMLfalse}>Jisung</LinkTo>
    </div>
    <HeaderList />
    <div className='header-button img'>
      <a href='https://github.com/hongjisung'>
        <img className='header-img' src={require('../img/GitHub-Mark-64px.png')} alt='github-logo' />
      </a>
    </div>
  </header>

export default Header;