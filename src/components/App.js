import React, { useEffect, useReducer, useState } from 'react'

import AppRouter from '../routers/AppRouter';
import LoadingPage from '../components/LoadingPage';
import projectsReducer from '../reducers/projects';
import ProjectsContext from '../context/ProjectsContext';

import { setProjects } from '../actions/projects';

const App = () => {

  const [ projects, dispatch ] = useReducer(projectsReducer, [])
  const [ pageLoading, setPageLoading ] = useState(true);

  useEffect(() => {
    setProjects()
      .then((projectsFromDBActionGenerator) => {
        dispatch(projectsFromDBActionGenerator);
        setPageLoading(false)
      })
      .catch((e) => {
        console.log('The Occurence of an error has unexpectedly occurred, and it makes me sad :( ', e.message);
      })
  }, [])

  return (

    pageLoading ? 

      <LoadingPage />
    
    :

      <ProjectsContext.Provider value={{projects}}>
        <AppRouter />
      </ProjectsContext.Provider>
        
  )
}

export default App
