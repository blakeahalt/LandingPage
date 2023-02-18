import React from "react";

import '../App.css';
import { Parallax } from "react-parallax";
import { AwesomeButton } from "react-awesome-button";
import Icons from './StockFeatures.jsx'
import Nav from './NavBar'

import StockBackground from '../assets/stock-background.png'


function Page() {
  return (
    <div className="parallax-features">
      <Nav isWhite={true} />
        <div className="container">
        <Parallax 
          bgImage={StockBackground} 
          blur={{ min: 4, max: 4 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          >
          <div style={{ height: 725 }}>
            <div className="boxs header">
              <h1 className="title-country">Stock Trading App</h1>
              <h4 className="title-date">November 2022</h4>
              <h4 className="introduction">
                Manage your stock portfolio with real-time financial data.
              </h4>
              <div className="buttons">
                <a href="https://stockpapertrader.fly.dev/">
                  <AwesomeButton
                    size="medium"
                    type="secondary"
                  >
                    Demo
                  </AwesomeButton> 
                </a> 
                <div className="space"></div>
                <a href="https://github.com/blakeahalt/CS50_2022/tree/master/finance">
                  <AwesomeButton
                    size="medium"
                    type="primary"
                  >
                    github
                  </AwesomeButton>
                </a> 
              </div>
            </div>
          </div>
        </Parallax>
        <Parallax  >
        <div style={{height: '1200px', marginTop:-450}}>
            <div className="boxs-title">
              <h2 className="blue ">What is it?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  Harvard University's Introduction to Computer Science final CS50 EdX project.  This web app allows users to manage their own stock portfolio.  Registered users can buy stocks with a starting balance of $10,000 from the <a href="https://iexcloud.io/docs/api/"><i>IEX Cloud API</i></a>. A user' portfolio stores all stock searches, transactions, and balances.
                </div>
              </div>
            </div>
            <div style={{marginTop:-50}} className="boxs-title">
              <h2 className="blue">What was it built with?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  This app was built with Python as the main programming language. It also uses a Flask web framework with Jinja as its default templating engine. An SQLite3 relational database is used to store and retrieve user data. All real-time financial data is supplied from the <a href="https://iexcloud.io/docs/api/"><i>IEX Cloud API</i></a>.
              </div>
              </div>
            </div>
            <div style={{marginTop: 10}} className="boxs-title">
              <h2 className="blue">What did I learn?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                Overall, I learned how to build a web application that interacts with a relational database and external APIs. Using a Flask web framework, I was able to create the web application, build routes, handle requests, and interact with the SQLite3 database. Jinja helped separate the logic into templates, which controlled specific things like buying or selling a stock, registering or logging in users, organizing the page layout, and displaying notifications. Lastly, the IEX Cloud API taught me how to integrate an external API to provide real-time financial data. 
              </div>
              </div>
            </div>
          </div>
        </Parallax>


      <Parallax className="stock-features">
        <Icons />
      </Parallax>

    </div>
    <div className="footer">Footer. This code is open source.</div>

        </div>
  );
}

export default Page;
