import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// Services
import GridService from '../services/GridService/GridService';


// User Components
import ArticlesContext from '../context/ArticlesContext';
import ProjectsContext from '../context/ProjectsContext';
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
   </>
  )
}

export default HomePage

