export async function POST(Request) {

    const userData = await Request.json()


    return Response.json({message: 'Hello world'}, userData)
}