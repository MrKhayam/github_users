import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from './Card';

const Home = () => {
    const [myNum, setMyNum] = useState(1)
    const [myNum1, setMyNum1] = useState(2)
    const [chk, setChk] = useState(true)
    useEffect(()=>{
        let random = Math.floor(Math.random() * 30);
        setMyNum(random);
    },[chk])
    useEffect(()=>{
        let random2 = Math.floor(Math.random() * 30);
        setMyNum1(random2);
    },[chk])
    const data = useLoaderData();
  return (
    <>
    <div className="w-full h-[90vh] flex flex-col items-center justify-center bg-zinc-900">
        <div className="users flex-wrap flex items-center justify-center gap-12 w-10/12 h-auto p-5">
            
            <Card userImage={data[myNum].avatar_url} userName={data[myNum].login[0].toUpperCase()+data[myNum].login.slice(1)}/>

            <Card userImage={data[myNum1].avatar_url} userName={data[myNum1].login[0].toUpperCase()+data[myNum1].login.slice(1)}/>

        </div>
            <div className="myBtn w-full h-18 flex items-center justify-center">
                <button className='bg-white px-5 py-2 rounded-md font-semibold' onClick={()=> {setChk(!chk)}}>Refresh</button>
            </div>
    </div>
    </>
  )
}

export default Home

export const gitUsers = async (userName) => {
    const response = await fetch(`https://api.github.com/users`);
    const data = await response.json();
    return data;
}