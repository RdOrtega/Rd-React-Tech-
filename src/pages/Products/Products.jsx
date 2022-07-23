import React, { useState, useEffect } from 'react';

//import de componentes.............
import Header from '../../Components/Header/Header';
import Cards from '../../Components/Cards/Cards';
import Spinner from '../../Components/Spinner/Spinner';
import IconCart from '../../Components/IconCart/IconCart';
import Footer from '../../Components/Footer/Footer';


//import database de firebase...........
import { db } from '../../fireBase/fireBaseConfig';
import { collection, query, getDocs } from 'firebase/firestore';




function Products() {

    //estados del spinner y los articulos.........
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);


    //callback a la database de firebase......
    useEffect(() => {
        const getProducts = async () => {

            const docs = [];

            const q = query(collection(db, 'Img-Rd-React-Tech'));

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

    }, []);


    return (
        <div className='conteiner-fluid'>
            <Header tittle="Products" />

            <span className='icon-cart'>
                <IconCart />
            </span>
            {loading ? (
                <Spinner />

            ) : (<div className='row mx-auto mt-4'>

                {list.map((item) => (
                    <div className='col mb-3' key={item.id}>
                        <Cards data={item} />
                    </div>
                ))}
            </div>)
            }
                  <Footer />
        </div >
    )
}

export default Products;