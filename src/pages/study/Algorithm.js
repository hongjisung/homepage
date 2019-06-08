import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { AlgoList, Markdown } from '../../components';

const algoMdFiles = {
  1: '임의의 조건을 만족하는 최대의 K를 찾는 유형',
  2: '리스트 중간을 뒤집는 깔끔한 방법',
}

const pagelist = () => {
  const pages = [];
  for (let k of Object.keys(algoMdFiles)) {
    pages.push(
      <Route path = { '/study/algorithm/' + k } component = {
        <Markdown mdfile = {
          require('../../markdowns/algorithm/' + k.toString() + '.md')
        } />
      }/>
    )
  }
  
  return pages;
}

const Algorithm = () => {
  const [num, setNum] = useState(Object.keys(algoMdFiles).length);

  return (
    <div>
      <Markdown mdfile = {
        require('../../markdowns/algorithm/' + num.toString() + '.md')
      } />
      { pagelist }
      <div style={{ height: '50px'}} />
      <AlgoList algoMdFiles={ algoMdFiles } num = { num } setNum = { setNum }/>
    </div>
  )
}

export default Algorithm;