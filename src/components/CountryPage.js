import React from "react";
import '../App.css';
import { Parallax } from "react-parallax";
import { AwesomeButton } from "react-awesome-button";
import Icons from './CountryFeatures.jsx'
import Nav from './NavBar'
import Button from './Button'
import Footer from './Footer'

import WorldMap from "../assets/country-background.png"

function CountryPage() {
let backgroundImage;

  if (window.innerWidth > 1200) {
    backgroundImage = 710
  } else if (window.innerWidth > 665) {
    backgroundImage = '100vh'
  } else {
    backgroundImage = '100vh'
  }

  return (
    <div >
        <Nav isWhite={true} />
        <div className="container">
        <Parallax 
          bgImage={WorldMap} 
          blur={{ min: -5, max: 5 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          >
          <div style={{height: backgroundImage}} >
            <div className="boxs header">
              <h1 className="title-country">Country and Weather Application</h1>
              <h4 className="title-date">August 2022</h4>
              <h4 className="introduction">
                Learn new country facts and get a 3-day weather forecast.
              </h4>
              <div>
              <Button style={{backgroundColor: 'white'}} text="See Demo" link='http://country.fly.dev/' />
                <div className="space"></div>
              <Button text="Github" link="https://github.com/blakeahalt/Full-Stack-Open-2022/tree/main/part2/countries" />
                <a href="https://github.com/blakeahalt/Full-Stack-Open-2022/tree/main/part2/countries">
                </a> 
              </div>
            </div>
          </div>
        </Parallax>
        <Parallax  >
        <div style={{ height: '1000px', marginTop:-400 }}>
            <div className="boxs-title">
              <h2 className="blue ">What is it?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                From the University of Helsinki's Full Stack Open 2022 course this web application fetches and displays country facts and weather forecast from the <a href="https://restcountries.com/" target="_blank" rel="noreferrer"><i>REST Countries</i></a> and <a href="https://openweathermap.org/" target="_blank" rel="noreferrer"><i>Open Weather Map</i></a> API's.
                </div>
              </div>
            </div>
            <div style={{marginTop:-40}} className="boxs-title">
              <h2 className="blue">What was it built with?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                This web application was built with Javascript as the main programming language. It has a front-end user interface (built with React) and a back-end server (built with Node.js and Express.js) that communicates with an external API (using Axios).
              </div>
              </div>
            </div>
            <div style={{marginTop: -50}} className="boxs-title">
              <h2 className="blue">What did I learn?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  I learned how to quickly search for and display country data by applying a filter to state variables set by async requests to an API. I also learned how to implement responsive design with stylized CSS and how to deploy the app to cloud-based platforms, Heroku and Fly.io.
              </div>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax>
          <Icons />
        </Parallax>
      </div>

      <Footer/>
    </div>
  );
}

export default CountryPage;
