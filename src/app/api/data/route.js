import { NextResponse } from "next/server";
import {posts} from './data'

export async function GET(Request) {
    const {searchParams} = new URL(Request.url)
    ///Создает объект URL из URL-адреса запроса и извлекает из него параметры запроса (query parameters).

    const query = searchParams.get('q')
    ///Извлекает значение параметра запроса с именем 'q' из параметров запроса.

    let currentPosts = posts

    if (query) {
        currentPosts = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }
    
    return NextResponse.json({currentPosts})
}  

export async function POST(Request) {
  const body = await Request.json()

  return NextResponse.json({body})
}  