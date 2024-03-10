import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from './Card';

const Github = () => {
    const data = useLoaderData();
  return (
    <>
    <div className="w-full items-center justify-center py-11 bg-zinc-900 p-5 flex flex-wrap gap-4">
    {data.map((user,index)=> <Card key={index} userImage={user.avatar_url} userName={user.login[0].toUpperCase()+user.login.slice(1)}/>)} 
    </div>
    </>
  )
}

export default Github