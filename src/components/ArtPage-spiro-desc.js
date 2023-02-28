import React, { lazy, Suspense } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Button from './Button'
import Loading from './Loading';

import Escher3 from '../assets/Escher3.png'

const Carousel = lazy(() => import("./Carousel"));

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
  margin-top: -100px;
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
  margin-top: 0px;
}
`
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  font-weight:400;
  width: 80%;
  margin: 10px auto;


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
    <div className='spiro-outside-container'>
    <Section id="about">
      <Container >
        <Box style={{marginBottom: '-50px' }}> 
            <Suspense fallback={<Loading />}>
            <Carousel /> </Suspense> 
        </Box>
        <Box className='spiro-desc-container' > 
          <img className='spiro-desc-img' src={Escher3}/>
            <Title>
            Spirograph Art
            </Title>
            <SubText>
            A collection of works that incorporate the spirograph design.
            </SubText>
            <SubText>
            Inspired by M.C. Escher's works on mobius strips, I try to incorporate mobius strip designs to the wkeletal structure of spirographs.
            </SubText>
            <SubText>
            In other spirograph works, I balance both structure and negative space with color and design. Earth at night works are based on satellite imagery taken from space, while floral works highlight the visual beauty of geometry found in nature.
            </SubText>
            <ButtonContainer>
            <Button text="See More" link='/art/spiro' />
            {/* <Button text="See More" link='http://localhost:3000/art/spiro' /> */}
            </ButtonContainer>
        </Box>
      </Container>
    </Section>
    </div>
  )
}

export default About