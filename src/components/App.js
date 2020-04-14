import React, { useEffect, useReducer, useState } from 'react';

// User Components
import AppRouter from '../routers/AppRouter';
import ArticlesContext from '../context/ArticlesContext';
import articlesReducer from '../reducers/articles';
import LoadingPage from '../components/LoadingPage';
import projectsReducer from '../reducers/projects';
import ProjectsContext from '../context/ProjectsContext';

import { setProjects } from '../actions/projects';
import { setArticles } from '../actions/articles';

const App = () => {

  const [ projects, projectsDispatch ] = useReducer(projectsReducer, []);
  const [ articles, articlesDispatch] = useReducer(articlesReducer, []);
  const [ pageLoading, setPageLoading ] = useState(true);

  useEffect(() => {
    setProjects()
      .then((projectsFromDBActionGenerator) => {
        projectsDispatch(projectsFromDBActionGenerator);
        
      })
      .catch((e) => {
        console.log('The Occurence of an error has unexpectedly occurred :( ', e.message);
      })
  }, [])

  useEffect(() => {
    setArticles()
      .then((articlesFromDBActionGenerator) => {
        articlesDispatch(articlesFromDBActionGenerator);
        setPageLoading(false)
      })
      .catch((e) => {
        console.log('The Occurence of an error has unexpectedly occurred :( ', e.message);
      })
  }, [])

  return (

    pageLoading ? 

      <LoadingPage />
    
    :

      <ProjectsContext.Provider value={{projects}}>
      <ArticlesContext.Provider value={{articles}}>
        <AppRouter />
      </ArticlesContext.Provider>      
      </ProjectsContext.Provider>
        
  )
}

export default App
