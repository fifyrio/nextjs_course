import React from 'react'
import Image from 'next/image'

async function fetchDetail(id) {    
    const data = await fetch("http://localhost:4000/news/"+id, 
    {next: {revalidate: 0}})
    return data.json();
}

export default async function NewsDetail({params}) {
    
    const data = await fetchDetail(params.id)
    
  return (
    <>
    <div className='card my-5'>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p>{data.description}</p>
        <p>{data.content}</p>
        <Image
            src={data.urlToImage}
            width={100}
            height={100}
            alt="Picture of the author"
        />
    </div>
    </>
  )
}
