import Link from 'next/link'

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')  // получаем данные с url
  const result = await res.json()  // преобразовываем в json
  return result
}

export default async function PostsList() {
    const posts = await fetchData()
    return (
      <div>
        <h1 className='text-center my-4'>PostsList</h1>
          <div className='flex flex-col items-center gap-8'>
            {posts.map(e => (
              <div key={e.id} className='w-1/2 bg-cyan-50 rounded-md p-2 last:mb-4'>
                <h2 className='text-xl text-teal-500'>{e.title}</h2>
                <p>{e.body}</p>
                <Link href={`/medium/posts-list/post/` + e.id} className='hover:underline'>More</Link>
              </div>
            ))}
          </div>
    </div>
)
}