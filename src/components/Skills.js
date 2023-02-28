import React, { useState, useRef } from "react";
import styled from 'styled-components';

import { Slide } from 'react-awesome-reveal';

import "../Icon.css";

const SkillsContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
max-width: 100%;
padding:10px;

@media screen and (max-width: 1200px) {
  min-width: 100%;
  margin: 5px;
  margin-left:-5px;
}
@media screen and (max-width: 665px) {
  width: 90%;
}
`

const Skills = styled.h2`
font-size: 1.2em;
display: flex;
align-items: center;
justify-content: center;
background-color: rgb(240,240,240, 0.8);
color: rgb(0, 62, 128);
font-weight:400;
border: 1px solid rgb(0, 62, 128);
border-radius: 10px;
padding: 8px;
margin: 2px;

@media screen and (max-width: 1200px) {
  align-items: center;
  border-radius: 10px;
  font-size: 1em;
}
@media screen and (max-width: 665px) {
 
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid rgb(0,0,0,0.6);
  border-radius: 10px;
  width: auto;
  margin: 2px;
  padding: 4px;
  font-size: 0.9em;
}
`


const MemberComponent = ({skills=[]}) => {
  return(
    <div className='skills-membercomponent' style={{height: '100px' }} >
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Skills key={index}>{skill}</Skills>
        ))}
      </SkillsContainer>
      </div>
  )
}


const Icons = () => {
  let screen;

  if (window.innerWidth > 1200) {
    screen = (
      <>
       <div className="skills-features" style={{ height: '400px', marginTop: '200px', marginBottom: '275px' }}>
        <h1 className="features-title" >Skills</h1>
          <div className='skills-item-container' style={{width: '60%', height: '160px' }} >
            <div className="skills-title">Frontend Development</div>
                <MemberComponent skills={["Javascript","React","HTML5","CSS","Bootstrap","React Router","Styled Components"]} />
            </div>
          <div className='skills-item-container' style={{width: '60%', height: '160px' }} >
            <div className="skills-title">Backend Development</div>
            <MemberComponent skills={["Node.js","Express.js","Python","Flask","Jinja","SQL","MySQL","SQLite","MongoDB"]} />
          </div>
          <div style={{display: 'flex', flexDirection:'row', maxWidth: '100%', justifyContent: 'center', marginTop: '25px' }}  >
              <div className='skills-item-container' style={{maxHeight: '175px' }}>
                <div className="skills-title" >Testing and Deployment</div>
                  <MemberComponent skills={["Jest","Cypress","Heroku","Styled Components"]} />
                </div>
              <div className='skills-item-container' style={{maxHeight: '175px' }}>
                <div className="skills-title">Other Technologies</div>
                  <MemberComponent skills={["Authorization: OAth2, JSON web tokens","Version Control: Git","Design: Procreate"]} />
              </div>
            </div>
        </div>
      </>
    )
  } else if (window.innerWidth > 665) {
    screen =(
      <>
       <div className="skills-features" style={{height: '400px', marginTop: '200px', marginBottom: '275px' }}>
        <h1 className="features-title" >Skills</h1>
          <div className='skills-item-container' style={{minWidth: '740px', height: '150px' }} >
            <div className="skills-title">Frontend Development</div>
                <MemberComponent skills={["Javascript","React","HTML5","CSS","Bootstrap","React Router","Styled Components"]} />
            </div>
          <div className='skills-item-container' style={{minWidth: '740px', height: '150px' }} >
            <div className="skills-title">Backend Development</div>
            <MemberComponent skills={["Node.js","Express.js","Python","Flask","Jinja","SQL","MySQL","SQLite","MongoDB"]} />
          </div>
          <div style={{display: 'flex', flexDirection:'row', maxWidth: '95%', justifyContent: 'center', marginTop: '25px' }}  >
              <div className='skills-item-container' style={{maxHeight: '225px', width: '100%' }}>
                <div className="skills-title" >Testing and Deployment</div>
                  <MemberComponent skills={["Jest","Cypress","Heroku","Fly.io"]} />
                </div>
              <div className='skills-item-container' style={{maxHeight: '225px', width: '100%' }}>
                <div className="skills-title">Other Technologies</div>
                  <MemberComponent skills={["Authorization: OAth2, JSON web tokens","Version Control: Git","Design: Procreate"]} />
              </div>
            </div>
        </div>
      </>
    )
  } else {
  screen = (
      <> 
       <div className="skills-features" style={{height: '600px', marginTop: '200px', marginBottom:'200px', overflow: 'none'}}>
        <h1 className="features-title" >Skills</h1>
          <div className='skills-item-container' style={{height: '150px'}} >
            <div className="skills-title">Frontend Development</div>
              <MemberComponent skills={["Javascript","React","HTML5","CSS","Bootstrap","React Router","Styled Components"]} />
          </div>
          <div className='skills-item-container' style={{height: '150px'}} >
            <div className="skills-title">Backend Development</div>
            <MemberComponent skills={["Node.js","Express.js","Python","Flask","Jinja","SQL","MySQL","SQLite","MongoDB"]} />
          </div>
          <div className='skills-item-container' style={{height: '150px'}} >
            <div className="skills-title">Testing and Deployment</div>
              <MemberComponent style={{height: '50px' }} skills={["Jest","Cypress","Heroku","Fly.io"]} />
            </div>
          <div className='skills-item-container' style={{height: '150px'}} >
            <div className="skills-title">Other Technologies</div>
              <MemberComponent skills={["Authorization: OAth2, JSON web tokens","Version Control: Git","Design: Procreate"]} />
            </div>
        </div> 
      </>
  )
  }

  return (
    <div>{screen}</div>
    )}

export default Icons;


