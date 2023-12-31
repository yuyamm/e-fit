'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { signIn } from 'next-auth/react'

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

export async function createUserWithOAuth(formData: FormData) {
  
}

export async function updateUserWithOAuth(formData: FormData) {
  const rawFormData = {
    user: {
      name: formData.get('name')
    }
  }

  try {
    const res = await fetch('http://localhost:5000/api/users/me', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rawFormData)
    })
  
    if (!res.ok) {
      throw new Error('Fetch failed with status code ' + res.status)
    }
  } catch (error) {
    console.error('Network error or problem with fetch request in UpdateUserWithOAuth', error)
    throw new Error('Network error or problem with fetch request in saving username')
  }

  redirect('/dashboard/weights')
}

export async function signupUserAccount(formData: FormData) {
  const rawFormData = {
    user: {
      name: formData.get('name')
    },
    database_auth: {
      email: formData.get('email'),
      password: formData.get('password')
    }
  }

  try {
    const res = await fetch('http://localhost:5000/api/database_auth/sign_up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rawFormData)
    })
  
    if (!res.ok) {
      throw new Error('Fetch failed with status code ' + res.status)
    }
  } catch (error) {
    console.error('Network error or problem with fetch request in singupUserAccount', error)
    throw new Error('Network error or problem with fetch request in signup')
  }

  signIn
}