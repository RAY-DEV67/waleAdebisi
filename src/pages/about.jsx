import ReactPlayer from "react-player";
import Liya1 from "../assets/aboutliya1.jpg";
import Liya2 from "../assets/aboutliya2.jpg";
import liyags from "../assets/liyags.mp4";
import { Theme } from "../App";
import { useContext } from "react";
import { Footer } from "../components/footer";

export function About() {
  const theme = useContext(Theme);

  return (
    <div>
      <div className="aboutlanding h-[70vh] flex flex-col items-start justify-end">
        <h1 className="text-[#ffffff] font-semibold text-[3rem] ml-[1rem] mb-[1rem]">
          About Us
        </h1>
      </div>
      <div className="flex flex-col items-center border-b">
        <div className="text-center mt-[2rem] w-[90vw]">
          <h1 className="text-[3rem] font-bold">WHY STREETICALLY?</h1>

          <p className="text-[1.5rem]">
            Your wedding day is your story, its beautiful, its messy, its
            totally unique and we are wild about capturing every part of it. We
            are a group of passionate photographers who love capturing all the
            special moments of your big day.
          </p>

          <p className="text-[1.5rem] my-[1rem]">
            We believe that your wedding day is one of the most important days
            of your life, and we are honored to be a part of it. Let us help you
            create memories that will last a lifetime with our unique and edgy
            style with a touch of editorial feel.
          </p>

          <p className="text-[1.5rem]">
            Our clients are friends, because when their big day comes we get to
            CELEBRATE with them. From the initial consultation to the final
            product, we work closely with you to ensure that your vision for
            your wedding photos is brought to life. We have a heart for
            exploration and love to capture couples who are adventurous and love
            to create something breathtaking.
          </p>

          
          <p className="text-[1.5rem] my-[1rem]">
            Our work has been published on top wedding blogs and magazines like
            bellanaijaweddings, Africansweetheartweddings, etc
          </p>

          <p className="text-[1.5rem] mb-[1rem]">
            Today is documentary, Tomorrow is history and that lasts a lifetime.
            Our style of edits is the vintage / editorial feel.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-center mt-[2rem] w-[90vw]">
          <h2 className="text-[2rem] font-bold">
            LEAD PHOTOGRAPHER: MICHEAL OKOROAFOR
          </h2>
          <p className="text-[1.5rem] mt-[1rem]">
            - Hey Love bird. I’m Micheal Okoroafor and please do I look like a
            Rapper? You know l get that a lot beside I’m a fan of hiphop and
            RnB.
          </p>
          <p className="text-[1.5rem] my-[1rem]">
            If I’m not a photographer I would be a Rapper. I’m a Lover of Love,
            art and travel, minimalism and slightly addicted to Nigerian party
            jollof rice. ​
          </p>
          <p className="text-[1.5rem]">
            Thanks for reading my short Bio, see you on your big day!
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
