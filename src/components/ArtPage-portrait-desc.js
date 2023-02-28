import React, { lazy, Suspense } from 'react'
import styled, { ThemeProvider } from 'styled-components'
// import Carousel from '../Carousel'
import Button from './Button'
import Loading from './Loading';

import Dizzy from '../assets/portraits/Dizzy_Done_transparent.png'


const Carousel = lazy(() => import("./Carousel2"));

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

@media (max-width: 665px){
  max-height: 300vh;
  width: 100%;
  background-color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  
}
`

const Container = styled.div`
width: 90%;
margin: 0 auto;
${'' /* background-color: lightblue;  */}

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 1200px){
  width: 95%;
  height: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -25px;
  margin-bottom: 250px;
}
@media (max-width: 665px){
  max-height: 150vh;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
  margin-top: 350px;
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
  margin-top: -70px;
  margin-bottom: 50px;
  width: 100%;
  font-size: 0.8em
}
`
 
 
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.body};
  width: 80%;
  align-self: flex-start;
  margin: 0 auto;

@media (max-width: 64em){
  width: 100%;
  text-align:center;
}
@media (max-width: 665px){
  width: 100%;
  text-align:center;
  margin-top: -px;
}
`
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  font-weight:400;
  width: 80%;
  align-self: flex-start;
  margin: 1rem auto;


  @media (max-width: 64em){
    width: 100%;
    text-align:center;
    font-size: ${(props) => props.theme.fontmd};

}
  @media (max-width: 665px){
    font-size: 1.2em;
    width: 250px;
    text-align: center;
    justify-content: center;

}

`

const ButtonContainer = styled.div`
 width: 80%;
 margin: 1rem auto;
 display: flex;
 align-self: flex-start;

  @media (max-width: 64em){
    width: 100%;

  a{
    margin: 0 auto;
    }
  }

  @media (max-width: 665px){

  }
`

const About = () => {
  return (
    <div className='portrait-page-height'>
    <div className='portrait-outside-container'>
    <Section id="about">
      <Container>
        <Box style={{marginBottom: '-50px'}}> 
        <Suspense fallback={<Loading />}>
          <Carousel /> </Suspense> </Box>
        <Box> 
        <img className='portrait-desc-img'src={Dizzy}/>
        <Title>
        Portrait Art
        </Title>
        <SubText>
        A collection of portrait art.
        </SubText>
        <SubText>
        Traditional portrait art featuring jazz artists, kaleidoscopic, and sacred geometric backgrounds.
        </SubText>
        <ButtonContainer>
        <Button text="See More" link='/art/portraits' />
        {/* <Button text="See More" link='http://localhost:3000/art/portraits' /> */}
        </ButtonContainer>
         </Box>
      </Container>
    </Section>
    </div>
    </div>
  )
}

export default About