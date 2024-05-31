import React from 'react'
import Image from 'next/image'

async function fetchData() {
    const res = await fetch("https://661f5b2c16358961cd941ae5.mockapi.io/api/v1/cars");
    return res.json();
}

export default async function NewsList() {
    const dataList = await fetchData();
  return (
    <>
        {dataList.map((item)=>(
            <div key={item.id} className='card my-5'>
                <Image
                    src={item.imageUrl}
                    width={100}
                    height={100}
                    alt={item.modelType}
                />
                <h3>{item.modelType}</h3>
                <p>{item.price}</p>
                <p>{item.date}</p>                
            </div>
        ))}
    </>
  )
}
