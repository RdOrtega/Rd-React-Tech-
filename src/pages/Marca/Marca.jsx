import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";

//import de los componentes.............
import Header from '../../Components/Header/Header';
import Spinner from '../../Components/Spinner/Spinner';
import Cards from '../../Components/Cards/Cards';
import IconCart from '../../Components/IconCart/IconCart';

//import database de firebase...........
import { db } from '../../fireBase/fireBaseConfig';
import { collection, query, getDocs, where } from 'firebase/firestore';


function Marcas() {

    //estados del spinner, los articulos y useParams.........
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { marca } = useParams();




    //callback a la database de firebase......
    useEffect(() => {

        const getProducts = async () => {

            const docs = [];

            const q = query(collection(db, 'Img-Rd-React-Tech'), where('marca', '==', marca));

            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setList(docs);
        };
        getProducts();

        //retrasamos la carga de la pagina.....
        setTimeout(() => {
            setLoading(false);
        }, 1500);

    }, [marca]);


    return (
        <div className='conteiner-fluid'>
            <Header tittle="Marcas" />

            <span className='icon-cart'>
                <IconCart />
            </span>

            {loading ? (
                <Spinner />

            ) : (<div className='row mx-auto mt-5'>

                {list.map((item) => (
                    <div className='col mb-4' key={item.id}>
                            <Cards data={item} />
                    </div>
                ))}
            </div>)}
        </div>
    )
}

export default Marcas;