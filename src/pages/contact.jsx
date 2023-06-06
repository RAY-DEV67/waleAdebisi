import { auth } from "../config/firebase";
import { useState, useEffect } from "react";
import db from "../config/firebase";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import LoadingSpinner from "../components/spinner";
import { storage } from "../config/firebase";
import { useNavigate, useParams } from "react-router-dom";


export function Contact() {
  const [image, setimage] = useState("");
  const [isfile, setfile1] = useState("");
  const navigate = useNavigate();

  const [saved, setsaved] = useState([]);
  const [loading, setloading] = useState(false);
  const [price, setprice] = useState([]);
  const [sum, setsum] = useState(0);
  const [product, setproduct] = useState([]);
  const [size, setsize] = useState("");
  const [productOrder, setproductOrder] = useState("");
  const [errors, seterrors] = useState("");


  const [name, setname] = useState("");
  const [street, setstreet] = useState("");
  const [town, settown] = useState("");
  const [state, setstate] = useState("");
  const [number, setnumber] = useState("");

    const validateForm = () => {
    let tempErrors = {};
    if (!isfile) {
      tempErrors.file1 = "Please select a Picture";
    }
    if (!name) {
      tempErrors.name = "Please add your Name";
    }
    if (!street) {
      tempErrors.street = "Please add your Street Address";
    }
    if (!town) {
      tempErrors.town = "Please add your Town/City";
    }
    if (!state) {
      tempErrors.state = "Please add state";
    }
    if (!number) {
      tempErrors.phone = "Please input your Phone Number ";
    }
    seterrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };



  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if(validateForm()){
      emailjs
    .sendForm(
      "service_dtrv7eq",
      "template_f8qx0m4",
      form.current,
      "0fs2UJE4_uP27Mjo7"
    )
    .then(
      (result) => {
        console.log(result.text);
        navigate("/");
        console.log("message sent")
      },
      (error) => {
        console.log(error.text);
      }
    );
    }else{console.log("form is invalid");}
  };


  return (
    <div className="pt-[90px] lg:absolute lg:left-[35%] lg:top-[12%] lg:w-[60%]">
          <div className="flex flex-col items-center">
<div className="w-[80vw] text-center">
<p className="text-[3rem]">Contact Us</p>
            <p className="text-[2rem]">If you are inquiring about our services, availability and pricing, Kindly fill in the contact form below</p>

</div>
<form ref={form} onSubmit={sendEmail} className="w-[90%] p-[1rem] border my-[1rem] flex flex-col">
      <label className="text-left mt-[0.5rem] text-[1.5rem]">Name</label>
      <input onChange={(e) => {
setname(e.target.value)
      }} type="text" name="user_name" className=" border py-[0.5rem] rounded-[10px] px-[1rem]" />
     {errors.name && <p className="error">{errors.name}</p>}
      <label className="text-left mt-[0.5rem] text-[1.5rem]">Email</label>
      <input onChange={(e) => {
setstreet(e.target.value)
      }}  type="text" name="Street" className=" border py-[0.5rem] rounded-[10px] px-[1rem]"/>
      {errors.street && <p className="error">{errors.street}</p>}
      <label className="text-left mt-[0.5rem] text-[1.5rem]">Instagram Handle</label>
      <input
      onChange={(e) => {
        settown(e.target.value)
              }} 
                className="py-[0.5rem] rounded-[10px] px-[1rem] border"
                type="text"
                name="Town"
              />
              {errors.town && <p className="error">{errors.town}</p>}
              
                 <label className="text-left mt-[0.5rem] text-[1.5rem]">Phone Number</label>
      <input
      onChange={(e) => {
        setnumber(e.target.value)
              }} 
                className="py-[0.5rem] rounded-[10px] px-[1rem] border"
                type="text"
                name="Phone"
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
              <label className="text-left mt-[0.5rem] text-[1.5rem]">Wedding Date</label>
      <input
      onChange={(e) => {
        setsize(e.target.value)
              }} 
                className="py-[0.5rem] rounded-[10px] px-[1rem] border "
                type="text"
                name="Size"
              />
               <label className="text-left mt-[0.5rem] text-[1.5rem]">Do you have a planner</label>
      <input
      onChange={(e) => {
        setsize(e.target.value)
              }} 
                className="py-[0.5rem] rounded-[10px] px-[1rem] border"
                type="text"
                name="Size"
              />
      <label className="text-left mt-[0.5rem] text-[1.5rem]">Wedding and Reception Locations</label>
      <textarea name="message" className=" border rounded-[10px]" />

      <label className="text-left mt-[0.5rem] text-[1.5rem]">Tell us about your Wedding</label>
      <textarea name="message" className=" border rounded-[10px]" />
    <div>
    <input type="submit" value="Submit" className="font-bold border mt-[2rem] text-[2rem] py-[0.5rem] px-[1rem]" />
    
        </div>
        </form>
          </div>
    </div>
  );
}