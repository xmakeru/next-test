import Link from 'next/link'

export default function Post({post}) {
  return (
    <>
    <h2 className='text-2xl text-teal-500'>{post.title}</h2>
    <p>{post.body}</p>
    <strong>Author ID: {post.userId}</strong>
    <Link href="/medium/posts-list" className='flex mt-6'>Назад</Link>
    </>
  )
}