import React, { useEffect, useState } from 'react'
import '../App.css';
import { Parallax } from "react-parallax";
import styled from 'styled-components';
import Projects from './ProjectCards.js'
import Nav from './NavBar'
import Footer from './Footer'
import Resume from './Resume.js'
import Button from './Button'

import { Bounce, Flip, Slide, AttentionSeeker, Fade, Hinge, JackInTheBox, Reveal, Roll, Rotate, Zoom } from 'react-awesome-reveal';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import ResumePic from "../assets/ResumePic.jpg";
import devImg from "../assets/devImg.png"
import StandArt from "../assets/Stand_Art.jpg"
import StandArt2 from "../assets/Stand_Art2.jpg"
import StandArt3 from "../assets/Stand_Art3.jpg"
import blogPic1 from "../assets/blogPic1.jpg"
import Arrow from '../assets/Arrow.svg';
import nftImg from '../assets/nft-background.png'
import stockImg from '../assets/stock-background.png'
import countryImg from '../assets/country-background-home.png'
import phoneImg from '../assets/phone-background-home.png'

const Container = styled.div`
display: flex;
justify-content: center;
margin-left: auto;
margin-right: auto;
width: 350px;
height: 525px;
padding: 5px;

.swiper{
    width: 100%;
    height: 575px;
    margin-top: 15px;

}
.swiper-pagination{
  text-align: right;
  opacity: 0.5;
  margin-left: -10px;
}
.swiper-slide{
    background-color: rgb(248,243,233);
    border: 1px solid rgb(0,0,0,0.3);
    border-radius: 20px;
    box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.1);
  
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
        
    }
}

.swiper-button-next{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    right: -100px;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }

    @media (max-width: 64em){
    width: 3rem;

    }
    @media (max-width: 30em){
    width: 2rem;

    }
}
.swiper-button-prev{
    color: ${props => props.theme.text};
    left: -100px;
    top: 60%;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }
    @media (max-width: 64em){
    width: 3rem;

    }
    @media (max-width: 30em){
    width: 2rem;

    }
}
`
const ContainerTitle = styled.div`
  margin-top: -10px;
  margin-bottom: 30px;
  font-size: 3em;
  justify-content: center;
  align-content: center;
  color: rgb(0, 62, 128);
`
const Item = styled.div`
position: relative;
display: flex;
padding: 1rem .7rem 15rem .7rem;
color: ${props => props.theme.body};
margin: 3rem 1.5rem;
flex-wrap: nowrap;
justify-content: center;
height: 265px;
backdrop-filter: blur(4px);
margin: 10px;
justify-content: center;
max-width: 325px;
height: 200px;

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
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  margin: 10px;
}

@media screen and (max-width: 665px) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 320px;
  min-width: 275px;
  margin: 5px;
  }
`

const ImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 350px;
height: 300px;
box-shadow: 7px 7px 15px -3px rgba(0,0,0,0.3);
background-color: rgb(255,255,255, 0.5);
border: 1px solid rgb(0,0,0,0.2);
margin:5px;
border-radius: 20px;
cursor: pointer;
z-index:1;

img{
  margin-bottom: -5px;
  width: auto;
  height: auto;
  border-radius: 20px;
  ${'' /* border: 1px solid ${props => props.theme.text}; */}

  transition: all 0.3s ease;
}

@media screen and (max-width: 1200px) {
  margin: 7px;
  padding: 10px;
  }

@media screen and (max-width: 665px) {
  margin: 5px;
  margin-top: -5px;
  padding: 10px;
  width: 100%;
  object-fit: contain;

  img{
    margin-bottom: -5px;
    width: auto;
    max-height: 300px;
    border-radius: 20px;
    ${'' /* border: 1px solid ${props => props.theme.text}; */}
  
    transition: all 0.3s ease;
  }
  
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

`
const Description = styled.p`
font-size: .8em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 40px;
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
  margin-bottom: 3em;
}
@media screen and (max-width: 481px) {
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  margin: 17px;
  height: 2.5em;
  margin-top:-20px;
  margin-bottom:10px;
}
`

const SkillsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
max-width: auto;
margin-top: 10px;

`

const Skills = styled.h2`
font-size: .7em;
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
background-color: rgb(230,230,230, 0.5);
color: rgb(0, 62, 128);
font-weight:400;
border: 1px solid rgb(0, 62, 128);
border-radius: 10px;
padding: 6px;
margin: 2px;

@media screen and (max-width: 1200px) {
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 10px;
  width: auto;
  margin: 2px;
}
@media screen and (max-width: 481px) {
  
  border: 1px solid;
  border-radius: 10px;
}
`

