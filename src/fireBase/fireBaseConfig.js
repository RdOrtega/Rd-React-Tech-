import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyBBYHB5H6ARRnrHf19IJRXLCSArnAQZanI",
	authDomain: "rd-reacttech-web.firebaseapp.com",
	projectId: "rd-reacttech-web",
	storageBucket: "rd-reacttech-web.appspot.com",
	messagingSenderId: "934023495402",
	appId: "1:934023495402:web:f8b77a55ab257939446193"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);