import { redirect } from 'next/navigation'

import NewWeightForm from '@/components/NewWeightForm';

export default async function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  if (typeof searchParams.date !== 'string') {
    redirect('/dashboard/weights')
  }
  const date = searchParams.date

  return (
    <>
      <h1>{date.replaceAll('-', '/')}の体重</h1>
      <NewWeightForm date={date} />
    </>
  )
}