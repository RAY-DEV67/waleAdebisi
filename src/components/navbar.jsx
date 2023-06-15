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
        className={
          theme === "Dark"
            ? `flex py-[1rem] h-[50px] justify-between w-[100vw] px-[1rem] fixed z-10 items-center bg-transparent`
            : theme === "Light"
            ? `flex justify-between px-[1rem] fixed z-10 items-center ${
                scrolled ? "bg-[#e59002] navbar mb-[2rem]" : "bg-[#e59002]"
              }`
            : ""
        }
      >

     <img src="https://res.cloudinary.com/dvl38skbc/image/upload/v1686831113/Wale%20adebisi/40EA7AFA-5DD6-47B2-B6B2-1A476CBCAA89_hlj1p3.png" alt="logo" className="w-[50vw] ml-[-14vw] mt-[1rem] lg:w-[30vw] lg:ml-[-7vw] lg:mt-[2rem]"/>
        <div
          onClick={() => {
            setshowMobile(true);
          }}
          className="lg:hidden mr-[1rem]"
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
        
        <div className="hidden lg:flex lg:mr-[1rem]">
        <Link
            to="/"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[2vw] headingfont font-bold text-[#D3D3D3]">Home</p>
          </Link>
          <Link
            to="/Portfolio"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[2vw] headingfont mx-[1rem] font-bold text-[#D3D3D3]">Portfolio</p>
          </Link>
          <Link
            to="/Contact"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[2vw] headingfont font-bold text-[#D3D3D3]">Contact</p>
          </Link>
        </div>
     

        <div
          className={
            showMobile
              ? `${
                  theme === "Dark"
                    ? "bg-[#000000] landing2"
                    : theme === "Light"
                    ? "bg-white"
                    : ""
                } h-[100vh] top-0 w-[100vw] flex flex-col items-center justify-center ml-[-1rem] fixed show`
              : "bg-[#000009] h-[100vh] no top-0 w-[100vw] flex flex-col items-center justify-center fixed"
          }
        >
          {/* <img src={Liya} alt="Daiverse" className="absolute nav-image"/> */}
          <div
            className={
              showMobile
                ? `${
                    theme === "Dark"
                      ? "overlay-Dark"
                      : theme === "Light"
                      ? "overlay-Light"
                      : ""
                  } h-[100vh] top-0 w-[100vw] flex flex-col items-center justify-center fixed show`
                : "bg-[#323b0a] h-[100vh] no top-0 w-[100vw] flex flex-col items-center justify-center fixed"
            }
          ></div>
          <p
            className="absolute headingfont top-7 nav text-[5vw] left-[85%]"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            X
          </p>
          <Link
            to="/"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[6vw] text-[#D3D3D3] headingfont font-bold">
              Home
            </p>
          </Link>
          <Link
            to="/Portfolio"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[6vw] text-[#D3D3D3] my-[1rem] headingfont font-bold">
              Portfolio
            </p>
          </Link>
          <Link
            to="/Contact"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[6vw] text-[#D3D3D3] headingfont font-bold">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
