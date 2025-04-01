import Post from "../component/Post"

export async function generateMetadata({params}) {
  const { id } = params
    const post = await fetchData(id)
    return {
        title: post.title,
        description: post.body,
    }
}

async function fetchData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
      
    )   
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