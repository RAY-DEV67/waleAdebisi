import { useNavigate } from "react-router-dom";
import Daiverse1 from "../assets/dainav.png";
import Daiverse2 from "../assets/dainavb.png";
import logo from "../assets/logo.png";
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
        scrolled ? "bg-[#000009] navbar mb-[2rem]" : "bg-transparent"
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
        <p className="text-[2vw] font-bold">About</p>
        </Link>
        <a
          className="text-[2vw] mx-[1rem] nav font-bold"
          href="#Music"
          onClick={() => {
            setshowMobile(false);
          }}
        >
          Music
        </a>
        <a
          className="text-[2vw] nav font-bold"
          href="#Videos"
          onClick={() => {
            setshowMobile(false);
          }}
        >
          Videos
        </a>
        <a
          className="text-[2vw] ml-[1rem] nav font-bold"
          href="#Newsletter"
        >
          Newsletter
        </a>
      </div>
      <img
        alt="Daiverse"
        src={logo}
        className="w-[35%] mt-[0.5rem] mb-[1rem] mr-[-2.8rem] lg:mr-[-4.5rem] lg:w-[20%]"
        onClick={() => {navigate("/")}}
      />
      

      <div
        className={
          showMobile
            ? `${theme === "Dark" ? "bg-[#000009]" : theme === "Light" ? "bg-white" : ""} h-[100vh] top-0 w-[100vw] flex flex-col items-center justify-center ml-[-1rem] fixed show`
            : "bg-[#000009] h-[100vh] no top-0 w-[100vw] flex flex-col items-center justify-center fixed"
        }
      >
        <img src={theme === "Dark" ? Daiverse1 : theme === "Light" ? Daiverse2 : ""} alt="Daiverse" className="absolute nav-image"/>
        <div className={
          showMobile
            ? `${theme === "Dark" ? "overlay-Dark" : theme === "Light" ? "overlay-Light" : ""} h-[100vh] top-0 w-[100vw] flex flex-col items-center justify-center ml-[-1rem] fixed show`
            : "bg-[#323b0a] h-[100vh] no top-0 w-[100vw] flex flex-col items-center justify-center fixed"
        }></div>
        <p
          className="absolute top-7 nav text-[5vw] left-[85%]"
          onClick={() => {
            setshowMobile(false);
          }}
        >
          X
        </p>
        <Link to="/About" className="nav"  onClick={() => {
            setshowMobile(false);
          }}>
        <p className="text-[6vw] text-[#D3D3D3] font-bold">About</p>
        </Link>
        <a
          className="text-[6vw] my-[2rem] nav text-[#D3D3D3] font-bold"
          href="#Music"
          onClick={() => {
            setshowMobile(false);
          }}
        >
          Music
        </a>
        <a
          className="text-[6vw] nav text-[#D3D3D3] font-bold"
          href="#Videos"
          onClick={() => {
            setshowMobile(false);
          }}
        >
          Videos
        </a>
        <a
          className="text-[6vw] mt-[2rem] nav text-[#D3D3D3] font-bold"
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
