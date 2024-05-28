import Post from "../component/Post"

export async function generateMetadata({params}) {
    const post = await fetchData(params.id)
    return {
        title: post.title,
        description: post.body,
    }
}

async function fetchData(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id) 
    const result = await res.json()  
    return result
  }

export default async function PostPage({params}) {
    const post = await fetchData(params.id)

    return (
      <div>
        <Post post={post}/>
      </div>
    )
}