import React from 'react';
import './Home.css';


//IMPORT COMPONENTES DE LA PAGINA..........
import VisualCard from "../../Components/VisualCard/VisualCard";
import Header from '../../Components/Header/Header';
import IconCart from '../../Components/IconCart/IconCart';
import Footer from '../../Components/Footer/Footer';

//import icons material...........
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import DeviceHubRoundedIcon from '@mui/icons-material/DeviceHubRounded';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import ElectricMeterRoundedIcon from '@mui/icons-material/ElectricMeterRounded';
import ElectricBoltRoundedIcon from '@mui/icons-material/ElectricBoltRounded';



function Home() {

  return (
    <>
      <section className='conteiner-fluid detail'>
        <Header tittle="Rd~React web" link={'link'} />

        <span className='icon-cart'>
          <IconCart />
        </span>

        <section className='conteiner-fluid d-none d-md-block'>
          <img src={'Assets/Img/Carousel/carousel01.png'} className="d-block w-100 img-presentacion" alt="..." />
        </section>


        <div className='mt-4'>
          <p className='text-home'><b className='naranja'>Lo último.</b> Echa un vistazo a las novedades.</p>
          <VisualCard />
        </div>


        <section className='conteiner-fluid conteiner-col-home-2 row mx-auto mt-4'>

          <div className='mt-4 text-light'>
            <p className='text-home'><b className='naranja'>Rd~Tech es diferente</b>, Más razones para comprar con nosotros.</p>
          </div>


          <div className='col-11 col-md-5 col-home-2 mb-4'>
            <h4 className='mt-3 ms-4'> <b className='d-block naranja'>Compra online.</b> recoge en la tienda. </h4>

            <p className='col-11 mx-auto mt-3'>En
              <b className='naranja'> Rd~Tech</b> Tambien puedes comprar tu dispositivo favorito y
              recogerlo en nuestro punto principal, envianos un correo o comunicate por medio de nuestras linas de atencion y
              comentanos como quieres recibir tu pedido..</p>

            <div className="row">
              <img src={'Assets/Img/home2.png'} className="d-block w-100 img-home2 img-fluid" alt="..." />
            </div>
          </div>


          <div className='col-11 col-md-5 col-home-2 mb-4'>
            <h4 className='mt-3 ms-4'> <b className='d-block naranja'>Compras para la universidad.</b></h4>

            <div className='row my-4'><img src={'Assets/Img/home1.png'} className="d-block w-100 img-home2 img-fluid" alt="..." /></div>

            <p className='col-11 mx-auto mt-3'>Ahorra en marcas como: Mac, Lenovo y Acer, con los descuentos para educación.
              Ve y echale un vistazo a sus precios, te sorprenderas..
              El lema es: <b className='naranja d-block'> Damos a docentes y estudiantes herramientas para cambiar el mundo.</b></p>
          </div>
        </section>


        <section className='conteiner-fluid conteiner-col-home row mx-auto mt-4'>

          <div className='my-md-2'>
            <p className='text-home'><b className='naranja'>Tienda.</b> La mejor forma de comprar tus productos favoritos.</p>
          </div>

          <div className="col-11 col-md-5 col-home mb-4">

            <div className='col-10 mx-auto mt-4'>
              <h4 className='my-3'> <b className='naranja'>Sea cual sea el tamaño de tu empresa,</b> queremos trabajar contigo brindandote los mejores productos, al mejor precio.</h4>

              <p className='mt-4'>
                Nuestros servicion online se basan contraentrega, no se te olvide completar los dato del formulario para que pueda llegar tu pedido a su destino;
                †† La disponibilidad de los servicios varía en función de la zona geográfica.
                †† Usamos tu ubicación para mostrarte mas rápidamente las opciones de envío. Sabemos tu ubicación a partir de tu dirección IP.
              </p>
              <div className='row mx-auto my-4'>
                <div className="col icon-home"> <AirplanemodeActiveRoundedIcon fontSize='large' /></div>
                <div className="col icon-home"> <CottageRoundedIcon fontSize='large' /></div>
                <div className="col icon-home"> <DeviceHubRoundedIcon fontSize='large' /></div>
                <div className="col icon-home"> <DoneAllRoundedIcon fontSize='large' /></div>
                <div className="col icon-home d-none d-lg-block"> <ElectricMeterRoundedIcon fontSize='large' /></div>
              </div>
            </div>
          </div>

          <div className="col-11 col-md-6 mb-4">

            <div className="row row-home mb-3">

              <div className="col-11 mx-auto">
                <h4 className='my-3'><b className='naranja'>Renueva tu dispositivo</b> y llévate un descuento para uno nuevo.</h4>
                <p> Comunicate con nosotros y asi podremos ayudarte con nuestro servicio tecnico, que esperas para llamar?
                  Tambien puedes encontarnos en redes sociales, mira nustra seccion de contacto en el pie de pagina!.
                </p>
              </div>
            </div>

            <div className="row row-home mt-2">

              <div className="col-11 mx-auto">
                <h4 className='mt-3'><b className='naranja'>Precios especiales.</b>  Disfruta de precios especiales.</h4>
                <p>En Rd~Tech encuentra promos como ninguna, tenemos las mejores marcas a los mejores precios con ofertas relampago
                  ven y cotiza con nostros, nuestros asesores esatran felices de atenderte...
                </p>
                <div className="row mx-auto my-4">
                  <div className="col icon-home"><ElectricBoltRoundedIcon /></div>
                  <div className="col icon-home"><ElectricBoltRoundedIcon /></div>
                  <div className="col icon-home"><ElectricBoltRoundedIcon /></div>
                  <div className="col icon-home"><ElectricBoltRoundedIcon /></div>
                  <div className="col icon-home"><ElectricBoltRoundedIcon /></div>
                  <div className="col icon-home"><ElectricBoltRoundedIcon /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </section>
      <Footer />
    </>
  )
};

export default Home;


