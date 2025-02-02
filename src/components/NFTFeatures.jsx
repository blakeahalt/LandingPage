import React, { useState } from "react";
import styled from 'styled-components'
import "../Icon.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import Arrow from '../assets/Arrow.svg';
import argon2 from '../assets/nft-argon2.png'
import jwt from '../assets/nft-jwt.png'
import OAuth2 from '../assets/nft-OAuth2.png'
import sales from '../assets/nft-sales.png'

const Container = styled.div`
display: flex;
justify-content: center;
margin-left: auto;
margin-right: auto;
margin-bottom: 25px;
width: 625px;
height: 300px;
padding: 15px;

@media (max-width: 1200px){
    height: 60vh;
}

@media (max-width: 665px){
    height: 315px;
    width: 30vw;
    margin-top:10px;
    margin-bottom:75px;
}

.swiper{
    width: 100%;
    height: 350px;

    @media (max-width: 665px){
      margin-top: 0px;
      height: 95%;
      width: 95vw;
  }
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
    width: 4rem;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    right: -100px;

    &:after{
        display: none;
    }

    @media (max-width: 1200px){
    width: 3rem;
    right: -75px;
    }
    @media (max-width: 665px){
    width: 2rem;
    right: 10px;
    margin-top: 160px;

    }
}
.swiper-button-prev{
    color: ${props => props.theme.text};
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    left: -100px;

    &:after{
        display: none;
    }
    @media (max-width: 1200px){
    width: 3rem;
    left: -75px;
  }
  @media (max-width: 665px){
    width: 2rem;
    left: 10px;
    margin-top: 160px
    }
}
`

