async function fetchData() {
    const request = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    {method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-CMC_PRO_API_KEY': '2870b7b0-7ee9-4c9b-b73d-6165923a3e57',
    next: { revalidate: 3600 }
    }})
    return request.json()
  }

export default async function TestApi() {
    const res = await fetchData()
    return (
    <>
    <h1 className="text-center my-4 text-3xl">Crypto</h1>
    <div className="border-2 mb-4 w-[92%] mx-auto rounded border-indigo-400">
    {res.data.map(e => (
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