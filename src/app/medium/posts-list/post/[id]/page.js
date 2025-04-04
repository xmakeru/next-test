
import Post from "../component/Post"
export const revalidate = 60

export async function generateStaticParams() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()
  
  return posts.map(post => ({
    id: post.id.toString(), 
  }))
}



export async function generateMetadata({params}) {
  const { id } = params
    const post = await fetchData(id)
    return {
        title: post.title,
        description: post.body,
    }
}

async function fetchData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)  
 
    return res.json()
  }

export default async function PostPage({params}) {
    const post = await fetchData(params.id)

    return (
      <div>
        <Post post={post}/>
      </div>
    )
}