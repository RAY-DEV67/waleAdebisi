import { useNavigate } from "react-router-dom";
import Liya from "../assets/liya3.jpg";
import { useState, useEffect, useContext } from "react";
import { Theme, Settheme } from "../App";
import { Link } from "react-router-dom";

export function Navbar() {
  const [showMobile, setshowMobile] = useState(false);
  const [scrolled, setscrolled] = useState();
  const navigate = useNavigate();

  const theme = useContext(Theme);
  const settheme = useContext(Settheme);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-[100vw] flex flex-col lg:items-center">
      <div
      className={theme === "Dark" ? `flex justify-between w-[100vw] px-[1rem] fixed z-10 items-center ${
        scrolled ? "bg-[#d07eec] navbar mb-[2rem]" : "bg-transparent"
      }` : theme === "Light" ? `flex justify-between px-[1rem] fixed z-10 items-center ${
        scrolled ? "bg-[#e59002] navbar mb-[2rem]" : "bg-[#e59002]"
      }` : ""}
    >
      <div
        onClick={() => {
          setshowMobile(true);
        }}
        className="lg:hidden"
      >
        <svg
          width="35px"
          height="35px"
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
            <g id="style=linear">
              {" "}
              <g id="menu-strawberry">
                {" "}
                <path
                  id="vector"
                  d="M3 6H21"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  id="vector_2"
                  d="M5 12H19"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  id="vector_3"
                  d="M7 18H17"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
      <div className="hidden lg:flex">
      <Link to="/About" className="nav"  onClick={() => {
            setshowMobile(false);
          }}>
        <p className="text-[2vw] headingfont font-bold">About</p>
        </Link>
        <a
          className="text-[2vw] headingfont mx-[1rem] nav font-bold"
          href="#Music"
          onClick={() => {
            setshowMobile(false);
          }}
        >
          Music
        </a>
        <a
          className="text-[2vw] headingfont nav font-bold"
          href="#Videos"
          onClick={() => {
            setshowMobile(false);
          }}
        >
          Videos
        </a>
        <a
          className="text-[2vw] headingfont ml-[1rem] nav font-bold"
          href="#Newsletter"
        >
          Newsletter
        </a>
      </div>
      <p className="text-6xl liyafont mt-[0.5rem] mr-[2rem] lg:mr-[-4.5rem] lg:w-[20%]"
        onClick={() => {navigate("/")}}>LIYA</p>
      
      

      <div
        className={
          showMobile
            ? `${theme === "Dark" ? "bg-[#d07eec] landing2" : theme === "Light" ? "bg-white" : ""} h-[100vh] top-0 w-[100vw] flex flex-col items-center justify-center ml-[-1rem] fixed show`
            : "bg-[#000009] h-[100vh] no top-0 w-[100vw] flex flex-col items-center justify-center fixed"
        }
      >
        {/* <img src={Liya} alt="Daiverse" className="absolute nav-image"/> */}
        <div className={
          showMobile
            ? `${theme === "Dark" ? "overlay-Dark" : theme === "Light" ? "overlay-Light" : ""} h-[100vh] top-0 w-[100vw] flex flex-col items-center justify-center fixed show`
            : "bg-[#323b0a] h-[100vh] no top-0 w-[100vw] flex flex-col items-center justify-center fixed"
        }></div>
        <p
          className="absolute headingfont top-7 nav text-[5vw] left-[85%]"
          onClick={() => {
            setshowMobile(false);
          }}
        >
          X
        </p>
        <Link to="/About" className="nav"  onClick={() => {
            setshowMobile(false);
          }}>
        <p className="text-[6vw] text-[#D3D3D3] headingfont font-bold">About</p>
        </Link>
        <a
          className="text-[6vw] my-[2rem] nav headingfont text-[#D3D3D3] font-bold"
          href="#Music"
          onClick={() => {
            setshowMobile(false);
          }}
        >
          Music
        </a>
        <a
          className="text-[6vw] nav headingfont text-[#D3D3D3] font-bold"
          href="#Videos"
          onClick={() => {
            setshowMobile(false);
          }}
        >
          Videos
        </a>
        <a
          className="text-[6vw] mt-[2rem] nav headingfont text-[#D3D3D3] font-bold"
          href="#Newsletter"
          onClick={() => {
            setshowMobile(false);
          }}
        >
          Newsletter
        </a>
      </div>
    </div>

    </div>  );
}
