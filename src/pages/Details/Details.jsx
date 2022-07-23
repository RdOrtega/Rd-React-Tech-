import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./Details.css";

//import de los componentes.............
import Header from "../../Components/Header/Header";
import IconCart from "../../Components/IconCart/IconCart";
import VisualcardDetail from "../../Components/VisualCardDetail/VisualCardDetail";

//import database de firebase...........
import { db } from "../../fireBase/fireBaseConfig";
import { collection, query, getDocs, where, documentId } from 'firebase/firestore';



function Details({ data }) {

  //estados para reflejar los detalles de la tarjeta............
  const [detail, setDetail] = useState([]);
  let { id } = useParams();


  useEffect(() => {

      //callback con filtro por id a la database de firebase......
    const getProducts = async () => {
      const q = query(collection(db, 'Img-Rd-React-Tech'), where(documentId(), '==', id));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDetail(docs);
    };
    getProducts();
  }, [id]);



  return (
    <div className="conteiner-fluid">

      <Header tittle="Product Details" />

      <span className="icon-cart">
        <IconCart />
      </span>

      {detail.map((item) => (
        <div key={item.id}>
          <VisualcardDetail data={item} cant={1} />
        </div>
      ))}
    </div>
  );
}

export default Details;
