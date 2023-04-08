import Daiverse1 from "../assets/dailand.png";
import cocaine from "../assets/cocaine.jpeg";
import colorado from "../assets/colorado.jpg";
import sweetdaddy from "../assets/sweetdaddy.jpg";
import sweetdaddyremix from "../assets/sweetdaddyremix.jpeg";
import ReactPlayer from "react-player";
import { useState, useContext } from "react";
import { Theme } from "../App";
// Import Swiper React components now
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

export function LandingPage() {
  const theme = useContext(Theme);


  const [check, setcheck] = useState("check");

  return (
    <div>
      <div className="flex flex-col items-center">
        <img
          alt="Daiverse"
          src={
            theme === "Dark" ? Daiverse1 : theme === "Light" ? Daiverse1 : ""
          }
          onClick={() => {
            setcheck("new");
          }}
          className="w-[100vw] h-[65rem] mt-[-6rem] object-cover main"
        />
      </div>
      <div className="flex flex-col items-center" id="Music">
        <div className="container">
          <h1 className="heading text-[#e59002]">Music</h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container mb-[-10rem]"
          >
            <SwiperSlide className="musics">
              <img alt="Daiverse" src={sweetdaddyremix} className="" />
              <p className="text-center text-3xl text-[#e59002] font-bold mb-[1rem] mt-[-2rem]">
                Sweet Daddy Remix
              </p>
              <div className="flex flex-col items-center">
                <button className="border border-[#e59002] text-2xl px-[2.5rem] mt-[1rem] py-[0.3rem]">
                  Stream
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="musics">
              <img alt="Daiverse" src={sweetdaddy} className="" />
              <p className="text-center text-3xl text-[#e59002] font-bold mb-[1rem] mt-[-2rem]">
                Sweet Daddy
              </p>
              <div className="flex flex-col items-center">
                <button className="border border-[#e59002] text-2xl px-[2.5rem] mt-[1rem] py-[0.3rem]">
                  Stream
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="musics">
              <img alt="Daiverse" src={cocaine} className="" />
              <p className="text-center text-3xl text-[#e59002] font-bold mb-[1rem] mt-[-2rem]">
                Cocaine
              </p>
              <div className="flex flex-col items-center">
                <button className="border border-[#e59002] text-2xl px-[2.5rem] mt-[1rem] py-[0.3rem]">
                  Stream
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="musics">
              <img alt="Daiverse" src={colorado} className="" />
              <p className="text-center text-3xl text-[#e59002] font-bold mb-[1rem] mt-[-2rem]">
                Colorado
              </p>
              <div className="flex flex-col items-center">
                <button className="border border-[#e59002] text-2xl px-[2.5rem] mt-[1rem] py-[0.3rem]">
                  Stream
                </button>
              </div>
            </SwiperSlide>

            <div className="slider-controler hidden mt-[-6rem]">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              {/* <div className="swiper-pagination"></div> */}
            </div>
          </Swiper>
        </div>
        {/* <ImageSlider   images={[
    Daiverse1,
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg"
  ]}/> */}
      </div>

      <div>
        <h3 className="heading text-[#e59002] mt-[-rem] " id="Videos">
          VIDEOS
        </h3>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide className="flex flex-col items-center">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=d2RVycC06gI"
              width="100%"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=9WJlIM1K0pk"
              width="100%"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=r20yhnxwdnA"
              width="100%"
            />
          </SwiperSlide>

          <div className="slider-controler mt-[-12rem] ">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>
        </Swiper>
      </div>

      <div className="bg-[#e59002] pb-[2rem] mt-[-5rem]">
        <h3 className="heading text-[#323b0a]" id="Tour">
          Tour & Shows
        </h3>
        <p className=" text-[#323b0a] text-3xl text-center abouttext">
          THERE IS CURRENTLY NO INCOMING TOUR / SHOW
        </p>
      </div>

      <div className="py-[2rem] flex flex-col items-center">
        <h3 className="heading text-[#e59002]" id="Newsletter">
          Newsletter
        </h3>
        <p className=" text-[#323b0a] text-3xl text-white text-center w-[80%]">
          So glad you are here. I usually share things with you first before
          anyone else. Join below so you dont miss out.
        </p>
        <form className="flex items-center justify-center mt-[2rem]">
          <input
            type="email"
            placeholder="Email"
            className="border border-[#e59002] rounded-[10px] text-3xl py-[0.3rem] px-[1rem]"
          />
          <input
            type="submit"
            value="Join"
            className="border bg-[#e59002] text-white rounded-[10px] text-3xl py-[0.3rem] px-[1rem]"
          />
        </form>
      </div>
    </div>
  );
}
