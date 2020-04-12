import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history"

import ContactPage from '../components/ContactPage';
import Header from '../components/Header';
import HeaderBar from '../components/HeaderBar';
import HomePage from '../components/HomePage';

import LearningPage from '../components/LearningPage';
import PageContent from '../components/PageContent';
import PageNotFound from '../components/PageNotFound';


const AppRouter = () => {

  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Header />
      <HeaderBar />
      <PageContent>
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/learning" component={LearningPage} />
          <Route path="/contact" component={ContactPage}/>
          <Route component={PageNotFound} />
        </Switch>
      </PageContent>
    </Router>
  )

}


export default AppRouter;