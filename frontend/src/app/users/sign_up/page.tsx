'use client'

import { signIn } from "next-auth/react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

export default function Page() {
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const rawFormData = {
      user: {
        name: e.currentTarget.name
      },
      database_auth: {
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value
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

    signIn('credentials', {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value
    })
  }

  return (
    <>
      <Stack height="75vh" justifyContent="center" alignItems="center" gap="32px">
        <Typography variant="h1" fontSize="1.5rem">ユーザー登録</Typography>
        <Stack component="form" width={560} gap="24px" onSubmit={handleSignUp}>
          <TextField label="メールアドレス" variant="outlined" name="email" type="email" autoComplete="email" />
          <TextField label="パスワード" variant="outlined" type="password" name="password" autoComplete="current_password" />
          <TextField label="ユーザーネーム" variant="outlined" name="name" autoComplete="username" />
          <Button variant="contained" type="submit">Submit</Button>
        </Stack>
      </Stack>
    </>
  )
}
