import { redirect } from 'next/navigation'

import UpdateCalorieForm from '@/components/UpdateCalorieForm';

async function getData(id: string) {
  // エラー処理後でかく
  const res = await fetch(`http://localhost:5000/api/calories/${id}`)
  if (!res.ok) {
    throw new Error('failed to fetch data')
  }

  type ApiResponse = {
    data: {
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
  }

  const apiResponse = await res.json() as ApiResponse
  const serialized_json: SerializedJson = {
    id: apiResponse.data.id,
    date: apiResponse.data.attributes.date,
    calories: {
      meal1: apiResponse.data.attributes.meal1,
      meal2: apiResponse.data.attributes.meal2,
      meal3: apiResponse.data.attributes.meal3,
      meal4: apiResponse.data.attributes.meal4,
      meal5: apiResponse.data.attributes.meal5
    }
  }
  return serialized_json
}

export default async function Page({ params, searchParams }: { params: { id: string }, searchParams: {[key: string]: string | string[] | undefined} }) {
  if (typeof searchParams.date !== 'string') {
    redirect('/dashboard/calories')
  }
  const data = await getData(params.id)

  return (
    <>
      <h1>{data.date.replaceAll('-', '/')}のカロリー</h1>
      <UpdateCalorieForm id={data.id} date={data.date} {...data.calories} />
    </>
  )
}