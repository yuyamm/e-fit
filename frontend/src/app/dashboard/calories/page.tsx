// import data from "@/data/calories.json"
import CaloriesList from "@/components/CaloriesList"

async function getData() {
  // そもそもfetch apiがrejectedされたときのエラー処理を後で書く
  const res = await fetch('http://localhost:5000/api/calories', { cache: "no-cache" })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  type ApiResponse = {
    data: [
      {
        id: number
        type: "calorie"
        attributes: {
          date: string
          meal1?: number
          meal2?: number
          meal3?: number
          meal4?: number
          meal5?: number
        }
      }
    ]
  }

  type SerializedJson = {
    id: number
    date: string
    calories: {
      meal1?: number
      meal2?: number
      meal3?: number
      meal4?: number
      meal5?: number
    }
  }[]
    
  const apiResponse = await res.json() as ApiResponse
  // console.log(apiResponse.data[0].attributes)
  const serialized_json: SerializedJson = apiResponse.data.map(item => {
    // console.log(item.attributes)
    return (
      {
        id: item.id,
        date: item.attributes.date,
        calories: {
          meal1: item.attributes.meal1,
          meal2: item.attributes.meal2,
          meal3: item.attributes.meal3,
          meal4: item.attributes.meal4,
          meal5: item.attributes.meal5
        }
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
      <CaloriesList data={data} />
    </>
  )
}