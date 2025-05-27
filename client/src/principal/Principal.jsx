import React from 'react'
import style from '@/styles/Principal.module.css'
import Header from './Header'
import Juegos from './Juegos'

function Principal({usuario}) {
  return (
   <div className={style.container}>

    <Header
    usuario={usuario}
    />
    <div className={style.bg}>
    </div>
    <Juegos/>

   </div>
  )
}

export default Principal