import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// Services
import GridService from '../services/GridService/GridService';
import ProjectsContext from '../context/ProjectsContext';

const HomePage = () => {

  const { projects } = useContext(ProjectsContext);  

  return (

    <>

    <section className="sect home-page-projects">      
      <h1 className="section-title contains-icon"> Other Works: <i className="fas fa-project-diagram"></i></h1>
      <p>Or have a look through some of my other work,  in various states of completion!</p>

      <GridService list={projects} imgOverlay={true} serviceType={"projects"} staticOverlay={false}/>

      <Link to="/all-projects" className="button button--btn1">See All Projects</Link>
    </section>

   </>
  )
}

export default HomePage

