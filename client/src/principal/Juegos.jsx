import React from 'react'
import style from '@/styles/Juegos.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


function Juegos() {
  return (
    <div className={style.container}>
        
        <div className={style.soul_reaver}>
            <div className={style.soul_reaver__inf} data-aos="fade-right">
                <h3>Legacy of Kain defiance</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus provident tenetur quis nobis ipsa eveniet repudiandae iste libero voluptate voluptatibus excepturi, explicabo omnis totam error odio, aliquid autem animi pariatur ut est modi eligendi possimus. Deserunt cum adipisci voluptatum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad magni qui recusandae eius architecto pariatur delectus voluptatem ea assumenda illum!</p>
            </div>
            <div className={style.soul_reaver__img} data-aos="fade-left"> 
                    <img src='/juegos/soul reaver.jpg'/>
            </div>
        </div>

        <div className={style.cards}>

                <div className={style.card} data-aos="fade-up-right">
                    <div className={style.card_inf}>
                    <h3>Crash Bandicoot</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tempora? Delectus quo doloribus provident officiis minus iusto, omnis dolorum est.</p>
                    <a href="">Ver más</a>
                    </div>
                    <div className={style.card_img}>
                        <img src="/juegos/game2.png" alt=""/>
                    </div>
                </div>
                <div className={style.card} data-aos="fade-up-left">
                <div className={style.card_inf}>
                    <h3>Uncharted</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tempora? Delectus quo doloribus provident officiis minus iusto, omnis dolorum est.</p>
                    <a href="">Ver más</a>
                    </div>
                    <div className={style.card_img}>
                        <img src="/juegos/game3.png" alt=""/>
                    </div>
                </div>
                <div className={style.card} data-aos="fade-up-right">
                <div className={style.card_inf}>
                    <h3>God of War</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tempora? Delectus quo doloribus provident officiis minus iusto, omnis dolorum est.</p>
                    <a href="">Ver más</a>
                    </div>
                    <div className={style.card_img}>
                        <img src="/juegos/game4.png" alt=""/>
                    </div>
                </div>
                <div className={style.card} data-aos="fade-up-left">
                <div className={style.card_inf}>
                    <h3>Elden Ring</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tempora? Delectus quo doloribus provident officiis minus iusto, omnis dolorum est.</p>
                    <a href="">Ver más</a>
                    </div>
                    <div className={style.card_img}>
                        <img src="/juegos/game5.png" alt=""/>
                    </div>
                </div>

        </div>

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
                <img src="/juegos/card4.jpg" alt="Imagen 1" />
            </SwiperSlide>
            <SwiperSlide className={style.carrusel_imagen}>
                <img src="/juegos/card5.jpg" alt="Imagen 2" />
            </SwiperSlide>
            <SwiperSlide className={style.carrusel_imagen}>
                <img src="/juegos/juego1.jpg" alt="Imagen 2" />
            </SwiperSlide>
            <SwiperSlide className={style.carrusel_imagen}>
                <img src="/juegos/juego2.jpg" alt="Imagen 2" />
            </SwiperSlide>
            <SwiperSlide className={style.carrusel_imagen}>
                <img src="/juegos/juego3.jpg" alt="Imagen 2" />
            </SwiperSlide>
        </Swiper>

        <div className={style.bento}>
            <div className={style.imgContainer}><img src="/juegos/image1.jpg" alt="" /></div>
            <div className={style.imgContainer}><img src="/juegos/image2.jpg" alt="" /></div>
            <div className={style.imgContainer}><img src="/juegos/image3.jpg" alt="" /></div>
            <div className={style.imgContainer}><img src="/juegos/image4.jpg" alt="" /></div>
            <div className={style.imgContainer}><img src="/juegos/image5.jpg" alt="" /></div>
            <div className={style.imgContainer}><img src="/juegos/image6.jpg" alt="" /></div>
            <div className={style.imgContainer}><img src="/juegos/image7.jpg" alt="" /></div>
            <div className={style.imgContainer}><img src="/juegos/image8.jpg" alt="" /></div>
            <div className={style.imgContainer}><img src="/juegos/image9.jpg" alt="" /></div>
            <div className={style.imgContainer}><img src="/juegos/image10.jpg" alt="" /></div>
            <div className={style.imgContainer}><img src="/juegos/image11.jpg" alt="" /></div>
            <div className={style.imgContainer}><img src="/juegos/image12.jpg" alt="" /></div>  
        </div>

    </div>
  )
}

export default Juegos