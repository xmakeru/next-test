export default function App({params}) {
  if (params.id.length === 2) {
    return <h1>{params.id[0]} and {params.id[1]}</h1>
  }
  else if (params.id.length === 1) {
    return <h1>{params.id[0]}</h1>
  }
}