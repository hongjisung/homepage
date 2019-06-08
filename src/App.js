import React, { useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Header, Footer, ContentList, ScrollToTop } from './components';
import { Home, Projects, Study, Interest } from './pages'
import './css/app.css';
import './css/ani.css';

const App = () => {
  const [mobileList, setMobileList] = useState(false);
  const changeMobileList = () => setMobileList(!mobileList);
  return (
    <Router onChange={() => window.scrollTo(0,0)}>
      <ScrollToTop>
      <div className="app">
        <Header setMobileList={changeMobileList} setMLfalse={()=> setMobileList(false)}/>
        <div className='app-top'></div>
        { mobileList ? [<ContentList setMobileList={changeMobileList}/>,<div className='topdownMenu '/>] : null}
        <div className="app-body">
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={ Projects } />
          <Route path='/study' component={ Study } />
          <Route path='/interest' component={ Interest } />
        </div>
        <Footer />
      </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
