import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";



import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import Human from "../assets/Art/HumanHemi.png"
import Biggins from "../assets/Art/Biggins.png"
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
import Neon from "../assets/Art/NeonSpiro.png"

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
        margin-top: -50px;
        width: 80vw;
        height: 350px;
        margin-bottom: 50px;
    }
}

.swiper-slide{
    background-color:  rgb(251,249,236);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 665px){
        height: 300px
        margin-top: -25px;
    }

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
        <SwiperSlide>  <img width={500} height={400}  src={Human} alt="Mash1" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Biggins} alt="Biggins" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Korea} alt="Korea" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Chrysanthemum} alt="Chrysanthemum" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Hydrangea} alt="Hydrangea" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Tulips} alt="Tulips" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Misc2} alt="Misc2" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Neon} alt="Neon" />   </SwiperSlide>

      </Swiper>
    </Container>
  )
}

export default Carousel

