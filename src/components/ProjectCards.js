import React from 'react'

import styled from 'styled-components';

import nftImg from '../assets/nft-background.png'
import stockImg from '../assets/stock-background.png'
import countryImg from '../assets/country-background-home.png'
import phoneImg from '../assets/phone-background-home.png'

import { Slide } from 'react-awesome-reveal';
import 'animate.css';
import '../App.css'



const Section = styled.section`
display: flex;
overflow: visible;
justify-content: center;
box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.3)
background-color: rgb(221,208,195);
margin-bottom: -200px


@media screen and (max-width: 1200px){
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.3)
  background-color: rgb(221,208,195);
  margin-top:-500px;
  margin-bottom: 75px;
}
@media screen and (max-width: 665px){
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.3)
  background-color: rgb(221,208,195);
  border: 3px solid red;
  height: 100%;
  margin-top: 150px;
}
`

const Container = styled.div`
display: flex;
padding: 10px;
justify-content: center;
flex-wrap: wrap;
margin-left: -10px;

margin-bottom: 25px;
height: 100%;
width: 100vw;

box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.3);
background-color: rgb(251,249,236,0.6);
${'' /* border: 2px solid black;
border-radius: 0px; */}

  @media screen and (max-width: 1200px) {
    display: flex;
    padding: 10px;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: 0px;
    margin-bottom: 25px;
    height: 100%;
    width: 100vw;
    box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.3);
    background-color: rgb(251,249,236,0.6);
    ${'' /* border: 2px solid black;
    border-radius: 0px; */}
  }

  @media screen and (max-width: 665px) {
    display: flex;
    padding: 10px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 200px;
    margin-bottom: 25px;
    height: auto;
    width: 100vw;
    box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.3);
    background-color: rgb(251,249,236,0.6);
    ${'' /* border: 2px solid black;
    border-radius: 0px; */}
  }
`

const ContainerTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 3em;
  align-content: center;
  color: rgb(0, 62, 128);
`

const Item = styled.div`
position: relative;
display: flex;
padding: 1rem .7rem 15rem .7rem;
color: ${props => props.theme.body};
margin: 3rem 1.5rem;
flex-wrap: wrap;
justify-content: center;
height: 245px;
width: 250px;
backdrop-filter: blur(4px);
margin: 10px;
justify-content: center;

border: 1px solid ${props => props.theme.text};
border-radius: 20px;
box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.3);
background-color: rgb(204,145,29,0.1);

&:hover{
  img{
    transform: translateY(-1rem) scale(1.2);
    position: relative;

  }
}

@media screen and (max-width: 1200px) {
  width: 325px;
  height: 355px;
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin: 10px;
}

@media screen and (max-width: 665px) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 285px;
  min-width: 275px;

  }
`

const ImageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 225px;
box-shadow: 7px 7px 15px -3px rgba(0,0,0,0.3);
background-color: rgb(255,255,255, 0.5);
border: 1px solid rgb(0,0,0,0.3);
margin-bottom: -2px;
padding: .2rem;
border-radius: 20px;
cursor: pointer;
position: relative;
overflow: hidden;

img{
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  display: block;
  margin: 0 auto;
  border-radius: 25px;
  object-fit: contain;
}

&:hover{
  img{
    border-radius: 25px;
    position: absolute;
    cursor: pointer;
    transform: scale(1.2);
  }
}

@media screen and (max-width: 1200px) {
  margin: 7px;
  padding: 10px;
  height: 300px;
  
}

@media screen and (max-width: 665px) {
  margin: 7px;
  width: 300px;
  height: 300px;
}
`

const Name = styled.h2`
font-size: 1.1em;
padding: 4px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
margin-top: 0px;
color: rgb(0, 62, 128);
width: 100%;
min-height: 4.5vh;

@media screen and (max-width: 1200px) {
  margin-top: 5px;
}

`
const Description = styled.p`
font-size: .85em;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
width: 85%;
height: 20px;
padding: 10px;
margin: 10px;
margin-top: -25px;
margin-bottom: 10px;
color: rgb(0, 62, 128);


@media screen and (max-width: 1200px) {
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  height: 2em;
  margin: 17px;
  margin-top: -1.5em;
  margin-bottom: 2em;
}
@media screen and (max-width: 665px) {
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  margin: 17px;
  height: 2.5em;
  margin-top:-10px;
  margin-bottom:10px;
}
`

const SkillsContainer = styled.div`
width: 95%;
font-size: 1.1em;
display: flex;
justify-content: center;
align-items: center;
height: 100px;
padding: 7px;
padding-top: 10px;
margin: 2px;
flex-wrap: wrap;
margin-top: 10px;
margin-bottom: 10px;
border-radius: 10px;
background-color: rgb(255,255,255,0.4); 


@media screen and (max-width: 1200px) {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 100px;
  align-items: center;
  padding-bottom: 10px;
}
@media screen and (max-width: 665px) {
  display: flex;
  justify-content: center;
  height: 105px;
  align-items: center;
  padding-bottom: 10px;
}
`


const Skills = styled.h2`
display: flex;
justify-content: center;
height: 20px;
text-align: center;
align-items: center;
background-color: rgb(240, 240, 240, 0.8);
color: rgb(0, 62, 128);
font-weight: 400;
border: 1px solid rgb(0, 62, 128);
border-radius: 10px;
padding: 4px;
margin: 2px;
font-size: 0.7em;

@media screen and (max-width: 1200px) {
display: flex;
align-items: center;
justify-content: center;
border: 1px solid rgb(0, 62, 128, 0.7);
border-radius: 10px;
margin: 2px;
height:20px;
font-size: 0.8em;
}
@media screen and (max-width: 665px) {
display: flex;
align-items: center;
justify-content: center;
border: 1px solid rgb(0, 62, 128,0.7);
border-radius: 10px;
font-size: 0.8em;
margin: 1px;
padding: 6px
}
`

