import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import LearningsContext  from '../context/LearningsContext';

const LearningPage = (props) => {

  const { learnings } = useContext(LearningsContext);

  const learning = learnings.find((learningsElement) => {
    return learningsElement.id === props.match.params.id;
  })

  const getLiveSiteLink = () => {
    if(learning.liveSiteLink) {
      return (
        <span id="liveSiteLink">               
          <Link to={learning.liveSiteLink} className="button button-btn1">View Live Site</Link>
        </span>
      )
    } else {
      return (
        <span id="liveSiteLink">
          <span className="button button--disabled" title="I'm working on it!">View Live Site</span>
        </span>
      )
    }
  }

  return (
    <>
    <div className="flex-sections-wrapper">
      <section className="sect project-page">
        <h1>{learning.name}</h1>
        <img src={learning.thumbPic} alt={learning.name}/>
        <div className="project-code-links-wrapper">
          <span className="git-hub-link">
            <a className="button button--btn1">
              Github Repo
            </a>
          </span>
          {getLiveSiteLink()}
        </div>
      </section>
      <section className="sect project-page">
        <h2>About this Course / Tutorial:</h2>
        <hr className="sect-line" />
        <p>{learning.longDescription}</p>
      </section>
    </div>
    <section className="sect project-page">
      <div className="build-tools-wrapper">
        <h2 className="contains-icon">Build Tools <i className="fas fa-toolbox"></i></h2>
        <hr className="sect-line" />
        <ul className="fa-ul listTools">
          {learning.tools.map((tool) => {
            return <li key={tool}><span className="fa-li"><i className="fas fa-check-square"></i></span>{tool}</li>
          })}
        </ul>
      </div>
      <div className="build-features-wrapper">
        <h2 className="contains-icon">Site Features 
          <i className="fas fa-box-open"></i>
        </h2>
        <hr className="sect-line" />
        <ul className="fa-ul listFeatures">
          {learning.features.map((feature) => {
            return <li key={feature}><span className="fa-li"><i className="fas fa-check-square"></i></span>{feature}</li>
          })}
        </ul>       
      </div>
    </section>

    </>
  )
}

export default LearningPage
