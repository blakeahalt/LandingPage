import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from 'styled-components';
import Nav from './NavBar'
import Footer from './Footer'

import Human from "../assets/Art/HumanHemi.png"
import Biggins from "../assets/Art/Biggins.png"
import BigginsBase from "../assets/Art/BigginsBase.png"
import CamaraLantana from "../assets/Art/CamaraLantana.jpg"
import Chrysanthemum from "../assets/Art/Chrysanthemum.jpg"
import Hydrangea from "../assets/Art/Hydrangea.jpg"
import Korea from "../assets/Art/Korea.jpg"
import NorthAmerica from "../assets/Art/NorthAmerica.jpg"
import RoseOfSharon from "../assets/Art/RoseOfSharon.jpg"
import Tulips from "../assets/Art/Tulips.jpg"
import GlobeThistle from "../assets/Art/GlobeThistle.png"
import BlackEyedSusan from "../assets/Art/BlackEyedSusan.png"
import Misc1 from "../assets/Art/Misc1.png"
import Misc2 from "../assets/Art/Misc2.png"
import Misc21 from "../assets/Art/Misc2.1.png"
import Neon1 from "../assets/Art/NeonSpiro1.png"
import Neon2 from "../assets/Art/NeonSpiro2.png"
import Neon3 from "../assets/Art/NeonBase.png"
import Spiro3 from "../assets/Art/Spiro3.png"
import Spiro3Base from "../assets/Art/Spiro3Base.png"


const Section = styled.section`
display: flex;
overflow: visible;
justify-content: center;
box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.3)
background-color: rgb(221,208,195);
margin-top: 15px;
z-index: 0;

@media screen and (max-width: 1200px){
  justify-content: center;
  flex-wrap: wrap;
}
@media screen and (max-width: 481px){
  justify-content: center;
  height: auto;
}
`

const Container = styled.div`
display: flex;
flex-wrap: nowrap;
justify-content: center;
padding: 20px;
padding-top: 75px;
margin-bottom: 50px;
width: 2500px;
height: auto;
z-index: 0;

box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.3);
background-color: rgb(251,249,236,0.6);
border: 1px solid rgb(0,0,0,0.3);

  @media screen and (max-width: 1200px) {
    display: flex;
    padding: 10px;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
  }


@media screen and (max-width: 665px) {
flex-wrap: wrap;
justify-content: center;
width: 100%;
height auto;
text-align: center;
}
`

const Box = styled.div`
width: 50%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;


@media (max-width: 1200px){
  width: 70vw;
  height: 600px;
  display: flex;
  margin: 50px;
  flex-direction: column;
  justify-content: center;
  margin-top: 225px;
}
@media (max-width: 665px){
  margin-top: -100px;
  margin-bottom: 50px;
  width: 100%;
  font-size: 0.8em
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
flex-basis: 50%
padding: 1rem .7rem 15rem .7rem;
color: ${props => props.theme.body};
margin: 3rem 1.5rem;
flex-wrap: wrap;
justify-content: center;
width: 500px;
height: 610px;
backdrop-filter: blur(4px);
margin: 10px;
max-height: auto;

border: 1px solid rgb(0,0,0,0.3);
border-radius: 20px;
box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.3);
background-color: rgb(204,145,29,0.1);



@media screen and (max-width: 1200px) {
  max-width: 350px;
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  height: 475px;
  margin: 10px;
}

@media screen and (max-width: 665px) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 445px;
  }
`

const ImageContainer = styled.div`
width: 100%;
height: 460px;
box-shadow: 7px 7px 15px -3px rgba(0,0,0,0.3);
background-color: rgb(255,255,255, 0.5);
border: 1px solid rgb(0,0,0,0.3);
margin: 10px;
margin-bottom: -2px;
padding: .5rem;
border-radius: 20px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;

img{
  justify-content: center;
  width: auto;
  height: auto;
  transition: all 0.3s ease;
  display: block;
  margin: 0 auto;
  border-radius: 25px;
}

// &:hover{
//   img{
//     transform: scale(1.25);
//     position: relative;
//     cursor: pointer;
//   }
// }

@media screen and (max-width: 1200px) {
  margin: 7px;
  padding: 10px;
  height: 315px;
}

@media screen and (max-width: 665px) {
  margin: 7px;
  width: 300px;
  height: 300px;
}
`


