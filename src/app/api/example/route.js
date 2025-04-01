import { NextResponse } from 'next/server'
//только для серверной части (api, middleware)

// export async function GET() {
//   const data = await fetchData()
//   return NextResponse.json(data) // Автоматический Content-Type
// }

export async function GET() {

  return NextResponse.json(
    { error: "Invalid email" },
    { status: 422 }
  )
}

export async function GET() {
    const text = "Hello, world!";
    return new Response(text, {
      status: 200,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  export async function GET() {
    return Response.redirect('https://example.com', 307);
  }