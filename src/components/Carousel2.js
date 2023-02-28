import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";



import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import Dizzy from '../assets/portraits/Dizzy_Done.png'
import MilesDavis from '../assets/portraits/MilesDavis.png'
import Thelonius from '../assets/portraits/Thelonius.png'
import Mingus from '../assets/portraits/Mingus.png'
import SaganTyson from '../assets/portraits/Sagan_tyson.png'
import Ajumma from '../assets/portraits/Ajumma.png'
import Ajussi from '../assets/portraits/Ajussi.png'

import Arrow from '../assets/Arrow.svg';


const Container = styled.div`
display: flex;
margin-bottom: 25px;
align-items: center;
width: 525px;
height: 100%;
margin-left: 50px;
z-index: 1;

@media (max-width: 1200px){
    display: flex;
    margin-bottom: -225px;
    justify-content: center;
    width: 500px;
    height: 100%;
    margin-top: 150px;
    margin-left: 215px;
}

@media (max-width: 665px){
    display: flex;
    margin-bottom: -225px;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 500px;
    margin-top: -15vh;
    margin-left: 215px;
}

.swiper{
    width: 100%;
    height: 100%;
    
    @media (max-width: 1200px){
        width: 500px;
        height: 100%;
        margin-left: -175px;
    }
    
    @media (max-width: 665px){
        margin-top: 20px;
        margin-left: -195px;
        width: 90vw;
        height: 350px;
    }
}

.swiper-slide{
    background-color: rgb(251,249,236);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 665px){
        height: 300px;
        margin-top: -25px;
    }
    
    img{
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
        align-self: center;
    }
}

.swiper-button-next{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    top: 50%;
    transform: translateY(-50%);
    
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
    left: 0;
    top: 50%;
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

const Carousel = () => {
  return (
    <Container>
        <Swiper
        autoplay={{
            delay:2000,
            disableOnInteraction:false,
        }}
        pagination={{
            type:'fraction',
        }}
        scrollbar={{
            draggable:true
        }}
        modules={[EffectCards,Pagination, Navigation, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        
        className="mySwiper"
      >
        <SwiperSlide>  <img width={500} height={400}  src={MilesDavis} alt="pic1" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Thelonius} alt="pic1" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Mingus} alt="pic1" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Dizzy} alt="pic1" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Ajumma} alt="pic1" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Ajussi} alt="pic1" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={SaganTyson} alt="pic2" />   </SwiperSlide>

      </Swiper>
    </Container>
  )
}

export default Carousel