'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { Box, Button } from '@mui/material'

export default function Header() {
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email

  if (status === 'loading') {
    return <p>Hang on there...</p>
  }

  if (status === 'authenticated') {
    return (
      <header>
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse'}}>
        <Button variant="contained" onClick={() => signOut()}>Sign out</Button>
        <p>Signed in as {userEmail}</p>
      </Box>
      </header>
    )
  }
  return (
    <header>
      <Box sx={{ display: 'flex', flexDirection: 'row-reverse'}}>
        <Button variant="contained" onClick={() => signIn()}>Sign in</Button>
        <p>Not signed in.</p>
      </Box>
    </header>
  )
}