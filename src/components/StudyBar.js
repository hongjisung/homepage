import React from 'react';
import '../css/studybar.css';
import { LinkTo } from '../components/utils';

const mainColor = '#585858';

const StudyBar = () =>
  <header className='sb'>
    <ul>
      <li>
        <LinkTo path='/study/algorithm' color={mainColor}>Algorithm</LinkTo>
      </li>
      <li>
        <LinkTo path='/study/graphic' color={mainColor}>Graphic</LinkTo>
      </li>
    </ul>
  </header>

export default StudyBar;