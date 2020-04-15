import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// Services
import GridService from '../services/GridService/GridService';

// Contexts
import ArticlesContext from '../context/ArticlesContext';
import LearningsContext from '../context/LearningsContext'
import ProjectsContext from '../context/ProjectsContext';

// Utitlity Modules / Functions
import { getLastXListItems } from '../selectors/selectors';

const HomePage = () => {

  // LATEST PROJECTS
  const { projects } = useContext(ProjectsContext); 
  const [ latestProjects ] = useState(getLastXListItems(projects, 3, false))
  ;
  const featuredProject = projects.find((project) => {
    return project.featured
  })

  // LATEST ARTICLES
    const { articles } = useContext(ArticlesContext);
    const [ latestArticles ] = useState(getLastXListItems(articles, 3, false));   

    const featuredArticle = articles.find((article) => {
      return article.featured
    })

  // LATEST LEARNINGS COURSES / TUTORIALS
    const { learnings } = useContext(LearningsContext)
    const [ latestLearnings ] = useState(getLastXListItems(learnings, 3, false));

    const featuredLearning = learnings.find((learning) => {
      return learning.featured
    })

  return (

    <>
    <section className="sect home-page-feature-project">
      <h1 className="contains-icon">{featuredProject.name}<img src="https://dmvie1.s3.us-east-2.amazonaws.com/crane.png" alt="Crane Image"></img></h1>
      <p>{featuredProject.featuredSpiel}</p>
      <div className="featured-item-wrapper">
        <div className="img-featured-item-wrapper">
          <img className="img-featured-item" src={featuredProject.thumbPic}/>        
        </div>
        <div className="home-page-feature-details">
          <p>{featuredProject.shortDescription}</p>
          <p>Built With:
            {featuredProject.tools.map((tool) => {
              return `${tool}, `
            })}
          </p>
          <div className="center-wrapper">
            <Link to={`/projects/${featuredProject.id}`} className="button button--btn1">More Info</Link>
          </div>          
        </div>  
      </div>
    </section>

    <section className="sect home-page-projects">      
      <h1 className="section-title contains-icon"> Other Works: <i className="fas fa-project-diagram"></i></h1>
      <p>Or have a look through some of my other work,  in various states of completion!</p>

      <GridService list={latestProjects} imgOverlay={true} serviceType={"projects"} staticOverlay={false}/>

      <Link to="/projects" className="button button--btn1">See All Projects</Link>
    </section>


    <section className="sect home-page-feature-article">
      <h1 className="contains-icon">{featuredArticle.title}<img src="https://dmvie1.s3.us-east-2.amazonaws.com/crane.png" alt="Crane Image"></img></h1>
      <p>{featuredArticle.shortDescription}</p>
      {/* list needs an array, so create an array literal and into it add the featured article object so there's now a list with 1 item.. */}
      <GridService list={[featuredArticle]} imgOverlay={true} serviceType="articlesThumb" staticOverlay={true} />
    </section>

    <section className="sect home-page-articles">
      
      <h1 className="section-title contains-icon">Articles <i className="far fa-newspaper"></i></h1>

      <GridService list={latestArticles} imgOverlay={true} serviceType={"articlesThumb"} staticOverlay={true}/>
    </section>


    <section className="sect home-page-feature-project">
      <h1 className="contains-icon">{featuredLearning.name}<img src="https://dmvie1.s3.us-east-2.amazonaws.com/crane.png" alt="Crane Image"></img></h1>
      <p>{featuredLearning.featuredSpiel}</p>
      <div className="featured-item-wrapper">
        <div className="img-featured-item-wrapper">
          <img className="img-featured-item" src={featuredLearning.thumbPic}/>        
        </div>
        <div className="home-page-feature-details">
          <p>{featuredLearning.shortDescription}</p>
          <p>Built With:
            {featuredLearning.tools.map((tool) => {
              return `${tool}, `
            })}
          </p>
          <div className="center-wrapper">
            <Link to={`/projects/${featuredLearning.id}`} className="button button--btn1">More Info</Link>
          </div>          
        </div>  
      </div>
    </section>

    <section className="sect home-page-projects">      
      <h1 className="section-title contains-icon"> Other Works: <i className="fas fa-project-diagram"></i></h1>
      <p>Here's some of the courses, tutorials from others that I've been taking some time to grapple with!</p>

      <GridService list={latestLearnings} imgOverlay={true} serviceType={"learnings"} staticOverlay={false}/>

      <Link to="/learnings" className="button button--btn1">See All Courses / Tutorials</Link>
    </section>

   </>
  )
}

export default HomePage