const Icons = () => {
  const [visibility1, setVisibility1] = useState(false)
  const [visibility2, setVisibility2] = useState(false)
  const [visibility3, setVisibility3] = useState(false)
  const [visibility4, setVisibility4] = useState(true)
  const [visibility5, setVisibility5] = useState(true)
  const [currentVisibility, setCurrentVisibility] = useState('visibility5')
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState(null);

const handleSlideChange = () => {
  setActiveSlideIndex(swiperInstance?.activeIndex || 0);
};

const slideToIndex = (index) => {
  if (swiperInstance) {
    swiperInstance.slideTo(index);
    swiperInstance.autoplay.start();
  }
};

  let screen;

  if (window.innerWidth > 1200) {
    screen = (
      <>
      <div className="nft-features">
        <h1 className="features-title">Features</h1>
        <div className="icons">
          <div className="icon">
            <img 
              style={{ padding: 5, width:'200px', height:'150px', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
              src={OAuth2} 
              alt="icon1" 
              onMouseEnter={() => slideToIndex(0)}
              onMouseLeave={() => slideToIndex(activeSlideIndex)}
            />
            <div className="icon-title">Google Login</div>
        </div>
        <div className="icon">
          <img 
              style={{ padding: 5, width:'200px', height:'150px', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
              src={argon2} 
              alt="icon2" 
              onMouseEnter={() => slideToIndex(1)}
              onMouseLeave={() => slideToIndex(activeSlideIndex)}
            />
            <div className="icon-title">Secure Passwords</div>
        </div>
        <div className="icon">
          <img 
              style={{ padding: 5, width:'200px', height:'150px',border: '1px solid black', borderRadius: '125px', filter: 'blur(1px)' }} 
              src={jwt} 
              alt="icon3" 
              onMouseEnter={() => slideToIndex(2)}
              onMouseLeave={() => slideToIndex(activeSlideIndex)}
            />
            <div className="icon-title">Protected Routes</div>
        </div>
        <div style={{display:'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: 220}} className="icon">
          <img 
              style={{ padding: 5, marginLeft: '20px', marginTop: '15px', width:'200px', height:'150px',border: '1px solid black', borderRadius: '125px', filter: 'blur(1px)' }} 
              src={sales} 
              alt="icon4" 
              onMouseEnter={() => slideToIndex(3)}
              onMouseLeave={() => slideToIndex(activeSlideIndex)}
            />
            <div className="icon-title" >Daily/Weekly/Monthly Sales</div>
          </div>
        </div>
        <Container>
          <Swiper
            effect="cards"
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
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
            <img style={{marginLeft: '0px', marginTop:10, marginBottom:15, width: 'auto', height:'275px',border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
              src={OAuth2} 
              alt="feature 2" />
              <div style={{fontSize: 21, marginLeft: '20px', marginTop: '-50px', color: 'rgb(0, 62, 128)'}}>
                  &#8592; Log in with your Google account.
              </div>
            </SwiperSlide>
            <SwiperSlide > 
            <>
            <img 
              style={{margin: '30px', width: '225px', height:'auto', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)'}} 
              src={argon2} 
              alt="feature 1" />
              <div style={{fontSize: 21, textAlign: 'left', marginRight: '30px', marginLeft: '0px', color: 'rgb(0, 62, 128)'}}>
                Argon2, considered one of the most secure hashing algorithms, keeps password safe. 
              </div> 
              </>
            </SwiperSlide>
            <SwiperSlide > 
            <img style={{marginLeft: '30px', marginTop:10, marginBottom:15, width: 'auto', height:'300px',border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} src={jwt} alt="feature 3" />
            <div style={{fontSize: 21, textAlign: 'left', marginRight: '30px', marginLeft: '20px', color: 'rgb(0, 62, 128)'}}>
                  JSON web tokens protect private routes while providing logged-in users easy access. 
              </div>
            </SwiperSlide>
            <SwiperSlide > 
            <img 
              style={{marginTop: -15, marginBottom:15, width: 'auto', height:'250px', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
              src={sales} 
              alt="feature 3"
              /> 
                <div style={{fontSize: 21, position:'absolute', marginTop: '275px',color: 'rgb(0, 62, 128)'}}>
                  Track individual sales and collections by day/week/month
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    </>
    )
  } else if (window.innerWidth > 665) {
screen =(
  <>
 <div className="nft-features">
    <h1 className="features-title">Features</h1>
    <div className="icons">
      <div className="icon">
        <img 
          style={{ padding: 5, width:'150px', height:'150px', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
          src={OAuth2} 
          alt="icon1" 
          onMouseEnter={() => slideToIndex(0)}
          onMouseLeave={() => slideToIndex(activeSlideIndex)}
        />
        <div className="icon-title">Google Login</div>
    </div>
    <div className="icon">
      <img 
          style={{ padding: 5, width:'150px', height:'150px', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
          src={argon2} 
          alt="icon2" 
          onMouseEnter={() => slideToIndex(1)}
          onMouseLeave={() => slideToIndex(activeSlideIndex)}
        />
        <div className="icon-title">Secure Passwords</div>
    </div>
    <div className="icon">
      <img 
          style={{ padding: 5, width:'150px', height:'150px',border: '1px solid black', borderRadius: '125px', filter: 'blur(1px)' }} 
          src={jwt} 
          alt="icon3" 
          onMouseEnter={() => slideToIndex(2)}
          onMouseLeave={() => slideToIndex(activeSlideIndex)}
        />
        <div className="icon-title">Protected Routes</div>
    </div>
    <div style={{display:'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: 220}} className="icon">
      <img 
          style={{ padding: 5, marginTop: '15px', width:'150px', height:'150px',border: '1px solid black', borderRadius: '125px', filter: 'blur(1px)' }} 
          src={sales} 
          alt="icon4" 
          onMouseEnter={() => slideToIndex(3)}
          onMouseLeave={() => slideToIndex(activeSlideIndex)}
        />
        <div className="icon-title" >Daily/Weekly/Monthly Sales</div>
      </div>
    </div>
    <Container>
      <Swiper
        effect="cards"
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
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
        <img style={{marginLeft: '0px', marginTop:10, marginBottom:15, width: 'auto', height:'275px',border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
          src={OAuth2} 
          alt="feature 2" />
          <div style={{fontSize: 21, marginLeft: '20px', marginTop: '-50px', color: 'rgb(0, 62, 128)'}}>
              &#8592; Log in with your Google account.
          </div>
        </SwiperSlide>
        <SwiperSlide > 
        <>
        <img 
          style={{margin: '30px', marginTop: '20px', width: '225px', height:'auto', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)'}} 
          src={argon2} 
          alt="feature 1" />
          <div style={{fontSize: 21, textAlign: 'left', marginRight: '30px', marginLeft: '0px', color: 'rgb(0, 62, 128)'}}>
            Argon2, considered one of the most secure hashing algorithms, keeps password safe. 
          </div> 
          </>
        </SwiperSlide>
        <SwiperSlide > 
        <img style={{marginLeft: '30px', marginTop:10, marginBottom:15, width: 'auto', height:'300px',border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} src={jwt} alt="feature 3" />
        <div style={{fontSize: 21, textAlign: 'left', marginRight: '30px', marginLeft: '25px', color: 'rgb(0, 62, 128)'}}>
              JSON web tokens protect private routes while providing logged-in users easy access. 
          </div>
        </SwiperSlide>
        <SwiperSlide > 
        <img 
          style={{marginTop: -15, marginBottom:15, width: 'auto', height:'250px', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
          src={sales} 
          alt="feature 3"
          /> 
            <div style={{fontSize: 21, position:'absolute', marginTop: '275px',color: 'rgb(0, 62, 128)'}}>
              Track individual sales and collections by day/week/month
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  </div>
  </>
)
  } else {
  screen = (
    <>
    <h1 className="features-title">Features</h1>
    <div className="icons">
      <div className="icon">
        <img 
          style={{ padding: 5, width:'150px', height:'125px', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
          src={OAuth2} 
          alt="icon1" 
          onMouseEnter={() => slideToIndex(0)}
          onMouseLeave={() => slideToIndex(activeSlideIndex)}
        />
        <div className="icon-title">Google Login</div>
      </div>
      <div className="icon">
        <img 
            style={{ padding: 5, width:'150px', height:'125px', border: '1px solid black', borderRadius: '125px', filter: 'blur(1px)' }} 
            src={argon2} 
            alt="icon2" 
            onMouseEnter={() => slideToIndex(1)}
            onMouseLeave={() => slideToIndex(activeSlideIndex)}
          />
          <div className="icon-title">Secure Passwords</div>
      </div>
    </div>
    <div className="icons">
      <div className="icon">
        <img 
            style={{ padding: 5, width:'150px', height:'125px',border: '1px solid black', borderRadius: '125px', filter: 'blur(1px)' }} 
            src={jwt} 
            alt="icon3" 
            onMouseEnter={() => slideToIndex(2)}
            onMouseLeave={() => slideToIndex(activeSlideIndex)}
          />
          <div className="icon-title">Protected Routes</div>
      </div>
      <div style={{display:'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: 220}} className="icon">
        <img 
            style={{ padding: 5, marginTop: '15px', width:'150px', marginLeft: '25px', height:'125px',border: '1px solid black', borderRadius: '125px', filter: 'blur(1px)' }} 
            src={sales} 
            alt="icon4" 
            onMouseEnter={() => slideToIndex(3)}
            onMouseLeave={() => slideToIndex(activeSlideIndex)}
          />
          <div className="icon-title" >Daily/Weekly/Monthly Sales</div>
        </div>
    </div>
    <Container>
      <Swiper
        effect="cards"
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
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
        <img style={{marginLeft: '10px', marginTop:10, marginBottom:15, width: '175px', height:'275px',border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
          src={OAuth2} 
          alt="feature 2" />
          <div style={{fontSize: 16, marginLeft: '-10px', marginTop: '-15px', color: 'rgb(0, 62, 128)'}}>
              Log in with your Google account.
          </div>
        </SwiperSlide>
        <SwiperSlide > 
        <>
        <img 
          style={{margin: '5px', marginTop: '10px', marginLeft: '10px', width: '175px', height:'275px', borderRadius: '25px', border:'1px solid black', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)'}} 
          src={argon2} 
          alt="feature 1" />
          <div style={{fontSize: 16, textAlign: 'left', marginLeft: '10px', color: 'rgb(0, 62, 128)'}}>
            The Argon2 hashing algorithm keeps passwords safe. 
          </div> 
          </>
        </SwiperSlide>
        <SwiperSlide > 
        <img style={{margin: '5px', marginTop: '5px', width: '175px', height:'275px', borderRadius: '25px', border:'1px solid black', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} src={jwt} alt="feature 3" />
        <div style={{fontSize: 16, textAlign: 'left', marginRight: '30px', marginLeft: '20px', color: 'rgb(0, 62, 128)'}}>
              JSON web tokens protect private routes and provide quick access to users already logged in. 
          </div>
        </SwiperSlide>
        <SwiperSlide > 
        <img 
          style={{marginTop: '-60px', marginBottom:15, width: '340px', height:'200px', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
          src={sales} 
          alt="feature 3"
          /> 
            <div style={{fontSize: 16, position:'absolute', marginTop: '200px',color: 'rgb(0, 62, 128)'}}>
              Track individual sales and collections by day/week/month
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
    </>
  )
  }

  return (
    <>
      <div>{screen}</div>
    </>
  )
};

export default Icons;
