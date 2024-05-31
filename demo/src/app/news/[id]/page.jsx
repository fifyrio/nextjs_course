import { ok } from 'assert';
import React from 'react'
import { notFound } from 'next/navigation';
import Image from 'next/image';
async function fetchDetail(id) {    
    const res = await fetch("http://localhost:4000/news/"+id, 
    {next: {revalidate: 0}})

    if (!res.ok) {
        notFound();
    }

    return res.json();
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
