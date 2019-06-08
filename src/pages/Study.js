import React from 'react';
import {Route} from 'react-router-dom';
import { StudyBar, Markdown } from '../components';
import { Algorithm } from './study';
import '../css/app.css'

const Body = () =>
  <Markdown mdfile={ require('../markdowns/study.md')} />

const Study = () => {
  return (
    <main className='app'>
      <StudyBar />
      <Route exact path='/study/' component={ Body } />
      <Route path='/study/algorithm' component={ Algorithm }/>
    </main>
  )
}

export default Study;