import next from 'next'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

async function fetchData() {
    const dataList = await fetch("http://localhost:4000/news", {next: {revalidate: 0}})
    return dataList.json()
}

export default async function NewsList() {
    const dataList = await fetchData()
  return (
    <>
    {dataList.map((item)=>(
        <div key={item.id} className='card my-5'>
            <Link href={`/news/${item.id}`}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.publishedAt}</p>
                <Image
                    src={item.urlToImage}
                    width={100}
                    height={100}
                    alt="Picture of the author"
                />
            </Link>
            
        </div>
    ))}
    </>
  )
}
