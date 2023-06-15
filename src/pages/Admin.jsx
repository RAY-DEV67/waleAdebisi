import { Link } from "react-router-dom";
import { useState } from "react";
import db from "../config/firebase";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminCard } from "../components/adminCard";

export function Admin() {
  //   const { product } = useParams();
  const navigate = useNavigate();

  const [clothsList, setclothsList] = useState([]);
  const [lastDocuments, setlastDocuments] = useState(null);
  const [isEmpty, setisEmpty] = useState(false);
  const [hasmore, sethasmore] = useState(true);
  const [loading, setloading] = useState(false);
  const [empty, setempty] = useState(false);
  const [portfolio, setportfolio] = useState("Engagements");

  useEffect(() => {
    setloading(true);
    setempty(false);
    db.collection("Wale Adebisi")
      .get()
      .then((collections) => {
        const cloths = collections.docs.map((cloths) => {
          return { ...cloths.data(), id: cloths.id };
        });
        const lastDoc = collections.docs[collections.docs.length - 1];
        setclothsList(cloths);
        setlastDocuments(lastDoc);
        setloading(false);
        if (cloths.length === 0) {
          setempty(true);
        }
      });
  }, [portfolio]);
  

  return (
    <div className="text-[#d5d1ce] bg-[#000009]">
      <div className="flex flex-col items-center lg:top-[13%] pt-[70px] lg:z-[-1]">
      <div className="lg:flex lg:justify-between lg:items-center w-[90vw] ">
      <h1 className="text-[3rem] text-center font-bold mt-[2rem]">All Photos</h1>

<Link to="/AddPicture" className="flex flex-col mt-[1rem] items-center">
      <div
        className="border uppercase border-[#d5d1ce] lg:mt-[6rem] text-[#d5d1ce] font-semibold text-2xl px-[2.5rem] m-[1rem] py-[0.3rem]"
      >
        Upload Pictures
      </div>
    </Link>
      </div>

        <div className="mb-[5rem] flex flex-wrap gap-3 w-[90vw] items-center justify-center mt-[1rem]">
          {clothsList.map((post, index) => {
            return (
              <div key={index} className="max-w-4xl">
                <AdminCard post={post} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
