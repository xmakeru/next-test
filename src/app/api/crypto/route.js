
export async function GET() {
   
      const apiKey = process.env.COINMARKETCAP_API_KEY
      
  
      const response = await fetch(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10&convert=USD",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-CMC_PRO_API_KEY": apiKey,
          },
        }
      );
  
  
      const data = await response.json()
      return Response.json(data)
   
  }