const Name = styled.h2`
font-size: 1.5em;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
color: rgb(0, 62, 128);

@media screen and (max-width: 1200px) {
  padding-top: 15px;
  font-size: 1.4em;
  margin: 5px;
  width: 300px;
}
@media screen and (max-width: 665px) {
  font-size: 1.2em;
  margin: 7px;
  width: 300px;
  text-align: center;
  justify-content: center;
  margin-top: -10px;
}

`
const Description = styled.p`
  font-size: 1.2em;
  text-align: center;
  display: flex;
  justify-content: center;
  color: rgb(0, 62, 128);
  margin-top: -20px;


@media screen and (max-width: 1200px) {
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  margin-top: 0px;
}
@media screen and (max-width: 665px) {
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  margin: 17px;
  height: 1em;
  margin-top:0px;
  margin-bottom:10px;
  font-size: 1em;
}
`
const Description2 = styled.p`
  font-size: 1em;
  text-align: center;
  display: flex;
  justify-content: center;
  color: rgb(0, 62, 128);
  margin-top: -15px;
  opacity: 0.7;


@media screen and (max-width: 1200px) {
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  margin: 5px;
}
@media screen and (max-width: 665px) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  margin: 17px;
  height: 1em;
  margin-top:-10px;
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
font-size: .8em;
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
  border: 1px solid rgb(0,0,0,0.3);  border-radius: 10px;
  width: auto;
  margin: 2px;
}
@media screen and (max-width: 481px) {
  
  border: 1px solid rgb(0,0,0,0.3);  border-radius: 10px;
}
`

const MemberComponent = ({img, name='', desc='', desc2='', images}) => {

    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleFullScreen = (e) => {
      const imageElement = e.target;
      if (imageElement.requestFullscreen && !imageElement.classList.contains('slick-next') || !imageElement.classList.contains('slick-prev') ) {
        imageElement.requestFullscreen();
        setIsFullScreen(true);
        document.addEventListener("fullscreenchange", handleFullScreenChange);
      }
      e.preventDefault();
    };

    const handleFullScreenChange = () => {
      if (document.fullscreenElement === null) {
        setIsFullScreen(false);
        document.removeEventListener("fullscreenchange", handleFullScreenChange);
      }
    };
    
    const handleExitFullScreen = () => {
      if (isFullScreen) {
        document.exitFullscreen();
      }
    };
    
    const settings = {
      dots: true,
      infinite: false,     
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchMove: true,
      outline: false,
    };
  
    return (
      <Item>
        <ImageContainer >
          <a onClick={isFullScreen ? handleExitFullScreen : handleFullScreen}>
            {images.length === 1 ? (
              <img src={images[0]} alt={name} className="ImageContainerSize" />
            ) : (
              <Slider className="SliderSettings" {...settings}>
                {images.map((image) => (
                  <div key={image}>
                    <img src={image} alt={name} className="SliderContainerSize" />
                  </div>
                ))}
              </Slider>
            )}
          </a>
        </ImageContainer>
        <div className="spiro-name-desc-container">
          <Name>{name}</Name>
          <Description>{desc}</Description>
          <Description2>{desc2}</Description2>
        </div>
      </Item>
    );
  };
  

const ProjectCards = () => {
  return (
    <>
    <Nav />
    <Section>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom:'25px', width: 'auto', height: 'auto' }}>
          <MemberComponent images={[Human]} name="Human Hempisphere at Night" desc="Mixed Media: acrylic & paint marker on paper, Digitally Edited" />
          <MemberComponent images={[NorthAmerica]} name="North America at Night" desc="Mixed Media: acrylic & paint marker on paper, Digitally Edited"/>
          <MemberComponent images={[Korea]} name="Korea at Night" desc="Mixed Media: acrylic & paint marker on paper, Digitally Edited"/>
          <MemberComponent images={[Biggins, BigginsBase]} name="Biggins" desc="Mixed Media: acrylic & paint marker on paper, Digitally Edited"/>
          <MemberComponent images={[Hydrangea]} name="Hydrangea" desc="Mixed Media: Colored pencil on paper, and Digitally Edited"/>
          <MemberComponent images={[Chrysanthemum]} name="Chrysanthemum" desc="Mixed Media: Colored pencil on paper, and Digitally Edited"/>
          <MemberComponent images={[RoseOfSharon]} name="Rose of Sharon" desc="Mixed Media: Colored pencil on paper, and Digitally Edited"/>
          <MemberComponent images={[Tulips]} name="Tulips" desc="Mixed Media: Colored pencil on paper, and Digitally Edited"/>
          <MemberComponent images={[CamaraLantana]} name="Camara Lantana" desc="Mixed Media: Colored pencil on paper, and Digitally Edited"/>
          <MemberComponent images={[BlackEyedSusan]} name="Black Eyed Susan" desc="Mixed Media: Colored pencil on paper, and Digitally Edited"/>
          <MemberComponent images={[GlobeThistle]} name="Globe Thistle" desc="Mixed Media: Colored pencil on paper, and Digitally Edited"/>
          <MemberComponent images={[Misc1]} name="Misc Spirograph 1" desc="Mixed Media: acrylic & paint marker on paper, Digitally Edited"/>
          <MemberComponent images={[Misc2, Misc21]} name="Misc Spirograph 2" desc="iPad: Procreate"/>
          <MemberComponent images={[Neon1, Neon3]} name="Neon Spirograph" desc="iPad: Procreate"/>
          <MemberComponent images={[Spiro3, Spiro3Base]} name="Misc Spirograph WIP" desc="iPad: Procreate"/>
        </div>
      </Container>
    </Section>
    <Footer/>
    </>
  );
};

export default ProjectCards;
