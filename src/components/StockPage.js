import React from "react";

import '../App.css';
import { Parallax } from "react-parallax";
import { AwesomeButton } from "react-awesome-button";
import Icons from './StockFeatures.jsx'
import Nav from './NavBar'
import Button from './Button'
import Footer from './Footer'


import StockBackground from '../assets/stock-background.png'

function Page() {

    let backgroundImage;
  
    if (window.innerWidth > 1200) {
      backgroundImage = 710
    } else if (window.innerWidth > 665) {
      backgroundImage = '100vh'
    } else {
      backgroundImage = '100vh'
    }

  return (
    <>
    <Nav isWhite={true} />
        <div className="container">
        <Parallax 
          bgImage={StockBackground} 
          blur={{ min: 4, max: 4 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          opacity={.1}
          >
          <div style={{height: backgroundImage}} >
            <div className="boxs header">
              <h1 className="title-country">Stock Trading App</h1>
              <h4 className="title-date">November 2022</h4>
              <h4 className="introduction">
                Manage your stock portfolio with real-time financial data.
              </h4>
              <div>
              <Button style={{backgroundColor: 'white'}} text="See Demo" link='https://stockpapertrader.fly.dev/' />
                <div className="space"></div>
              <Button text="Github" link="https://github.com/blakeahalt/CS50_2022/tree/master/finance" />
              </div>
            </div>
          </div>
        </Parallax>
        <Parallax  >
        <div style={{height: '1200px', marginTop:-475 }}>
            <div className="boxs-title">
              <h2 className="blue ">What is it?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  From Harvard University's Introduction to Computer Science CS50 EdX's final project, this web application allows users to manage their own stock portfolio.  Starting with a balance of $10,000, registered users can buy stocks using real-time financial data with the <a href="https://iexcloud.io/docs/api/"><i>IEX Cloud API</i></a>. A user' portfolio stores all stock searches, transactions, and balances.
                </div>
              </div>
            </div>
            <div style={{marginTop:-50}} className="boxs-title">
              <h2 className="blue">What was it built with?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  This web application was built with Python as the main programming language. It also uses a Flask web framework with Jinja as its default templating engine. An SQLite3 relational database is used to store and retrieve user data. Real-time financial data is supplied from the <a href="https://iexcloud.io/docs/api/"><i>IEX Cloud API</i></a>.
              </div>
              </div>
            </div>
            <div style={{marginTop: 0}} className="boxs-title">
              <h2 className="blue">What did I learn?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                I learned how to build a web application that interacts with a relational database and external API (<a href="https://iexcloud.io/docs/api/"><i>IEX Cloud</i></a>). Using a Flask web framework, I was able to create the web application, build routes, handle requests, and interact with a SQLite3 database. Jinja helped create templates for stock transactions, account registration, user login,  page layouts, and displaying notifications. 
              </div>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax >
          <Icons />
        </Parallax>
      </div>

      <Footer/>
    </>
  );
}

export default Page;
