import React from 'react'
import Confirmación from '@/auth/Confirmación';

async function page({params}) {

   const {token}=await params;

  return (
    <>
        <Confirmación token={token}/>
    </>
  )
}

export default page