import React from 'react';
import '../css/studybar.css';
import { LinkTo } from '../components/utils';

const StudyBar = () =>
  <header className='sb'>
    <ul>
      <li>
        <LinkTo path='/study/algorithm' color='#585858'>Algorithm</LinkTo>
      </li>
      <li>
        <LinkTo path='/study/graphic' color='#585858'>Graphic</LinkTo>
      </li>
    </ul>
  </header>

export default StudyBar;