const MemberComponent = ({img, name=" ", desc='',skills=[]}) => {
  return(

    <Item>
      <ImageContainer>
        <img width={500} src={img} alt={name} />
      </ImageContainer>
      <div className='projectcard-name-desc-container'>
        <Name>{name}</Name>
        <Description>{desc}</Description>
      </div>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Skills key={index}>{skill}</Skills>
        ))}
      </SkillsContainer>
    </Item>

  )
}


const ProjectCards = () => {
  let screen;

  if (window.innerWidth > 1200) {
    screen = (
      <>
       <Section id="ProjectCards">
      <Container>
      <div>
      <ContainerTitle>
          Projects
      </ContainerTitle>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Slide direction='left' delay={350}>
        <a href="/nftpage" >
          <MemberComponent img={nftImg} dir="up" name="NFT Sales Tracker" desc="A personal project that tracks the top trending NFT sales using various API's." skills={["JavaScript","React","Node.js","express.js","JSON Web Token","MySQL","axios","argon2","OAuth2","full stack"]} /></a>
          </Slide>
        <Slide direction='left' delay={150}>
        <a href="/stockpage">
          <MemberComponent img={stockImg} dir="right" name="Stock Trading App" desc="A stock portfolio that stores and updates user transactions with real-time stock quotes." skills={["Python","flask","SQL","jinja", "full stack","responsive design"]} /></a>
          </Slide>
        <Slide direction='right' delay={150}>
        <a href="/countrypage">
          <MemberComponent img={countryImg}  name="Country / Weather App" desc="A React application that displays country facts and weather forecasts using two APIs." skills={["JavaScript","React","Node.js","express.js","axios", "full stack","responsive design"]}  /></a>
        </Slide>
        <Slide direction='right' delay={350}>
        <a href="/phonebookpage">
          <MemberComponent img={phoneImg}  name="Phonebook Feature" desc="A CRUD phonebook feature that adds contact names and numbers built using a MERN stack." skills={["JavaScript","MongoDB","express.js","React","Node.js","cors","full stack","responsive design"]}  /></a>
        </Slide>
        </div>
      </div>
      </Container>
    </Section>
    </>
    )
  } else if (window.innerWidth > 665) {
screen =(
  <>
  <Section id="ProjectCards">
      <Container>
      <div>
      <ContainerTitle>
          Projects
      </ContainerTitle>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        <Slide direction='left' delay={150}>
        <a href="/nftpage" >
          <MemberComponent img={nftImg} dir="up" name="NFT Sales Tracker" desc="A personal project that tracks the top trending NFT sales using various API's." skills={["JavaScript","React","Node.js","express.js","JSON Web Token","MySQL","axios","argon2","OAuth2","full stack"]} /></a>
          </Slide>
        <Slide direction='right' delay={150}>
        <a href="/stockpage">
          <MemberComponent img={stockImg} dir="right" name="Stock Trading App" desc="A stock portfolio that stores and updates user transactions with real-time stock quotes." skills={["Python","flask","SQL","jinja", "full stack","responsive design"]} /></a>
          </Slide>
        <Slide direction='left' delay={150}>
        <a href="/countrypage">
          <MemberComponent img={countryImg}  name="Country / Weather App" desc="A React application that displays country facts and weather forecasts using two APIs." skills={["JavaScript","React","Node.js","express.js","axios", "full stack","responsive design"]}  /></a>
        </Slide>
        <Slide direction='right' delay={150}>
        <a href="/phonebookpage">
          <MemberComponent img={phoneImg}  name="Phonebook Feature" desc="A CRUD phonebook feature that adds contact names and numbers built using a MERN stack." skills={["JavaScript","MongoDB","express.js","React","Node.js","cors","full stack","responsive design"]}  /></a>
        </Slide>
        </div>
      </div>
      </Container>
    </Section>
  </>
)
  } else {
  screen = (
    <>
    <Section id="ProjectCards">
      <Container>
      <div>
      <ContainerTitle>
          Projects
      </ContainerTitle>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        <Slide direction='left' delay={350}>
        <a href="/nftpage" >
          <MemberComponent img={nftImg} dir="up" name="NFT Sales Tracker" desc="A personal project that tracks the top trending NFT sales using various API's." skills={["JavaScript","React","Node.js","express.js","JSON Web Token","MySQL","axios","argon2","OAuth2","full stack"]} /></a>
          </Slide>
        <Slide direction='left' delay={150}>
        <a href="/stockpage">
          <MemberComponent img={stockImg} dir="right" name="Stock Trading App" desc="A stock portfolio that stores and updates user transactions with real-time stock quotes." skills={["Python","flask","SQL","jinja", "full stack","responsive design"]} /></a>
          </Slide>
        <Slide direction='right' delay={150}>
        <a href="/countrypage">
          <MemberComponent img={countryImg}  name="Country / Weather App" desc="A React application that displays country facts and weather forecasts using two APIs." skills={["JavaScript","React","Node.js","express.js","axios", "full stack","responsive design"]}  /></a>
        </Slide>
        <Slide direction='right' delay={350}>
        <a href="/phonebookpage">
          <MemberComponent img={phoneImg}  name="Phonebook Feature" desc="A CRUD phonebook feature that adds contact names and numbers built using a MERN stack." skills={["JavaScript","MongoDB","express.js","React","Node.js","cors","full stack","responsive design"]}  /></a>
        </Slide>
        </div>
      </div>
      </Container>
    </Section>
    </>
  )
  }





  return (
    <div>{screen}</div>
  )
}

export default ProjectCards