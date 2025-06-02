'use client'
import React,{useEffect, useState,useRef } from 'react'
import style from '@/styles/Celulares.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CarruselProductos from '@/components/CarruselProductos';




function Celulares() {

  const [productos,setProductos]=useState([])



useEffect(()=>{
  const getProduct=async()=>{
    
    const res=await fetch('http://localhost:4000/inicio/productos');
    const data=await res.json();
    setProductos(data)
  }
  getProduct()
},[])
  const celulares=productos?.filter(celular=>{
    if(celular.categoria.id===1){
      return celular;
    }
  })
  const samsung=celulares?.filter(samsung=>{
    if(samsung.marca.id===1){
      return samsung;
    }
  })
  const iphone=celulares?.filter(iphone=>{
    if(iphone.marca.id===2){
      return iphone;
    }
  })
  const motorola=celulares?.filter(motorola=>{
    if(motorola.marca.id===3){
      return motorola
    }
  })



  return (
    <div className={style.container}>

      <Swiper 
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        speed={500}
        navigation
        className={style.carrusel}
        data-aos="zoom-in-up"
        >
            <SwiperSlide className={style.carrusel_imagen}>
                <img src="/celulares/iphone.jpg" alt="Imagen 1" />
            </SwiperSlide>
            <SwiperSlide className={style.carrusel_imagen}>
                <img src="/celulares/motorola.jpg" alt="Imagen 2" />
            </SwiperSlide>
            <SwiperSlide className={style.carrusel_imagen}>
                <img src="/celulares/samsung.jpg" alt="Imagen 2" />
            </SwiperSlide>
           
        </Swiper>

    

   <CarruselProductos titulo="Iphone" producto={iphone}/> 
   <CarruselProductos titulo="Samsung" producto={samsung}/> 
   <CarruselProductos titulo="Motorola" producto={motorola}/> 

    </div>
  )
}

export default Celulares