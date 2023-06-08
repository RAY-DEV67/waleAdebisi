import { useState } from "react";
import db from "../config/firebase";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TopCard } from "../components/topcard";

export function Portfolio() {
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
    db.collection("Products").where("category", "==", portfolio)
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
  }, []);

  const fetchmore = () => {
    setempty(false);
    db.collection("Products")
      .where("category", "==", "Mobile Phones & Laptops")
      .startAfter(lastDocuments)
      .limit(10)
      .get()
      .then((collections) => {
        const isCollectionEmpty = collections.size === 0;
        if (!isCollectionEmpty) {
          const newcloths = collections.docs.map((cloths) => {
            return { ...cloths.data(), id: cloths.id };
          });
          const lastDoc = collections.docs[collections.docs.length - 1];
          setclothsList((clothsList) => [...clothsList, ...newcloths]);
          setlastDocuments(lastDoc);
          // if(newcloths.length === 0){
          //   setempty(true)
          // }
        } else {
          setisEmpty(true);
          sethasmore(false);
        }
        // console.log(clothsList)
      });
  };
  

  return (
    <div className="">
      <div className="flex flex-col items-center h-[100vh] lg:top-[13%] pt-[70px] lg:z-[-1]">
        <p className="font-bold text-4xl text-center border-y border-[#010101] py-[1rem]">
          Portfolio
        </p>
        <p className="text-[2rem] w-[80vw] text-center"> We are known for outstanding luxury work, we take pride in the experience we create for our clients</p>
        <div className="flex relative portfolioButton p-[1rem] text-[2rem]">
          <p
            onClick={() => setportfolio("Engagements")}
            className={`mr-[1rem] border p-[1rem] ${
              portfolio === "Engagements" ? "bg-white text-black" : ""
            }`}
          >
            Engagements
          </p>
          <p
            onClick={() => setportfolio("Weddings")}
            className={`mr-[1rem] border p-[1rem] ${
              portfolio === "Weddings" ? "bg-white text-black" : ""
            }`}
          >
            Weddings
          </p>
        </div>
        <div className="mb-[5rem] flex flex-wrap gap-3 w-[90vw] items-center justify-center mt-[1rem]">
          {clothsList.map((post, index) => {
            return (
              <div key={index} className="max-w-4xl">
                <TopCard post={post} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
