'use client'
import React from 'react'
import {useState} from 'react'
import { useRouter } from "next/navigation"

export default function CreateForm() {

    const router = useRouter()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')    
    const [urlToImage, setUrlToImage] = useState('')
    const [publishedAt, setPublishedAt] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setIsLoading(true)
        const payload = {
            title: title,
            description: description,
            urlToImage: urlToImage,
            publishedAt: publishedAt,
        }
        const res = await fetch("http://localhost:4000/news", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        })
        if (res.status === 201) {
            router.push('/news')
            router.refresh()
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            <span>Title:</span>
            <input
            required
            onChange={(e)=>{setTitle(e.target.value)}}
            type='text'
            value={title}
            />
        </label>
        <label>
            <span>description:</span>
            <input
            required
            onChange={(e)=>{setDescription(e.target.value)}}
            type='text'
            value={description}
            />
        </label>
        <label>
            <span>urlToImage:</span>
            <input
            required
            onChange={(e)=>{setUrlToImage(e.target.value)}}
            type='text'
            value={urlToImage}
            />
        </label>
        <label>
            <span>publishedAt:</span>
            <input
            required
            onChange={(e)=>{setPublishedAt(e.target.value)}}
            type='text'
            value={publishedAt}
            />
        </label>
        <button disabled={isLoading} className='btn-primary'>
            {isLoading && <span>Loading</span>}
            {!isLoading && <span>Add</span>}
        </button>
    </form>
  )
}
