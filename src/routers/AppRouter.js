import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history"

// User Components
import ArticlePage from '../components/ArticlePage';
import ArticlesPage from '../components/ArticlesPage';
import ContactPage from '../components/ContactPage';
import Header from '../components/Header';
import HeaderBar from '../components/HeaderBar';
import HomePage from '../components/HomePage';
import LearningPage from '../components/LearningPage';
import PageContent from '../components/PageContent';
import PageNotFound from '../components/PageNotFound';
import ProjectPage from '../components/ProjectPage';
import ProjectsPage from '../components/ProjectsPage';


const AppRouter = () => {

  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Header />
      <HeaderBar />
      <PageContent>
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/projects/:id" component={ProjectPage} />
          <Route path="/projects" component={ProjectsPage}/>
          <Route path="/articles/:id" component={ArticlePage}/>
          <Route path="/articles" component={ArticlesPage} />
          <Route path="/learning" component={LearningPage} />
          <Route path="/contact" component={ContactPage}/> 
          <Route component={PageNotFound} />
        </Switch>
      </PageContent>
    </Router>
  )

}


export default AppRouter;