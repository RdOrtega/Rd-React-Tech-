import React, { useState, useEffect } from 'react';

//IMPORT COMPONENTES DE LA PAGINA..........
import Cards from "../Cards/Cards";

//IMPORT CONTEXT Y FIREBASE...............
import { db } from '../../fireBase/fireBaseConfig';
import { collection, query, getDocs, where } from 'firebase/firestore';


const VisualCard = () => {

	//estados de la lista de prodcutos..............
	const [list, setList] = useState([]);


	//callback a la database y filtramos con el where los items news.........
	const getProducts = async () => {

		const q = query(collection(db, 'Img-Rd-React-Tech'), where('new', '==', 'true'));

		const querySnapshot = await getDocs(q);
		const docs = [];
		querySnapshot.forEach((doc) => {
			docs.push({ ...doc.data(), id: doc.id });
		});
		setList(docs);
	};

	useEffect(() => {
		getProducts();
	}, []);


	return (
		<div className='row mx-auto mt-4'>

			{list.map((item) => (

				<div className='col mb-3' key={item.id}>
				
						<Cards data={item} />
				
				</div>
			))}
		</div>
	)
};

export default VisualCard;
