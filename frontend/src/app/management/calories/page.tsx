import { redirect } from 'next/navigation'

import NewCalorieForm from '@/components/NewCalorieForm';

export default async function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  if (typeof searchParams.date !== 'string') {
    redirect('/dashboard/calories')
  }
  const date = searchParams.date

  return (
    <>
      <h1>{date.replaceAll('-', '/')}のカロリー</h1>
      <NewCalorieForm date={date} />
    </>
  )
}