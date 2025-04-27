
"use client"
import React from 'react'

import { useState } from 'react'

export default function newBlog() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  async function submit(){
    try{
      let res =await fetch('http://localhost:5000/newblog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          description
        })
      })
      if(res.status === 200){
        alert('Blog Created')
        setTitle('')
        setDescription('')
      }
      else if(res.status === 400){
        alert('Blog not created')
      }
    }catch(err){
      console.log(err)
    }
  }
  function handleSubmit(e) {
    e.preventDefault()
    submit();
  }
  return (
    <section>
      <div className="px-[100px] py-[50px] flex flex-col gap-[50px]">
        <h1 className='text-[40px] font-bold text-center'>New Blog</h1>
        <form action="" className='flex flex-col gap-[20px] w-[500px] m-auto' onSubmit={handleSubmit}>
          <input type="text" placeholder='Title' className='border-2 borde-white p-[10px] rounded-[5px]' value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <textarea name="" id="" cols="30" rows="5" placeholder='Description' className='border-2 border-white p-[10px] rounded-[5px]' value={description} onChange={(e)=>setDescription(e.target.value)} ></textarea>
          <button className='bg-red-600 text-white p-[10px] rounded-[5px] cursor-pointer'>Submit</button>
        </form>
      </div>
    </section>
  )
}
