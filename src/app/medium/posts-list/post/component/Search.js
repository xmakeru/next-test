'use client'

import { useState, useEffect } from "react"
import Link from 'next/link'

export default function Search({ posts }) {
    const [search, setSearch] = useState('') //текст поискового запроса
    const [filteredPosts, setFilteredPosts] = useState(posts)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setFilteredPosts(posts)
    }, [posts])

    const handleSearch = async(e) => {
        e.preventDefault()
        setLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1000))

        
        const filtered = posts.filter(post => 
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.body.toLowerCase().includes(search.toLowerCase())
        )

        setFilteredPosts(filtered)
        setLoading(false)
    }

    return (
      <>
        <form onSubmit={handleSearch} className="mb-4 text-center">
          <input
            type="search"
            placeholder="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="p-2 rounded-md"
          />
          <button type="submit" className="ml-2 p-2 bg-teal-500 text-white rounded-md">Search</button>
        </form>

        {loading ? (<h3 className="text-center">Loading...</h3>) : (
          <div className='flex flex-col items-center gap-8'>
          {filteredPosts.map(post => (
            <div key={post.id} className='w-1/2 bg-cyan-50 rounded-md p-2 last:mb-4'>
              <h2 className='text-xl text-teal-500'>{post.title}</h2>
              <p>{post.body}</p>
              <Link href={`/medium/posts-list/post/${post.id}`} className='hover:underline'>More</Link>
            </div>
          ))}
        </div>
        )} 
      </>
    )
}
