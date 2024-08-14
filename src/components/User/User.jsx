import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams();
  return (
    <>
    <div className='container'>
    <div className='flex w-screen p-3 justify-center bg-gray-500 text-white text-3xl'>Userid:{userid}</div>
    </div>
    </>
  )
}

export default User