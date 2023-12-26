// import data from "@/data/weights.json"
import WeightsList from "@/components/WeightsList"

async function getData() {
  // そもそもfetch apiがrejectedされたときのエラー処理を後で書く
  const res = await fetch('http://localhost:5000/api/weights', { cache: "no-cache" })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  type ApiResponse = {
    data: [
      {
        id: number
        type: "weight"
        attributes: {
          date: string
          weight: number
          memo?: string
        }
      }
    ]
  }

  type SerializedJson = {
    id: number
    date: string
    weight: number
    memo?: string
  }[]
    
  const apiResponse = await res.json() as ApiResponse
  // console.log(apiResponse.data[0].attributes)
  const serialized_json: SerializedJson = apiResponse.data.map(item => {
    // console.log(item.attributes)
    return (
      {
        id: item.id,
        date: item.attributes.date,
        weight: item.attributes.weight,
        memo: item.attributes.memo
      }
    )
  })
  return serialized_json
}
 
export default async function Page() {
  const data = await getData()

  return (
    <>
      <h1>カロリー記録</h1>
      <WeightsList data={data} />
    </>
  )
}