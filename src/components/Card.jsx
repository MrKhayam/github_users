import React from 'react'

const Card = ({userImage,userName}) => {
  return (
    <>
    <div className="TeacherCard w-64 h-72 bg-white rounded-md">
                <div className="image w-full h-[80%] rounded-md">
                    <img src={userImage} className="image w-full h-full rounded-t-md" alt="" />
                </div>
                <div className="text w-full h-[20%] rounded-b-md text-center text-2xl text-white bg-gray-700">{userName}</div>
            </div>
    </>
  )
}

export default Card