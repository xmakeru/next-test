export const revalidate = 3600
async function fetchData() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/crypto`);
    return await response.json()
    
  } 

export default async function TestApi() {
    const { data } = await fetchData()
    return (
    <>
    <h1 className="text-center my-4 text-3xl">Crypto</h1>
    <div className="border-2 mb-4 w-[92%] mx-auto rounded border-indigo-400">
    {data?.map(e => (
        <div key={e.id} 
        className="flex flex-col my-8 w-[92%] mx-auto gap-2 hover:bg-slate-500 rounded p-2">
          <div>{e.name}</div>
          <div>{e.quote.USD.price} $</div>
        </div>
    ))}
    </div>
    </>
    )
}