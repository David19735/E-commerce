import React from 'react'
import FormularioPassword from '@/auth/FormularioPassword';

async function page({params}) {

    const {token}=await params;


  return (
    <>
    <FormularioPassword token={token}/>
    </>
  )
}

export default page