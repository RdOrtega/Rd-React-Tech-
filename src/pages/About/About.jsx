import React from 'react';
import './About.css';

//import componentes pages...........
import Header from '../../Components/Header/Header';
import IconCart from '../../Components/IconCart/IconCart';
import Footer from '../../Components/Footer/Footer';

function About() {

    return (
        <div className='conteiner-fluid conteiner-about'>
            <Header tittle="About Us" />

            <span className='icon-cart'>
                <IconCart />
            </span>


            <section className="conteiner-fluid us col-10 mx-auto mt-3">

                <section className="container-fluid">
                    <p className="text-dark mx-auto">Hola! somos Rd~TECH; Una tienda calificada, donde podras obtener los mejores portatiles del momento, aqui hay una variedad de productos, marcas con las mejores especificaciones para que puedas realizar tus tareas y cumplir tus metas. Tenemos
                        escolares, para tu trabajo en oficina, para videojuegos(GAMER), entre otras referencias. Te invitamos a echarle un vistazo a la seccion Tendencias, donde encontraras nuestra seccion de new prodcutos!,
                        obten beneficios por compras premium, tambien tenemos envio gratis en algunas referencias.. mira el carousel, donde encontraras algunas de las nuevas series de laptops, solo del momento!..
                        Nuestros servicion online se basan contraentrega, no se te olvide completar los dato del formulario para que pueda llegar tu pedido a su destino. caulquier duda o inquietud, no dudes en hacernolos saber por medio del email u otras red social con
                        gusto los tomaremos.. Tambien puedes encontrarnos enla ciudad de medellin, estamos hubicados en la calle 23 #23-15 centro, alli estan nuestras acesoras quieneste recibiran con mucha atencion.
                    </p>
                </section>

                <div className="conteienerfluid d-none d-md-block">

                    <div className="editor ">
                        <div className="editor-item">
                            <img src={'Assets/Img/about1.jpg'} alt=" " className="editor-img img-fluid " />
                            <p className="editor-circle ">Nuestra Sede!</p>
                        </div>
                        <div className="editor-item">
                            <img src={'Assets/Img/about2.jpg'} alt=" " className="editor-img img-fluid " />
                            <p className="editor-circle ">Exhibición de productos!</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div >
    )
}

export default About;