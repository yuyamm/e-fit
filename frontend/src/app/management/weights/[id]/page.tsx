import { redirect } from 'next/navigation'

import UpdateWeightForm from '@/components/UpdateWeightForm';

async function getData(id: string) {
  // エラー処理後でかく
  const res = await fetch(`http://localhost:5000/api/weights/${id}`)
  if (!res.ok) {
    throw new Error('failed to fetch data')
  }

  type ApiResponse = {
    data: {
      id: number
      type: "calorie"
      attributes: {
        date: string
        weight: number
        memo?: string
      }
    }
  }

  type SerializedJson = {
    id: number
    date: string
    weight: number
    memo?: string
  }

  const apiResponse = await res.json() as ApiResponse
  const serialized_json: SerializedJson = {
    id: apiResponse.data.id,
    date: apiResponse.data.attributes.date,
    weight: apiResponse.data.attributes.weight,
    memo: apiResponse.data.attributes.memo
  }
  return serialized_json
}

export default async function Page({ params, searchParams }: { params: { id: string }, searchParams: {[key: string]: string | string[] | undefined} }) {
  if (typeof searchParams.date !== 'string') {
    redirect('/dashboard/weights')
  }
  const data = await getData(params.id)

  return (
    <>
      <h1>{data.date.replaceAll('-', '/')}のカロリー</h1>
      <UpdateWeightForm {...data} />
    </>
  )
}