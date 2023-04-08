import Daiverse1 from "../assets/dailand.png";
import { Theme } from "../App";
import { useContext } from "react";

export function About() {
    const theme = useContext(Theme);

    return ( <div className="pt-[15%]">
          <h1 className="heading text-[#e59002]">About</h1>
          <div className="flex flex-col items-center">
          <div className="w-[90%]">
          <h2 className="text-3xl font-bold mb-[1rem] text-[#e59002] subheading">BIOGRAPHY</h2>
<p className="text-xl abouttext" >Akandu Ifeanyichukwu Chineme popularly known as Dai Verse was born on the 23rd of May, 2000, an indigene of Nwagene LGA, Imo State, Nigeria.</p>
<h3 className="text-3xl font-bold my-[1rem] text-[#e59002] subheading">EDUCATIONAL BACKGROUND</h3>
<p className="text-xl abouttext">He graduated with honors from the Federal University of Technology, Owerri (FUTO) where he studied Agricultural Economics</p>
<h3 className="text-3xl font-bold my-[1rem] text-[#e59002] subheading">DAI VERSE - THE NAME</h3>
<p className="text-xl abouttext">
His unique, eye-catching stagename Dai Verse has quite the backstory; being a 'jack of all trades', engaging in different occupations to make ends meet and also being an avid sportsman that could play quite a number of sports such as : football, basketball, volleyball, table tennis and badminton, a friend of his noticed and praised his industriousness as being 'diverse'; hence the Cocaine crooner locked onto that fitting description, made a stylish adjustment and today we have Dai Verse.

</p>

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

<h3 className="text-3xl font-bold mb-[1rem] mt-[3rem] text-[#e59002] subheading">MUSIC CAREER</h3>
<p className="text-xl abouttext">Dai Verse did backup singing for a couple of artistes while in
school before officially starting, and releasing, music in 2019.
His discography, currently, boasts a well- received, fast rising single : Cocaine.
Dai Verse -who is currently managed by LONGITUDE - has 2 collaborations so far : Colorado (with Zugo) and Sweet Daddy (with Buju).
</p>


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
          </div>


    </div> );
}
