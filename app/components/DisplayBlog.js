"use client"
import React, { use } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
export default function DisplayBlog() {
  const [blog, setBlog] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getBlog() {
      try {
        let res = await fetch('https://back-12ec.onrender.com/getBlog', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (res.status === 200) {
          let data = await res.json();
          console.log(data);
          setBlog(data.Alldata);
          setLoading(false);
        } else if (res.status === 400) {
          alert('No blog found');
        }
      } catch (err) {
        console.log(err);
      }
    }
    getBlog();
  }, []);
  return (
    <section>
    
          {blog.map((item) => {
            return (
              <div key={item.id} className='border-2 border-white p-[20px] rounded-[5px]'>
                <h1 className='text-[30px] font-bold'>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            )
          })}
          {loading && <p>Loading...</p>}
          {blog.length === 0 && <p>No blog found</p>}
    </section>
  )
}
