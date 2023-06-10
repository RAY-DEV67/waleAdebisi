import React, { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export function Contact() {
  const navigate = useNavigate();
  

  return (
    <div className="flex flex-col items-center bg-[#000009]">
      <div className="pt-[90px] bg-[#000009] w-[90vw] lg:w-[60%]">
      <div className="flex flex-col items-center">
        <div className="w-[80vw] text-center">
          <p className="text-[3rem]">Contact Us</p>
          <p className="text-[2rem]">
            If you are inquiring about our services, availability and pricing,
            Kindly fill in the contact form below
          </p>
        </div>
        <form
          className="w-[90%] p-[1rem] border my-[1rem] flex flex-col"
          action="https://formsubmit.co/streetically@gmail.com" method="POST"
        >
          <label className="text-left mt-[0.5rem] text-[1.5rem]">Name</label>
          <input
            type="text"
            name="Name"
            className=" border py-[0.5rem] text-black rounded-[10px] px-[1rem]"
          />
          <label className="text-left mt-[0.5rem] text-[1.5rem]">Email</label>
          <input
            type="text"
            name="Email"
            className=" border py-[0.5rem] text-black rounded-[10px] px-[1rem]"
          />
          <label className="text-left mt-[0.5rem] text-[1.5rem]">
            Instagram Handle
          </label>
          <input
            onChange={(e) => {
              settown(e.target.value);
            }}
            className="py-[0.5rem] text-black rounded-[10px] px-[1rem] border"
            type="text"
            name="Instagram"
          />

          <label className="text-left mt-[0.5rem] text-[1.5rem]">
            Phone Number
          </label>
          <input
            className="py-[0.5rem] text-black rounded-[10px] px-[1rem] border"
            type="text"
            name="Phone"
          />
          <label className="text-left mt-[0.5rem] text-[1.5rem]">
            Wedding Date
          </label>
          <input
            className="py-[0.5rem] text-black rounded-[10px] px-[1rem] border "
            type="text"
            name="Wedding Date"
          />
          <label className="text-left mt-[0.5rem] text-[1.5rem]">
            Do you have a planner
          </label>
          <input
            className="py-[0.5rem] text-black rounded-[10px] px-[1rem] border"
            type="text"
            name="Do you have a planner"
          />
          <label className="text-left mt-[0.5rem] text-[1.5rem]">
            Wedding and Reception Locations
          </label>
          <textarea name="Wedding and Reception Locations" className=" p-[1rem] text-black border rounded-[10px]" />

          <label className="text-left mt-[0.5rem] text-[1.5rem]">
            Tell us about your Wedding
          </label>
          <textarea name="Tell us about your Wedding" className="p-[1rem] text-black border rounded-[10px]" />
          {/* <Link to="/"> */}
            <input

              type="submit"
              value="Submit"
              className="font-bold border mt-[2rem] text-[2rem] py-[0.5rem] px-[1rem]"
            />
          {/* </Link> */}
        </form>
      </div>
    </div>

    </div>  );
}
