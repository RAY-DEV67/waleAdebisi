import db from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import Daiverse1 from "../assets/final2.png";
import Daiverse2 from "../assets/dailandb.png";
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
import LoadingSpinner from "../components/spinner";

export function LandingPage() {
  const theme = useContext(Theme);
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);
  const [welcome, setwelcome] = useState(false);

  const upload = async () => {
    setloading(true);
    await addDoc(collection(db, "Email"), {
      Email: email,
    });
    setloading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    upload();
    setwelcome(true);
    setTimeout(() => {
      setwelcome(false);
    }, 4000);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        {theme === "Dark" ? (
          <img
            alt="Daiverse"
            src={Daiverse1}
            className="w-[100vw] h-[65rem] mt-[-6rem] md:mt-[2rem] lg:mt-[10rem] lg:w-[70vw] xl:w-[60vw] xl:mt-[15rem] object-cover main"
          />
        ) : theme === "Light" ? (
          <img
            alt="Daiverse"
            src={Daiverse2}
            className="w-[90vw] h-[55rem] mt-[4rem] md:mt-[15rem] lg:mt-[18rem] lg:w-[50vw] xl:w-[50vw] xl:mt-[15rem] object-cover main"
          />
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col items-center" id="Music">
        <div className="container sm:w-[70%]">
          <h1 className="heading text-[#D3D3D3]">Music</h1>
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
            className="swiper_container mb-[-10rem] sm:mb-[0rem]"
          >
            <SwiperSlide className="musics flex flex-col items-center">
              <img alt="Daiverse" src={sweetdaddyremix} className="" />
              <p className="text-center text-3xl text-[#D3D3D3] font-bold mb-[1rem] mt-[-2rem]">
                Sweet Daddy Remix
              </p>
              <div className="flex flex-col items-center">
                <a
                  target="_Blank"
                  href="https://music.apple.com/ng/album/sweet-daddy/1606795060?i=1606795063"
                  className="border border-[#D3D3D3] text-2xl px-[2.5rem] mt-[1rem] py-[0.3rem]"
                >
                  Stream
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="musics flex flex-col items-center">
              <img alt="Daiverse" src={sweetdaddy} className="" />
              <p className="text-center text-3xl text-[#D3D3D3] font-bold mb-[1rem] mt-[-2rem]">
                Sweet Daddy
              </p>
              <div className="flex flex-col items-center">
                <a
                  target="_Blank"
                  href="https://music.apple.com/ng/album/sweet-daddy/1566916388?i=1566916393"
                  className="border border-[#D3D3D3] text-2xl px-[2.5rem] mt-[1rem] py-[0.3rem]"
                >
                  Stream
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="musics flex flex-col items-center">
              <img alt="Daiverse" src={cocaine} className="" />
              <p className="text-center text-3xl text-[#D3D3D3] font-bold mb-[1rem] mt-[-2rem]">
                Cocaine
              </p>
              <div className="flex flex-col items-center">
                <a
                  target="_Blank"
                  href="https://music.apple.com/ng/album/your-body-cocaine/1586843705?i=1586843917"
                  className="border border-[#D3D3D3] text-2xl px-[2.5rem] mt-[1rem] py-[0.3rem]"
                >
                  Stream
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="musics flex flex-col items-center">
              <img alt="Daiverse" src={colorado} className="" />
              <p className="text-center text-3xl text-[#D3D3D3] font-bold mb-[1rem] mt-[-2rem]">
                Colorado
              </p>
              <div className="flex flex-col items-center">
                <a
                  target="_Blank"
                  href="https://music.apple.com/ng/album/colorado-feat-dai-verse/1649399753?i=1649399754"
                  className="border border-[#D3D3D3] text-2xl px-[2.5rem] mt-[1rem] py-[0.3rem]"
                >
                  Stream
                </a>
              </div>
            </SwiperSlide>

            <div className="slider-controler hidden sm:block">
              <div className="swiper-button-prev bg-[#D3D3D3] slider-arrow">
              <svg
                    viewBox="-3 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#000009"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g id="icomoon-ignore"> </g>{" "}
                      <path
                        d="M13.114 2.887c-7.243 0-13.114 5.871-13.114 13.113s5.871 13.113 13.114 13.113c7.242 0 13.112-5.871 13.112-13.113s-5.87-13.113-13.112-13.113zM13.114 28.064c-6.653 0-12.065-5.412-12.065-12.064s5.412-12.063 12.065-12.063c6.652 0 12.063 5.412 12.063 12.063s-5.411 12.064-12.063 12.064z"
                        fill="#000009"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M12.318 10.363l-0.742-0.742-6.379 6.379 6.379 6.379 0.742-0.742-5.113-5.113h12.726v-1.049h-12.726z"
                        fill="#000009"
                      >
                        {" "}
                      </path>{" "}
                    </g>
                  </svg>
              </div>
              <div className="swiper-button-next bg-[#D3D3D3] slider-arrow">
              <svg
                    viewBox="-3 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#000009"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g id="icomoon-ignore"> </g>{" "}
                      <path
                        d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z"
                        fill="#000009"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z"
                        fill="#000009"
                      >
                        {" "}
                      </path>{" "}
                    </g>
                  </svg>
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

      <div className="flex flex-col items-center">
        <div className="sm:w-[70%]">
          <h3 className="heading text-[#D3D3D3]" id="Videos">
            VIDEOS
          </h3>
          <div className="flex flex-col items-center">
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
              className="swiper_container w-[90vw] sm:w-[70vw] md:w-[70vw] lg:w-[70vw]"
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
                <div className="swiper-button-prev bg-[#D3D3D3] slider-arrow">
                  <svg
                    viewBox="-3 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#000009"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g id="icomoon-ignore"> </g>{" "}
                      <path
                        d="M13.114 2.887c-7.243 0-13.114 5.871-13.114 13.113s5.871 13.113 13.114 13.113c7.242 0 13.112-5.871 13.112-13.113s-5.87-13.113-13.112-13.113zM13.114 28.064c-6.653 0-12.065-5.412-12.065-12.064s5.412-12.063 12.065-12.063c6.652 0 12.063 5.412 12.063 12.063s-5.411 12.064-12.063 12.064z"
                        fill="#000009"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M12.318 10.363l-0.742-0.742-6.379 6.379 6.379 6.379 0.742-0.742-5.113-5.113h12.726v-1.049h-12.726z"
                        fill="#000009"
                      >
                        {" "}
                      </path>{" "}
                    </g>
                  </svg>
                </div>
                <div className="swiper-button-next bg-[#D3D3D3] slider-arrow">
                  <svg
                    viewBox="-3 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#000009"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g id="icomoon-ignore"> </g>{" "}
                      <path
                        d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z"
                        fill="#000009"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z"
                        fill="#000009"
                      >
                        {" "}
                      </path>{" "}
                    </g>
                  </svg>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-[#D3D3D3] rounded-[20px] w-[100vw] pb-[2rem] mt-[-5rem] flex flex-col items-center">
          <h3 className="heading text-[#000009]" id="Tour">
            Tour & Shows
          </h3>
          <p className=" text-[#000009] text-3xl w-[80%] text-center abouttext">
            THERE IS CURRENTLY NO INCOMING TOUR / SHOW
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="pt-[2rem] pb-[4rem] sm:w-[70%] flex flex-col items-center">
          <h3 className="heading text-[#D3D3D3]" id="Newsletter">
            Newsletter
          </h3>
          <p className=" text-[#D3D3D3] text-3xl text-center w-[80%]">
            So glad you are here. I usually share things with you first before
            anyone else. Join below so you dont miss out.
          </p>
          <form className="flex items-center justify-center w-[100%] mt-[2rem]">
            <input
              type="email"
              placeholder="Email"
              className="border border-[#D3D3D3] text-[#000009] w-[50%] rounded-[10px] text-3xl py-[0.3rem] px-[1rem]"
              name="email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <button
              className="border text-[#D3D3D3] bg-[#000009] text-white rounded-[10px] text-3xl py-[0.3rem] px-[1rem]"
              onClick={handleSubmit}
            >
              {loading ? <LoadingSpinner /> : "join"}
            </button>
          </form>
          <p>
            {" "}
            {welcome ? (
              <p className="border mt-[1rem] bg-[#000009] text-white rounded-[10px] text-2xl opacity-100 welcomeshow py-[0.3rem] px-[1rem]">
                WELCOME TO THE CLAN 🤩
              </p>
            ) : (
              <p className="border bg-[#e59002] welcome text-white rounded-[10px] text-xs opacity-0">
                WELCOME TO THE CLAN 🤩
              </p>
            )}
          </p>
        </div>
      </div>

      <div className="bg-[#D3D3D3] rounded-t-[20px] py-[2rem]">
        <div className="flex justify-center">
          <a href="https://www.instagram.com/dai_verse/" target="_Blank">
            <svg
              width="20px"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>instagram [#167]</title>{" "}
                <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-340.000000, -7439.000000)"
                    fill="#000000"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
                        id="instagram-[#167]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
          <a
            href="https://twitter.com/Dai_verse?s=20"
            target="_Blank"
            className="mx-[0.5rem]"
          >
            <svg
              width="20px"
              viewBox="0 -2 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>twitter [#154]</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-60.000000, -7521.000000)"
                    fill="#000000"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                        id="twitter-[#154]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
          <a
            target="_Blank"
            href="https://www.snapchat.com/add/dai_verse?share_id=MEI0OUY5QTAtMTZCNy00MjI3LThEOTEtREUzMDFGODkzNDhC&locale=en_NG&sid=201e23d0a635452c9875875fcad9d001"
          >
            <svg
              width="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.24759 4.07011C8.42981 2.66637 10.1045 2 12 2C13.9392 2 15.604 2.78414 16.7639 4.21322C17.7942 5.48259 18.3772 7.1971 18.4826 9.1902C18.5118 9.19446 18.5425 9.19891 18.5749 9.20362L18.5955 9.20661C18.7648 9.23117 18.9679 9.26103 19.179 9.3019C19.9604 9.45323 21.2931 9.83505 21.7522 11.2659C21.9827 11.9846 21.8669 12.6509 21.4644 13.1786C21.1168 13.6343 20.6205 13.897 20.2664 14.0565C20.0896 14.1362 19.9144 14.2043 19.7668 14.2605C20.1122 15.1966 20.7141 16.1598 21.3801 17.0322C22.0073 17.8538 21.8414 18.8955 21.5172 19.574C21.1925 20.2537 20.4899 21.031 19.4684 21.0753C18.8903 21.1004 18.2833 21.1596 17.6791 21.2695C17.4062 21.3192 17.0841 21.4286 16.6839 21.5939C16.4453 21.6925 16.2264 21.79 15.9902 21.8953C15.8025 21.9789 15.6038 22.0674 15.3754 22.1653C14.4345 22.5685 13.2798 23 12 23C10.7201 23 9.56542 22.5685 8.62452 22.1653C8.39619 22.0674 8.19749 21.9789 8.00977 21.8953C7.7735 21.79 7.55463 21.6925 7.31601 21.5939C6.91585 21.4286 6.5938 21.3192 6.32087 21.2695C5.71667 21.1596 5.10964 21.1004 4.53154 21.0753C3.51004 21.031 2.8074 20.2537 2.48273 19.574C2.15858 18.8955 1.99263 17.8538 2.61986 17.0322C3.29007 16.1543 3.89533 15.1844 4.23963 14.2428C4.10623 14.1891 3.94976 14.1248 3.79112 14.0506C3.4447 13.8885 2.97483 13.6299 2.62849 13.1959C2.24058 12.7098 2.07004 12.083 2.22151 11.365C2.54568 9.82833 3.99142 9.44433 4.75598 9.30082C4.97305 9.26008 5.18352 9.23035 5.36087 9.20574C5.37272 9.2041 5.38436 9.20248 5.39582 9.2009C5.43821 9.19502 5.47796 9.18951 5.51542 9.18424C5.61483 7.05895 6.19378 5.32139 7.24759 4.07011ZM8.77735 5.35846C8.01533 6.26327 7.49997 7.71867 7.49997 9.85714V9.96228L7.4781 10.0651C7.36668 10.5892 6.96437 10.8336 6.76444 10.9277C6.55376 11.0269 6.32735 11.0761 6.16722 11.1058C6.01123 11.1348 5.83742 11.1589 5.68179 11.1804C5.66625 11.1825 5.65088 11.1847 5.63573 11.1868C5.45838 11.2114 5.29025 11.2355 5.12494 11.2665C4.35999 11.4101 4.2159 11.6002 4.17844 11.7778C4.15178 11.9042 4.1748 11.9296 4.18806 11.9442C4.1894 11.9457 4.19065 11.947 4.19173 11.9484C4.24504 12.0152 4.37304 12.1147 4.63867 12.239C4.76311 12.2972 4.89394 12.3505 5.03949 12.4087C5.05104 12.4134 5.06285 12.4181 5.07488 12.4229C5.2016 12.4736 5.35282 12.534 5.48646 12.5966C5.6173 12.6579 5.83672 12.7677 6.02161 12.9451C6.23755 13.1522 6.49946 13.5565 6.3728 14.0887C6.00824 15.6205 5.08855 17.0942 4.21053 18.2445C4.20735 18.2504 4.19426 18.2799 4.19451 18.3496C4.19485 18.445 4.222 18.5751 4.28737 18.7119C4.35267 18.8486 4.43795 18.954 4.51509 19.0173C4.57857 19.0694 4.61441 19.0766 4.61911 19.0773C5.27019 19.1055 5.96946 19.1727 6.67907 19.3019C7.16246 19.3899 7.6398 19.5637 8.07989 19.7456C8.32241 19.8458 8.60112 19.9695 8.87176 20.0896C9.06094 20.1735 9.24618 20.2558 9.41237 20.327C10.3108 20.712 11.1498 21 12 21C12.8502 21 13.6891 20.712 14.5876 20.327C14.7538 20.2558 14.939 20.1735 15.1282 20.0896C15.3988 19.9695 15.6775 19.8458 15.9201 19.7456C16.3601 19.5637 16.8375 19.3899 17.3209 19.3019C18.0305 19.1727 18.7298 19.1055 19.3808 19.0773C19.3856 19.0765 19.4214 19.0694 19.4849 19.0173C19.562 18.954 19.6473 18.8486 19.7126 18.7119C19.7779 18.5751 19.8051 18.445 19.8054 18.3496C19.8058 18.2566 19.7823 18.2353 19.7904 18.2458C18.9121 17.0954 17.9918 15.6211 17.6271 14.0887C17.4917 13.5198 17.8013 13.1083 18.0141 12.9192C18.2033 12.751 18.4261 12.6464 18.5614 12.5869C18.6956 12.5278 18.8479 12.4701 18.9782 12.4207C18.9947 12.4144 19.0108 12.4083 19.0265 12.4024C19.1787 12.3445 19.316 12.2911 19.4449 12.233C19.7142 12.1117 19.8296 12.0191 19.8693 11.9718C19.8679 11.9554 19.8631 11.9248 19.8478 11.8769C19.7569 11.5935 19.4997 11.4012 18.7987 11.2654C18.6392 11.2345 18.4784 11.2106 18.3084 11.1859C18.2957 11.184 18.2828 11.1822 18.2697 11.1803C18.1195 11.1586 17.9495 11.134 17.7967 11.104C17.6419 11.0737 17.418 11.0226 17.2083 10.9183C16.9978 10.8136 16.628 10.5646 16.5218 10.0651L16.5 9.96228V9.85714C16.5 7.90789 15.9926 6.43652 15.211 5.47359C14.4459 4.53088 13.3608 4 12 4C10.5955 4 9.52013 4.47649 8.77735 5.35846Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@DaiVerse1"
            target="_Blank"
            className="mx-[0.5rem]"
          >
            <svg
              width="20px"
              fill="#000000"
              viewBox="0 -4 32 32"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M30.722,20.579 C30.137,21.894 28.628,23.085 27.211,23.348 C27.066,23.375 23.603,24.000 16.010,24.000 L15.990,24.000 C8.398,24.000 4.932,23.375 4.788,23.349 C3.371,23.085 1.861,21.894 1.275,20.578 C1.223,20.461 0.001,17.647 0.001,12.000 C0.001,6.353 1.223,3.538 1.275,3.421 C1.861,2.105 3.371,0.915 4.788,0.652 C4.932,0.625 8.398,-0.000 15.990,-0.000 C23.603,-0.000 27.066,0.625 27.210,0.651 C28.628,0.915 30.137,2.105 30.723,3.420 C30.775,3.538 32.000,6.353 32.000,12.000 C32.000,17.647 30.775,20.461 30.722,20.579 ZM28.893,4.230 C28.581,3.529 27.603,2.759 26.845,2.618 C26.813,2.612 23.386,2.000 16.010,2.000 C8.615,2.000 5.185,2.612 5.152,2.618 C4.394,2.759 3.417,3.529 3.104,4.234 C3.094,4.255 2.002,6.829 2.002,12.000 C2.002,17.170 3.094,19.744 3.106,19.770 C3.417,20.471 4.394,21.241 5.153,21.382 C5.185,21.388 8.615,22.000 15.990,22.000 L16.010,22.000 C23.386,22.000 26.813,21.388 26.846,21.382 C27.604,21.241 28.581,20.471 28.894,19.766 C28.904,19.744 29.998,17.170 29.998,12.000 C29.998,6.830 28.904,4.255 28.893,4.230 ZM13.541,17.846 C13.379,17.949 13.193,18.000 13.008,18.000 C12.842,18.000 12.676,17.959 12.525,17.875 C12.206,17.699 12.008,17.364 12.008,17.000 L12.008,7.000 C12.008,6.637 12.204,6.303 12.521,6.127 C12.838,5.950 13.227,5.958 13.534,6.149 L21.553,11.105 C21.846,11.286 22.026,11.606 22.027,11.951 C22.028,12.296 21.852,12.618 21.560,12.801 L13.541,17.846 ZM14.009,8.794 L14.009,15.189 L19.137,11.963 L14.009,8.794 Z"></path>{" "}
              </g>
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@dai_verse?_t=8UHUfenRn7O&_r=1"
            target="_Blank"
          >
            <svg
              width="20px"
              fill="#000000"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>tiktok</title>{" "}
                <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>{" "}
              </g>
            </svg>
          </a>
          <a
            href="https://music.apple.com/ng/artist/dai-verse/1484825304"
            target="_Blank"
            className="mx-[0.5rem]"
          >
            <svg
              width="20px"
              fill="#000000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="m24 6.124c0-.029.001-.063.001-.097 0-.743-.088-1.465-.253-2.156l.013.063c-.312-1.291-1.1-2.359-2.163-3.031l-.02-.012c-.536-.35-1.168-.604-1.847-.723l-.03-.004c-.463-.084-1.003-.138-1.553-.15h-.011c-.04 0-.083-.01-.124-.013h-12.025c-.152.01-.3.017-.455.026-.791.016-1.542.161-2.242.415l.049-.015c-1.306.501-2.327 1.495-2.853 2.748l-.012.033c-.17.409-.297.885-.36 1.38l-.003.028c-.051.343-.087.751-.1 1.165v.016c0 .032-.007.062-.01.093v12.224c.01.14.017.283.027.424.02.861.202 1.673.516 2.416l-.016-.043c.609 1.364 1.774 2.387 3.199 2.792l.035.009c.377.111.817.192 1.271.227l.022.001c.555.053 1.11.06 1.667.06h11.028c.554 0 1.099-.037 1.633-.107l-.063.007c.864-.096 1.645-.385 2.321-.823l-.021.013c.825-.539 1.47-1.29 1.867-2.176l.013-.032c.166-.383.295-.829.366-1.293l.004-.031c.084-.539.132-1.161.132-1.794 0-.086-.001-.171-.003-.256v.013q0-5.7 0-11.394zm-6.424 3.99v5.712c.001.025.001.054.001.083 0 .407-.09.794-.252 1.14l.007-.017c-.273.562-.771.979-1.373 1.137l-.015.003c-.316.094-.682.156-1.06.173h-.01c-.029.002-.062.002-.096.002-1.033 0-1.871-.838-1.871-1.871 0-.741.431-1.382 1.056-1.685l.011-.005c.293-.14.635-.252.991-.32l.027-.004c.378-.082.758-.153 1.134-.24.264-.045.468-.252.51-.513v-.003c.013-.057.02-.122.02-.189 0-.002 0-.003 0-.005q0-2.723 0-5.443c-.001-.066-.01-.13-.027-.19l.001.005c-.026-.134-.143-.235-.283-.235-.006 0-.012 0-.018.001h.001c-.178.013-.34.036-.499.07l.024-.004q-1.14.225-2.28.456l-3.7.748c-.016 0-.032.01-.048.013-.222.03-.392.219-.392.447 0 .015.001.03.002.045v-.002.13q0 3.9 0 7.801c.001.028.001.062.001.095 0 .408-.079.797-.224 1.152l.007-.021c-.264.614-.792 1.072-1.436 1.235l-.015.003c-.319.096-.687.158-1.067.172h-.008c-.031.002-.067.003-.104.003-.913 0-1.67-.665-1.815-1.536l-.001-.011c-.02-.102-.031-.218-.031-.338 0-.785.485-1.458 1.172-1.733l.013-.004c.315-.127.687-.234 1.072-.305l.036-.005c.287-.06.575-.116.86-.177.341-.05.6-.341.6-.693 0-.007 0-.015 0-.022v.001-.15q0-4.44 0-8.883c0-.002 0-.004 0-.007 0-.129.015-.254.044-.374l-.002.011c.066-.264.277-.466.542-.517l.004-.001c.255-.066.515-.112.774-.165.733-.15 1.466-.3 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.4.181-.042.407-.079.637-.104l.027-.002c.018-.002.04-.004.061-.004.27 0 .489.217.493.485.008.067.012.144.012.222v.001q0 2.865 0 5.732z"></path>
              </g>
            </svg>
          </a>
          <a
            href="https://open.spotify.com/artist/2G0yYOdnPrffB2Mre1XCMv?si=5IHC_Q31S7yhKAGBYO2Q_A"
            target="_Blank"
          >
            <svg
              width="20px"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>spotify [#162]</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-140.000000, -7479.000000)"
                    fill="#000000"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M99.915,7327.865 C96.692,7325.951 91.375,7325.775 88.297,7326.709 C87.803,7326.858 87.281,7326.58 87.131,7326.085 C86.981,7325.591 87.26,7325.069 87.754,7324.919 C91.287,7323.846 97.159,7324.053 100.87,7326.256 C101.314,7326.52 101.46,7327.094 101.196,7327.538 C100.934,7327.982 100.358,7328.129 99.915,7327.865 L99.915,7327.865 Z M99.81,7330.7 C99.584,7331.067 99.104,7331.182 98.737,7330.957 C96.05,7329.305 91.952,7328.827 88.773,7329.792 C88.36,7329.916 87.925,7329.684 87.8,7329.272 C87.676,7328.86 87.908,7328.425 88.32,7328.3 C91.951,7327.198 96.466,7327.732 99.553,7329.629 C99.92,7329.854 100.035,7330.334 99.81,7330.7 L99.81,7330.7 Z M98.586,7333.423 C98.406,7333.717 98.023,7333.81 97.729,7333.63 C95.381,7332.195 92.425,7331.871 88.944,7332.666 C88.609,7332.743 88.274,7332.533 88.198,7332.197 C88.121,7331.862 88.33,7331.528 88.667,7331.451 C92.476,7330.58 95.743,7330.955 98.379,7332.566 C98.673,7332.746 98.766,7333.129 98.586,7333.423 L98.586,7333.423 Z M94,7319 C88.477,7319 84,7323.477 84,7329 C84,7334.523 88.477,7339 94,7339 C99.523,7339 104,7334.523 104,7329 C104,7323.478 99.523,7319.001 94,7319.001 L94,7319 Z"
                        id="spotify-[#162]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
          <a
            target="_Blank"
            href="https://audiomack.com/dai_verse"
            className="ml-[0.5rem]"
          >
            <svg
              width="20px"
              fill="#000000"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M.331 11.378s.542-.089.765.144c.223.233.077.716-.22.724-.296.01-.57.063-.764-.144a.444.444 0 0 1 .219-.724m5.881 3.292c-.052.01-.107-.017-.164-.058-.388-.542-.529-2.393-.707-2.503-.185-.114-.854 1.026-2.186.903-.557-.051-1.124-.412-1.457-.662.03-.42.036-1.403.865-1.083.504.194 1.367.726 2.125-.23.838-1.058 1.3-.75 1.577-.52.277.23.092 1.425.506 1.09.413-.334 2.082-2.41 2.082-2.41s1.292-1.303 1.49.067c.197 1.37 1.04 2.888 1.263 2.845.223-.043 2.822-5.325 3.195-5.666.372-.341 1.625-.296 1.565.578-.06.874-.187 6.308-.187 6.308s-.147 1.531.093.713c.099-.34.206-.645.339-1.003a989.222 989.222 0 0 0 2.278-7.368l.317-1.09a3.592 3.592 0 0 1 .097-.33c.046-.154.076-.255.086-.282.024-.068.092-.12.188-.157.097-.061.2-.064.317-.067.302-.027.69.012 1.04.112.102 0 .212.037.317.112s.006 0 .015.01c.003 0 .005 0 .008.01a.503.503 0 0 1 .098.095c.001 0 .002 0 .004.01a.716.716 0 0 1 .051.073c.196.286.315.814.195 1.75-.3 2.335-.531 7.14-.531 7.14s-.047.229.435-.783c.017-.035.038-.066.058-.098a.42.42 0 0 0 .091-.085c.298-.354 1.097-.563 1.651-.558.234.028.43.087.547.16.218.333.09 1.562.09 1.562-.462.043-1.341.291-1.653.337-.311.046-.785 2.07-1.443 1.863-.658-.207-2.125-1.127-2.125-1.253a98.33 98.33 0 0 1 .152-1.87.152.152 0 0 1 0-.014c.022-.273.003-.392-.123-.12-.109.235-.581 1.736-1.108 3.371-.056.143-1.051 3.156-1.182 3.523-.156.427-.287.753-.377.921-.138.187-.324.304-.583.226-.646-.196-1.465-1.09-1.473-1.31-.015-1.251.06-7.974-.242-7.414-.311.575-2.73 4.561-2.73 4.561-.04.01-.07.01-.106.01-.172-.019-.437-.074-.51-.238-.004-.01-.01-.018-.013-.028l-.014-.04c-.033-.11-.046-.23-.075-.327a40.828 40.828 0 0 0-.463-1.42c-.279-.909-.566-1.837-.613-1.94-.092-.2-.227-.116-.347 0-.54.458-1.687 2.48-2.723 2.59"></path>
              </g>
            </svg>
          </a>
        </div>
        <div className="mx-[1rem]">
          <h3 className="text-3xl mb-[1rem] text-[#000009] mt-[3rem] subheading">
            For Bookings & Enquires
          </h3>
          <p className="text-xl subheading text-[#000009]">
            EMAIL: DAIVERSE@LONGITUDEPROMOTIONS.COM
          </p>
        </div>
      </div>
    </div>
  );
}
