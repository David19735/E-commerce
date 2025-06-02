import React from 'react'
import style from '@/styles/Principal.module.css'
import Header from './Header'
import Juegos from './Juegos'

function Principal() {
  return (
   <div className={style.container}>

    <Header/>
    <div className={style.bg}>
    </div>
    <Juegos/>

   </div>
  )
}

export default Principal