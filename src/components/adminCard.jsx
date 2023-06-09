import { auth } from "../config/firebase";
import {
  // getDoc,
  getDocs,
  collection,
  doc,
  addDoc,
  where,
  query,
  deleteDoc,
} from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import db from "../config/firebase";
import { useNavigate } from "react-router-dom";


export function AdminCard(props) {

  const removePicture = async () => {
    setloading(true)
    try {

      const docRef = collection(db, "Products");
      const CartToDeleteQuery = query(
        docRef
      );

      const CartToDeleteData = await getDocs(CartToDeleteQuery);
      const CartToDelete = doc(db, "Products");
      await deleteDoc(CartToDelete);
      window.location.reload()
      console.log("DocumentDeleted");
      setloading(false)
    } catch (err) {
      console.log(err);
    }
  };

  const { post } = props;

  return (
    <div className="topcard w-[42vw] flex flex-col items-center rounded-[10px]">
    <div className="relative" onClick={() => {console.log("working")}}>
      <img
        src={post.images}
        alt="Product"
        className=""
      />

    </div>
    <button className="bg-red-500 py-[1rem] px-[2rem] text-[2rem]" onClick={() => {removePicture()}}>Delete</button>
        </div>
  );
}
