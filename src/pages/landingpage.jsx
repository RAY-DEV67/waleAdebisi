// IMPORT FIRESTRORE //////////////////////////////////
import db from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect, useRef } from "react";
import { Theme } from "../App";
import { Swiper, SwiperSlide } from "swiper/react";
import testimony1 from "../assets/testimony1.jpg";
import testimony2 from "../assets/testimony2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import LoadingSpinner from "../components/spinner";
import { Footer } from "../components/footer";

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

  const colors = [testimony1, testimony2];
  const delay = 5000;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="text-[#d5d1ce] bg-[#000009]">
      <div className="landing h-[100vh]"></div>
      <div className="flex flex-col items-center mt-[2rem]">
        <img
          className="w-[50vw] border-y border-[#d5d1ce] py-[2rem]"
          src="https://res.cloudinary.com/dvl38skbc/image/upload/v1686830872/Wale%20adebisi/5B8F54C5-193E-4A9A-B02A-F81A55F4E1EB_uxxrbd.jpg"
        />
      </div>
      <div className="flex flex-col items-center mt-[1rem]">
        <div className="w-[90vw] text-center border-b border-[#000009] pb-[1rem]">
          <h2 className="text-[2.5rem] font-bold">Wale Adebisi Photography</h2>
          <p className="text-[1.5rem]">
            Wale Adebisi is a self taught Nigerian photographer based in Lagos,
            who was initially drawn to the medium through the study of sociology
            for its potential to raise civic awareness and offer social
            commentary. His work aims to counter negative perceptions of Africa
            by offering new perspectives and stories through photography, which
            he believes can be a powerful instrument of social change.
          </p>
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
                alt="WAP"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1686831224/Wale%20adebisi/803F2AFA-754A-4A37-8748-53FAD74B872E_vfx4kw.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className=" flex flex-col items-center">
              <img
                alt="WAP"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1686830895/Wale%20adebisi/09AB6DBD-FAF4-4141-849D-50804F5D2413_bsm4pw.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="WAP"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1686830871/Wale%20adebisi/85B0F01A-2550-416D-9BB7-B806F15A611E_rfygal.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="WAP"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1686830822/Wale%20adebisi/C354456C-1E21-49F2-87AD-806ED87305A7_n6k87z.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="WAP"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1686830799/Wale%20adebisi/6A6138C9-F6C2-46E5-B479-011EC1C8E320_vyosdj.jpg"
                className=""
              />
            </SwiperSlide>

            <div className="slider-controler mt-[-2rem] mb-[2rem] hidden sm:block">
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

      <Footer />
    </div>
  );
}
