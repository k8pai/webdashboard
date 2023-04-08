import React from "react";
import main from './assets/undraw_code_typing_re_p8b9.svg';
import codelogo from './assets/code.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from "./card";
import botlogo from './assets/code.png';

const Home =()=>{
  
    var settings = {
        dots: false,
        buttons : false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1110,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: true
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 620,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
    <div>
        <div className="z-[-19]">
            <div className="md:flex justify-between w-[90%] md:my-[200px]">
               <img className="md:h-[70%] md:mt-0 mt-[70px] md:w-[40%] ml-6" src={main} alt="" />
            
               <div className="md:max-w-[600px] md:flex-row text-center md:text-xl md:mt-0 mt-[40px] md:ml-0 ml-3">
                <h1 className="font-bold md:text-4xl text-[#2f1793] text-2xl">252 Development</h1>
                <p className="pt-[15px] ml-3 text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta hic repellat eius blanditiis quibusdam a modi id cupiditate corrupti? Ad sunt voluptates, eaque unde vero ex. Similique doloremque illo cum.</p>
               </div>
            </div>
            <div id="why" className="md:my-0 my-8" >
                <h1 className="text-2xl md:text-3xl font-bold text-[#2f1793] text-center">WHY CHOOSE <span className="text-[#2f1793]">252</span></h1>
                <div className="p-5 flex flex-wrap  justify-center gap-5 mx-auto my-10">
                    <div className="bg-white w-[250px] md:my-0 my-3 p-4 rounded-md  mx-[3vw] hover:border-[3px] shadow-md duration-200 hover:border-[#2f1793]">
                        <img className="md:w-12 w-10 mx-auto py-4" src={codelogo} alt="" />
                        <h1 className="text-[#2f1793] text-xl font-semibold text-center">Web development</h1>
                        <p className="pt-3 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque libero nobis dolore repudiandae voluptatibus tempora modi at!</p>
                    </div>
                    <div className="bg-white w-[250px] md:my-0 my-3 p-4 rounded-md mx-[3vw] hover:border-[3px] shadow-md duration-200 hover:border-[#2f1793]">
                        <img className="md:w-12 w-10 mx-auto py-4" src={codelogo} alt="" />
                        <h1 className="text-[#2f1793] text-xl font-semibold text-center">Web development</h1>
                        <p className="pt-3 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque libero nobis dolore repudiandae voluptatibus tempora modi at!</p>
                    </div>
                    <div className="bg-white w-[250px] md:my-0 my-3 p-4 rounded-md mx-[3vw] hover:border-[3px] shadow-md duration-100 hover:border-[#2f1793]">
                        <img className="md:w-12 w-10 mx-auto py-4" src={codelogo} alt="" />
                        <h1 className="text-[#2f1793] text-xl font-semibold text-center">Web development</h1>
                        <p className="pt-3 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque libero nobis dolore repudiandae voluptatibus tempora modi at!</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="my-5 text-2xl md:text-3xl font-bold text-[#2f1793] text-center">Our Bots</h1>
                
                <Slider {...settings}>
                <Card name="Gaana" />
                  <Card name="Bolt" />
                  <Card name="OYO" />
                  <Card name="Alex" />
                  <Card name="Aqua" />
                </Slider>
                
            </div>
        </div>
    </div>
    )
}

export default Home;