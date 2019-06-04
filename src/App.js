import React, { useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Header, ContentList } from './components';
import { Home, Projects, Study, Interest } from './pages'
import './css/app.css';
import './css/ani.css';

const App = () => {
  const [mobileList, setMobileList] = useState(false);
  const changeMobileList = () => setMobileList(!mobileList);
  return (
    <Router>
      <div className="app">
        <Header setMobileList={changeMobileList}/>
        <div className='app-top'></div>
          { mobileList ? [<ContentList setMobileList={changeMobileList}/>,<div className='topdownMenu '/>] : null}
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={ Projects } />
        <Route path='/study' component={ Study } />
        <Route path='/interest' component={ Interest } />
      </div>
    </Router>
  );
}

export default App;
