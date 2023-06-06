// IMPORT FIRESTRORE //////////////////////////////////
import db from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import melo from "../assets/melo.jpg";
import going from "../assets/going.webp";
import adua from "../assets/adua.jpg";
import alari from "../assets/alari.webp";
import ReactPlayer from "react-player";
import { useState, useContext } from "react";
import { Theme } from "../App";
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
    <div className="bg-[#000009]">
      <div className="landing h-[100vh]"></div>
      <div className="flex flex-col items-center mt-[2rem]">
        <img
          className="w-[50vw] border-y py-[2rem]"
          src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685984499/streetically/D050B59C-5C56-4A65-9F71-B84E3857C93E_qlfewh.jpg"
        />
      </div>
      <div className="flex flex-col items-center mt-[1rem]">
        <div className="w-[90vw] text-center border-b pb-[1rem]">
          <h2 className="text-[2.5rem] font-bold">WHAT MAKES US UNIQUE</h2>
          <p className="text-[1.5rem]">
            Streetically is a team of photographers and videographers who
            capture weddings in a unique and edgy style with a touch of
            editorial feel. Our clients are friends, because when their big day
            comes we get to CELEBRATE with them. We have a heart for exploration
            and love to capture couples who are adventurous and love to create
            something breathtaking. Today is documentary, Tomorrow is history
            and that lasts a lifetime. Your wedding day is your story, its
            beautiful, its messy, its totally unique and we are wild about
            capturing every part of it. Our style of edits is the vintage /
            editorial feel. We don’t skin retouch moments.
          </p>
          <div className="flex flex-col items-center">
            <a
              target="_Blank"
              href="https://music.apple.com/ng/album/alari-ep/1579315531"
              className="border uppercase border-[#D3D3D3] text-[#ffffff] font-semibold text-2xl px-[2.5rem] m-[1rem] py-[0.3rem]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center" id="Music">
        <div className="container sm:w-[70%]">
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
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969439/streetically/BB30C438-6800-4A73-8F35-AAB8918820C2_u47lv2.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className=" flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969439/streetically/6636CA56-E493-46FC-A17A-99D6FE628B7C_wn9imi.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969439/streetically/CF15FDB3-3F6F-414D-9AD0-63FD27B53E59_h0aoiw.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969439/streetically/321E2215-0921-4B99-A6D6-C75C3B6D5532_uiqy3r.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969438/streetically/9CF12D66-0598-4E42-BCE5-BDB41C75D93E_u8vf7d.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969438/streetically/F9E5C153-A577-4BD6-BFA7-08BE713E7D88_skz4n6.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969438/streetically/E6F44508-6AAE-46C9-BB0C-73D6C76215D4_zrk9li.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969438/streetically/7A3B0784-76FF-4E7B-A638-D446BEDDE669_wkgje4.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969438/streetically/F121316D-E89D-4516-9449-4C09AE242FF4_cmje3d.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969438/streetically/32616990-3948-438C-8591-5610B274596D_ixdggs.jpg"
                className=""
              />
            </SwiperSlide>

            <div className="slider-controler mt-[-2rem] mb-[2rem] sm:block">
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
      </div>

      <div className="bg-[#d9d9d9] py-[2rem] mt-[5rem]">
        <div className="flex justify-center">
          <a href="https://www.instagram.com/streetically" target="_Blank">
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
            href="https://twitter.com/streetically/"
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
        </div>
        <div className="mx-[1rem]">
          <h3 className="text-3xl mb-[1rem] text-[#000009] mt-[2rem] subheading">
            For Bookings & Enquires
          </h3>
          <p className="text-xl bodyfont text-[#000009]">
          Email: streetically@gmail.com 
          </p>
          <p className="text-xl bodyfont text-[#000009]">
          Whatsapp: +2349011655330
          </p>
          <p className="text-xl bodyfont text-[#000009]">
          Phone: 09011655330
          </p>
        </div>
      </div>
    </div>
  );
}