const MemberComponent = ({img, name=" ", desc='',skills=[]}) => {
  return(

    <Item>
      <ImageContainer>
        <img width={500} src={img} alt={name} />
      </ImageContainer>
        <div style={{ width: '95%', marginTop: '10px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'center', textAlign: 'center', border: '1px solid rgb(0,0,0,0.5)', borderRadius: '15px', boxShadow: '3px 7px 15px 2px rgba(0,0,0,0.3)', backgroundColor:'rgb(255,255,255,0.6)' }}>
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




function Home() {
  const [currentRow, setCurrentRow] = useState(0);
  const [hover, setHover] = useState(false);

  let screen;

if (window.innerWidth > 1200) {
  screen = (
    <>
    
    <Parallax>
      <div style={{ height: 800 }}>
      <div className='about-outside-container2'>
        <div className='about-dev-container2'>
          <Slide  triggerOnce direction='down' delay={150} >
            <div className='dev-text-border2'>
              <div className='about-text2'>
                <Slide direction='down' delay={200} >
                  <h4 className="dev-introduction1-2">
                    As a full stack developer, I bring ideas to life
                  </h4>
                </Slide>
                <Slide direction='up' delay={200} >
                  <h4 className="dev-introduction2-2">
                    with clean, intuitive, and thoughtful design.
                  </h4>
                </Slide>
              </div>
            </div>
          </Slide>
          <Slide direction='down' delay={150}>
            <div 
              className="devImg2"
              onMouseEnter={() => {
                setHover(false);
              }}
              onMouseLeave={() => {
                setHover(true);
              }}
              onClick={() => { 
                window.location.replace('/projects')
                // window.location.replace('http://localhost:3000/projects')
                window.scrollBy({ behavior: 'smooth' });
              }}
            >
              <img 
              
                className="img-hover"
                src={devImg} 
                alt="dev pic" 
                title='Click to learn more'
              />
              <div className="dev-slide-hover2" >
                <Button fontSize='1em' text='Go to projects &#10230;' link='/projects'></Button>
                {/* <Button fontSize='1em' text='Go to projects &#10230;' link='http://localhost:3000/projects'></Button> */}
              </div>
            </div>
          </Slide>
      </div>
          
          <div className='about-dev-container2'>
          <Slide triggerOnce direction='down' delay={350}>
            <div className='dev-text-border2'>
              <div className='about-text2' >
                <Slide direction='down' delay={400}>
                  <h4 className="dev-introduction1-2">
                    As a former educator, I convey information 
                  </h4>
                </Slide>
                <Slide direction='up' delay={400}>
                  <h4 className="dev-introduction2-2">
                    using clear and concise methods.
                  </h4>
                </Slide>
              </div>
            </div>
          </Slide>
          <Slide direction='down' delay={350}>
              <div 
                className="devImg2"
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
                onClick={() => { 
                  window.location.replace('/blog');
                  // window.location.replace('http://localhost:3000/blog');
                  window.scrollBy({ behavior: 'smooth' });
                }}
              >
                <img
                  className="img-hover"
                  src={blogPic1} 
                  alt="blog pic" 
                  title='Click to learn more'
                />
                <div className="dev-slide-hover2">
                  <Button fontSize='1em' text='Go to blog &#10230;' link='/blog'></Button>
                  {/* <Button fontSize='1em' text='Go to blog &#10230;' link='http://localhost:3000/blog'></Button> */}
                </div>
              </div>
            </Slide>
        </div>
      
      <div className='about-dev-container2'>
        <Slide triggerOnce direction='down' delay={550}>
            <div className='dev-text-border2'>
              <div className='about-text2'>
                <Slide direction='down' delay={600}>
                  <h4 className="dev-introduction1-2">
                  As an artist, I explore visual narratives
                  </h4>
                </Slide>
                <Slide direction='up' delay={600}>
                  <h4 className="dev-introduction2-2">
                  within the aesthetic of mathematics.
                  </h4>
                </Slide>
              </div>
            </div>
          </Slide>
          <Slide direction='down' delay={550}>
          <div 
              className="devImg2"
              onMouseEnter={() => {
                  setHover(false);
              }}
              onMouseLeave={() => {
                  setHover(true);
              }}
              onClick={() => { 
                window.location.replace('/art');
                // window.location.replace('http://localhost:3000/art');
                window.scrollBy({ behavior: 'smooth' });
                  }}
              >
              <img 
                  className="img-hover"
                  src={StandArt} 
                  alt="stand art" 
                  title='Click to learn more'
              />
              <div className="dev-slide-hover2">
                  <Button fontSize='1em' text='Go to art &nbsp;&nbsp;&#10230;' link='/art'></Button>
                  {/* <Button fontSize='1em' text='Go to art &nbsp;&nbsp;&#10230;' link='http://localhost:3000/art'></Button> */}
              </div>
          </div>
        </Slide>
       </div>
      </div>
    </div>
  </Parallax>

  <Parallax>
    <div />
    <Projects />
  </Parallax>

</>
  );
} else if (window.innerWidth > 665) {
  screen = (
    <>
    <Parallax>
      <div  style={{ height: 800 }}>
        <div className='about-outside-container2'>
          <div className='about-dev-container2'>
            <Slide triggerOnce direction='down' delay={150} >
              <div className='dev-text-border2 '>
                <div className='about-text2 '>
                <Slide triggerOnce direction='down' delay={200}>
                    <h4 className="dev-introduction1-2 hidden" >
                      As a full stack developer, 
                    </h4>
                  </Slide>
                  <Slide triggerOnce cascade direction='up' damping={0.35}>
                    <h4 className="dev-introduction1-2 hidden" style={{ marginTop: '-20px'}}>
                    I bring ideas to life with 
                    </h4>
                    <h4 className="dev-introduction1-2 hidden" style={{ marginTop: '-30px'}}>
                    clean, intuitive, and
                    </h4>
                    <h4 className="dev-introduction1-2 hidden" style={{ marginTop: '-30px'}}>
                    thoughtful design.
                    </h4>
                  </Slide>
                </div>
              </div>
            </Slide>
            <Slide  direction='down' delay={150}>
              <div
                className="devImg2"
                onMouseEnter={() => {
                  setHover(false);
                }}
                onMouseLeave={() => {
                  setHover(true);
                }}
                onClick={() => { 
                  window.location.replace('/projects')
                  // window.location.replace('http://localhost:3000/projects')
                  window.scrollBy({ behavior: 'smooth' });
                }}
              >
                <img 
                  className="img-hover"
                  src={devImg} 
                  alt="dev pic" 
                  title='Click to learn more'
                />
                <div className="dev-slide-hover2">
                  <Button fontSize='1em' text='Go to projects &#10230;' link='/projects'></Button>
                  {/* <Button fontSize='1em' text='Go to projects &#10230;' link='http://localhost:3000/projects'></Button> */}
                </div>
              </div>
            </Slide>
        </div>
            
            <div className='about-dev-container2'>
             <Slide triggerOnce direction='down' delay={350}>
              <div className='dev-text-border2'>
                <div className='about-text2' >
                  <Slide triggerOnce direction='down' delay={400}>
                    <h4 className="dev-introduction1-2 hidden">
                      As a former educator, 
                    </h4>
                  </Slide>
                  <Slide triggerOnce cascade direction='up' damping={0.35}>
                    <h4 className="dev-introduction1-2 hidden" style={{ marginTop: '-20px'}}>
                      I convey information using 
                    </h4>
                    <h4 className="dev-introduction1-2 hidden" style={{ marginTop: '-30px'}}>
                      clear and concise methods.
                    </h4>
                  </Slide>
                </div>
              </div>
            </Slide>
            <Slide direction='down' delay={350}>
                <div 
                  className="devImg2"
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                  onClick={() => { 
                    window.location.replace('/blog');
                    // window.location.replace('http://localhost:3000/blog');
                    window.scrollBy({ behavior: 'smooth' });
                  }}
                >
                  <img
                    className="img-hover"
                    src={blogPic1} 
                    alt="blog pic" 
                    title='Click to learn more'
                  />
                  <div className="dev-slide-hover2">
                    <Button fontSize='1em' text='Go to blog &#10230;' link='/blog'></Button>
                    {/* <Button fontSize='1em' text='Go to blog &#10230;' link='http://localhost:3000/blog'></Button> */}
                  </div>
                </div>
              </Slide>
          </div>
        
        <div className='about-dev-container2'>
         <Slide triggerOnce direction='down' delay={550}>
            <div className='dev-text-border2'>
                <div className='about-text2'>
                <Slide triggerOnce direction='down' delay={400}>
                    <h4 className="dev-introduction1-2 hidden" >
                      As an artist, 
                    </h4>
                  </Slide>
                  <Slide triggerOnce cascade direction='up' damping={0.35}>
                    <h4 className="dev-introduction1-2 hidden" style={{ marginTop: '-20px'}}>
                    I explore visual narratives 
                    </h4>
                    <h4 className="dev-introduction1-2 hidden" style={{ marginTop: '-30px'}}>
                    within the aesthetic of
                    </h4>
                    <h4 className="dev-introduction1-2 hidden" style={{ marginTop: '-30px'}}>
                    mathematics.
                    </h4>
                  </Slide>
                </div>
              </div>
          </Slide>
          <Slide direction='down' delay={550}>
            <div 
                className="devImg2"
                onMouseEnter={() => {
                    setHover(false);
                }}
                onMouseLeave={() => {
                    setHover(true);
                }}
                onClick={() => { 
                    window.location.replace('/art');
                    // window.location.replace('http://localhost:3000/art');
                    window.scrollBy({ behavior: 'smooth' });
                    }}
                >
                <img 
                    className="img-hover"
                    src={StandArt3} 
                    alt="stand art" 
                    title='Click to learn more'
                />
              <div className="dev-slide-hover2">
                <Button fontSize='1em' text='Go to art &nbsp;&nbsp;&#10230;' link='/art'></Button>
                {/* <Button fontSize='1em' text='Go to art &nbsp;&nbsp;&#10230;' link='http://localhost:3000/art'></Button> */}
            </div>
          </div>
        </Slide>
       </div>
      </div>
    </div>
  </Parallax>

  <div  >
    <Projects />
  </div>
</>
  );
} else {
  screen = (
    <>
    <Parallax>
      <div  style={{ height: '700px' }}>
        <div className='about-outside-container2'>
          <Container>
            <Swiper
              effect="cards"
              spaceBetween={20}
              slidesPerView={1}
              pagination={{
                className: 'paginationStyle',
                clickable: true,
                type: 'fraction',
                paginationClickable: true,
              }}
              scrollbar={{ draggable: true }}
              modules={[EffectCards,Pagination, Navigation, Autoplay]}
              navigation={true}
              grabCursor={true}
              loop={false}
              centeredSlides={true}
              autoplay={{ delay: 3000 }}
            >
              <SwiperSlide>  
                <div className='about-dev-container2'>
                  <div className='dev-text-border2 '>
                    <div className='about-text2 '>
                      <h4 className="dev-introduction1-2 hidden">
                        As a full stack developer, I bring ideas to life with clean, intuitive, and thoughtful design.
                      </h4>
                    </div>
                  </div>
                  
                  <div
                    className="devImg2"
                    onMouseEnter={() => {
                      setHover(false);
                    }}
                    onMouseLeave={() => {
                      setHover(true);
                    }}
                    onClick={() => { 
                      window.location.replace('/projects')
                      // window.location.replace('http://localhost:3000/projects')
                      window.scrollBy({ behavior: 'smooth' });
                    }}
                  >
                    <img 
                      className="img-hover"
                      src={devImg} 
                      alt="dev pic" 
                      title='Click to learn more'
                    />
                    <div className="dev-slide-hover2">
                      <Button fontSize='1em' text='Go to projects &#10230;' link='/projects'></Button>
                      {/* <Button fontSize='1em' text='Go to projects &#10230;' link='http://localhost:3000/projects'></Button> */}
                    </div>
                  </div>
                </div> 
              </SwiperSlide>
              <SwiperSlide> 
                <div className='about-dev-container2'>
                  
                  <div className='dev-text-border2'>
                    <div className='about-text2' >
                        <h4 className="dev-introduction1-2 hidden">
                          As a former educator, I convey information using clear and concise methods.
                        </h4>
                    </div>
                  </div>
                    
                  <div 
                    className="devImg2"
                    onMouseEnter={() => {
                      setHover(true);
                    }}
                    onMouseLeave={() => {
                      setHover(false);
                    }}
                    onClick={() => { 
                      window.location.replace('/blog');
                      // window.location.replace('http://localhost:3000/blog');
                      window.scrollBy({ behavior: 'smooth' });
                    }}
                  >
                    <img
                      className="img-hover"
                      src={blogPic1} 
                      alt="blog pic" 
                      title='Click to learn more'
                    />
                    <div className="dev-slide-hover2">
                      <Button fontSize='1em' text='Go to blog &#10230;' link='/blog'></Button>
                      {/* <Button fontSize='1em' text='Go to blog &#10230;' link='http://localhost:3000/blog'></Button> */}
                    </div>
                  </div>

                </div>
              </SwiperSlide>
              <SwiperSlide>  
                <div className='about-dev-container2'>
                  
                  <div className='dev-text-border2'>
                    <div className='about-text2'>
                      <h4 className="dev-introduction1-2">
                          As an artist, I explore visual narratives within the aesthetic of mathematics.
                      </h4>
                    </div>
                  </div>
                  
                  <div 
                    className="devImg2"
                    onMouseEnter={() => {
                        setHover(false);
                    }}
                    onMouseLeave={() => {
                        setHover(true);
                    }}
                    onClick={() => { 
                        window.location.replace('/art');
                        // window.location.replace('http://localhost:3000/art');
                        window.scrollBy({ behavior: 'smooth' });
                        }}
                    >
                    <img 
                        className="img-hover"
                        src={StandArt} 
                        alt="stand art" 
                        title='Click to learn more'
                    />
                    <div className="dev-slide-hover2">
                      <Button fontSize='1em' text='Go to art &nbsp;&nbsp;&#10230;' link='/art'></Button>
                      {/* <Button fontSize='1em' text='Go to art &nbsp;&nbsp;&#10230;' link='http://localhost:3000/art'></Button> */}
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            </Swiper>
          </Container>
      </div>
    </div>
  </Parallax>
  <Parallax  style={{ marginTop: '-300px', height: '1075px' }}>
  <div className='projects-outside-container2' >
    <ContainerTitle>
      Projects
    </ContainerTitle> 
    <Container >
      <Swiper
        effect="cards"
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          className: 'paginationStyle',
          clickable: true,
          type: 'fraction',
          paginationClickable: true,
        }}
        scrollbar={{ draggable: true }}
        modules={[EffectCards,Pagination, Navigation, Autoplay]}
        navigation={true}
        grabCursor={true}
        loop={false}
        centeredSlides={true}
        autoplay={{ delay: 3000 }}
        id='swiper-projects'
      >
          
        <SwiperSlide> 
          <a href="/nftpage" >
            <MemberComponent img={nftImg} dir="up" name="NFT Sales Tracker" desc="A personal project that tracks the top trending NFT sales using various API's." skills={["JavaScript","React","Node.js","express.js","JSON Web Token","MySQL","axios","argon2","OAuth2","full stack"]} /></a>
        </SwiperSlide>
        <SwiperSlide>  
            <a href="http://ssh%20root@82.180.136.248/stockpage">
            <MemberComponent img={stockImg} dir="right" name="Stock Trading App" desc="A stock portfolio that stores and updates user transactions with real-time stock quotes." skills={["Python","flask","SQL","jinja", "full stack","responsive design"]} /></a>
        </SwiperSlide>
        <SwiperSlide>  
          <a href="/countrypage">
            <MemberComponent img={countryImg}  name="Country / Weather App" desc="A React application that displays country facts and weather forecasts using two APIs." skills={["JavaScript","React","Node.js","express.js","axios", "full stack","responsive design"]}  /></a>
        </SwiperSlide>
        <SwiperSlide>  
          <a href="/phonebookpage">
            <MemberComponent img={phoneImg}  name="Phonebook Feature" desc="A CRUD phonebook feature that adds contact names and numbers built using a MERN stack." skills={["JavaScript","MongoDB","express.js","React","Node.js","cors","full stack","responsive design"]}  /></a>
        </SwiperSlide>
      </Swiper>
    </Container>
    </div>
  </Parallax>
</>
  );
}


  return (
    <div className='home-height' >
    <Nav />
      <div className="container">
        <Parallax
          blur={{ min: -5, max: 5 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          >
          <div style={{ height: window.innerWidth < 665 ? '94vh' : '700px' }}>
            <div className="boxs-header">
              <Bounce >
              <img src={ResumePic} width='250px' alt='Resume Pic' style={{ borderRadius: '150px', margin: '5px', marginTop: '100px' }} onLoad={() => {
                const hiddenDivs = document.querySelectorAll('.hidden');
                hiddenDivs.forEach((div) => {
                  div.classList.remove('hidden');
                });
              }} />
              </Bounce>
              <div className="header-title hidden">
                Hi, I'm Blake!</div>
                <p className="header-title2 hidden">
                <AttentionSeeker cascade left damping={.05}> 
                  <span>Full Stack Developer </span> <span>&nbsp; | &nbsp;</span> 
                  <span> Educator</span> <span>&nbsp; | &nbsp;</span> 
                  <span> Artist </span> 
                </AttentionSeeker> 
                </p>
              <h4 className="introduction hidden">
                I like to create beautiful things that work well
              </h4>
            </div>
          </div>
        </Parallax>

       <div>{screen}</div>
      <Footer/>
      </div>
  </div>
  );
}

export default Home;

