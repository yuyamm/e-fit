'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function createDailyCalorie(formData: FormData) {
  'use server'

  const rawFormData = {
    calorie: {
      date: formData.get('date'),
      meal1: formData.get('meal1'),
      meal2: formData.get('meal2'),
      meal3: formData.get('meal3'),
      meal4: formData.get('meal4'),
      meal5: formData.get('meal5'),
    }
  }

  // エラー処理を後で書く
  const res = await fetch('http://localhost:5000/api/calories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rawFormData),
    cache: 'no-cache'
  })

  if (!res.ok) {
    throw new Error('Failed to save calorie data')
  }

  revalidatePath('/dashboard/calories')
  redirect('/dashboard/calories')
}

export async function updateDailyCalorie(formData: FormData) {
  'use server'

  const rawFormData = {
    calorie: {
      date: formData.get('date'),
      meal1: formData.get('meal1'),
      meal2: formData.get('meal2'),
      meal3: formData.get('meal3'),
      meal4: formData.get('meal4'),
      meal5: formData.get('meal5'),
    }
  }
  const id = formData.get('id')

  // エラー処理を後で書く
  const res = await fetch(`http://localhost:5000/api/calories/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rawFormData),
    cache: 'no-cache'
  })

  if (!res.ok) {
    throw new Error('Failed to update calorie data')
  }

  revalidatePath('/dashboard/calories')
  redirect('/dashboard/calories')
}

export async function deleteDailyCalorie(id: number) {
  // エラー処理を後で書く
  const res = await fetch(`http://localhost:5000/api/calories/${id}`, {
    method: 'DELETE',
    cache: 'no-cache'
  })

  if (!res.ok) {
    throw new Error('Failed to delete calorie data')
  }

  revalidatePath('/dashboard/calories')
  redirect('/dashboard/calories')
}

export async function createDailyWeight(formData: FormData) {
  'use server'

  const rawFormData = {
    weight: {
      date: formData.get('date'),
      weight: formData.get('weight'),
      memo: formData.get('memo')
    }
  }

  // エラー処理を後で書く
  const res = await fetch('http://localhost:5000/api/weights', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rawFormData),
    cache: 'no-cache'
  })

  if (!res.ok) {
    throw new Error('Failed to save calorie data')
  }

  revalidatePath('/dashboard/weights')
  redirect('/dashboard/weights')
}

export async function updateDailyWeight(formData: FormData) {
  'use server'

  const rawFormData = {
    weight: {
      date: formData.get('date'),
      weight: formData.get('weight'),
      memo: formData.get('memo')
    }
  }
  const id = formData.get('id')

  // エラー処理を後で書く
  const res = await fetch(`http://localhost:5000/api/weights/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rawFormData),
    cache: 'no-cache'
  })

  if (!res.ok) {
    throw new Error('Failed to update calorie data')
  }

  revalidatePath('/dashboard/weights')
  redirect('/dashboard/weights')
}

export async function deleteDailyWeight(id: number) {
  // エラー処理を後で書く
  const res = await fetch(`http://localhost:5000/api/weights/${id}`, {
    method: 'DELETE',
    cache: 'no-cache'
  })

  if (!res.ok) {
    throw new Error('Failed to delete calorie data')
  }

  revalidatePath('/dashboard/weights')
  redirect('/dashboard/weights')
}