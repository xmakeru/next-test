import Search from './Search'


async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 }}
  ) 
  return res.json()
}

export default async function PostsList() {
    const posts = await fetchData()
    return (
      <div>
        <h1 className='text-center my-4'>PostsList</h1>
        <Search posts={posts} />
    </div>
)
}